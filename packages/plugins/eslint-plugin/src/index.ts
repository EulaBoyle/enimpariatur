import * as debug from "@eslint-react/eslint-plugin-debug";
import * as jsx from "@eslint-react/eslint-plugin-jsx";
import * as namingConvention from "@eslint-react/eslint-plugin-naming-convention";
import * as react from "@eslint-react/eslint-plugin-react";
import * as reactDom from "@eslint-react/eslint-plugin-react-dom";
import * as reactHooks from "@eslint-react/eslint-plugin-react-hooks";
import { Helper } from "@eslint-react/tools";
import type { RulePreset } from "@eslint-react/types";
import tsParser from "@typescript-eslint/parser";
// Workaround for @typescript-eslint/utils's TS2742 error.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { ESLintUtils } from "@typescript-eslint/utils";

import { name, version } from "../package.json";
import { padKeysLeft } from "./utils";

const { entries, fromEntries } = Helper;

const rulePreset = {
  "jsx/max-depth": "warn",
  "jsx/no-array-index-key": "warn",
  "jsx/no-comment-textnodes": "warn",
  "jsx/no-complicated-conditional-rendering": "warn",
  "jsx/no-duplicate-key": "error",
  "jsx/no-leaked-conditional-rendering": "warn",
  "jsx/no-missing-key": "error",
  "jsx/no-spreading-key": "warn",
  "jsx/no-useless-fragment": "warn",
  "jsx/prefer-shorthand-boolean": "warn",
  "jsx/prefer-shorthand-fragment": "warn",

  "react/ensure-forward-ref-using-ref": "warn",
  "react/no-access-state-in-setstate": "error",
  "react/no-children-count": "warn",
  "react/no-children-for-each": "warn",
  "react/no-children-map": "warn",
  "react/no-children-only": "warn",
  "react/no-children-prop": "warn",
  "react/no-children-to-array": "warn",
  "react/no-class-component": "warn",
  "react/no-clone-element": "warn",
  "react/no-component-will-mount": "error",
  "react/no-component-will-receive-props": "error",
  "react/no-component-will-update": "error",
  "react/no-constructed-context-value": "error",
  "react/no-create-ref": "error",
  "react/no-direct-mutation-state": "error",
  "react/no-missing-component-display-name": "warn",
  "react/no-redundant-should-component-update": "error",
  "react/no-render-return-value": "error",
  "react/no-set-state-in-component-did-mount": "warn",
  "react/no-set-state-in-component-did-update": "warn",
  "react/no-set-state-in-component-will-update": "warn",
  "react/no-string-refs": "error",
  "react/no-unsafe-component-will-mount": "warn",
  "react/no-unsafe-component-will-receive-props": "warn",
  "react/no-unsafe-component-will-update": "warn",
  "react/no-unstable-default-props": "error",
  "react/no-unstable-nested-components": "warn",
  "react/no-unused-class-component-members": "warn",
  "react/no-unused-state": "warn",
  "react/prefer-destructuring-assignment": "warn",

  "react-dom/no-children-in-void-dom-elements": "warn",
  "react-dom/no-dangerously-set-innerhtml": "warn",
  "react-dom/no-dangerously-set-innerhtml-with-children": "error",
  "react-dom/no-find-dom-node": "error",
  "react-dom/no-missing-button-type": "warn",
  "react-dom/no-missing-iframe-sandbox": "warn",
  "react-dom/no-namespace": "error",
  "react-dom/no-script-url": "warn",
  "react-dom/no-unsafe-iframe-sandbox": "warn",
  "react-dom/no-unsafe-target-blank": "warn",

  "react-hooks/ensure-custom-hooks-using-other-hooks": "warn",
  "react-hooks/ensure-use-callback-has-non-empty-deps": "warn",
  "react-hooks/ensure-use-memo-has-non-empty-deps": "warn",
  "react-hooks/prefer-use-state-lazy-initialization": "warn",

  // eslint-disable-next-line perfectionist/sort-objects
  "naming-convention/component-name": "warn",
  "naming-convention/filename": "warn",
  "naming-convention/filename-extension": "warn",
  "naming-convention/use-state": "warn",

  // eslint-disable-next-line perfectionist/sort-objects
  "debug/class-component": "warn",
  "debug/function-component": "warn",
  "debug/react-hooks": "warn",
} as const satisfies RulePreset;

const jsxPreset = {
  "jsx/max-depth": "warn",
  "jsx/no-array-index-key": "warn",
  "jsx/no-comment-textnodes": "warn",
  "jsx/no-complicated-conditional-rendering": "warn",
  "jsx/no-duplicate-key": "error",
  "jsx/no-missing-key": "error",
  "jsx/no-spreading-key": "warn",
  "jsx/no-useless-fragment": "warn",
  "jsx/prefer-shorthand-boolean": "warn",
  "jsx/prefer-shorthand-fragment": "warn",
} as const satisfies RulePreset;

const reactHooksPreset = {
  "react-hooks/ensure-custom-hooks-using-other-hooks": "warn",
  "react-hooks/ensure-use-callback-has-non-empty-deps": "warn",
  "react-hooks/ensure-use-memo-has-non-empty-deps": "warn",
  "react-hooks/prefer-use-state-lazy-initialization": "warn",
} as const satisfies RulePreset;

const corePreset = {
  "jsx/no-array-index-key": "warn",
  "jsx/no-duplicate-key": "error",
  "jsx/no-missing-key": "error",
  "jsx/no-spreading-key": "warn",

  "react/ensure-forward-ref-using-ref": "warn",
  "react/no-class-component": "warn",
  "react/no-clone-element": "warn",
  "react/no-constructed-context-value": "error",
  "react/no-string-refs": "error",
  "react/no-unstable-default-props": "error",
  "react/no-unstable-nested-components": "warn",
  "react/prefer-destructuring-assignment": "warn",

  "react-hooks/prefer-use-state-lazy-initialization": "warn",
} as const satisfies RulePreset;

