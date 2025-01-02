export type TUserStatus = 'Pro';

export type TUserEntity = {
  avatarImageSrc: string;
  name: string;
  status?: TUserStatus;
};
