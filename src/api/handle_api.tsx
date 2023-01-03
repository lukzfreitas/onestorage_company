// @ts-ignore
import { apiCompany, apiAddressCompany } from "@tecno/api";
import { Company } from "../models/Company";
import { AddressCompany } from "../models/Address";

export async function saveCompanyApi(company: Company) {
  return await apiCompany("POST", "", company);
}

export async function saveAddressCompanyApi(addressCompany: AddressCompany) {
  apiAddressCompany("POST", "", addressCompany);
}
