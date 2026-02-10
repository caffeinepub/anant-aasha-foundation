import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { UserPlus, AlertTriangle, CheckCircle, Loader2, School as SchoolIcon, Info } from 'lucide-react';
import { useRegisterStudentWithSchoolName, useGetSchoolByExactName } from '../hooks/useQueries';
import { toast } from 'sonner';
import { Principal } from '@dfinity/principal';
import type { Student } from '../backend';

export function StudentRegistrationForm() {
  const [formData, setFormData] = useState({
    studentName: '',
    rollNumber: '',
    classId: '',
    schoolName: '',
    studentPrincipal: '',
    attendance: '85',
    term1Marks: '75',
    term2Marks: '78',
  });

  const [schoolNameInput, setSchoolNameInput] = useState('');
  const [schoolChecked, setSchoolChecked] = useState(false);

  const { data: schoolData, isLoading: schoolLoading } = useGetSchoolByExactName(
    schoolChecked ? null : schoolNameInput.trim()
  );

  const registerMutation = useRegisterStudentWithSchoolName();

  const handleSchoolNameChange = (value: string) => {
    setSchoolNameInput(value);
    setSchoolChecked(false);
    setFormData({ ...formData, schoolName: value });
  };

  const checkSchoolName = () => {
    if (!schoolNameInput.trim()) {
      toast.error('Please enter a school name');
      return;
    }

    setSchoolChecked(true);

    if (schoolData) {
      toast.success(`School found: ${schoolData.name}`);
    } else {
      toast.info('School not found. A new school will be created when you register the student.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!schoolChecked) {
      toast.error('Please check the school name first');
      return;
    }

    if (!formData.studentName.trim() || !formData.rollNumber.trim() || !formData.classId || !formData.studentPrincipal.trim()) {
      toast.error('Please fill in all required fields');
      return;
    }

    let principal: Principal;
    try {
      principal = Principal.fromText(formData.studentPrincipal.trim());
    } catch (error) {
      toast.error('Invalid principal ID format');
      return;
    }

    try {
      const student: Student = {
        id: BigInt(Date.now()),
        name: formData.studentName.trim(),
        rollNumber: formData.rollNumber.trim(),
        classId: BigInt(formData.classId),
        schoolId: BigInt(0), // Will be set by backend based on school name
        attendance: BigInt(formData.attendance),
        term1Marks: BigInt(formData.term1Marks),
        term2Marks: BigInt(formData.term2Marks),
      };

      await registerMutation.mutateAsync({
        student,
        studentPrincipal: principal,
        schoolName: formData.schoolName.trim(),
      });

      const wasNewSchool = !schoolData;
      if (wasNewSchool) {
        toast.success(`Student ${formData.studentName} registered successfully! A new school "${formData.schoolName}" was created.`);
      } else {
        toast.success(`Student ${formData.studentName} registered successfully!`);
      }
      
      // Reset form
      setFormData({
        studentName: '',
        rollNumber: '',
        classId: '',
        schoolName: '',
        studentPrincipal: '',
        attendance: '85',
        term1Marks: '75',
        term2Marks: '78',
      });
      setSchoolNameInput('');
      setSchoolChecked(false);
    } catch (error: any) {
      console.error('Registration error:', error);
      const errorMessage = error?.message || 'Failed to register student';
      
      if (errorMessage.includes('Unauthorized')) {
        toast.error('You do not have permission to register students for this school or class.');
      } else if (errorMessage.includes('Invalid classId')) {
        toast.error('The specified class does not exist.');
      } else if (errorMessage.includes('Class does not belong')) {
        toast.error('The class does not belong to the specified school.');
      } else {
        toast.error(errorMessage);
      }
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <UserPlus className="h-5 w-5" />
          Register New Student
        </CardTitle>
        <CardDescription>
          Register a student with exact school name matching. If the school doesn't exist, it will be created automatically.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* School Name Check Section */}
          <div className="space-y-2 p-4 border rounded-lg bg-muted/30">
            <Label htmlFor="schoolName" className="flex items-center gap-2">
              <SchoolIcon className="h-4 w-4" />
              School Name (Exact Match)
            </Label>
            <div className="flex gap-2">
              <Input
                id="schoolName"
                placeholder="Enter exact school name"
                value={schoolNameInput}
                onChange={(e) => handleSchoolNameChange(e.target.value)}
                disabled={registerMutation.isPending || schoolChecked}
                className="flex-1"
              />
              {!schoolChecked && (
                <Button
                  type="button"
                  onClick={checkSchoolName}
                  disabled={schoolLoading || !schoolNameInput.trim()}
                  variant="outline"
                >
                  {schoolLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Checking...
                    </>
                  ) : (
                    'Check'
                  )}
                </Button>
              )}
              {schoolChecked && (
                <Button
                  type="button"
                  onClick={() => {
                    setSchoolChecked(false);
                    setSchoolNameInput('');
                    setFormData({ ...formData, schoolName: '' });
                  }}
                  variant="outline"
                >
                  Change
                </Button>
              )}
            </div>
            
            {schoolChecked && schoolData && (
              <Alert className="bg-success/10 border-success">
                <CheckCircle className="h-4 w-4 text-success" />
                <AlertDescription className="text-success">
                  School found: <strong>{schoolData.name}</strong> (ID: {schoolData.schoolId.toString()})
                </AlertDescription>
              </Alert>
            )}

            {schoolChecked && !schoolData && schoolNameInput.trim() && (
              <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
                <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <AlertDescription className="text-blue-800 dark:text-blue-200">
                  School not found. A new school named <strong>"{schoolNameInput.trim()}"</strong> will be created when you register this student, and you will be assigned as the school manager.
                </AlertDescription>
              </Alert>
            )}

            <p className="text-xs text-muted-foreground">
              ℹ️ School names must match exactly (case-sensitive). If no exact match is found, a new school will be created automatically.
            </p>
          </div>

          {/* Student Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="studentName">Student Name *</Label>
              <Input
                id="studentName"
                placeholder="Full name"
                value={formData.studentName}
                onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                disabled={registerMutation.isPending || !schoolChecked}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="rollNumber">Roll Number *</Label>
              <Input
                id="rollNumber"
                placeholder="e.g., 2024001"
                value={formData.rollNumber}
                onChange={(e) => setFormData({ ...formData, rollNumber: e.target.value })}
                disabled={registerMutation.isPending || !schoolChecked}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="classId">Class ID *</Label>
              <Input
                id="classId"
                type="number"
                placeholder="e.g., 7"
                value={formData.classId}
                onChange={(e) => setFormData({ ...formData, classId: e.target.value })}
                disabled={registerMutation.isPending || !schoolChecked}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="studentPrincipal">Student Principal ID *</Label>
              <Input
                id="studentPrincipal"
                placeholder="Principal ID"
                value={formData.studentPrincipal}
                onChange={(e) => setFormData({ ...formData, studentPrincipal: e.target.value })}
                disabled={registerMutation.isPending || !schoolChecked}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="attendance">Attendance (%)</Label>
              <Input
                id="attendance"
                type="number"
                min="0"
                max="100"
                value={formData.attendance}
                onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
                disabled={registerMutation.isPending || !schoolChecked}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="term1Marks">Term 1 Marks</Label>
              <Input
                id="term1Marks"
                type="number"
                min="0"
                max="100"
                value={formData.term1Marks}
                onChange={(e) => setFormData({ ...formData, term1Marks: e.target.value })}
                disabled={registerMutation.isPending || !schoolChecked}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="term2Marks">Term 2 Marks</Label>
              <Input
                id="term2Marks"
                type="number"
                min="0"
                max="100"
                value={formData.term2Marks}
                onChange={(e) => setFormData({ ...formData, term2Marks: e.target.value })}
                disabled={registerMutation.isPending || !schoolChecked}
              />
            </div>
          </div>

          <div className="flex gap-2 pt-4">
            <Button
              type="submit"
              disabled={registerMutation.isPending || !schoolChecked}
              className="flex-1"
            >
              {registerMutation.isPending ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Registering...
                </>
              ) : (
                <>
                  <UserPlus className="h-4 w-4 mr-2" />
                  Register Student
                </>
              )}
            </Button>
          </div>

          {!schoolChecked && (
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                Please check the school name before registering a student.
              </AlertDescription>
            </Alert>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
