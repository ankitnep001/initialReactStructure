import { AdminAllowedFeature, Role } from '@type/global.type'
import { IBase } from './base.interface'

export interface IAdmin extends IBase {
  email: string
  username: string
  password: string
  role: Role
  allowedFeature: AdminAllowedFeature[] | []
  details: {
    firstName: {
      en: string
      ne: string
    }
    middleName?: {
      en: string
      ne: string
    } | null
    lastName: {
      en: string
      ne: string
    }
    phoneNumber?: string
  }
}
