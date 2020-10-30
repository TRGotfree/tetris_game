import { User } from "src/models/user.model";

export interface IUserRepository {
    getUser(login: string, password: string): User;
    getUser(login: string): User;
    getUser(id: number): User;

    updateUser(user: User): User;
    addUser(user: User): User;
    deleteUser(userId: number): void;
}