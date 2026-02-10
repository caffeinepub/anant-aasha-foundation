import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SafeLearningPage } from './pages/SafeLearningPage';
import { EcoSevaPage } from './pages/EcoSevaPage';
import { AashaCoinsPage } from './pages/AashaCoinsPage';
import { EmpowermentPage } from './pages/EmpowermentPage';
import { DonateGoodsPage } from './pages/DonateGoodsPage';
import { DonateMoneyPage } from './pages/DonateMoneyPage';
import { TeacherDashboardPage } from './pages/TeacherDashboardPage';
import { VisualNotebookPage } from './pages/VisualNotebookPage';
import { GuardianGamePage } from './pages/GuardianGamePage';
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

type Page = 'home' | 'about' | 'safe-learning' | 'eco-seva' | 'aasha-coins' | 'empowerment' | 'donate-goods' | 'donate-money' | 'teacher-dashboard' | 'visual-notebook' | 'guardian-game';

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
        return <AboutPage />;
      case 'safe-learning':
        return <SafeLearningPage />;
      case 'eco-seva':
        return <EcoSevaPage />;
      case 'aasha-coins':
        return <AashaCoinsPage />;
      case 'empowerment':
        return <EmpowermentPage />;
      case 'donate-goods':
        return <DonateGoodsPage />;
      case 'donate-money':
        return <DonateMoneyPage />;
      case 'teacher-dashboard':
        return <TeacherDashboardPage />;
      case 'visual-notebook':
        return <VisualNotebookPage />;
      case 'guardian-game':
        return <GuardianGamePage />;
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
