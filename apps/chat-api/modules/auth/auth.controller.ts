import type { AuthService } from "@chat/modules/auth/auth.service.js"

export class AuthController {
  #authService: AuthService
  constructor(authService: AuthService) {
    this.#authService = authService
  }

  public async signup({ username, password }: {username: string; password: string}): Promise<[undefined, Error | undefined]> {
    const userExists = await this.#authService.findUser({ username })
    if (userExists) {
      return [undefined, new Error(`User ${username} already exists`)]
    }

    await this.#authService.createUser({ username, password })
    console.log(`New user saved: ${username}`)
    return [undefined,undefined]
  }
}

//
