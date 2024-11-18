import { TUser } from "./user.interface";
import { user } from "./user.model";

const createUser = async (userData: TUser) => {
  return await user.create(userData);
};

const allUser = async () => {
  return await user.find();
}
export default {
  createUser,
  allUser
};
