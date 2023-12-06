import {IProfile} from "./IProfile";
import {ICompany} from "./ICompany";

export interface IUser {
  email: string;
  profile: IProfile;
  companies: ICompany[]
}
