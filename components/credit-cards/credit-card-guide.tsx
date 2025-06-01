import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CreditCard, TrendingUp, Shield, Calculator } from "lucide-react"

export default function CreditCardGuide() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="mb-4 text-3xl font-bold">A Beginner's Guide to Credit Cards</h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Understanding how credit cards work and choosing the right one for your needs.
        </p>
      </div>

      {/* How Credit Cards Work */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-primary" />
            How Credit Cards Work
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            The idea behind credit cards is simple: When you use a credit card, you are borrowing money to pay for
            something. Later on, you must repay what you borrowed. If you take time to pay it back, you'll be charged
            interest.
          </p>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto">
                <span className="font-bold text-primary">1</span>
              </div>
              <h4 className="font-semibold">You use your card</h4>
              <p className="text-sm text-muted-foreground">Swipe, insert, or tap your card at checkout</p>
            </div>
            <div className="text-center">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto">
                <span className="font-bold text-primary">2</span>
              </div>
              <h4 className="font-semibold">Purchase authorized</h4>
              <p className="text-sm text-muted-foreground">Card company verifies the transaction</p>
            </div>
            <div className="text-center">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto">
                <span className="font-bold text-primary">3</span>
              </div>
              <h4 className="font-semibold">Merchant gets paid</h4>
              <p className="text-sm text-muted-foreground">Bank sends money to the merchant</p>
            </div>
            <div className="text-center">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto">
                <span className="font-bold text-primary">4</span>
              </div>
              <h4 className="font-semibold">You pay</h4>
              <p className="text-sm text-muted-foreground">Repay the bank for your purchases</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Types of Rewards */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            How Credit Card Rewards Work
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="mb-3 font-semibold">Reward Types</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge variant="outline">Cash Back</Badge>
                  <div>
                    <p className="text-sm">Direct reduction of your balance or deposited to your bank account</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline">Points/Miles</Badge>
                  <div>
                    <p className="text-sm">Redeemable for travel, gift cards, merchandise, or statement credits</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="mb-3 font-semibold">Earning Structures</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge variant="outline">Flat Rate</Badge>
                  <div>
                    <p className="text-sm">Same rewards rate on all purchases (e.g., 2% on everything)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Badge variant="outline">Bonus Categories</Badge>
                  <div>
                    <p className="text-sm">Higher rates in specific categories (e.g., 5% on gas, 3% on dining)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Types of Credit Cards */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            Different Types of Credit Cards
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mx-auto">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold">Rewards Cards</h4>
              <p className="text-sm text-muted-foreground">Earn cash back, points, or miles on your purchases</p>
            </div>
            <div className="text-center">
              <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mx-auto">
                <Calculator className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold">0% APR Cards</h4>
              <p className="text-sm text-muted-foreground">Save on interest with promotional 0% APR periods</p>
            </div>
            <div className="text-center">
              <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 mx-auto">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold">Credit Building</h4>
              <p className="text-sm text-muted-foreground">Build or rebuild your credit history responsibly</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
