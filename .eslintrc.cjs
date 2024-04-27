module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:tailwindcss/recommended",
		"prettier",
	],
	ignorePatterns: ["dist"],
	files: ['*.ts', '*.tsx', '*.js'],
	parser: "@typescript-eslint/parser",
	plugins: ["react-refresh"],, ".eslintrc.cjs"
		semi: ["error", "always"],
		quotes: ["error", "double"],
		trailingComma: ["error", "all"],
		indent: ["error", 4, { SwitchCase: 1 }],
		"react/react-in-jsx-scope": "off",
		"react/jsx-uses-react": "off",
	},
};
