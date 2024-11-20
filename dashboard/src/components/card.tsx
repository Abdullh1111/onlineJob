/* eslint-disable @typescript-eslint/no-explicit-any */
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
import Link from "next/link"



// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function CardDemo({ data,className, ...props }: any) {
  console.log(data?.data)
  const pendingForms = data?.data
  

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3 mt-10 mx-auto">
      {pendingForms?.map((form:any,index:number) => {
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
        <Link href={`pending/${form?._id}`}><Button className="w-full">
          <Check /> Read More
        </Button></Link>
      </CardFooter>
    </Card>
        )
      })}
    </div>
  )
}
