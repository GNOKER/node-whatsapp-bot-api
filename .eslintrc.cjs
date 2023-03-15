const namingConventionRule = [
  'warn',
  {
    selector: 'default',
    format: ['strictCamelCase'],
  },
  {
    selector: 'variable',
    format: ['strictCamelCase'],
  },
  {
    selector: 'variable',
    types: ['boolean'],
    format: ['StrictPascalCase'],
    prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
  },
  {
    selector: 'variable',
    modifiers: ['const'],
    format: ['strictCamelCase', 'StrictPascalCase', 'UPPER_CASE'],
  },
  {
    selector: 'variable',
    modifiers: ['const'],
    format: ['strictCamelCase', 'StrictPascalCase', 'UPPER_CASE'],
  },
  {
    selector: 'parameter',
    format: ['strictCamelCase'],
    leadingUnderscore: 'allow',
  },
  {
    selector: 'property',
    format: ['strictCamelCase', 'UPPER_CASE'],
    leadingUnderscore: 'allow',
  },
  {
    selector: 'typeLike',
    format: ['StrictPascalCase'],
  },
  {
    selector: 'interface',
    format: ['StrictPascalCase'],
    custom: {
      regex: '^I[A-Z]',
      match: false,
    },
  },
  {
    selector: [
      'property',
      'method',
      'accessor',
      'enumMember',
      'memberLike',
    ],
    // eslint-disable-next-line unicorn/no-null
    format: null,
    modifiers: ['requiresQuotes'],
  },
]


module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    jest: true,
    node: true
  },
  ignorePatterns: ['.eslintrc.cjs'],
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'import', 'unicorn', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/recommended', 
    // 'plugin:prettier/recommended'
  ],
  root: true,
  rules: {
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: true
        },
        multilineDetection: 'brackets',
        singleline: {
          delimiter: 'semi',
          requireLast: false
        }
      }],
    '@typescript-eslint/method-signature-style': 'error',
    '@typescript-eslint/no-confusing-void-expression': [
      'error',
      {
        ignoreArrowShorthand: true,
        ignoreVoidOperator: true,
      },
    ],
    '@typescript-eslint/naming-convention': namingConventionRule,
    '@typescript-eslint/no-implicit-any-catch': 'error',
    '@typescript-eslint/no-invalid-this': 'error',
    '@typescript-eslint/no-redeclare': 'off',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-useless-empty-export': 'error',
    '@typescript-eslint/padding-line-between-statements': 'error',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    '@typescript-eslint/prefer-regexp-exec': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/sort-type-union-intersection-members': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',

    '@typescript-eslint/type-annotation-spacing': [
      'error',
      {
        after: true,
        before: false,
        overrides: {
          arrow: {
            after: true,
            before: true
          }
        }
      }],
    'block-spacing': ['error', 'never'],
    curly: ['error', 'all'],
    /** TypeScript подскажет, если результирующее значение будет undefined. */
    'default-case': 'off',
    /** TypeScript подскажет, если результирующее значение будет undefined. */
    'consistent-return': 'off',
    'brace-style': 'off',
    'max-len': 'off',
    'no-confusing-arrow': 'off',
    'object-curly-spacing': 'off',
    semi: ['error', 'never'],
    'unicorn/filename-case': [
      'error',
      // {
      //   cases: {
      //     camelCase: true,
      //     pascalCase: true,
      //   },
      // },
    ],
    'unicorn/no-abusive-eslint-disable': 'off',
    /** TypeScript уже проверяет корректность переданных аргументов. */
    'unicorn/no-array-callback-reference': 'off',
    'unicorn/no-array-for-each': 'off',
    'unicorn/no-array-reduce': 'off',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/no-array-callback-reference': 'off',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/brace-style': ['error', '1tbs', {
      allowSingleLine: false
    }],
    "@typescript-eslint/explicit-member-accessibility": ["error", {
      "accessibility": "explicit",
      "overrides": {
        "accessors": "off",
        "constructors": "no-public",
        "methods": "explicit",
        "parameterProperties": "explicit",
        "properties": "explicit"
      }
    }],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/member-ordering': ['warn', {
      default: ["signature", "call-signature", // Fields
        "public-static-field", "protected-static-field", "private-static-field", "#private-static-field", // Fields
        "public-static-field", "protected-static-field", "private-static-field", "#private-static-field", "public-decorated-field", "protected-decorated-field", "private-decorated-field", "public-instance-field", "protected-instance-field", "private-instance-field", "#private-instance-field", "public-abstract-field", "protected-abstract-field", "public-field", "protected-field", "private-field", "#private-field", "static-field", "instance-field", "abstract-field", "decorated-field", "field", // Static initialization
        "static-initialization", // Constructors
        "public-constructor", "protected-constructor", "private-constructor", "constructor", "public-decorated-method", "protected-decorated-method", "private-decorated-method"]
    }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extra-parens': ["error", "all", {
      "enforceForArrowConditionals": false
    }],
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    'import/default': 'error',
    indent:['error',2]
    // "prettier/prettier": ['error', {
    //   arrowParens: 'avoid',
    //   printWidth: 140,
    //   'semi': false,
    //   singleQuote: true,
    //   trailerComma: 'es5',
    //   bracketSpacing: false
    // }]
  }
}
