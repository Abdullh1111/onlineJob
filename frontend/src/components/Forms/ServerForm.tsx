"use client"
import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import FormItems from "./FormItems"


export function ServerForm() {
  // ...
 
 
 
 
 
  
const form = useForm()
  return (
    <div className="my-10">
        <p className="text-center">ফাইল আপলোড সাইন কপি</p>
        <div className="border-2 2xl:w-[80vw] xl:w-[75vw] md:w-[55vw] w-[80vw] lg:p-10 p-2">
        <Form {...form}>
      <form  className="space-y-8">
        <FormItems label="নামঃ (বাংলা)"></FormItems>
        <FormItems label="নামঃ (ইংরেজী)"></FormItems>
        <FormItems label="আইডি নাম্বারঃ"></FormItems>
        <FormItems label="পিন নাম্বারঃ"></FormItems>
        <FormItems label="পিতার নামঃ"></FormItems>
        <FormItems label="মাতার নামঃ"></FormItems>
        <FormItems label="জন্ম স্থানঃ"></FormItems>
        <FormItems label="জন্ম তারিখঃ"></FormItems>
        <FormItems label="প্রধানের তারিখঃ"></FormItems>
        <FormItems label="রক্তের গ্রুপ :"></FormItems>
        <FormItems label="ঠকিানা: বাসা/হোল্ডং:(Holding) গ্রাম/রাস্তা: (গ্রাম, মৌজা), ডাকঘর:(Post Office - Postal Code) উপজলো, সটিি র্কপোরশেন/পৌরসভা, জলো"></FormItems>
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
