// eslint.config.mjs
import js from "@eslint/js";
import next from "eslint-config-next";
import importPlugin from "eslint-plugin-import";
import nPlugin from "eslint-plugin-n";
import promisePlugin from "eslint-plugin-promise";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,

  ...next(),

  {
    plugins: {
      import: importPlugin,
      n: nPlugin,
      promise: promisePlugin,
    },

    rules: {
      /* --- Standard-like sanity rules --- */
      "n/no-missing-import": "off",
      "promise/always-return": "off",

      /* --- Import ordering --- */
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", ["parent", "sibling"], "index", "object"],
          "newlines-between": "always",
          pathGroups: [
            {
              pattern: "@app/**",
              group: "external",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  },

  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "no-undef": "off",
    },
  },

  // MUST be last
  prettier,
];
