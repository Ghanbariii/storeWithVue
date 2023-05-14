export interface UserDTo {
  id: number;
  creationDate: string;
  name: string;
  family: string;
  phoneNumber: string;
  email: string;
  password: string;
  avatarName: string;
  isActive: boolean;
  gender: number;
  roles: Role[];
}
export enum Gender {
  نامشخص = 0,
  مذکر = 1,
  مونث = 2,
}
export interface Role {
  roleId: number;
  roleTitle: string;
}
