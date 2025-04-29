import { IUser } from "../../user/interfaces/user.interface"

export interface ISession {
    usuario : IUser
    admin : boolean
    token : string
}