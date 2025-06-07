"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Target, ArrowRight, ArrowLeft } from "lucide-react"

const quizQuestions = [
  {
    id: 1,
    question: "What's your primary goal with a credit card?",
    options: [
      { value: "travel", label: "Earn travel rewards and perks" },
      { value: "cashback", label: "Earn cash back on purchases" },
      { value: "debt", label: "Pay down existing debt" },
      { value: "purchase", label: "Finance a large purchase" },
      { value: "credit", label: "Build or improve credit" },
    ],
  },
  {
    id: 2,
    question: "What's your estimated credit score range?",
    options: [
      { value: "excellent", label: "Excellent (750+)" },
      { value: "good", label: "Good (670-749)" },
      { value: "fair", label: "Fair (580-669)" },
      { value: "poor", label: "Poor (below 580)" },
      { value: "unknown", label: "I don't know" },
    ],
  },
  {
    id: 3,
    question: "How much do you typically spend per month?",
    options: [
      { value: "low", label: "Less than $1,000" },
      { value: "medium", label: "$1,000 - $3,000" },
      { value: "high", label: "$3,000 - $5,000" },
      { value: "very-high", label: "More than $5,000" },
    ],
  },
  {
    id: 4,
    question: "What's your largest spending category?",
    options: [
      { value: "dining", label: "Dining and restaurants" },
      { value: "groceries", label: "Groceries and supermarkets" },
      { value: "gas", label: "Gas and transportation" },
      { value: "travel", label: "Travel and hotels" },
      { value: "general", label: "General purchases" },
    ],
  },
  {
    id: 5,
    question: "How do you feel about annual fees?",
    options: [
      { value: "no-fee", label: "I prefer no annual fee cards" },
      { value: "low-fee", label: "I'm okay with fees under $100" },
      { value: "high-fee", label: "I'm willing to pay higher fees for better rewards" },
      { value: "depends", label: "It depends on the benefits" },
    ],
  },
]

export default function CreditCardQuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion + 1]: value })
  }

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  const getRecommendations = () => {
    // Simple recommendation logic based on answers
    const goal = answers[1]
    const creditScore = answers[2]
    const spending = answers[3]
    const category = answers[4]
    const feePreference = answers[5]

    if (goal === "travel") {
      return [
        {
          name: "Chase Sapphire Preferred",
          reason: "Excellent travel rewards and flexible redemption options",
          match: "95%",
        },
        {
          name: "Capital One Venture Rewards",
          reason: "Simple 2x miles on all purchases with no foreign transaction fees",
          match: "88%",
        },
      ]
    } else if (goal === "cashback") {
      return [
        {
          name: "Citi Double Cash",
          reason: "Simple 2% cash back on all purchases with no annual fee",
          match: "92%",
        },
        {
          name: "Chase Freedom Unlimited",
          reason: "Strong bonus categories and welcome bonus",
          match: "85%",
        },
      ]
    } else if (goal === "debt") {
      return [
        {
          name: "Citi Simplicity",
          reason: "21-month 0% APR period with no late fees",
          match: "96%",
        },
        {
          name: "Wells Fargo Reflect",
          reason: "21-month 0% APR with cell phone protection",
          match: "89%",
        },
      ]
    }

    return [
      {
        name: "Chase Freedom Unlimited",
        reason: "Great all-around card with flexible rewards",
        match: "85%",
      },
      {
        name: "Capital One Quicksilver",
        reason: "Simple cash back with no annual fee",
        match: "80%",
      },
    ]
  }

  if (showResults) {
    const recommendations = getRecommendations()

    return (
      <div className="min-h-screen bg-background py-12">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-8">
              <Badge className="mb-4" variant="outline">
                Quiz Complete
              </Badge>
              <h1 className="text-3xl font-bold mb-4">Your Personalized Recommendations</h1>
              <p className="text-muted-foreground">
                Based on your answers, here are the credit cards that best match your needs:
              </p>
            </div>

            <div className="space-y-6">
              {recommendations.map((card, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl">{card.name}</CardTitle>
                        <p className="text-muted-foreground">{card.reason}</p>
                      </div>
                      <Badge className="bg-green-100 text-green-800">{card.match} Match</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <Button>Learn More</Button>
                      <Button variant="outline">Apply Now</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button
                onClick={() => {
                  setCurrentQuestion(0)
                  setAnswers({})
                  setShowResults(false)
                }}
                variant="outline"
              >
                Retake Quiz
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const currentQ = quizQuestions[currentQuestion]
  const currentAnswer = answers[currentQuestion + 1]

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <Badge className="mb-4" variant="outline">
              <Target className="mr-2 h-4 w-4" />
              Credit Card Quiz
            </Badge>
            <h1 className="text-3xl font-bold mb-4">Find Your Perfect Credit Card</h1>
            <p className="text-muted-foreground">
              Answer {quizQuestions.length} quick questions to get personalized recommendations
            </p>
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </span>
              <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">{currentQ.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup value={currentAnswer} onValueChange={handleAnswer}>
                <div className="space-y-3">
                  {currentQ.options.map((option) => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.value} id={option.value} />
                      <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>

              <div className="flex justify-between mt-6">
                <Button variant="outline" onClick={prevQuestion} disabled={currentQuestion === 0}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
                <Button onClick={nextQuestion} disabled={!currentAnswer}>
                  {currentQuestion === quizQuestions.length - 1 ? "Get Results" : "Next"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
