// export type TUserStatus = 'Pro';

// export type TUserEntity = {
//   avatarImageSrc: string;
//   name: string;
//   status?: TUserStatus;
// };

export type TUserEntity = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
};
// export type UserLong = UserShort & {
//   email: string;
//   token: string;
// };

export type TAuthInfo = {
  email: string;
  password: string;
};
