import { SiFacebook, SiX, SiInstagram, SiLinkedin } from 'react-icons/si';
import { Heart, Award } from 'lucide-react';
import type { Page } from '../App';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/assets/generated/anant-aasha-logo-cylindrical-transparent.dim_200x200.png" 
                alt="Anant Aasha Foundation Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="font-bold text-lg">Anant Aasha Foundation</h3>
                <p className="text-xs text-slate-300">Section 8 Registered NGO</p>
              </div>
            </div>
            <div className="mb-4 space-y-1">
              <div className="flex items-center gap-2 text-sm text-amber-300">
                <Award className="h-4 w-4" />
                <span className="font-semibold">12A & 80G Registered</span>
              </div>
              <p className="text-xs text-slate-400 ml-6">Tax Exemption Available for Donors</p>
            </div>
            <p className="text-sm text-slate-300 mb-4">
              Growing Children Through Safe Learning, Nature Care & Compassion
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-primary transition-colors">
                <SiFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <SiX className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <SiInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <SiLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-primary transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('safe-learning')} className="hover:text-primary transition-colors">
                  Safe Learning
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('eco-seva')} className="hover:text-primary transition-colors">
                  Eco-Seva & Jal-Seva
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('aasha-coins')} className="hover:text-primary transition-colors">
                  Aasha Points
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('legal-info')} className="hover:text-primary transition-colors">
                  Legal Info
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Kasara 406, Haibatpur, Bisrakh</li>
              <li>Gautam Buddha Nagar, Uttar Pradesh</li>
              <li>PIN: 201306</li>
              <li className="pt-2">
                <a href="tel:+917428570178" className="hover:text-primary transition-colors">
                  +91 74285 70178
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-6 text-center text-sm text-slate-400">
          <p className="flex items-center justify-center gap-1 flex-wrap">
            © {new Date().getFullYear()}. Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'anant-aasha-foundation')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
