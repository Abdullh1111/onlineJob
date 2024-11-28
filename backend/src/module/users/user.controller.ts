import catchAsync from "../../ErrorHandler/catcAsync";
import userService from "./user.service";

const createUser = catchAsync(async (req, res) => {
  const result = await userService.createUser(req.body);
  res.status(201).json({
    success: true,
    message: "user created successfully",
    data: result,
  });
});

const login = catchAsync(async (req, res) => {
  const result = res.locals.user;
  const token = result.token();
  res.cookie("token", token, {
    httpOnly: true, secure: true, sameSite: "none" ,maxAge: 24 * 60 * 60 * 1000,
    partitioned:true,
    domain: "https://onlinejob-dashboard.onrender.com"
  }).status(200).json({
    success: true,
    message: "login successfully",
    data: result,
  });
});

const getUserData = catchAsync(async (req, res) => {
  const result = res.locals.user;
  res.status(200).json({
    success: true,
    message: "user data fetched successfully",
    data: result,
  });
});

const logout = catchAsync(async (req, res) => {
  res.clearCookie("token").status(200).json({
    success: true,
    message: "logout successfully",
  });
});

const allUser = catchAsync(async (req, res) => {
  const result = await userService.allUser();
  res.status(200).json({
    success: true,
    message: "all user fetched successfully",
    data: result,
  });
});

export default { createUser , login, getUserData,logout, allUser };
