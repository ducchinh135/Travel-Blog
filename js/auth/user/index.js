var firebaseConfig = {
    databaseURL: "https://travel-blog-358e8.firebase.com",
    apiKey: "AIzaSyBfWWh6k-sJKEb13Q7ow-FiUI1Jh937c5s",
    authDomain: "travel-blog-358e8.firebaseapp.com",
    projectId: "travel-blog-358e8",
    storageBucket: "travel-blog-358e8.appspot.com",
    messagingSenderId: "883458509982",
    appId: "1:883458509982:web:73f44eeec0930384e0bf8f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

import ListUser from "./User.js";

class User {
    constructor() { }

    async _getAll() {
        const results = await db.collection('user1').get();
        return results.docs;
    }

    async _addUser(user) {
        return await db.collection('user1').add({
            email: user.email,
            name: user.name,
            password: user.password,
        });
    }

    async _deleteUser(id) {
        return await db.collection('user1').doc(id).delete();
    }

    async _updateUser(user) {
        return await db.collection('user1').doc(user.id).update({
            email: user.email,
            name: user.name,
            password: user.password,
        });
    }
}

const userTableBody = document.querySelector('#user-table tbody');

const editModal = document.querySelector('#exampleModal');
const modalEmail = editModal.querySelector('#email');
const modalName = editModal.querySelector('#name');
const modalPassword = editModal.querySelector('#password');

const addModal = document.querySelector('#exampleModal2');
const modalAddEmail = addModal.querySelector('#email-add');
const modalAddName = addModal.querySelector('#name-add');
const modalAddPassword = addModal.querySelector('#password-add');

const btnEdit = editModal.querySelector('#save-edit');
const btnAdd = document.querySelector('#save-add');

const userModel = new User();

const renderUser = (container_el, user) => {
    container_el.insertAdjacentHTML(
        'beforeend',
        `<tr id=row-${user.id}>
        <th scope="row" class="text-center">${user.id}</th>
        <td class="text-center email">${user.email}</td>
        <td class="text-center name">${user.name}</td>
        <td class="text-center password">${user.password}</td>
        <td class="text-center"><button data-id="${user.id}" class="btn btn-warning me-2 edit"
         data-email="${user.email}" data-name="${user.name}" data-password="${user.password}" data-bs-toggle="modal" data-bs-target="#exampleModal">
         <i class="fas fa-edit"></i></button>
         <button data-id="${user.id}" class="btn btn-danger remove"><i class="fas fa-user-minus"></i></button>
         </td>
         </tr>`
    );

    const tr = container_el.querySelector(`tr#row-${user.id}`);
    const btnDelete = tr.querySelector('.remove');

    btnDelete.onclick = () => {
        Swal.fire({
            title: 'Notice!',
            text: 'Do you want to delete user ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
        }).then((result) => {
            if (result.isConfirmed) {
                userModel._deleteUser(user.id).then(() => {
                    tr.remove();
                    Swal.fire('Done!', '', 'success');
                });
            }
        });
    };
};

userModel._getAll().then((users) => {
    users.forEach((user) => {
        const userData = {
            id: user.id,
            email: user.data().email,
            name: user.data().name,
            password: user.data().password,
        };
        renderUser(userTableBody, userData);
    });
});

editModal.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget;
    const email = button.getAttribute('data-email');
    const name = button.getAttribute('data-name');
    const password = button.getAttribute('data-password');
    const idDoc = button.getAttribute('data-id');

    modalEmail.value = email;
    modalName.value = name;
    modalPassword.value = password;
    btnEdit.setAttribute('doc-id', idDoc);
});

btnEdit.onclick = (event) => {
    const docId = event.target.getAttribute('doc-id');
    userModel
        ._updateUser({
            id: docId,
            email: modalEmail.value,
            name: modalName.value,
            password: modalPassword.value,
        })
        .then(() => {
            const trAffected = userTableBody.querySelector(`tr#row-${docId}`);
            const email = trAffected.querySelector('.email');
            const name = trAffected.querySelector('.name');
            const password = trAffected.querySelector('.password');
            email.innerText = modalEmail.value;
            name.innerText = modalName.value;
            password.innerText = modalPassword.value;
            Swal.fire('Update success!', '', 'success');
        });
};

btnAdd.onclick = () => {
    // let newUser = {
    //     email: modalAddEmail.value,
    //     name: modalAddName.value,
    //     password: modalAddPassword.value,
    // };

    let newUser = new ListUser(modalAddEmail.value, modalAddName.value, modalAddPassword.value)

    userModel._addUser(newUser).then((response) => {
        modalAddEmail.value = '';
        modalAddName.value = '';
        modalAddPassword.value = '';
        newUser.id = response.id;
        renderUser(userTableBody, newUser);
        Swal.fire('Update success!', '', 'success');
    });
};

