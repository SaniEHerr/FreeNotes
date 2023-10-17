"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl">
        Your Ideas, Documents, & Plans. Unifed. Welcome to <span className="underline">Free Notes</span>
      </h1>
      <h3 className="font-medium text-base sm:text-xl md:text-2xl">
        Free Notes is the connected workspace where <br /> better, faster work happens.
      </h3>
      <Button>
        Enter Free Notes
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  )
}

export default Heading