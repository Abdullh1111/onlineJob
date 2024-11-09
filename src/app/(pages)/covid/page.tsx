
import { CovidForm } from '@/components/Forms/CovidForm';
import React from 'react';

const page = () => {
    return (
        <div>
            <p   className='bg-primaryColour text-white  2xl:w-[80vw] xl:w-[75vw] md:w-[55vw] w-[80vw] text-center py-3 rounded-lg'>কভিড কোলন সাটিফিকেট</p>
            <CovidForm></CovidForm>
        </div>
    );
};

export default page;