import Choices from "choices.js/public/assets/scripts/choices.js";

export function choicesActivate() {
	const options = {
			searchEnabled: false,
			shouldSort: false,
			shouldSortItems: false,
			itemSelectText: "",
		},
		allChoices = new Map(),
		choicesElements = document.querySelectorAll("[data-choices]");

	choicesElements.forEach((e) => {
		const ariaLabel = e.getAttribute("aria-label"),
			mapKey = e.name;

		allChoices.set(mapKey, new Choices(e, options));

		const custom = e.closest(".choices");

		if (ariaLabel && custom) {
			custom.setAttribute("aria-label", ariaLabel);
		}
	});
}
