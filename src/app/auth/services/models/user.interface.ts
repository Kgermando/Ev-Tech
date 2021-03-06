import { Roles } from './fsEnum';


export interface UserInformation {
	password: string;
	email: string;
	name?:string;
	metaData?:CustomerUserInformation;

}
export interface CustomerUserInformation {
	uid?:string;
    name?:string;
	email?: string;
	role?: Roles[];
	phoneNumber?: number;
	ratings?: number;
	useraddress?:string;
	photoURL?:string;
	companyname?: string;
	rating?: number;
}

export interface Person{
	companyname?: string;
	email?: string;
	name?:string;
	phoneNumber?: string;
	photoURL?:string;
	role?: Roles;
	uid?:string;
	useraddress?:string;




	




}