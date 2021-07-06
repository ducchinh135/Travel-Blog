import { BaseComponent } from "../BaseComponent.js";
// import "./router.js";
import { verifyEmail, md5 } from "../utils.js";
class Signup extends BaseComponent {
    constructor() {
        super();

        this.state = {
            errors: {
                name: "",
                email: "",
                password: "",
                repassword: "",
            },

            data: {
                name: "",
                email: "",
                password: "",
            },
        };
    }

    static get observedAttributes() {
        return ["id"];
    }

    render() {
        const template = `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <link rel="stylesheet" href="../css/styles_home.css">
        <link rel="stylesheet" href="../css/auth.css">
        
        <div class="main__wrap">
        <main>
            <div class="container">
                <div class="block block__auth">
                    <div class="row">
                        <div class="col-lg-6 mx-auto">
                            <div class="auth">
                                <div class="auth__title text-center">
                                    Creat a new account
                                </div>
                                <div class="auth__form">
                                    <form id="form-sign-up" novalidate>
                                        <div class="mb-3">
                                            <label for="email" class="form-label">Email</label>
                                            <input type="email" class="form-control" id="email"
                                                placeholder="Example@gmail.com">
                                            <div class="invalid-feedback"></div>
                                        </div>
                                        <div class="mb-3">
                                            <label for="username" class="form-label">User name</label>
                                            <input type="text" class="form-control" id="username"
                                                placeholder="Your user name">
                                            <div class="invalid-feedback"></div>
                                        </div>
                                        <div class="mb-3">
                                            <label for="password" class="form-label">Password</label>
                                            <input type="password" class="form-control" id="password"
                                                placeholder="Enter your password">
                                            <div class="invalid-feedback"></div>
                                        </div>
                                        <div class="mb-3">
                                            <label for="repassword" class="form-label">Re password</label>
                                            <input type="password" class="form-control"
                                                placeholder="Re enter your password" id="repassword">
                                            <div class="invalid-feedback"></div>
                                        </div>

                                        <div class="mb-3">
                                            <button class="btn auth__btn auth__login">Sign Up</button>
                                        </div>
                                        <p class="auth__text">Have an account yet? <a href="./login.html">Login</a>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        `;
        this._shadowRoot.innerHTML = template;
        this.$formRegister = this._shadowRoot.querySelector("#form-sign-up");
        this.$formRegister.onsubmit = async (event) => {
            event.preventDefault();

            // Lấy dữ liệu
            let name = this._shadowRoot.querySelector("#username").value;
            let email = this._shadowRoot.querySelector("#email").value;
            let password = this._shadowRoot.querySelector("#password").value;
            let repassword = this._shadowRoot.querySelector("#repassword").value;
            // Kiem tra xem du lieu nhap vào có lỗi thì show ra

            let isflash = true;
            if (name == "") {
                isflash = false;
                this.state.errors.name = "Input your name";
                alert("Moi bạn nhập tên người dùng");
            } else {
                this.state.errors.name = "";
                this.state.data.name = name;
            }
            if (email == "" || !verifyEmail(email)) {
                isflash = false;
                this.state.errors.email = "Nhập email";
                alert("Bạn phải nhập email");
            } else {
                this.state.errors.email = "";
                this.state.data.email = email;
            }
            if (password == "") {
                isflash = false;
                this.state.errors.password = "Input your password";
                alert("Bạn phải nhập đc password");
            } else {
                this.state.errors.password = "";
                this.state.data.password = password;
            }
            if (repassword == "" || repassword != password) {
                isflash = false;
                this.state.errors.repassword = "Your password confirmation is not correct";
                alert("Mời bạn nhập lại password");  
            } else {
                this.state.errors.repassword = "";
            }
            // Lưu dữ liệu vào firebase
            if (isflash) {
                this.state.data.password = md5(this.state.data.password).toString();
                const response = await firebase.firestore().collection("user1").where("email", "==", email).get();
                console.log(response);
                if (response.empty) {
                    await firebase.firestore().collection("user1").add(this.state.data);
                    alert("Sign up successfully");
                    router.navigate("/login");
                } else {
                    alert("Your email has already been used");
                }
            }
            
            this.setState(this.state);
        }
       
    }
    get id() {
        return this.getAttribute("id");
    }
}



window.customElements.define('custom-signup', Signup);