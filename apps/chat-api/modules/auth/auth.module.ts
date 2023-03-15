import { UtilsService } from "@chat/common/utils.js"
import { userModel } from "@chat/models/user.model.js"
import { AuthService } from "@chat/modules/auth/auth.service.js"
import {AuthController} from "@chat/modules/auth/auth.controller.js"

const utilsService = new UtilsService()
const authService = new AuthService({ utilsService, userModel })
export const authController = new AuthController(authService)
