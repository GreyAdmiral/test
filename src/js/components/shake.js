import {sleep} from "../functions/sleep.js";

export function shake(elem) {
	elem.classList.add("shake");
	sleep(1000).then(() => elem.classList.remove("shake"));
}
