import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { Gamepad2, Heart, Trophy, AlertTriangle, Zap, Shield } from 'lucide-react';
import { useGetCallerUserProfile, useGetRandomQuestions } from '../hooks/useQueries';
import type { Question } from '../backend';
import { toast } from 'sonner';

type GameState = 'menu' | 'stage-select' | 'playing' | 'question' | 'victory' | 'defeat';

interface Boss {
  id: string;
  name: string;
  subject: string;
  health: number;
  maxHealth: number;
  image: string;
  stage: string;
}

export function GuardianGamePage() {
  const { data: userProfile } = useGetCallerUserProfile();
  const [gameState, setGameState] = useState<GameState>('menu');
  const [selectedBoss, setSelectedBoss] = useState<Boss | null>(null);
  const [guardianHealth, setGuardianHealth] = useState(100);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [pointsEarned, setPointsEarned] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [isAttacking, setIsAttacking] = useState(false);

  const questionId = BigInt(1);
  const { data: questions } = useGetRandomQuestions(questionId, BigInt(5));

  const bosses: Boss[] = [
    {
      id: 'math-boss',
      name: 'Math Titan',
      subject: 'Mathematics',
      health: 100,
      maxHealth: 100,
      image: '/assets/generated/math-boss-transparent.dim_400x400.png',
      stage: '/assets/generated/digital-classroom-stage.dim_1200x600.png',
    },
    {
      id: 'science-boss',
      name: 'Science Overlord',
      subject: 'Science',
      health: 100,
      maxHealth: 100,
      image: '/assets/generated/science-boss-transparent.dim_400x400.png',
      stage: '/assets/generated/science-lab-stage.dim_1200x600.png',
    },
    {
      id: 'history-boss',
      name: 'History Guardian',
      subject: 'History',
      health: 100,
      maxHealth: 100,
      image: '/assets/generated/history-boss-transparent.dim_400x400.png',
      stage: '/assets/generated/river-stage.dim_1200x600.png',
    },
  ];

  useEffect(() => {
    if (gameState === 'question' && questions && questions.length > 0 && !currentQuestion) {
      const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
      setCurrentQuestion(randomQuestion);
    }
  }, [gameState, questions, currentQuestion]);

  if (!userProfile || userProfile.role !== 'student') {
    return (
      <div className="container mx-auto px-4 py-16">
        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            Guardian Game is available for students only. Please log in with a student account.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  const handleStartGame = (boss: Boss) => {
    setSelectedBoss(boss);
    setGuardianHealth(100);
    setScore(0);
    setPointsEarned(0);
    setQuestionsAnswered(0);
    setGameState('playing');
    setTimeout(() => setGameState('question'), 1000);
  };

  const handleAnswerSubmit = () => {
    if (!selectedAnswer || !currentQuestion || !selectedBoss) return;

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    if (isCorrect) {
      setIsAttacking(true);
      const damage = 34;
      const newBossHealth = Math.max(0, selectedBoss.health - damage);
      setSelectedBoss({ ...selectedBoss, health: newBossHealth });
      setScore(score + 100);
      setPointsEarned(pointsEarned + 10);
      setQuestionsAnswered(questionsAnswered + 1);

      toast.success('Correct! Finisher Move Activated! 💥');

      setTimeout(() => {
        setIsAttacking(false);
        if (newBossHealth <= 0) {
          setGameState('victory');
        } else {
          setCurrentQuestion(null);
          setSelectedAnswer(null);
          setGameState('playing');
          setTimeout(() => setGameState('question'), 1500);
        }
      }, 1500);
    } else {
      const damage = 15;
      const newGuardianHealth = Math.max(0, guardianHealth - damage);
      setGuardianHealth(newGuardianHealth);
      toast.error('Wrong answer! Guardian takes damage!');

      if (newGuardianHealth <= 0) {
        setGameState('defeat');
      } else {
        setSelectedAnswer(null);
      }
    }
  };

  const handleReturnToMenu = () => {
    setGameState('menu');
    setSelectedBoss(null);
    setCurrentQuestion(null);
    setSelectedAnswer(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {gameState === 'menu' && (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-4">
                <Gamepad2 className="h-16 w-16 text-yellow-400" />
                <h1 className="text-5xl font-bold text-white">Guardian vs Bosses</h1>
              </div>
              <p className="text-xl text-gray-300">
                Fight academic bosses with your knowledge! Answer correctly to unleash finisher moves!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {bosses.map((boss) => (
                <Card
                  key={boss.id}
                  className="bg-gray-800 border-2 border-purple-500 hover:border-yellow-400 transition-all cursor-pointer transform hover:scale-105"
                  onClick={() => handleStartGame(boss)}
                >
                  <CardHeader>
                    <CardTitle className="text-white text-center">{boss.name}</CardTitle>
                    <CardDescription className="text-gray-400 text-center">{boss.subject}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="aspect-square bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center overflow-hidden">
                      <img src={boss.image} alt={boss.name} className="w-full h-full object-contain" />
                    </div>
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold">
                      Challenge Boss
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gray-800 border-purple-500">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Trophy className="h-6 w-6 text-yellow-400" />
                  How to Play
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300 space-y-2">
                <p>• Select a boss to challenge based on your subject</p>
                <p>• Answer questions correctly to unleash powerful finisher moves</p>
                <p>• Each correct answer deals massive damage to the boss</p>
                <p>• Wrong answers reduce your Guardian's stamina</p>
                <p>• Defeat the boss to earn Aasha Points!</p>
              </CardContent>
            </Card>
          </div>
        )}

        {gameState === 'playing' && selectedBoss && (
          <div className="space-y-6">
            <div
              className="relative h-96 rounded-lg overflow-hidden"
              style={{
                backgroundImage: `url(${selectedBoss.stage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-between px-12">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mb-4 animate-pulse">
                    <Shield className="h-16 w-16 text-white" />
                  </div>
                  <p className="text-white font-bold text-xl">Guardian</p>
                  <Progress value={guardianHealth} className="w-32 h-3 mt-2" />
                  <p className="text-white text-sm mt-1">{guardianHealth} HP</p>
                </div>

                <div className="text-center">
                  <div className="w-40 h-40 rounded-full flex items-center justify-center mb-4 overflow-hidden">
                    <img src={selectedBoss.image} alt={selectedBoss.name} className="w-full h-full object-contain" />
                  </div>
                  <p className="text-white font-bold text-xl">{selectedBoss.name}</p>
                  <Progress value={(selectedBoss.health / selectedBoss.maxHealth) * 100} className="w-40 h-3 mt-2" />
                  <p className="text-white text-sm mt-1">
                    {selectedBoss.health} / {selectedBoss.maxHealth} HP
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-white text-2xl font-bold animate-pulse">Preparing next challenge...</p>
            </div>
          </div>
        )}

        {gameState === 'question' && currentQuestion && selectedBoss && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Heart className="h-5 w-5 mr-2 text-red-500" />
                  {guardianHealth} HP
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <img 
                    src="/assets/generated/aasha-point-icon-transparent.dim_64x64.png" 
                    alt="Points" 
                    className="h-5 w-5 mr-2"
                  />
                  {pointsEarned} Points
                </Badge>
              </div>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Boss HP: {selectedBoss.health}/{selectedBoss.maxHealth}
              </Badge>
            </div>

            <Card className="bg-gray-800 border-2 border-yellow-400">
              <CardHeader>
                <CardTitle className="text-white text-2xl flex items-center gap-2">
                  <Zap className="h-6 w-6 text-yellow-400" />
                  {selectedBoss.name} Challenges You!
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gray-900 rounded-lg p-6">
                  <p className="text-white text-xl leading-relaxed">{currentQuestion.questionText}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentQuestion.options.map((option, index) => (
                    <Button
                      key={index}
                      variant={selectedAnswer === option ? 'default' : 'outline'}
                      className={`h-auto py-4 text-lg ${
                        selectedAnswer === option
                          ? 'bg-yellow-500 hover:bg-yellow-600 text-black border-yellow-400'
                          : 'bg-gray-700 hover:bg-gray-600 text-white border-gray-600'
                      }`}
                      onClick={() => setSelectedAnswer(option)}
                    >
                      {option}
                    </Button>
                  ))}
                </div>

                <Button
                  onClick={handleAnswerSubmit}
                  disabled={!selectedAnswer || isAttacking}
                  className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold text-xl py-6"
                >
                  {isAttacking ? (
                    <>
                      <Zap className="h-6 w-6 mr-2 animate-pulse" />
                      FINISHER MOVE! 💥
                    </>
                  ) : (
                    'Submit Answer'
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {gameState === 'victory' && (
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-yellow-400 to-orange-500 border-0">
              <CardContent className="py-16 text-center space-y-6">
                <Trophy className="h-24 w-24 text-white mx-auto animate-bounce" />
                <h2 className="text-5xl font-bold text-white">VICTORY!</h2>
                <p className="text-2xl text-white">You defeated {selectedBoss?.name}!</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mt-8">
                  <div className="bg-white bg-opacity-20 rounded-lg p-6">
                    <p className="text-white text-sm mb-2">Score</p>
                    <p className="text-4xl font-bold text-white">{score}</p>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-6">
                    <p className="text-white text-sm mb-2">Points Earned</p>
                    <p className="text-4xl font-bold text-white">{pointsEarned}</p>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-6">
                    <p className="text-white text-sm mb-2">Questions</p>
                    <p className="text-4xl font-bold text-white">{questionsAnswered}</p>
                  </div>
                </div>

                <Button
                  onClick={handleReturnToMenu}
                  className="bg-white text-orange-600 hover:bg-gray-100 font-bold text-xl px-12 py-6 mt-8"
                >
                  Return to Menu
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {gameState === 'defeat' && (
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-red-600 to-gray-800 border-0">
              <CardContent className="py-16 text-center space-y-6">
                <AlertTriangle className="h-24 w-24 text-white mx-auto" />
                <h2 className="text-5xl font-bold text-white">DEFEATED</h2>
                <p className="text-2xl text-white">The {selectedBoss?.name} was too strong!</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto mt-8">
                  <div className="bg-white bg-opacity-20 rounded-lg p-6">
                    <p className="text-white text-sm mb-2">Score</p>
                    <p className="text-4xl font-bold text-white">{score}</p>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-6">
                    <p className="text-white text-sm mb-2">Questions Answered</p>
                    <p className="text-4xl font-bold text-white">{questionsAnswered}</p>
                  </div>
                </div>

                <div className="space-y-4 mt-8">
                  <Button
                    onClick={() => selectedBoss && handleStartGame(selectedBoss)}
                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-xl px-12 py-6"
                  >
                    Try Again
                  </Button>
                  <Button
                    onClick={handleReturnToMenu}
                    variant="outline"
                    className="bg-white text-gray-800 hover:bg-gray-100 font-bold text-xl px-12 py-6 ml-4"
                  >
                    Return to Menu
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
