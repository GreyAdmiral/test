//*----------------------------------------Подключение переменных-------------------------------------------------------|
import {$vars, $state} from "./exports/expStateVars.js";
//*----------------------------------------Подключение модулей----------------------------------------------------------|
import {$modules} from "./exports/expModules.js";
//*----------------------------------------Подключение функций----------------------------------------------------------|
import {$functions} from "./exports/expFunctions.js";
//*----------------------------------------Подключение компонентов скрипта----------------------------------------------|
import {$components} from "./exports/expComponents.js";
//*--------------------------------------------------Основной скрипт----------------------------------------------------|

$components.fadeAnimation();
$functions.choicesActivate();
$components.validateform($state.form);
$functions.placeholderWatch($state.form);

$state.form.oninput = $components.inputValidation;
$state.form.onsubmit = $components.formSubmit;

const modal = new $modules.Modal({});
