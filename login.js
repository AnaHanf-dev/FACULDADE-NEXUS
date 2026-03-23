function validarCampos() {
    let username = document.getElementById("username");
    let password = document.getElementById("password");

    if (username.value === "" || password.value === "") {

        // Mostra erro visual nos inputs
        if (username.value === "") {
            username.classList.add("is-invalid");
        } else {
            username.classList.remove("is-invalid");
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
            window.location.href = "menu_nexus.html";
        }
    });
}