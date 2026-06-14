import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default defineConfig([
	{
		files: ['**/*.js'],
		languageOptions: {
			globals: globals.browser,
		},
		plugins: {
			js,
		},
		extends: ['js/recommended'],
		rules: {
			'no-unused-vars': 'warn',
			'no-undef': 'warn',
		},
	},
	eslintConfigPrettier,
]);
