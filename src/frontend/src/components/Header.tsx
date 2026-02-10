import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useQueryClient } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, GraduationCap, BookOpen, Gamepad2 } from 'lucide-react';
import type { UserProfile } from '../backend';
import { useState } from 'react';

type Page = 'home' | 'about' | 'safe-learning' | 'eco-seva' | 'aasha-coins' | 'empowerment' | 'donate-goods' | 'donate-money' | 'teacher-dashboard' | 'visual-notebook' | 'guardian-game';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  userProfile: UserProfile | null | undefined;
}

export function Header({ currentPage, onNavigate, userProfile }: HeaderProps) {
  const { login, clear, loginStatus, identity } = useInternetIdentity();
  const queryClient = useQueryClient();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isAuthenticated = !!identity;
  const disabled = loginStatus === 'logging-in';
  const isTeacherOrAdmin = userProfile?.role === 'teacher' || userProfile?.role === 'admin';
  const isStudent = userProfile?.role === 'student';

  const handleAuth = async () => {
    if (isAuthenticated) {
      await clear();
      queryClient.clear();
      onNavigate('home');
    } else {
      try {
        await login();
      } catch (error: any) {
        console.error('Login error:', error);
        if (error.message === 'User is already authenticated') {
          await clear();
          setTimeout(() => login(), 300);
        }
      }
    }
  };

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <button onClick={() => handleNavigate('home')} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img 
            src="/assets/generated/anant-aasha-logo-cylindrical-transparent.dim_200x200.png" 
            alt="Anant Aasha Foundation Logo" 
            className="h-10 w-auto"
          />
          <div className="hidden sm:block">
            <div className="text-xs text-gray-600">12A & 80G Registered</div>
          </div>
        </button>

        <div className="flex items-center gap-3">
          {isTeacherOrAdmin && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleNavigate('teacher-dashboard')}
              className="hidden md:flex items-center gap-2 rounded-full"
            >
              <GraduationCap className="h-4 w-4" />
              Dashboard
            </Button>
          )}

          {isStudent && (
            <>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleNavigate('visual-notebook')}
                className="hidden md:flex items-center gap-2 rounded-full"
              >
                <BookOpen className="h-4 w-4" />
                Notebook
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleNavigate('guardian-game')}
                className="hidden md:flex items-center gap-2 rounded-full"
              >
                <Gamepad2 className="h-4 w-4" />
                Game
              </Button>
            </>
          )}

          <Button
            onClick={handleAuth}
            disabled={disabled}
            size="sm"
            className="rounded-full bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6"
          >
            {disabled ? 'Logging in...' : isAuthenticated ? 'Logout' : 'Register'}
          </Button>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-lg">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white">
              <nav className="flex flex-col gap-1 mt-8">
                <Button
                  variant={currentPage === 'home' ? 'secondary' : 'ghost'}
                  onClick={() => handleNavigate('home')}
                  className="justify-start text-base py-6 rounded-xl"
                >
                  Home
                </Button>

                <Button
                  variant={currentPage === 'about' ? 'secondary' : 'ghost'}
                  onClick={() => handleNavigate('about')}
                  className="justify-start text-base py-6 rounded-xl"
                >
                  About Us
                </Button>

                {isTeacherOrAdmin && (
                  <>
                    <div className="mt-2 mb-1 px-3 text-sm font-semibold text-muted-foreground">
                      Teaching
                    </div>
                    <Button
                      variant={currentPage === 'teacher-dashboard' ? 'secondary' : 'ghost'}
                      onClick={() => handleNavigate('teacher-dashboard')}
                      className="justify-start text-base py-6 rounded-xl pl-8"
                    >
                      <GraduationCap className="h-4 w-4 mr-2" />
                      Teacher Dashboard
                    </Button>
                  </>
                )}

                {isStudent && (
                  <>
                    <div className="mt-2 mb-1 px-3 text-sm font-semibold text-muted-foreground">
                      Learning
                    </div>
                    <Button
                      variant={currentPage === 'visual-notebook' ? 'secondary' : 'ghost'}
                      onClick={() => handleNavigate('visual-notebook')}
                      className="justify-start text-base py-6 rounded-xl pl-8"
                    >
                      <BookOpen className="h-4 w-4 mr-2" />
                      Visual Notebook
                    </Button>
                    <Button
                      variant={currentPage === 'guardian-game' ? 'secondary' : 'ghost'}
                      onClick={() => handleNavigate('guardian-game')}
                      className="justify-start text-base py-6 rounded-xl pl-8"
                    >
                      <Gamepad2 className="h-4 w-4 mr-2" />
                      Guardian Game
                    </Button>
                  </>
                )}

                <div className="mt-2 mb-1 px-3 text-sm font-semibold text-muted-foreground">
                  Initiatives
                </div>

                <Button
                  variant={currentPage === 'safe-learning' ? 'secondary' : 'ghost'}
                  onClick={() => handleNavigate('safe-learning')}
                  className="justify-start text-base py-6 rounded-xl pl-8"
                >
                  Safe Learning
                </Button>

                <Button
                  variant={currentPage === 'eco-seva' ? 'secondary' : 'ghost'}
                  onClick={() => handleNavigate('eco-seva')}
                  className="justify-start text-base py-6 rounded-xl pl-8"
                >
                  Eco-Seva & Jal-Seva
                </Button>

                <Button
                  variant={currentPage === 'aasha-coins' ? 'secondary' : 'ghost'}
                  onClick={() => handleNavigate('aasha-coins')}
                  className="justify-start text-base py-6 rounded-xl pl-8"
                >
                  Aasha Points
                </Button>

                <Button
                  variant={currentPage === 'empowerment' ? 'secondary' : 'ghost'}
                  onClick={() => handleNavigate('empowerment')}
                  className="justify-start text-base py-6 rounded-xl pl-8"
                >
                  Empowerment
                </Button>

                <div className="mt-2 mb-1 px-3 text-sm font-semibold text-muted-foreground">
                  Support Us
                </div>

                <Button
                  variant={currentPage === 'donate-goods' ? 'secondary' : 'ghost'}
                  onClick={() => handleNavigate('donate-goods')}
                  className="justify-start text-base py-6 rounded-xl pl-8"
                >
                  Donate Goods
                </Button>

                <Button
                  variant={currentPage === 'donate-money' ? 'secondary' : 'ghost'}
                  onClick={() => handleNavigate('donate-money')}
                  className="justify-start text-base py-6 rounded-xl pl-8"
                >
                  Donate Money
                </Button>

                <Button
                  variant="ghost"
                  onClick={() => handleNavigate('about')}
                  className="justify-start text-base py-6 rounded-xl pl-8"
                >
                  Contact
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
