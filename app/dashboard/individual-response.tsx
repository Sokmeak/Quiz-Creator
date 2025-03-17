import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export function IndividualResponse() {
  return (
    <div className="space-y-4">
      <Card className="p-6">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h3 className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              How are you doing guys?
            </h3>
            <p className="mt-1 text-sm text-gray-500">5 points</p>
          </div>
          <div className="text-sm font-medium">5/5</div>
        </div>

        <div className="rounded-lg bg-green-50 p-4">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full border-2 border-green-500 bg-white" />
            <span className="text-sm text-green-700">KPC</span>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h3 className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              Are you guys free at the afternoon?
            </h3>
            <p className="mt-1 text-sm text-gray-500">10 points</p>
          </div>
          <div className="text-sm font-medium">10/10</div>
        </div>

        <div className="rounded-lg bg-green-50 p-4">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded border-2 border-green-500 bg-green-500" />
            <span className="text-sm text-green-700">Yes</span>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="mb-4">
          <h3 className="font-medium">Give me some idea for design mobile app?</h3>
          <p className="mt-1 text-sm text-gray-500">10 points</p>
        </div>

        <div className="rounded-lg border p-4">
          <p className="text-sm">Start from view other design prototype and try to create by your own</p>
        </div>

        <div className="mt-4">
          <h4 className="text-sm font-medium">Feedback</h4>
          <p className="mt-1 text-sm text-gray-600">Good approach!</p>
        </div>
      </Card>
    </div>
  )
}

