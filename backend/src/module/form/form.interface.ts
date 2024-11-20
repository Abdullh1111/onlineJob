
import { Types } from 'mongoose';
export type TFormRequest = {  
  id?: Types.ObjectId;   
    userId: Types.ObjectId;       
    cost: number;       
    formName: string;   
    formDetails: object;
    proccess: "pending" | "finished";
  };
