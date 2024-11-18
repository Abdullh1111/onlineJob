
import { Types } from 'mongoose';
export type TFormRequest = {     
    userId: Types.ObjectId;       
    cost: number;       
    formName: string;   
    formDetails: object;
    proccess: "pending" | "finished";
  };
