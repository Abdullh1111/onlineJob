"use client"
import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import FormItems from "./FormItems"


export function TinCertificateZeroForm() {
const form = useForm()
  return (
    <div className="my-10">
        <p className="text-center">ফাইল আপলোড সাইন কপি</p>
        <div className="border-2 2xl:w-[80vw] xl:w-[75vw] md:w-[55vw] w-[80vw] lg:p-10 p-2">
        <Form {...form}>
      <form  className="space-y-8">
        <FormItems label="টনি নম্বর:"></FormItems>
        <FormItems label="নামঃ"></FormItems>
        <FormItems label="হোটার আইবি কাররি নাম্বার"></FormItems>
        <FormItems label="OTP নাম্বারঃ"></FormItems>
        <FormItems label="বাৎসরিক আয়:"></FormItems>
        <FormItems label="মোট  সম্পদ:"></FormItems>
        <div className="w-full flex justify-center items-center bg-primaryColour text-white lg:py-5 py-1 lg:rounded-xl rounded lg:text-xl text-sm">
        অবশ্যই টনি এর ব্যাক্তির NID উত্তলন করা এমন সিম নাম্বার দিতে হবে আপনার একাউন্ট থেকে 7 টাকা কাটা হবে।
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