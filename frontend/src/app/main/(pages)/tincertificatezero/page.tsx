
import { TinCertificateZeroForm } from '@/components/Forms/TinCertificateZeroForm';
import React from 'react';

const page = () => {
    return (
        <div>
            <p   className='bg-primaryColour text-white  2xl:w-[80vw] xl:w-[75vw] md:w-[55vw] w-[80vw] text-center py-3 rounded-lg'>টিন সাাটিফিকেট জিরো রির্টান</p>
            <TinCertificateZeroForm name='টিন সাাটিফিকেট জিরো রির্টান'></TinCertificateZeroForm>
        </div>
    );
};

export default page;