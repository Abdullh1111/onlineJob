import { ServerForm } from '@/components/Forms/ServerForm';
import React from 'react';

const page = () => {
    return (
        <div>
            <p   className='bg-primaryColour text-white  2xl:w-[80vw] xl:w-[75vw] md:w-[55vw] w-[80vw] text-center py-3 rounded-lg'>র্সাভার কপি টু আইডি কাড</p>
            <ServerForm name="র্সাভার কপি টু আইডি কাড"></ServerForm>
        </div>
    );
};

export default page;