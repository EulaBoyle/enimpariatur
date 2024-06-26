// Workaround for @typescript-eslint/utils's TS2742 error.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { ESLintUtils } from "@typescript-eslint/utils";

import { name, version } from "../package.json";
import ensureForwardRefUsingRef from "./rules/ensure-forward-ref-using-ref";
import noAccessStateInSetstate from "./rules/no-access-state-in-setstate";
import noChildrenCount from "./rules/no-children-count";
import noChildrenForEach from "./rules/no-children-for-each";
import noChildrenMap from "./rules/no-children-map";
import noChildrenOnly from "./rules/no-children-only";
import noChildrenProp from "./rules/no-children-prop";
import noChildrenToArray from "./rules/no-children-to-array";
import noClassComponent from "./rules/no-class-component";
import noCloneElement from "./rules/no-clone-element";
import noComponentWillMount from "./rules/no-component-will-mount";
import noComponentWillReceiveProps from "./rules/no-component-will-receive-props";
import noComponentWillUpdate from "./rules/no-component-will-update";
import noConstructedContextValue from "./rules/no-constructed-context-value";
import noCreateRef from "./rules/no-create-ref";
import noDirectMutationState from "./rules/no-direct-mutation-state";
import noMissingComponentDisplayName from "./rules/no-missing-component-display-name";
import noRedundantShouldComponentUpdate from "./rules/no-redundant-should-component-update";
import noRenderReturnValue from "./rules/no-render-return-value";
import noSetStateInComponentDidMount from "./rules/no-set-state-in-component-did-mount";
import noSetStateInComponentDidUpdate from "./rules/no-set-state-in-component-did-update";
import noSetStateInComponentWillUpdate from "./rules/no-set-state-in-component-will-update";
import noStringRefs from "./rules/no-string-refs";
import noUnsafeComponentWillMount from "./rules/no-unsafe-component-will-mount";
import noUnsafeComponentWillReceiveProps from "./rules/no-unsafe-component-will-receive-props";
import noUnsafeComponentWillUpdate from "./rules/no-unsafe-component-will-update";
import noUnstableDefaultProps from "./rules/no-unstable-default-props";
import noUnstableNestedComponents from "./rules/no-unstable-nested-components";
import noUnusedClassComponentMembers from "./rules/no-unused-class-component-members";
import noUnusedState from "./rules/no-unused-state";
import preferDestructuringAssignment from "./rules/prefer-destructuring-assignment";

export const meta = {
  name,
  version,
} as const;

export const rules = {
  "ensure-forward-ref-using-ref": ensureForwardRefUsingRef,
  "no-access-state-in-setstate": noAccessStateInSetstate,
  "no-children-count": noChildrenCount,
  "no-children-for-each": noChildrenForEach,
  "no-children-map": noChildrenMap,
  "no-children-only": noChildrenOnly,
  "no-children-prop": noChildrenProp,
  "no-children-to-array": noChildrenToArray,
  "no-class-component": noClassComponent,
  "no-clone-element": noCloneElement,
  "no-component-will-mount": noComponentWillMount,
  "no-component-will-receive-props": noComponentWillReceiveProps,
  "no-component-will-update": noComponentWillUpdate,
  "no-constructed-context-value": noConstructedContextValue,
  "no-create-ref": noCreateRef,
  "no-direct-mutation-state": noDirectMutationState,
  "no-missing-component-display-name": noMissingComponentDisplayName,
  "no-redundant-should-component-update": noRedundantShouldComponentUpdate,
  "no-render-return-value": noRenderReturnValue,
  "no-set-state-in-component-did-mount": noSetStateInComponentDidMount,
  "no-set-state-in-component-did-update": noSetStateInComponentDidUpdate,
  "no-set-state-in-component-will-update": noSetStateInComponentWillUpdate,
  "no-string-refs": noStringRefs,
  "no-unsafe-component-will-mount": noUnsafeComponentWillMount,
  "no-unsafe-component-will-receive-props": noUnsafeComponentWillReceiveProps,
  "no-unsafe-component-will-update": noUnsafeComponentWillUpdate,
  "no-unstable-default-props": noUnstableDefaultProps,
  "no-unstable-nested-components": noUnstableNestedComponents,
  "no-unused-class-component-members": noUnusedClassComponentMembers,
  "no-unused-state": noUnusedState,
  "prefer-destructuring-assignment": preferDestructuringAssignment,
} as const;
