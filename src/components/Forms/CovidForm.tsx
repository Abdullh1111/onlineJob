"use client"
import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import FormItems from "./FormItems"


export function CovidForm() {
const form = useForm()
  return (
    <div className="my-10">
        <p className="text-center">ফাইল আপলোড সাইন কপি</p>
        <div className="border-2 2xl:w-[80vw] xl:w-[75vw] md:w-[55vw] w-[80vw] lg:p-10 p-2">
        <Form {...form}>
      <form  className="space-y-8">
        <FormItems label="নামঃ"></FormItems>
        <FormItems label="Nid No"></FormItems>
        <FormItems label="Passport Number:"></FormItems>
        <FormItems label="birth No"></FormItems>
        <FormItems label="Date of Vaccination (Dose 1):"></FormItems>
        <FormItems label="Date of Vaccination (Dose 2):"></FormItems>
        <FormItems label="Date of Vaccination (Dose 3):"></FormItems>
        <FormItems label="Vaccine Name: Pfizer (Pfizer-BioNTech)"></FormItems>
        <FormItems label="Vaccination Center"></FormItems>
        <div className="w-full flex justify-center items-center bg-primaryColour text-white lg:py-5 py-1 lg:rounded-xl rounded lg:text-xl text-sm">
        আপনার একাউন্ট থেকে 7 টাকা কাটা হবে।
        </div>
        <div className="flex justify-center">
            
        <Button className="bg-primaryColour text-lg text-white" type="submit">Submit</Button>
        </div>
      </form>
    </Form>
    </div>
    </div>
  )
}
