import { NumberForm } from "@/components/Forms/NumberForm";
import React from "react";

const page = () => {
  return (
    <div>
      <p className="bg-primaryColour text-white  2xl:w-[80vw] xl:w-[75vw] md:w-[55vw] w-[80vw] text-center py-3 rounded-lg">
      আইডি টু অল নাম্বার
      </p>
      <p className="font-bold text-center flex flex-col mt-10">
        Gp/Bl/Robi/Airtel All
      </p>
      <NumberForm label="Nid 17 Digit:"></NumberForm>
    </div>
  );
};

export default page;