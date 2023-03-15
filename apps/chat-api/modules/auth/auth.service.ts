// eslint-disable-next-line no-unused-vars
import type { UtilsService } from '@chat/common/utils.js'
import type { User } from '@chat/models/user.model.js'
import type { Model } from 'mongoose'

export class AuthService {
  #utilsService: UtilsService
  #userModel: Model<User>
  constructor({userModel, utilsService}: {userModel: Model<User>; utilsService: UtilsService}) {
    this.#userModel = userModel
    this.#utilsService = utilsService
  }
  public async createUser({username, password}: {username: string; password: string}): Promise<void> {
    const existsUser = await this.findUser({username})
    if (existsUser){
      throw new Error('User are exists')
    }
    const hash = await this.#utilsService.hashPassword(password)
    const user = new this.#userModel({username, hash})
    await user.save()
  }
  public async findUser({username}: {username: string}): Promise<User|null> {
    const user = await this.#userModel.findOne({username})

    return user
  }
}
