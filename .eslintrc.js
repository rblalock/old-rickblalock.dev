module.exports = {
	"env": {
		"browser": true,
		"es2020": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended"
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 11,
		"sourceType": "module"
	},
	"plugins": [
		"react",
		"@typescript-eslint"
	],
	"rules": {
		"no-unused-vars": 0,
		"react/display-name": 0,
		"arrow-parens": 0,
		"member-access": 0,
		"ordered-imports": 0,
		"interface-name": [0],
		"no-console": [0],
		"max-line-length": [0],
		"object-literal-sort-keys": 0,
		"indent": [1, "tab"],
		"max-classes-per-file": 0,
		"one-variable-per-declaration": 0,
		"radix": 0,
		"no-consecutive-blank-lines": 0,
		"@typescript-eslint/explicit-module-boundary-types": 0,
		"react/no-unescaped-entities": 0,
		"@typescript-eslint/ban-ts-comment": 0,
		"react/prop-types": 0
	}
};
