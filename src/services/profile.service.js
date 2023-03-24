import { profileInstance } from "../utils/interceptor";

export const getUserProfile = async () => {
  const userProfiles = await profileInstance.get();
  return userProfiles.data.users;
};
