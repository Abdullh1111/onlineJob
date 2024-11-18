import catchAsync from "../../ErrorHandler/catcAsync";
import formService from "./form.service";

const submit = catchAsync(async (req, res) => {
    const result = await formService.submit(req.body);
    res.status(200).json({
        success: true,
        message: "Form submitted successfully",
        data: result
    })
})

const pendingReq = catchAsync(async (req, res) => {
    const result = await formService.pendingReq();
    res.status(200).json({
        success: true,
        message: "Get all pending request successfully",
        data: result
    })
})

const finishedReq = catchAsync(async (req, res) => {
    const result = await formService.finishedReq();
    res.status(200).json({
        success: true,
        message: "Get all finished request successfully",
        data: result
    })
})

export default { submit, pendingReq ,finishedReq }; 