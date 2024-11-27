window.addEventListener("DOMContentLoaded", () => {
    let btnContacto = document.getElementById("btnContacto");

    btnContacto.addEventListener("click", () => {
        const userName = getUserNameFromForm();
        const userApe = getUserApeFromForm();
        if(userName && userApe) {
            window.alert(`Hola ${userName} ${userApe} tus datos se enviaron correctamente.`);
        }
    })
})

function getUserNameFromForm() {
    const form = document.querySelector(`form`);
    if (form) {
		const userNameInput = form.elements["nombre"];		
		if (userNameInput) {
			return userNameInput.value;
		}
	}
}

function getUserApeFromForm() {
    const form = document.querySelector(`form`);
    if (form) {
		const userNameInput = form.elements["apellido"];		
		if (userNameInput) {
			return userNameInput.value;
		}
	}
}