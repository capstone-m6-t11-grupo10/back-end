import { IAddressRequest } from "../address"
// import { IComments } from "../comments"

export interface IUserRequest {
  id: string
  name: string
  birthDate: string
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


export interface IUserLogin {
  email: string
  senha: string
}

