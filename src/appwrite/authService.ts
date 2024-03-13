import conf from "@/conf/conf";
import { Client, Account, ID } from "appwrite";

type CreateUserAccount = {
    name: string;
    email: string;
    password: string;
}
type LoginUserAccount = {
    email: string;
    password: string;
}

export class AuthService {
    client = new Client();
    account;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }
    //* create new user inside appwrite
    async createUser({ name, email, password }: CreateUserAccount) {
        try {
            const newUser = await this.account.create(ID.unique(), name, email, password)
            if(newUser) {
                return this.loginUser({ email, password })
            } else{
                return newUser;
            }
        } catch (error: any) {
            throw error
        }
    }
    async loginUser({ email, password }: LoginUserAccount) {
        try {
            return await this.account.createSession(email, password)
        } catch (error: any) {
            throw error
        }
    }
    async isLoggedIn(): Promise<boolean> {
        try {
            const userData = await this.getCurrentUser()
            return Boolean(userData) //* return true if user data is not empty
        } catch (error) {}
        return false
    }

    async getCurrentUser() {
        try {
            return this.account.get()
        } catch (error:any) {
            console.log("getCurrentUser error: ", error);
        }
        return null; //! If this function doesn't work return null
    }

    async logout() {
        try {
            // return await this.account.deleteSession("current")
            return await this.account.deleteSessions()
        } catch (error: any) {
            console.log("logout error: ", error);
        }
    }
}

//* Create an object from class AppwriteService and export it
const authService = new AuthService()
export default authService