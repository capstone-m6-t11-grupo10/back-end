import { IAddressRequest } from "../address"
// import { IComments } from "../comments"

export interface IUser {
  id: string
  name: string
  birthDate: Date
  image: string
  email: string
  phone: string
  password: string
  cpf: string
  isActive: boolean
  isSeller: boolean
  bio: string
  address: IAddressRequest
  vehicles: []
  //   comments: IComments[]
}

export interface IUserRequest {
  name: string
  email: string
  cpf: string
  password: string
  isSeller: boolean
}

export interface IUserLogin {
  email: string
  senha: string
}

export interface IUpdateUSer {
  name?: string
  birthDate?: Date
  image?: string
  email?: string
  phone?: string
  password?: string
  cpf?: string
  isActive?: boolean
  isSeller?: boolean
  bio?: string
  address?: string
  vehicles?: []
  //   comments?: IComments[]
}
