import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Header } from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SafeLearningPage from './pages/SafeLearningPage';
import EcoSevaPage from './pages/EcoSevaPage';
import AashaCoinsPage from './pages/AashaCoinsPage';
import EmpowermentPage from './pages/EmpowermentPage';
import DonateGoodsPage from './pages/DonateGoodsPage';
import DonateMoneyPage from './pages/DonateMoneyPage';
import { TeacherDashboardPage } from './pages/TeacherDashboardPage';
import { VisualNotebookPage } from './pages/VisualNotebookPage';
import GuardianGamePage from './pages/GuardianGamePage';
import LearningDashboard from './pages/LearningDashboard';
import { LegalInfoPage } from './pages/LegalInfoPage';
import { Footer } from './components/Footer';
import { ProfileSetupModal } from './components/ProfileSetupModal';
import { useInternetIdentity } from './hooks/useInternetIdentity';
import { useGetCallerUserProfile } from './hooks/useQueries';
import { Toaster } from '@/components/ui/sonner';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    },
  },
});

export type Page =
  | 'home'
  | 'about'
  | 'safe-learning'
  | 'eco-seva'
  | 'aasha-coins'
  | 'empowerment'
  | 'donate-goods'
  | 'donate-money'
  | 'teacher-dashboard'
  | 'visual-notebook'
  | 'guardian-game'
  | 'learning-dashboard'
  | 'legal-info';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const { identity } = useInternetIdentity();
  const { data: userProfile, isLoading: profileLoading, isFetched } = useGetCallerUserProfile();

  const isAuthenticated = !!identity;
  const showProfileSetup = isAuthenticated && !profileLoading && isFetched && userProfile === null;

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage onNavigate={setCurrentPage} />;
      case 'safe-learning':
        return <SafeLearningPage onNavigate={setCurrentPage} />;
      case 'eco-seva':
        return <EcoSevaPage onNavigate={setCurrentPage} />;
      case 'aasha-coins':
        return <AashaCoinsPage onNavigate={setCurrentPage} />;
      case 'empowerment':
        return <EmpowermentPage onNavigate={setCurrentPage} />;
      case 'donate-goods':
        return <DonateGoodsPage onNavigate={setCurrentPage} />;
      case 'donate-money':
        return <DonateMoneyPage onNavigate={setCurrentPage} />;
      case 'teacher-dashboard':
        return <TeacherDashboardPage />;
      case 'visual-notebook':
        return <VisualNotebookPage onNavigate={setCurrentPage} />;
      case 'guardian-game':
        return <GuardianGamePage onNavigate={setCurrentPage} />;
      case 'learning-dashboard':
        return <LearningDashboard onNavigate={setCurrentPage} />;
      case 'legal-info':
        return <LegalInfoPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} userProfile={userProfile} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
      {showProfileSetup && <ProfileSetupModal />}
      <Toaster />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
}
