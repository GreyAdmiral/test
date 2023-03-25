export const $vars = {
	html: document.documentElement,
	body: document.body,
	wrapper: document.getElementsByClassName("wrapper")[0],
	main: document.getElementsByTagName("main")[0],
	documentWidth: Math.max(
		document.body.scrollWidth,
		document.documentElement.scrollWidth,
		document.body.clientWidth,
		document.documentElement.clientWidth,
		document.body.offsetWidth,
		document.documentElement.offsetWidth
	),
	documentHeight: Math.max(
		document.body.scrollHeight,
		document.documentElement.scrollHeight,
		document.body.clientHeight,
		document.documentElement.clientHeight,
		document.body.offsetHeight,
		document.documentElement.offsetHeight
	),
};