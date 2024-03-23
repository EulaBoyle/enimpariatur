import { useComponentCollectorLegacy } from "@eslint-react/core";
import { F, O } from "@eslint-react/tools";
import type { ESLintUtils } from "@typescript-eslint/utils";

import { createRule } from "../utils";

export const RULE_NAME = "class-component";

export type MessageID = "CLASS_COMPONENT";

export default createRule<[], MessageID>({
  name: RULE_NAME,
  meta: {
    type: "problem",
    docs: {
      description: "report all class components, including anonymous ones",
      requiresTypeChecking: false,
    },
    schema: [],
    messages: {
      CLASS_COMPONENT: "[class component] name: {{name}}",
    },
  },
  defaultOptions: [],
  create(context) {
    const { ctx, listeners } = useComponentCollectorLegacy(context);

    return {
      ...listeners,
      "Program:exit"(node) {
        const components = ctx.getAllComponents(node);

        for (const { name, node: component } of components.values()) {
          context.report({
            data: {
              name: O.getOrElse(F.constant("anonymous"))(name),
            },
            messageId: "CLASS_COMPONENT",
            node: component,
          });
        }
      },
    };
  },
}) satisfies ESLintUtils.RuleModule<MessageID>;
