import { readFileSync } from 'fs';
import jwt from 'jsonwebtoken'

export default class UsersRepository {

    public async save() {
        console.log(" repository");
    }

    public async userAuth() {
        // const providerUser = await this.#userProvider.createUserForGuard(user)
        const privateKey = readFileSync('./private_key.key');
        // const token = jwt.sign({ userId: providerUser.getId() }, this.#options.secret)

        const token = jwt.sign({ data: {user: "prueba", passw: "prueba", name: "prueba"}, exp: Math.floor(Date.now() / 1000) + (14 * 14) }, privateKey, { algorithm: 'RS256'});

        console.log("authenticated :", token);

        return {
            type: 'bearer',
            token: token
        }
        
    }

}