import UsersService from "#services/users_service";
import { inject } from "@adonisjs/core";
import type { HttpContext } from '@adonisjs/core/http';

@inject()
export default class UsersController {

    constructor(private userService : UsersService) {
        
    }

    public async createUser({ response } :  HttpContext) {
        this.userService.createUser();
        response.json({"state" : "ok"});
    }

    public async userAuth({ response } :  HttpContext) {
        await this.userService.userAuth();
        // console.log("data :" ,data)
        // response.json({"message" : "ok"});
    }


}