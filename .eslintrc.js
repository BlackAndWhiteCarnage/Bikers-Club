module.exports = {
	extends: ['plugin:prettier/recommended', 'prettier', 'react-app'],
	plugins: ['prettier'],
	rules: {
		camelcase: [
			'error',
			{
				ignoreImports: true,
			},
		],
		'import/named': 0,
		'import/no-extraneous-dependencies': 0,
		'no-shadow': 0,
		'no-nested-ternary': 0,
		'react/display-name': 0,
		'prettier/prettier': [
			'error',
			{
				arrowParens: 'always',
				bracketSameLine: false,
				bracketSpacing: true,
				parenSpacing: false,
				printWidth: 80,
				semi: true,
				singleQuote: true,
				tabWidth: 4,
				trailingComma: 'es5',
				useTabs: true,
			},
		],
	},
};
