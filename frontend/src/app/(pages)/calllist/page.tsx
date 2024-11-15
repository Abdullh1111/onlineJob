import { NumberForm } from "@/components/Forms/NumberForm";
import React from "react";

const page = () => {
  return (
    <div>
      <p className="bg-primaryColour text-white  2xl:w-[80vw] xl:w-[75vw] md:w-[55vw] w-[80vw] text-center py-3 rounded-lg">
      কল  লিস্ট
      </p>
      <p className="font-bold text-center flex flex-col mt-10">
        <span>GP (150 tk)</span>
        <span>Robi/Airtel (180 tk)</span>
        <span>Banglalink (150 tk)</span>
        <span>Teletalk (150 tk)</span>
      </p>
      <NumberForm label="Number"></NumberForm>
    </div>
  );
};

export default page;
