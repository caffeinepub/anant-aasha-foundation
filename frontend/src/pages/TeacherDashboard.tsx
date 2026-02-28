import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload, BookOpen, Users, TrendingUp, FileText } from 'lucide-react';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useGetCallerUserProfile } from '../hooks/useQueries';
import { toast } from 'sonner';

export function TeacherDashboard() {
  const { identity } = useInternetIdentity();
  const { data: userProfile } = useGetCallerUserProfile();
  const isAuthenticated = !!identity;
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);

  const stats = [
    { icon: BookOpen, label: 'Lessons Created', value: '24', color: 'text-blue-600' },
    { icon: Users, label: 'Students Reached', value: '456', color: 'text-purple-600' },
    { icon: TrendingUp, label: 'Avg. Completion', value: '87%', color: 'text-green-600' },
    { icon: FileText, label: 'Pending Reviews', value: '3', color: 'text-orange-600' },
  ];

  const recentLessons = [
    { id: 1, title: 'Water Conservation Techniques', subject: 'Environmental Studies', students: 89, completion: 92 },
    { id: 2, title: 'Biodiversity and Ecosystems', subject: 'Science', students: 76, completion: 85 },
    { id: 3, title: 'Sustainable Agriculture', subject: 'Agriculture', students: 64, completion: 78 },
  ];

  const handleUpload = () => {
    toast.info('Backend integration pending for lesson upload and processing');
    setUploadDialogOpen(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="container px-4 py-12">
        <Alert>
          <AlertDescription>
            Please login to access the teacher dashboard.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  if (userProfile?.role !== 'teacher') {
    return (
      <div className="container px-4 py-12">
        <Alert variant="destructive">
          <AlertDescription>
            You do not have permission to access the teacher dashboard.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="container px-4 py-8 space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Teacher Dashboard</h1>
          <p className="text-muted-foreground">
            Create and manage interactive lessons for your students
          </p>
        </div>

        <Dialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen}>
          <DialogTrigger asChild>
            <Button size="lg" className="gap-2">
              <Upload className="h-5 w-5" />
              Upload Content
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Upload Learning Content</DialogTitle>
              <DialogDescription>
                Upload textbook PDFs or images to create interactive lessons
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 mt-4">
              <Alert className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
                <AlertDescription className="text-blue-900 dark:text-blue-100 text-sm">
                  <strong>Note:</strong> Content upload, OCR processing, AI simplification, and H5P lesson generation require backend implementation.
                </AlertDescription>
              </Alert>

              <div className="space-y-2">
                <Label>Subject</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="science">Science</SelectItem>
                    <SelectItem value="environmental">Environmental Studies</SelectItem>
                    <SelectItem value="agriculture">Agriculture</SelectItem>
                    <SelectItem value="social">Social Studies</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Class</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select class" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="6">6th Grade</SelectItem>
                    <SelectItem value="7">7th Grade</SelectItem>
                    <SelectItem value="8">8th Grade</SelectItem>
                    <SelectItem value="9">9th Grade</SelectItem>
                    <SelectItem value="10">10th Grade</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>School</Label>
                <Input placeholder="Enter school name" />
              </div>

              <div className="space-y-2">
                <Label>Upload File</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                  <p className="text-xs text-muted-foreground mt-1">PDF, PNG, JPG up to 50MB</p>
                </div>
              </div>

              <Button onClick={handleUpload} className="w-full">
                Upload & Process
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-2">
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Lessons */}
      <Card>
        <CardHeader>
          <CardTitle>Your Recent Lessons</CardTitle>
          <CardDescription>Track student engagement and completion rates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentLessons.map((lesson) => (
              <div key={lesson.id} className="p-4 rounded-lg border-2 border-border hover:border-primary/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{lesson.title}</h3>
                    <p className="text-sm text-muted-foreground">{lesson.subject}</p>
                  </div>
                  <div className="text-right space-y-1">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Students: </span>
                      <span className="font-semibold">{lesson.students}</span>
                    </div>
                    <div className="text-sm">
                      <span className="text-muted-foreground">Completion: </span>
                      <span className="font-semibold text-green-600">{lesson.completion}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
