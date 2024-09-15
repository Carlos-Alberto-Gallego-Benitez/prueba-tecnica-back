import { inject } from "@adonisjs/core";
import UsersRepository from "../repositorys/users_repository.js";

@inject()    
export default class UsersService {

    constructor (private usersRepository: UsersRepository) {
        
    }

    public async createUser() {
        await this.usersRepository.save();
    }

    public async userAuth() {
        const data = await this.usersRepository.userAuth();
        return data;
    }

}