import React, { useState, useEffect, useCallback } from 'react';
import { Page } from '../App';
import ImageWithDisclaimer from '../components/ImageWithDisclaimer';

interface GuardianGamePageProps {
  onNavigate: (page: Page) => void;
}

type GameState = 'menu' | 'battle' | 'victory' | 'defeat';
type Subject = 'math' | 'science' | 'history';

interface Boss {
  name: string;
  subject: Subject;
  health: number;
  maxHealth: number;
  image: string;
  stage: string;
  color: string;
}

interface Question {
  text: string;
  options: string[];
  correct: number;
}

const BOSSES: Boss[] = [
  {
    name: 'Math Menace',
    subject: 'math',
    health: 100,
    maxHealth: 100,
    image: '/assets/generated/math-boss-transparent.dim_400x400.png',
    stage: '/assets/generated/digital-classroom-stage.dim_1200x600.png',
    color: 'blue',
  },
  {
    name: 'Science Specter',
    subject: 'science',
    health: 120,
    maxHealth: 120,
    image: '/assets/generated/science-boss-transparent.dim_400x400.png',
    stage: '/assets/generated/science-lab-stage.dim_1200x600.png',
    color: 'green',
  },
  {
    name: 'History Haunter',
    subject: 'history',
    health: 150,
    maxHealth: 150,
    image: '/assets/generated/history-boss-transparent.dim_400x400.png',
    stage: '/assets/generated/river-stage.dim_1200x600.png',
    color: 'purple',
  },
];

