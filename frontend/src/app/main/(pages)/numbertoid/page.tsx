import { NumberForm } from "@/components/Forms/NumberForm";
import React from "react";

const page = () => {
  return (
    <div>
      <p className="bg-primaryColour text-white  2xl:w-[80vw] xl:w-[75vw] md:w-[55vw] w-[80vw] text-center py-3 rounded-lg">
      নাম্বার টু আাইডি কাড
      </p>
      <p className="font-bold text-center flex flex-col mt-10">
        Gp/Bl/Robi/Airtel All
      </p>
      <NumberForm name="নাম্বার টু আাইডি কাড" label="Number"></NumberForm>
    </div>
  );
};

export default page;
