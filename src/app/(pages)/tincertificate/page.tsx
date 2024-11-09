import { TinCertificate } from "@/components/Forms/TinCertificate";
import React from "react";

const page = () => {
  return (
    <div>
      <p className="bg-primaryColour text-white  2xl:w-[80vw] xl:w-[75vw] md:w-[55vw] w-[80vw] text-center py-3 rounded-lg">
        টিন সাাটিফিকেট
      </p>

      <TinCertificate
        label1="TIN  Ticket  Old TIN NID  Passport  Mobile"
        label2="Tin"
        amount={70}
      ></TinCertificate>
    </div>
  );
};

export default page;
