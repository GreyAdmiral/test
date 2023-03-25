import {stainingError} from "./stainingError.js";

export function inputValidation(e) {
	const target = e.target;

	if (target.closest("span + input")) {
		stainingError(target);
	}
}
