let type = value => {
	return Object.prototype.toString.call(value).slice(8).slice(0, -1).toLowerCase();
}

let isNumber = v => type(v) === 'number'
let isString = v => type(v) === 'string'
let isBoolean = v => type(v) === 'boolean';
let isBool = isBoolean;
let isFunction = v => type(v) === 'function';
let isObj = v => type(v) === 'object';
let isArray = v => type(v) === 'array';
let isUndefined = v => type(v) === 'undefined'
let isNull = v => type(v) === 'null'

export default type;
export {
	isNumber,
	isString,
	isBoolean,
	isBool,
	isFunction,
	isObj,
	isArray,
	isUndefined,
	isNull
}