export function stainingError(target) {
	const label = target.closest("label");

	if (label) {
		const error = label.querySelector(":scope input + .just-validate-error-label");

		if (error) {
			if (!label.classList.contains("error")) {
				label.classList.add("error");
			}
		} else {
			if (label.classList.contains("error")) {
				label.classList.remove("error");
			}
		}
	}
}
