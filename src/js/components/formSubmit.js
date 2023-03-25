import {stainingError} from "./stainingError.js";
import {shake} from "./shake.js";

export function formSubmit(e) {
	const target = e.target,
		inputs = [...target.querySelectorAll("span + input")],
		formData = new FormData(form),
		requestOptions = {
			method: "POST",
			body: formData,
		},
		modalBtn = document.querySelector('[data-path="first"]'),
		modalTitle = document.querySelector(".modal-text > h2"),
		modalBody = document.querySelector(".modal-text > span"),
		submitBtn = e.submitter;

	inputs.forEach((it) => stainingError(it));

	const hasError = target.querySelector(".just-validate-error-label");

	if (!hasError) {
		fetch("../../vendor/files/post.php", requestOptions)
			.then((res) => {
				if (res.ok)
					inputs.forEach((it) => {
						it.value = "";
					});

				return res.json();
			})
			.then((data) => {
				modalTitle.textContent = data.title;
				modalBody.textContent = data.message;
			})
			.catch((err) => {
				shake(submitBtn);
				modalTitle.textContent = "Error!";
				modalBody.textContent = "You not registered!";
				console.error(err);
			})
			.finally(() => {
				modalBtn.click();
				inputs.forEach((it) => {
					if (it.classList.contains("just-validate-success-field")) {
						it.classList.remove("just-validate-success-field");
					}
				});
			});
	}

	return false;
}
