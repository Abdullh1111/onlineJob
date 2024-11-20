import { IdCardForm } from "@/components/Forms/IdCardForm";
import React from "react";

const page = () => {
  return (
    <div>
      <p className="bg-primaryColour text-white  2xl:w-[80vw] xl:w-[75vw] md:w-[55vw] w-[80vw] text-center py-3 rounded-lg">
        আইডি কাড
      </p>
      <IdCardForm name="আইডি কাড"></IdCardForm>
    </div>
  );
};

export default page;
