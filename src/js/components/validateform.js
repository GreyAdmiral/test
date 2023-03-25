import JustValidate from "just-validate";

export function validateform(form) {
	let formID;

	if (formID) {
		formID = form.id;
	} else {
		formID = form.id = "form";
	}

	const validateOptions = {
			tooltip: {
				position: "top",
			},
		},
		validate = new JustValidate(`#${formID}`, validateOptions);

	validate
		.addField("#FirstName", [
			{
				rule: "required",
				errorMessage: "First Name is required",
			},
			{
				rule: "minLength",
				value: 2,
				errorMessage: "First Name is too short",
			},
			{
				rule: "maxLength",
				value: 33,
				errorMessage: "First Name is too Long",
			},
			{
				rule: "customRegexp",
				value: /^[\p{L}]+$/u,
				errorMessage: "First Name is invalid!",
			},
		])
		.addField("#LastName", [
			{
				rule: "required",
				errorMessage: "Last Name is required",
			},
			{
				rule: "minLength",
				value: 2,
				errorMessage: "Last Name is too short",
			},
			{
				rule: "maxLength",
				value: 33,
				errorMessage: "Last Name is too Long",
			},
			{
				rule: "customRegexp",
				value: /^[\p{L}]+$/u,
				errorMessage: "Last Name is invalid!",
			},
		])
		.addField("#EMail", [
			{
				rule: "required",
				errorMessage: "E-mail is required",
			},
			{
				rule: "minLength",
				value: 6,
				errorMessage: "Last Name is too short",
			},
			{
				rule: "maxLength",
				value: 55,
				errorMessage: "Last Name is too Long",
			},
			{
				rule: "email",
				errorMessage: "E-mail is invalid!",
			},
		])
		.addField("#Password", [
			{
				rule: "required",
				errorMessage: "Password is required",
			},
			{
				rule: "customRegexp",
				value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
				errorMessage: "Password is invalid!",
			},
		])
		.addField("#ConfirmPassword", [
			{
				rule: "required",
				errorMessage: "Confirm Password is required",
			},
			{
				rule: "customRegexp",
				value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
				errorMessage: "Confirm Password is invalid!",
			},
			{
				validator: (value, fields) => {
					if (fields["#Password"] && fields["#Password"].elem) {
						const repeatPasswordValue = fields["#Password"].elem.value;

						return value === repeatPasswordValue;
					}

					return true;
				},
				errorMessage: "Passwords should be the same!",
			},
		]);
}