const QUESTIONS: Record<Subject, Question[]> = {
  math: [
    { text: 'What is 12 × 8?', options: ['86', '96', '106', '76'], correct: 1 },
    { text: 'What is √144?', options: ['11', '12', '13', '14'], correct: 1 },
    { text: 'What is 25% of 200?', options: ['40', '50', '60', '25'], correct: 1 },
    { text: 'What is 7³?', options: ['343', '441', '216', '512'], correct: 0 },
  ],
  science: [
    { text: 'What is the chemical symbol for water?', options: ['WA', 'H2O', 'HO2', 'W2O'], correct: 1 },
    { text: 'How many planets are in our solar system?', options: ['7', '8', '9', '10'], correct: 1 },
    { text: 'What gas do plants absorb?', options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'], correct: 2 },
    { text: 'What is the speed of light?', options: ['3×10⁸ m/s', '3×10⁶ m/s', '3×10⁴ m/s', '3×10¹⁰ m/s'], correct: 0 },
  ],
  history: [
    { text: 'In which year did India gain independence?', options: ['1945', '1947', '1950', '1942'], correct: 1 },
    { text: 'Who was the first Prime Minister of India?', options: ['Mahatma Gandhi', 'Sardar Patel', 'Jawaharlal Nehru', 'B.R. Ambedkar'], correct: 2 },
    { text: 'The Taj Mahal was built by which Mughal emperor?', options: ['Akbar', 'Humayun', 'Aurangzeb', 'Shah Jahan'], correct: 3 },
    { text: 'Which movement was launched by Gandhi in 1942?', options: ['Non-Cooperation', 'Civil Disobedience', 'Quit India', 'Swadeshi'], correct: 2 },
  ],
};

export default function GuardianGamePage({ onNavigate }: GuardianGamePageProps) {
  const [gameState, setGameState] = useState<GameState>('menu');
  const [selectedBoss, setSelectedBoss] = useState<Boss | null>(null);
  const [currentBoss, setCurrentBoss] = useState<Boss | null>(null);
  const [playerHealth, setPlayerHealth] = useState(100);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answerResult, setAnswerResult] = useState<'correct' | 'wrong' | null>(null);
  const [aashaPoints, setAashaPoints] = useState(0);
  const [combo, setCombo] = useState(0);
  const [shake, setShake] = useState(false);

  const startBattle = useCallback((boss: Boss) => {
    const freshBoss = { ...boss, health: boss.maxHealth };
    setCurrentBoss(freshBoss);
    setPlayerHealth(100);
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setAnswerResult(null);
    setCombo(0);
    const questions = QUESTIONS[boss.subject];
    setCurrentQuestion(questions[0]);
    setGameState('battle');
  }, []);

  const handleAnswer = useCallback((answerIdx: number) => {
    if (!currentQuestion || !currentBoss || selectedAnswer !== null) return;
    setSelectedAnswer(answerIdx);

    const isCorrect = answerIdx === currentQuestion.correct;
    setAnswerResult(isCorrect ? 'correct' : 'wrong');

    if (isCorrect) {
      const newCombo = combo + 1;
      setCombo(newCombo);
      const damage = 20 + (newCombo > 2 ? 10 : 0);
      const newBossHealth = Math.max(0, currentBoss.health - damage);
      setCurrentBoss({ ...currentBoss, health: newBossHealth });
      setAashaPoints((p) => p + 25 + (newCombo > 2 ? 10 : 0));

      if (newBossHealth <= 0) {
        setTimeout(() => setGameState('victory'), 1000);
        return;
      }
    } else {
      setCombo(0);
      setShake(true);
      setTimeout(() => setShake(false), 500);
      const newPlayerHealth = Math.max(0, playerHealth - 25);
      setPlayerHealth(newPlayerHealth);
      if (newPlayerHealth <= 0) {
        setTimeout(() => setGameState('defeat'), 1000);
        return;
      }
    }

    setTimeout(() => {
      const questions = QUESTIONS[currentBoss.subject];
      const nextIdx = (questionIndex + 1) % questions.length;
      setQuestionIndex(nextIdx);
      setCurrentQuestion(questions[nextIdx]);
      setSelectedAnswer(null);
      setAnswerResult(null);
    }, 1200);
  }, [currentQuestion, currentBoss, selectedAnswer, combo, playerHealth, questionIndex]);

  return (
    <div className="min-h-screen bg-background">
      {/* Menu */}
      {gameState === 'menu' && (
        <div>
          <section className="relative bg-gradient-to-br from-purple-500/10 via-background to-blue-500/10 py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Guardian <span className="text-primary">Game</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Battle academic bosses by answering quiz questions correctly.
                Earn Aasha Points and become the ultimate learning guardian!
              </p>
            </div>
          </section>

          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-foreground mb-12">
                Choose Your Boss
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {BOSSES.map((boss) => (
                  <div
                    key={boss.name}
                    className={`bg-card rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform ${
                      selectedBoss?.name === boss.name ? 'ring-4 ring-primary' : ''
                    }`}
                    onClick={() => setSelectedBoss(boss)}
                  >
                    <ImageWithDisclaimer
                      src={boss.image}
                      alt={boss.name}
                      containerClassName="h-48 bg-muted/30"
                      className="object-contain p-4"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-card-foreground mb-2">{boss.name}</h3>
                      <p className="text-muted-foreground text-sm capitalize mb-3">
                        Subject: {boss.subject}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">HP:</span>
                        <div className="flex-1 bg-muted rounded-full h-2">
                          <div
                            className="bg-red-500 h-2 rounded-full"
                            style={{ width: '100%' }}
                          />
                        </div>
                        <span className="text-xs font-bold text-red-500">{boss.maxHealth}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {selectedBoss && (
                <div className="text-center mt-8">
                  <button
                    onClick={() => startBattle(selectedBoss)}
                    className="bg-primary text-primary-foreground px-12 py-4 rounded-full font-bold text-xl hover:bg-primary/90 transition-colors"
                  >
                    ⚔️ Start Battle!
                  </button>
                </div>
              )}
            </div>
          </section>
        </div>
      )}

      {/* Battle Screen */}
      {gameState === 'battle' && currentBoss && currentQuestion && (
        <div className="min-h-screen">
          {/* Stage Background */}
          <div className="relative h-64 overflow-hidden">
            <img
              src={currentBoss.stage}
              alt="Battle stage"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            {/* HUD */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
              <div className="bg-black/70 rounded-xl p-3">
                <div className="text-white text-xs mb-1">Player HP</div>
                <div className="w-32 bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-green-500 h-3 rounded-full transition-all"
                    style={{ width: `${playerHealth}%` }}
                  />
                </div>
                <div className="text-white text-xs mt-1">{playerHealth}/100</div>
              </div>
              <div className="bg-black/70 rounded-xl p-3 text-center">
                <div className="text-yellow-400 font-bold text-sm">
                  ⭐ {aashaPoints} pts
                </div>
                {combo > 1 && (
                  <div className="text-orange-400 text-xs font-bold">
                    🔥 {combo}x Combo!
                  </div>
                )}
              </div>
              <div className="bg-black/70 rounded-xl p-3">
                <div className="text-white text-xs mb-1">{currentBoss.name} HP</div>
                <div className="w-32 bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-red-500 h-3 rounded-full transition-all"
                    style={{ width: `${(currentBoss.health / currentBoss.maxHealth) * 100}%` }}
                  />
                </div>
                <div className="text-white text-xs mt-1">{currentBoss.health}/{currentBoss.maxHealth}</div>
              </div>
            </div>
            {/* Boss */}
            <div className="absolute bottom-0 right-8">
              <img
                src={currentBoss.image}
                alt={currentBoss.name}
                className="h-40 object-contain"
              />
            </div>
            {/* Guardian */}
            <div className={`absolute bottom-0 left-8 ${shake ? 'animate-bounce' : ''}`}>
              <img
                src="/assets/generated/guardian-character-neutral.dim_400x400.png"
                alt="Guardian"
                className="h-40 object-contain"
              />
            </div>
          </div>

          {/* Question */}
          <div className="max-w-2xl mx-auto px-4 py-8">
            <div className="bg-card rounded-2xl p-6 shadow-lg mb-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full capitalize">
                  {currentBoss.subject}
                </span>
                {answerResult && (
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    answerResult === 'correct'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {answerResult === 'correct' ? '✅ Correct!' : '❌ Wrong!'}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-6">
                {currentQuestion.text}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {currentQuestion.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    disabled={selectedAnswer !== null}
                    className={`p-4 rounded-xl text-sm font-medium transition-all ${
                      selectedAnswer === null
                        ? 'bg-muted hover:bg-primary/10 hover:text-primary text-foreground'
                        : selectedAnswer === idx
                        ? idx === currentQuestion.correct
                          ? 'bg-green-500 text-white'
                          : 'bg-red-500 text-white'
                        : idx === currentQuestion.correct && selectedAnswer !== null
                        ? 'bg-green-200 text-green-800'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <div className="text-center">
              <button
                onClick={() => setGameState('menu')}
                className="text-muted-foreground hover:text-foreground text-sm underline"
              >
                Retreat to Menu
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Victory Screen */}
      {gameState === 'victory' && (
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-lg">
            <div className="text-8xl mb-6">🏆</div>
            <h2 className="text-4xl font-bold text-foreground mb-4">Victory!</h2>
            <p className="text-muted-foreground mb-6">
              You defeated {currentBoss?.name}! You earned{' '}
              <span className="font-bold text-primary">{aashaPoints} Aasha Points</span>!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => setGameState('menu')}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
              >
                Play Again
              </button>
              <button
                onClick={() => onNavigate('aasha-coins')}
                className="border border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary/10 transition-colors"
              >
                View Aasha Points
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Defeat Screen */}
      {gameState === 'defeat' && (
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-lg">
            <div className="text-8xl mb-6">💔</div>
            <h2 className="text-4xl font-bold text-foreground mb-4">Defeated!</h2>
            <p className="text-muted-foreground mb-6">
              {currentBoss?.name} was too strong this time. Keep studying and try again!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => currentBoss && startBattle(currentBoss)}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
              >
                Try Again
              </button>
              <button
                onClick={() => setGameState('menu')}
                className="border border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary/10 transition-colors"
              >
                Choose Different Boss
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
