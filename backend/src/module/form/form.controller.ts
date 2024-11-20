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

const getById = catchAsync(async (req, res) => {
    const result = await formService.getById(req.query.id as string);
    res.status(200).json({
        success: true,
        message: "Get form by id successfully",
        data: result
    })
})

const getAll = catchAsync(async (req, res) => {
    const result = await formService.getAll();
    res.status(200).json({
        success: true,
        message: "Get all forms successfully",
        data: result
    })
})

const update = catchAsync(async (req, res) => {
    const result = await formService.update(req.body);
    res.status(200).json({
        success: true,
        message: "Update form successfully",
        data: result
    })
})

export default { submit, pendingReq ,finishedReq, getById, getAll,update }; 