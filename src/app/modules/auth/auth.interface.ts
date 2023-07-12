export type IUSerLogin = {
  id: string
  password: string
}

export type IUserLoginResponse = {
  accessToken: string
  refreshToken: string
  needsPasswordChange: boolean
}
