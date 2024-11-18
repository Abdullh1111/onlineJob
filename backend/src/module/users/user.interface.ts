import { Model, Types } from "mongoose";

export type TUser = {
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
  balance: number;
  createdAt: Date;
  updatedAt: Date;
};

export type TUserMethod = {
  token: () => string;
};

export type TUserModel = Model<TUser, {}, TUserMethod>;
