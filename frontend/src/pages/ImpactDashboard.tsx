import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, BookOpen, Leaf, Droplets, TreePine, Award, TrendingUp, Heart } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

export function ImpactDashboard() {
  const overallStats = [
    { icon: Users, label: 'Active Students', value: '2,547', change: '+12%', color: 'text-blue-600' },
    { icon: BookOpen, label: 'Lessons Completed', value: '12,389', change: '+23%', color: 'text-purple-600' },
    { icon: Leaf, label: 'Eco-Seva Activities', value: '3,456', change: '+18%', color: 'text-green-600' },
    { icon: Award, label: 'Coins Distributed', value: '156,780', change: '+31%', color: 'text-orange-600' },
  ];

  const environmentalImpact = [
    { icon: Droplets, label: 'Birds Fed (Jal-Seva)', value: '8,234', unit: 'water bowls', color: 'text-blue-600', bgColor: 'bg-blue-50 dark:bg-blue-950/30' },
    { icon: TreePine, label: 'Trees Planted', value: '1,234', unit: 'saplings', color: 'text-green-600', bgColor: 'bg-green-50 dark:bg-green-950/30' },
    { icon: Leaf, label: 'Nature Cleanups', value: '567', unit: 'locations', color: 'text-emerald-600', bgColor: 'bg-emerald-50 dark:bg-emerald-950/30' },
    { icon: Award, label: 'E-Waste Collected', value: '892', unit: 'kg', color: 'text-orange-600', bgColor: 'bg-orange-50 dark:bg-orange-950/30' },
  ];

  const recentActivities = [
    { student: 'Priya S.', activity: 'Completed "Water Conservation" lesson', coins: 50, time: '2 hours ago' },
    { student: 'Rahul K.', activity: 'Verified Jal-Seva activity', coins: 30, time: '3 hours ago' },
    { student: 'Ananya M.', activity: 'Planted 5 trees', coins: 100, time: '5 hours ago' },
    { student: 'Arjun P.', activity: 'Completed "Biodiversity" lesson', coins: 60, time: '6 hours ago' },
    { student: 'Sneha R.', activity: 'E-waste collection verified', coins: 50, time: '8 hours ago' },
  ];

  const schoolStats = [
    { name: 'Delhi Public School', students: 456, lessons: 2345, seva: 678, coins: 34567 },
    { name: 'St. Mary\'s School', students: 389, lessons: 1987, seva: 543, coins: 28934 },
    { name: 'Modern High School', students: 312, lessons: 1654, seva: 432, coins: 23456 },
    { name: 'Green Valley School', students: 278, lessons: 1432, seva: 389, coins: 19876 },
  ];

  return (
    <div className="container px-4 py-8 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Impact Dashboard</h1>
        <p className="text-muted-foreground">
          Real-time metrics showing the collective impact of our community
        </p>
      </div>

      {/* Backend Notice */}
      <Alert className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
        <AlertDescription className="text-blue-900 dark:text-blue-100">
          <strong>Note:</strong> Real-time impact metrics, aggregated statistics, and donor transparency data require backend implementation.
        </AlertDescription>
      </Alert>

      {/* Overall Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {overallStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="border-2">
              <CardContent className="pt-6">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center justify-between">
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                    <span className="text-xs font-semibold text-green-600 flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      {stat.change}
                    </span>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Environmental Impact */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Environmental Impact</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {environmentalImpact.map((impact, index) => {
            const Icon = impact.icon;
            return (
              <Card key={index} className="border-2">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${impact.bgColor} flex items-center justify-center mb-2`}>
                    <Icon className={`h-6 w-6 ${impact.color}`} />
                  </div>
                  <CardTitle className="text-2xl">{impact.value}</CardTitle>
                  <CardDescription>{impact.label}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{impact.unit}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Tabs for detailed views */}
      <Tabs defaultValue="activity" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="activity">Recent Activity</TabsTrigger>
          <TabsTrigger value="schools">School Rankings</TabsTrigger>
          <TabsTrigger value="donors">Donor View</TabsTrigger>
        </TabsList>

        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription>Latest achievements from our community</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-accent/30 hover:bg-accent/50 transition-colors">
                    <div className="flex-1">
                      <p className="font-semibold text-sm">{activity.student}</p>
                      <p className="text-sm text-muted-foreground">{activity.activity}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-sm font-semibold text-primary">
                        <img src="/assets/generated/aasha-coin-transparent.dim_64x64.png" alt="Coins" className="h-4 w-4" />
                        +{activity.coins}
                      </div>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="schools" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>School Performance Rankings</CardTitle>
              <CardDescription>Top performing schools in our ecosystem</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {schoolStats.map((school, index) => (
                  <div key={index} className="p-4 rounded-lg bg-accent/30 hover:bg-accent/50 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                          index === 0 ? 'bg-yellow-500 text-white' :
                          index === 1 ? 'bg-gray-400 text-white' :
                          index === 2 ? 'bg-orange-600 text-white' :
                          'bg-accent text-foreground'
                        }`}>
                          {index + 1}
                        </div>
                        <h3 className="font-semibold">{school.name}</h3>
                      </div>
                      <div className="flex items-center gap-1 font-semibold text-primary">
                        <img src="/assets/generated/aasha-coin-transparent.dim_64x64.png" alt="Coins" className="h-4 w-4" />
                        {school.coins.toLocaleString()}
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Students</p>
                        <p className="font-semibold">{school.students}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Lessons</p>
                        <p className="font-semibold">{school.lessons}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Seva Acts</p>
                        <p className="font-semibold">{school.seva}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="donors" className="space-y-4">
          <Card className="bg-gradient-to-r from-pink-500/10 to-pink-500/5 border-pink-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-6 w-6 text-pink-600" />
                Donor Transparency
              </CardTitle>
              <CardDescription>
                See how your contributions are making a real difference
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">Student Engagement</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Active Students</span>
                      <span className="font-semibold">2,547</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Daily Active Users</span>
                      <span className="font-semibold">1,234</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Avg. Session Time</span>
                      <span className="font-semibold">45 min</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">Learning Outcomes</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Completion Rate</span>
                      <span className="font-semibold">87%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Avg. Score</span>
                      <span className="font-semibold">82/100</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Skills Acquired</span>
                      <span className="font-semibold">156</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <h3 className="font-semibold text-lg mb-3">Environmental Impact</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {environmentalImpact.map((impact, index) => {
                    const Icon = impact.icon;
                    return (
                      <div key={index} className="text-center">
                        <Icon className={`h-8 w-8 ${impact.color} mx-auto mb-2`} />
                        <p className="text-xl font-bold">{impact.value}</p>
                        <p className="text-xs text-muted-foreground">{impact.label}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
