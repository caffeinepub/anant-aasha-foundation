import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Clock, Award, Play, CheckCircle2, Lock } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useInternetIdentity } from '../hooks/useInternetIdentity';

export function LearningDashboard() {
  const { identity } = useInternetIdentity();
  const isAuthenticated = !!identity;
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);

  // Mock data - would come from backend
  const lessons = [
    {
      id: 1,
      title: 'Introduction to Environmental Science',
      subject: 'Science',
      class: '8th Grade',
      duration: '25 min',
      coins: 50,
      completed: true,
      progress: 100,
      thumbnail: '/assets/generated/learning-dashboard.dim_800x400.png',
    },
    {
      id: 2,
      title: 'Water Conservation Techniques',
      subject: 'Environmental Studies',
      class: '8th Grade',
      duration: '30 min',
      coins: 60,
      completed: false,
      progress: 45,
      thumbnail: '/assets/generated/learning-dashboard.dim_800x400.png',
    },
    {
      id: 3,
      title: 'Biodiversity and Ecosystems',
      subject: 'Science',
      class: '9th Grade',
      duration: '35 min',
      coins: 70,
      completed: false,
      progress: 0,
      thumbnail: '/assets/generated/learning-dashboard.dim_800x400.png',
    },
    {
      id: 4,
      title: 'Sustainable Agriculture Practices',
      subject: 'Agriculture',
      class: '9th Grade',
      duration: '40 min',
      coins: 80,
      completed: false,
      progress: 0,
      thumbnail: '/assets/generated/learning-dashboard.dim_800x400.png',
    },
  ];

  const stats = {
    completed: 12,
    inProgress: 3,
    totalCoins: 680,
    streak: 7,
  };

  if (!isAuthenticated) {
    return (
      <div className="container px-4 py-12">
        <Alert>
          <AlertDescription>
            Please login to access the learning dashboard and start earning Aasha Coins.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="container px-4 py-8 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Learning Dashboard</h1>
        <p className="text-muted-foreground">
          Complete interactive lessons to earn Aasha Coins and expand your knowledge
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center space-y-2">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
              <div className="text-2xl font-bold">{stats.completed}</div>
              <div className="text-sm text-muted-foreground">Completed</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center space-y-2">
              <Clock className="h-8 w-8 text-blue-600" />
              <div className="text-2xl font-bold">{stats.inProgress}</div>
              <div className="text-sm text-muted-foreground">In Progress</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center space-y-2">
              <Award className="h-8 w-8 text-orange-600" />
              <div className="text-2xl font-bold">{stats.totalCoins}</div>
              <div className="text-sm text-muted-foreground">Coins Earned</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="text-2xl">🔥</div>
              <div className="text-2xl font-bold">{stats.streak}</div>
              <div className="text-sm text-muted-foreground">Day Streak</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Lessons */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Lessons</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Alert className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
            <AlertDescription className="text-blue-900 dark:text-blue-100">
              <strong>Note:</strong> Backend integration pending. Lesson content, completion tracking, and coin rewards require backend implementation.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-6">
            {lessons.map((lesson) => (
              <Card key={lesson.id} className="group hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={lesson.thumbnail} 
                    alt={lesson.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {lesson.completed && (
                    <div className="absolute top-3 right-3 bg-green-600 text-white p-2 rounded-full">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                  )}
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg line-clamp-2">{lesson.title}</CardTitle>
                    <Badge variant="secondary" className="shrink-0">
                      <img src="/assets/generated/aasha-coin-transparent.dim_64x64.png" alt="Coins" className="h-3 w-3 mr-1" />
                      {lesson.coins}
                    </Badge>
                  </div>
                  <CardDescription className="flex items-center gap-4 text-xs">
                    <span className="flex items-center gap-1">
                      <BookOpen className="h-3 w-3" />
                      {lesson.subject}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {lesson.duration}
                    </span>
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-3">
                  <Badge variant="outline">{lesson.class}</Badge>
                  
                  {lesson.progress > 0 && !lesson.completed && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Progress</span>
                        <span>{lesson.progress}%</span>
                      </div>
                      <Progress value={lesson.progress} />
                    </div>
                  )}

                  <Button 
                    className="w-full" 
                    variant={lesson.completed ? 'outline' : 'default'}
                    onClick={() => setSelectedLesson(lesson.id)}
                  >
                    {lesson.completed ? (
                      <>
                        <CheckCircle2 className="h-4 w-4 mr-2" />
                        Review Lesson
                      </>
                    ) : lesson.progress > 0 ? (
                      <>
                        <Play className="h-4 w-4 mr-2" />
                        Continue
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4 mr-2" />
                        Start Lesson
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="in-progress">
          <div className="grid md:grid-cols-2 gap-6">
            {lessons.filter(l => l.progress > 0 && !l.completed).map((lesson) => (
              <Card key={lesson.id}>
                <CardHeader>
                  <CardTitle>{lesson.title}</CardTitle>
                  <CardDescription>{lesson.subject} • {lesson.duration}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={lesson.progress} className="mb-3" />
                  <Button className="w-full">Continue Learning</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed">
          <div className="grid md:grid-cols-2 gap-6">
            {lessons.filter(l => l.completed).map((lesson) => (
              <Card key={lesson.id}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    {lesson.title}
                  </CardTitle>
                  <CardDescription>{lesson.subject} • Earned {lesson.coins} coins</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">Review Lesson</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
