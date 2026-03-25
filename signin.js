function validarCampos() {
    let nome = document.getElementById("nome");
    let endereço = document.getElementById("endereço");
    let cidade = document.getElementById("cidade");
    let estado = document.getElementById("estado");
    let cep = document.getElementById("cep");
    let email = document.getElementById("email");
    let username = document.getElementById("username");
    let password = document.getElementById("password");

    if (nome.value === "" || endereço.value === "" || cidade.value === "" || estado.value === "" || cep.value === "" || email.value === "" || username.value === ""|| password.value === "") {

        if (nome.value === "") {
            nome.classList.add("is-invalid");
        } else {
            nome.classList.remove("is-invalid");
        }

        if (endereço.value === "") {
            endereço.classList.add("is-invalid");
        } else {
            endereço.classList.remove("is-invalid");
        }

        if (cidade.value === "") {
            cidade.classList.add("is-invalid");
        } else {
            cidade.classList.remove("is-invalid");
        }


        if (estado.value === "") {
            estado.classList.add("is-invalid");
        } else {
            estado.classList.remove("is-invalid");
        }

        
        if (cep.value === "") {
            cep.classList.add("is-invalid");
        } else {
            cep.classList.remove("is-invalid");
        }
        

        if (email.value === "") {
            email.classList.add("is-invalid");
        } else {
            email.classList.remove("is-invalid");
        }


        if (username.value === "") {
            password.classList.add("is-invalid");
        } else {
            password.classList.remove("is-invalid");
        }


        if (password.value === "") {
            password.classList.add("is-invalid");
        } else {
            password.classList.remove("is-invalid");
        }

        return false;
    }

    return true;
}

function abrirAlerta(event) {
    event.preventDefault();

    if (!validarCampos()) return;

    Swal.fire({
        title: "Seja Bem-Vindo!",
        icon: "success",
        confirmButtonText: "OK",
        customClass: {
            title: 'meuTitulo'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "index.html";
        }
    });
}