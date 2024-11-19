import {  Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


type CardProps = React.ComponentProps<typeof Card>

export function CardDemo({ className, ...props }: CardProps) {

  const pendingForms = [
    {
      formName: "Registration Form",
      cost: "$25",
      process: "Pending",
    },
    {
      formName: "Application Form",
      cost: "$30",
      process: "Pending",
    },
    {
      formName: "Subscription Form",
      cost: "$15",
      process: "Pending",
    },
    {
      formName: "Registration Form",
      cost: "$25",
      process: "Pending",
    },
    {
      formName: "Application Form",
      cost: "$30",
      process: "Pending",
    },
    {
      formName: "Subscription Form",
      cost: "$15",
      process: "Pending",
    },
  ];
  

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3 mt-10 mx-auto">
      {pendingForms.map((form,index) => {
        return (
          <Card key={index} className={cn(" w-[300px]", className)} {...props}>
      <CardHeader>
        <CardTitle>{form.formName}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          <p className="text-sm text-muted-foreground">
            {form.cost} | {form.process}
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Check /> Read More
        </Button>
      </CardFooter>
    </Card>
        )
      })}
    </div>
  )
}
