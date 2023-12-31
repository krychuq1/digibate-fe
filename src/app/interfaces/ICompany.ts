import {BrandIdentity} from "./BrandIdentity";

export interface ICompany {
  companyDescription: string;
  productDescription: string;
  fullBusinessName: string;
  businessName: string;
  industry: string;
  email: string;
  address: string;
  brandIdentity: BrandIdentity;
}
