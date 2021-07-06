class Comments {
    constructor(id, date, content) {
        this._id = id;
        // this._name = name;
        this._date = date;
        this._content = content;
    }

    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }

    // get name() {
    //     return this._name;
    // }
    // set name(value) {
    //     this._name = value;
    // }

    get date() {
        return this._date;
    }
    set date(value) {
        this._date = value;
    }

    get content() {
        return this._content;
    }
    set content(value) {
        this._content = value;
    }
}

export default Comments