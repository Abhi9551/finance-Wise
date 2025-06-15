import { Metadata } from "next"
import Image from "next/image"
import creditCardsData from "@/data/blogs/credit-cards.json"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Star, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: creditCardsData["best-bonus-offers"].meta.title,
  description: creditCardsData["best-bonus-offers"].meta.intro,
}

const bonusOffers = creditCardsData["best-bonus-offers"].cards
const meta = creditCardsData["best-bonus-offers"].meta

export default function BestBonusOffersPage() {
  return (
    <div className="py-12 space-y-16">
      {/* Header Section */}
      <section className="container max-w-3xl text-center space-y-6" data-aos="fade-up">
        <h1 className="text-4xl font-bold text-green-700">{meta.title}</h1>
        <p className="text-muted-foreground">{meta.updated}</p>
        <p className="text-lg text-gray-700">{meta.intro}</p>
        <div className="text-sm text-gray-500 italic">{meta.disclaimer}</div>
        <div className="flex justify-center gap-4 flex-wrap text-sm mt-4">
          {meta.authors.map((author, idx) => (
            <div key={idx}>
              <strong>{author.role}:</strong> {author.name}
            </div>
          ))}
        </div>
      </section>

      {/* Cards Section */}
      <section className="container">
        <h2
          className="mb-12 text-3xl font-bold text-center text-green-800"
          data-aos="fade-up"
        >
          Highest Welcome Bonuses
        </h2>

        <div className="space-y-10">
          {bonusOffers.map((card, index) => (
            <Card
              key={card.id}
              className="overflow-hidden border border-green-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardHeader className="bg-gradient-to-r from-green-50 to-green-100 p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-4">
                    <Image
                      src={card.image || "/placeholder.svg"}
                      alt={card.name}
                      width={80}
                      height={50}
                      className="rounded-md shadow-sm"
                    />
                    <div>
                      <CardTitle className="text-xl text-green-800">{card.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{card.issuer}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center text-green-700">
                          <Star className="h-4 w-4 fill-green-600 text-green-600" />
                          <span className="ml-1 font-medium">{card.rating}</span>
                        </div>
                        <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300">
                          {card.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="text-center md:text-right">
                    <div className="text-2xl font-bold text-green-700">{card.welcomeBonus}</div>
                    <div className="text-lg font-semibold text-emerald-600">{card.bonusValue} value</div>
                    <div className="text-sm text-muted-foreground">{card.spendRequirement}</div>
                    <Button className="mt-2 bg-green-600 hover:bg-green-700 text-white">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6 bg-white">
                <div className="grid gap-6 lg:grid-cols-2">
                  <div>
                    <h4 className="mb-3 font-semibold flex items-center gap-2 text-green-700">
                      <DollarSign className="h-4 w-4" />
                      Bonus Details
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Welcome Bonus:</span>
                        <span className="font-medium text-green-800">{card.welcomeBonus}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Estimated Value:</span>
                        <span className="font-medium text-emerald-600">{card.bonusValue}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Spend Requirement:</span>
                        <span className="font-medium">{card.spendRequirement}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Annual Fee:</span>
                        <span className="font-medium">{card.annualFee}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-3 font-semibold flex items-center gap-2 text-green-700">
                      <TrendingUp className="h-4 w-4" />
                      Key Features
                    </h4>
                    <ul className="space-y-1 text-sm">
                      {card.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-green-50 border-l-4 border-green-400 rounded-md">
                  <p className="text-sm text-green-900">
                    <strong>Best for:</strong> {card.bestFor}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}




{/* Related Articles
      <section className="py-12">
        <div className="container">
          <h2 className="mb-8 text-center text-3xl font-bold">Bonus Offers Articles</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {getBlogsBySubcategory("credit-cards", "best-bonus-offers").map((blog, index) => (
              <BlogCard
                key={blog.slug}
                image={blog.image}
                category={blog.category}
                title={blog.title}
                excerpt={blog.excerpt}
                date={blog.publishedAt}
                href={`/blog/credit-cards/best-bonus-offers/${blog.slug}`}
                aosDelay={index * 100}
              />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/blog/credit-cards">
                View All Credit Card Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section> */}