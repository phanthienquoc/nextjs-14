import type { TableProps } from "antd";

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface IUserTable {
  users: IUser[] | [];
  meta: {
    current: number;
    pageSize: number;
    total: string | number | any;
  };
}
