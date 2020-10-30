export class User {

    private _id: number;
    private _login: string;
    private _password: string;
    private _name: string;

    constructor(id: number, login: string, password: string, name: string) {
        this._id = id;
        this._login = login;
        this._password = password;
        this._name = name;
    }

    get id(): number {
        return this._id;
    }

    get login(): string {
        return this._login;
    }

    get password(): string {
        return this._password;
    }

    get name(): string {
        return this._name;
    }

}