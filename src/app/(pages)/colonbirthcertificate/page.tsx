import { BirthCertificateForm } from '@/components/Forms/BirthCirtificate';
import React from 'react';

const page = () => {
    return (
        <div>
            <p className="bg-primaryColour text-white  2xl:w-[80vw] xl:w-[75vw] md:w-[55vw] w-[80vw] text-center py-3 rounded-lg">
            নতুন কোলন জন্ম নিবন্ধন
      </p>
            <BirthCertificateForm></BirthCertificateForm>
        </div>
    );
};

export default page;