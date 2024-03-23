# react/no-string-refs

## Rule category

Restriction.

## What it does

Disallows using deprecated `string refs`.

## Why is this bad?

String refs are deprecated in React. Use callback refs instead.

## Examples

### Failing

```tsx
function Component() {
  return <div ref="example" />;
}
```

### Passing

```tsx
function Component() {
  const ref = useRef<HTMLDivElement>(null);

  return <div ref={ref} />;
}
```
