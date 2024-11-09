
import { ServerForm } from '@/components/Forms/ServerForm';
import React from 'react';

const page = () => {
    return (
        <div>
            <p   className='bg-primaryColour text-white  2xl:w-[80vw] xl:w-[75vw] md:w-[55vw] w-[80vw] text-center py-3 rounded-lg'>সাইন টু আইডি কাড</p>
            <ServerForm/>
        </div>
    );
};

export default page;