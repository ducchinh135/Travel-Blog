import { BaseComponent } from "../BaseComponent.js";
import {
    verifyEmail,
    md5,
    getDataFromDocs,
    saveCurrentUser,
} from "../utils.js";
// import "../router.js";
class Login extends BaseComponent {
    constructor() {
        super();
        this.state = {
            errors: {
                email: "",
                password: "",
            },

            data: {
                email: "",
                password: "",
            },
        }
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
                                    Welcome Back
                                </div>
                                <div class="auth__form">
                                    <form novalidate id="form-login">
                                        <div class="mb-3">
                                            <label for="email" class="form-label">Email</label>
                                            <input type="email" class="form-control" id="email"
                                                placeholder="Example@gmail.com">
                                            <div class="invalid-feedback"></div>
                                        </div>
                                        <div class="mb-3">
                                            <label for="password" class="form-label">Password</label>
                                            <input type="password" class="form-control" id="password"
                                                placeholder="Enter your password">
                                            <div class="invalid-feedback"></div>
                                        </div>

                                        <div class="mb-3">
                                            <button class="btn auth__btn auth__login" type="submit">Login</button>
                                        </div>
                                        <p class="auth__text">
                                            Don't have an account yet? <a href="./sign-up.html">Sign
                                                up</a>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
        `;
        this._shadowRoot.innerHTML = template;
        this.$formLogin = this._shadowRoot.querySelector("#form-login");
        this.$formLogin.onsubmit = async (event) => {
            event.preventDefault();
            // L???y d??? li???u
            let email = this._shadowRoot.querySelector("#email").value;
            let password = this._shadowRoot.querySelector("#password").value;
            // Ki???m tra d??? li???u nh???p v??o c?? l???i th?? show ra
            let isFlash = true;
            if (email == "") {

                isFlash = false;
                this.state.errors.email = "Invalid email";
                alert("Moi b???n nh???p email");
            }
            else {
                this.state.errors.email = "";
                this.state.data.email = email;
            }
            if (password == "") {
                isFlash = false;
                this.state.errors.password = "Input your password";
                alert("M???i b???n nh???p password");
            } else {
                this.state.errors.password = "";
                this.state.data.password = password;
            }
            // Kiem tra d??? li???u ng?????i d??ng.
            if (isFlash) {
                const response = await firebase.firestore().collection("user1").where("email", "==", email).get();
                // .where("password", "==", md5(password))
                console.log(response);
            //     var admin = await firebase.firestore().collection("user1").get();
            //     admin.docs.forEach((doc) => {
            //  if (doc.data().email === "nnminh432@gmail.com") {
            //         alert("th??nh c??ng r???i");
            //         router.navigate("/home");
            //    } 
            //     })
             if (response.empty) {
                    alert("T??i kho???n ho???c m???t kh???u kh??ng ch??nh x??c");
                }
                 else {
                    const currentUser = getDataFromDocs(response.docs)[0];
                    console.log(currentUser);
                    // l??u ng?????i d??ng hi???n t???i
                    saveCurrentUser(currentUser);   
                    // chuy???n sang trang index
                    router.navigate("/home");
                }
            }
            this.setState(this.state);
        };
    }

    get id() {
        return this.getAttribute("id");
    }
}

window.customElements.define('custom-login', Login);