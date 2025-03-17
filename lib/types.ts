export type QuizType = {
  id: string
  title: string
  description: string
  questions: QuestionType[]
  settings: {
    collectEmail: boolean
    limitOneResponse: boolean
    showProgressBar: boolean
    shuffleQuestions: boolean
    theme: string
    confirmationMessage: string
    enableScoring: boolean
    showScore: boolean
    showCorrectAnswers: boolean
  }
  createdAt: Date
  updatedAt: Date
  published: boolean
}

export type QuestionType = {
  id: string
  type: "multiple" | "checkbox" | "paragraph" | "short"
  text: string
  options?: string[]
  required?: boolean
  points?: number
  correctAnswer?: string | string[]
  hasCorrectAnswer?: boolean
  shuffleOptions?: boolean
  requireReview?: boolean
  manualScoring?: boolean
}

export type ResponseType = {
  id: string
  quizId: string
  respondentEmail?: string
  answers: {
    questionId: string
    answer: string | string[]
  }[]
  score?: number
  maxScore?: number
  startedAt: Date
  completedAt: Date
}

