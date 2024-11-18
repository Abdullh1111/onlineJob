import { TFormRequest } from "./form.interface";
import { formRequest } from "./form.model";

const submit = async (data: TFormRequest) => {
    const result = await formRequest.create(data);
    return result;
}

const pendingReq = async () => {
    const result = await formRequest.find({ proccess: "pending" });
    return result;
}

const finishedReq = async () => {
    
    const result = await formRequest.find({ proccess: "finished" });
    return result;
}



export default { submit , pendingReq , finishedReq }; 