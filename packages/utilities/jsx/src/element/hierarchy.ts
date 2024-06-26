import { is, NodeType, traverseUp } from "@eslint-react/ast";
import { F, O, Prd } from "@eslint-react/tools";
import type { RuleContext } from "@eslint-react/types";
import type { TSESTree } from "@typescript-eslint/types";

import { isCreateElementCall } from "./api";

/**
 * Determines whether inside createElement's props.
 * @param node The AST node to check
 * @param context The rule context
 * @returns `true` if the node is inside createElement's props
 */
export function isInsideCreateElementProps(node: TSESTree.Node, context: RuleContext) {
  return F.pipe(
    traverseUp(node, n => is(NodeType.CallExpression)(n) && isCreateElementCall(n, context)),
    O.filter(is(NodeType.CallExpression)),
    O.flatMapNullable(c => c.arguments.at(1)),
    O.filter(is(NodeType.ObjectExpression)),
    O.zipWith(traverseUp(node, is(NodeType.ObjectExpression)), (a, b) => a === b),
    O.getOrElse(F.constFalse),
  );
}

export function isChildrenOfCreateElement(node: TSESTree.Node, context: RuleContext) {
  return F.pipe(
    O.fromNullable(node.parent),
    O.filter(is(NodeType.CallExpression)),
    O.filter(n => isCreateElementCall(n, context)),
    O.exists(n =>
      n.arguments
        .slice(2)
        .some(arg => arg === node)
    ),
  );
}

/**
 * Check if a `JSXElement` or `JSXFragment` has children
 * @param node The AST node to check
 * @param predicate A predicate to filter the children
 * @returns `true` if the node has children
 */
export function hasChildren(
  node: TSESTree.JSXElement | TSESTree.JSXFragment,
  predicate?: (node: TSESTree.JSXChild) => boolean,
) {
  if (Prd.isFunction(predicate)) return node.children.some(predicate);

  return node.children.length > 0;
}

/**
 * Check if a node is a child of a `JSXElement`
 * @param node The AST node to check
 * @returns `true` if the node is a child of a `JSXElement`
 */
export function isChildOfJSXElement(node: TSESTree.Node): node is
  & TSESTree.JSXElement
  & { parent: TSESTree.JSXElement }
{
  return node.parent?.type === NodeType.JSXElement
    && node.parent.children.some((child) => child === node);
}
