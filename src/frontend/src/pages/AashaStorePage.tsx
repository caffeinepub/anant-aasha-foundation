import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Award, BookOpen, Package, Gift, ShoppingCart } from 'lucide-react';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useGetCallerUserProfile } from '../hooks/useQueries';
import { toast } from 'sonner';

export function AashaStorePage() {
  const { identity } = useInternetIdentity();
  const { data: userProfile } = useGetCallerUserProfile();
  const isAuthenticated = !!identity;
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [purchaseDialogOpen, setPurchaseDialogOpen] = useState(false);

  const storeItems = [
    {
      id: 1,
      name: 'Digital Certificate of Achievement',
      description: 'Personalized certificate for completing 10 lessons',
      category: 'Certificates',
      coins: 100,
      icon: Award,
      image: '/assets/generated/store-rewards.dim_800x500.png',
      inStock: true,
    },
    {
      id: 2,
      name: 'Eco-Warrior Badge',
      description: 'Digital badge for 20 verified eco-seva activities',
      category: 'Badges',
      coins: 150,
      icon: Award,
      image: '/assets/generated/eco-seva-icon-transparent.dim_128x128.png',
      inStock: true,
    },
    {
      id: 3,
      name: 'Stationery Kit',
      description: 'Complete set of notebooks, pens, and pencils',
      category: 'Physical Rewards',
      coins: 500,
      icon: Package,
      image: '/assets/generated/store-rewards.dim_800x500.png',
      inStock: true,
    },
    {
      id: 4,
      name: 'Educational Book Set',
      description: 'Collection of 5 environmental science books',
      category: 'Physical Rewards',
      coins: 800,
      icon: BookOpen,
      image: '/assets/generated/store-rewards.dim_800x500.png',
      inStock: true,
    },
    {
      id: 5,
      name: 'Eco-Friendly Water Bottle',
      description: 'Reusable steel water bottle with foundation logo',
      category: 'Physical Rewards',
      coins: 300,
      icon: Gift,
      image: '/assets/generated/store-rewards.dim_800x500.png',
      inStock: true,
    },
    {
      id: 6,
      name: 'Tree Planting Kit',
      description: 'Seeds, soil, and pot for growing your own tree',
      category: 'Physical Rewards',
      coins: 400,
      icon: Package,
      image: '/assets/generated/store-rewards.dim_800x500.png',
      inStock: false,
    },
  ];

  const handlePurchase = (item: any) => {
    setSelectedItem(item);
    setPurchaseDialogOpen(true);
  };

  const confirmPurchase = () => {
    if (!userProfile || userProfile.coinBalance < selectedItem.coins) {
      toast.error('Insufficient coins for this purchase');
      return;
    }
    toast.info('Backend integration pending for store purchases');
    setPurchaseDialogOpen(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="container px-4 py-12">
        <Alert>
          <AlertDescription>
            Please login to access the Aasha Store and redeem your coins.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  const userCoins = userProfile ? Number(userProfile.coinBalance) : 0;

  return (
    <div className="container px-4 py-8 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Aasha Store</h1>
        <p className="text-muted-foreground">
          Redeem your earned coins for exciting rewards and certificates
        </p>
      </div>

      {/* User Balance */}
      <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Your Balance</p>
              <div className="flex items-center gap-2">
                <img src="/assets/generated/aasha-coin-transparent.dim_64x64.png" alt="Coins" className="h-8 w-8" />
                <span className="text-3xl font-bold text-primary">{userCoins}</span>
                <span className="text-lg text-muted-foreground">Aasha Coins</span>
              </div>
            </div>
            <ShoppingCart className="h-12 w-12 text-primary/30" />
          </div>
        </CardContent>
      </Card>

      {/* Backend Notice */}
      <Alert className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
        <AlertDescription className="text-blue-900 dark:text-blue-100">
          <strong>Note:</strong> Store inventory management, purchase transactions, and reward fulfillment require backend implementation.
        </AlertDescription>
      </Alert>

      {/* Store Items */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {storeItems.map((item) => {
          const Icon = item.icon;
          const canAfford = userCoins >= item.coins;
          
          return (
            <Card key={item.id} className={`group hover:shadow-lg transition-all duration-300 ${!item.inStock ? 'opacity-60' : ''}`}>
              <div className="relative h-48 overflow-hidden rounded-t-lg bg-accent/20">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {!item.inStock && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <Badge variant="secondary" className="text-lg">Out of Stock</Badge>
                  </div>
                )}
              </div>

              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <Badge variant="outline" className="mb-2">{item.category}</Badge>
                    <CardTitle className="text-lg">{item.name}</CardTitle>
                  </div>
                  <Icon className="h-6 w-6 text-primary shrink-0" />
                </div>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src="/assets/generated/aasha-coin-transparent.dim_64x64.png" alt="Coins" className="h-5 w-5" />
                    <span className="text-xl font-bold text-primary">{item.coins}</span>
                  </div>
                  {!canAfford && item.inStock && (
                    <Badge variant="destructive" className="text-xs">Need {item.coins - userCoins} more</Badge>
                  )}
                </div>

                <Button 
                  className="w-full" 
                  disabled={!canAfford || !item.inStock}
                  onClick={() => handlePurchase(item)}
                >
                  {!item.inStock ? 'Out of Stock' : canAfford ? 'Redeem Now' : 'Insufficient Coins'}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Purchase Confirmation Dialog */}
      <Dialog open={purchaseDialogOpen} onOpenChange={setPurchaseDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Purchase</DialogTitle>
            <DialogDescription>
              Are you sure you want to redeem this item?
            </DialogDescription>
          </DialogHeader>

          {selectedItem && (
            <div className="space-y-4 mt-4">
              <div className="p-4 bg-accent/20 rounded-lg">
                <h3 className="font-semibold mb-1">{selectedItem.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{selectedItem.description}</p>
                <div className="flex items-center gap-2">
                  <img src="/assets/generated/aasha-coin-transparent.dim_64x64.png" alt="Coins" className="h-5 w-5" />
                  <span className="text-lg font-bold text-primary">{selectedItem.coins} coins</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Current Balance:</span>
                <span className="font-semibold">{userCoins} coins</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">After Purchase:</span>
                <span className="font-semibold">{userCoins - selectedItem.coins} coins</span>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" className="flex-1" onClick={() => setPurchaseDialogOpen(false)}>
                  Cancel
                </Button>
                <Button className="flex-1" onClick={confirmPurchase}>
                  Confirm Purchase
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