const reactDomPreset = {
  "react-dom/no-children-in-void-dom-elements": "warn",
  "react-dom/no-dangerously-set-innerhtml": "warn",
  "react-dom/no-dangerously-set-innerhtml-with-children": "error",
  "react-dom/no-find-dom-node": "error",
  "react-dom/no-missing-button-type": "warn",
  "react-dom/no-missing-iframe-sandbox": "warn",
  "react-dom/no-namespace": "error",
  "react-dom/no-script-url": "warn",
  "react-dom/no-unsafe-iframe-sandbox": "warn",
  "react-dom/no-unsafe-target-blank": "warn",
} as const satisfies RulePreset;

const recommendedPreset = {
  ...corePreset,
  ...reactDomPreset,

  "jsx/no-comment-textnodes": "warn",
  "jsx/no-useless-fragment": "warn",
  "jsx/prefer-shorthand-boolean": "warn",
  "jsx/prefer-shorthand-fragment": "warn",

  "react/no-access-state-in-setstate": "error",
  "react/no-children-count": "warn",
  "react/no-children-for-each": "warn",
  "react/no-children-map": "warn",
  "react/no-children-only": "warn",
  "react/no-children-prop": "warn",
  "react/no-children-to-array": "warn",
  "react/no-component-will-mount": "error",
  "react/no-component-will-receive-props": "error",
  "react/no-component-will-update": "error",
  "react/no-create-ref": "error",
  "react/no-direct-mutation-state": "error",
  "react/no-missing-component-display-name": "warn",
  "react/no-redundant-should-component-update": "error",
  "react/no-render-return-value": "error",
  "react/no-set-state-in-component-did-mount": "warn",
  "react/no-set-state-in-component-did-update": "warn",
  "react/no-set-state-in-component-will-update": "warn",
  "react/no-unsafe-component-will-mount": "warn",
  "react/no-unsafe-component-will-receive-props": "warn",
  "react/no-unsafe-component-will-update": "warn",
  "react/no-unused-class-component-members": "warn",
  "react/no-unused-state": "warn",
} as const satisfies RulePreset;

const recommendedTypeCheckedPreset = {
  ...recommendedPreset,
  "jsx/no-leaked-conditional-rendering": "warn",
} as const satisfies RulePreset;

const rulePresetEntries = entries(rulePreset);
const debugPreset = fromEntries(rulePresetEntries.filter(([key]) => key.startsWith("debug/")));
const allPreset = fromEntries(rulePresetEntries.filter(([key]) => !key.startsWith("debug/")));
const offPreset = fromEntries(
  rulePresetEntries
    .filter(([key]) => !key.startsWith("debug/"))
    .map(([key]) => [key, "off"]),
);

const legacyConfigPlugins = ["@eslint-react"] as const;

const flatConfigPlugins = {
  "@eslint-react/debug": debug,
  "@eslint-react/jsx": jsx,
  "@eslint-react/naming-convention": namingConvention,
  "@eslint-react/react": react,
  "@eslint-react/react-dom": reactDom,
  "@eslint-react/react-hooks": reactHooks,
} as const;

function createLegacyConfig<T extends RulePreset>(rules: T, plugins = legacyConfigPlugins) {
  return {
    parser: "@typescript-eslint/parser",
    plugins,
    rules: padKeysLeft(rules, "@eslint-react/"),
  } as const;
}

function createFlatConfig<T extends RulePreset>(rules: T, plugins = flatConfigPlugins) {
  return {
    languageOptions: {
      parser: tsParser,
    },
    plugins,
    rules: padKeysLeft(rules, "@eslint-react/"),
  } as const;
}

export default {
  meta: {
    name,
    version,
  },
  configs: {
    all: createFlatConfig(allPreset),
    "all-legacy": createLegacyConfig(allPreset),
    core: createFlatConfig(corePreset),
    "core-legacy": createLegacyConfig(corePreset),
    debug: createFlatConfig(debugPreset),
    "debug-legacy": createLegacyConfig(debugPreset),
    dom: createFlatConfig(reactDomPreset),
    "dom-legacy": createLegacyConfig(reactDomPreset),
    hooks: createFlatConfig(reactHooksPreset),
    "hooks-legacy": createLegacyConfig(reactHooksPreset),
    jsx: createFlatConfig(jsxPreset),
    "jsx-legacy": createLegacyConfig(jsxPreset),
    off: createFlatConfig(offPreset),
    "off-legacy": createLegacyConfig(offPreset),
    "react-dom": createFlatConfig(reactDomPreset),
    "react-dom-legacy": createLegacyConfig(reactDomPreset),
    "react-hooks": createFlatConfig(reactHooksPreset),
    "react-hooks-legacy": createLegacyConfig(reactHooksPreset),
    recommended: createFlatConfig(recommendedPreset),
    "recommended-legacy": createLegacyConfig(recommendedPreset),
    "recommended-type-checked": createFlatConfig(recommendedTypeCheckedPreset),
    "recommended-type-checked-legacy": createLegacyConfig(recommendedTypeCheckedPreset),
  },
  rules: {
    ...padKeysLeft(jsx.rules, "jsx/"),
    ...padKeysLeft(react.rules, "react/"),
    ...padKeysLeft(reactHooks.rules, "react-hooks/"),
    ...padKeysLeft(reactDom.rules, "react-dom/"),
    ...padKeysLeft(namingConvention.rules, "naming-convention/"),
    ...padKeysLeft(debug.rules, "debug/"),
  },
} as const;
