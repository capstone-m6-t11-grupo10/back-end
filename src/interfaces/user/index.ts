// import { IAddressRequest } from "../address"
// import { IComments } from "../comments"

export interface IUserRequest {
    name: string;
    email: string;
    cpf: string;
    password: string;
    birthDate: string;
    phone: string;
    isActive?: boolean;
    isSeller?: boolean;
    bio: string;
    image?: string;
    // address?: IAddressRequest
    // vehicles?: []
    // comments: IComments[]
}

export interface IUserLogin {
    email: string;
    password: string;
}
