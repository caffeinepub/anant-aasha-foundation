import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Gavel, Clock, TrendingUp, Trophy, Users } from 'lucide-react';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { useGetCallerUserProfile } from '../hooks/useQueries';
import { toast } from 'sonner';

export function AuctionPage() {
  const { identity } = useInternetIdentity();
  const { data: userProfile } = useGetCallerUserProfile();
  const isAuthenticated = !!identity;
  const [selectedAuction, setSelectedAuction] = useState<any>(null);
  const [bidAmount, setBidAmount] = useState('');
  const [bidDialogOpen, setBidDialogOpen] = useState(false);

  const activeAuctions = [
    {
      id: 1,
      name: 'Premium Laptop',
      description: 'High-performance laptop for educational purposes',
      currentBid: 5000,
      minBid: 5100,
      bids: 23,
      timeLeft: '2 days',
      image: '/assets/generated/auction-gavel-transparent.dim_64x64.png',
      topBidder: 'Student A',
    },
    {
      id: 2,
      name: 'Tablet with Stylus',
      description: 'Perfect for digital learning and note-taking',
      currentBid: 2500,
      minBid: 2600,
      bids: 15,
      timeLeft: '5 days',
      image: '/assets/generated/auction-gavel-transparent.dim_64x64.png',
      topBidder: 'Student B',
    },
    {
      id: 3,
      name: 'Science Lab Kit',
      description: 'Complete chemistry and physics experiment kit',
      currentBid: 1200,
      minBid: 1300,
      bids: 8,
      timeLeft: '1 day',
      image: '/assets/generated/auction-gavel-transparent.dim_64x64.png',
      topBidder: 'Student C',
    },
  ];

  const leaderboard = [
    { rank: 1, name: 'Priya Sharma', totalBids: 45, coinsSpent: 12500, wins: 8 },
    { rank: 2, name: 'Rahul Kumar', totalBids: 38, coinsSpent: 10200, wins: 6 },
    { rank: 3, name: 'Ananya Singh', totalBids: 32, coinsSpent: 9800, wins: 5 },
    { rank: 4, name: 'Arjun Patel', totalBids: 28, coinsSpent: 8500, wins: 4 },
    { rank: 5, name: 'Sneha Reddy', totalBids: 25, coinsSpent: 7200, wins: 3 },
  ];

  const handleBid = (auction: any) => {
    setSelectedAuction(auction);
    setBidAmount(auction.minBid.toString());
    setBidDialogOpen(true);
  };

  const submitBid = () => {
    const bid = parseInt(bidAmount);
    if (!bid || bid < selectedAuction.minBid) {
      toast.error(`Minimum bid is ${selectedAuction.minBid} coins`);
      return;
    }
    if (userProfile && bid > Number(userProfile.coinBalance)) {
      toast.error('Insufficient coins for this bid');
      return;
    }
    toast.info('Backend integration pending for auction bidding');
    setBidDialogOpen(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="container px-4 py-12">
        <Alert>
          <AlertDescription>
            Please login to participate in auctions and place bids.
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
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <Gavel className="h-8 w-8 text-primary" />
          Weekly Auctions
        </h1>
        <p className="text-muted-foreground">
          Bid on premium items using your Aasha Coins
        </p>
      </div>

      {/* User Balance */}
      <Card className="bg-gradient-to-r from-orange-500/10 to-orange-500/5 border-orange-500/20">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Available for Bidding</p>
              <div className="flex items-center gap-2">
                <img src="/assets/generated/aasha-coin-transparent.dim_64x64.png" alt="Coins" className="h-8 w-8" />
                <span className="text-3xl font-bold text-orange-600 dark:text-orange-400">{userCoins}</span>
                <span className="text-lg text-muted-foreground">Aasha Coins</span>
              </div>
            </div>
            <Gavel className="h-12 w-12 text-orange-600/30 dark:text-orange-400/30" />
          </div>
        </CardContent>
      </Card>

      {/* Backend Notice */}
      <Alert className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
        <AlertDescription className="text-blue-900 dark:text-blue-100">
          <strong>Note:</strong> Auction system, bidding mechanism, and leaderboard tracking require backend implementation.
        </AlertDescription>
      </Alert>

      {/* Active Auctions */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Active Auctions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeAuctions.map((auction) => (
            <Card key={auction.id} className="group hover:shadow-lg transition-all duration-300">
              <div className="relative h-48 overflow-hidden rounded-t-lg bg-gradient-to-br from-orange-500/20 to-orange-500/5 flex items-center justify-center">
                <img 
                  src={auction.image} 
                  alt={auction.name}
                  className="h-24 w-24 object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {auction.timeLeft}
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-lg">{auction.name}</CardTitle>
                <CardDescription>{auction.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Current Bid:</span>
                    <div className="flex items-center gap-1 font-semibold text-orange-600 dark:text-orange-400">
                      <img src="/assets/generated/aasha-coin-transparent.dim_64x64.png" alt="Coins" className="h-4 w-4" />
                      {auction.currentBid}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Min Next Bid:</span>
                    <div className="flex items-center gap-1 font-semibold">
                      <img src="/assets/generated/aasha-coin-transparent.dim_64x64.png" alt="Coins" className="h-4 w-4" />
                      {auction.minBid}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      Total Bids:
                    </span>
                    <span className="font-semibold">{auction.bids}</span>
                  </div>
                </div>

                <Badge variant="outline" className="w-full justify-center">
                  Top Bidder: {auction.topBidder}
                </Badge>

                <Button 
                  className="w-full" 
                  onClick={() => handleBid(auction)}
                  disabled={userCoins < auction.minBid}
                >
                  {userCoins < auction.minBid ? 'Insufficient Coins' : 'Place Bid'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Leaderboard */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Trophy className="h-6 w-6 text-orange-600" />
          Top Bidders Leaderboard
        </h2>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-3">
              {leaderboard.map((user) => (
                <div key={user.rank} className="flex items-center justify-between p-3 rounded-lg bg-accent/30 hover:bg-accent/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      user.rank === 1 ? 'bg-yellow-500 text-white' :
                      user.rank === 2 ? 'bg-gray-400 text-white' :
                      user.rank === 3 ? 'bg-orange-600 text-white' :
                      'bg-accent text-foreground'
                    }`}>
                      {user.rank}
                    </div>
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-sm text-muted-foreground">{user.totalBids} bids • {user.wins} wins</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 font-semibold text-orange-600 dark:text-orange-400">
                      <img src="/assets/generated/aasha-coin-transparent.dim_64x64.png" alt="Coins" className="h-4 w-4" />
                      {user.coinsSpent}
                    </div>
                    <p className="text-xs text-muted-foreground">coins spent</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bid Dialog */}
      <Dialog open={bidDialogOpen} onOpenChange={setBidDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Place Your Bid</DialogTitle>
            <DialogDescription>
              Enter your bid amount for {selectedAuction?.name}
            </DialogDescription>
          </DialogHeader>

          {selectedAuction && (
            <div className="space-y-4 mt-4">
              <div className="p-4 bg-accent/20 rounded-lg">
                <h3 className="font-semibold mb-1">{selectedAuction.name}</h3>
                <div className="flex items-center justify-between text-sm mt-2">
                  <span className="text-muted-foreground">Current Bid:</span>
                  <span className="font-semibold">{selectedAuction.currentBid} coins</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-1">
                  <span className="text-muted-foreground">Minimum Bid:</span>
                  <span className="font-semibold text-orange-600 dark:text-orange-400">{selectedAuction.minBid} coins</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bidAmount">Your Bid Amount</Label>
                <Input
                  id="bidAmount"
                  type="number"
                  min={selectedAuction.minBid}
                  value={bidAmount}
                  onChange={(e) => setBidAmount(e.target.value)}
                  placeholder={`Minimum ${selectedAuction.minBid}`}
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Your Balance:</span>
                <span className="font-semibold">{userCoins} coins</span>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" className="flex-1" onClick={() => setBidDialogOpen(false)}>
                  Cancel
                </Button>
                <Button className="flex-1" onClick={submitBid}>
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Place Bid
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
