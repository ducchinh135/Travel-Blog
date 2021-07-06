class ListUser {
    constructor(email, name, password) {
        this._email = email;
        this._name = name;
        this._password = password;
    }

    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }

    get name() {
        return this._name;
    }
    set email(value) {
        this._name = value;
    }

    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }

}

export default ListUser