# react-dom/no-dangerously-set-innerhtml-with-children

## Rule category

Correctness.

## What it does

Disallows `DOM element` using `children` and `dangerouslySetInnerHTML` at the same time.

## Why is this bad?

When using `dangerouslySetInnerHTML`, the content of the DOM element is set from the `__html` property. The content of the DOM element is completely replaced, so the children will not be rendered as expected.

## Examples

### Failing

```tsx
<div dangerouslySetInnerHTML={{ __html: "Hello World" }}>Hello World</div>;
```

### Passing

```tsx
<div dangerouslySetInnerHTML={{ __html: "Hello World" }} />;
```
