import {$state} from "../defaults/state.js";

export function fadeAnimation() {
	const fades = $state.form.querySelectorAll(".fade-animation");

	fades.forEach((it) => it.classList.remove("fade-animation"));
}
