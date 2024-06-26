# react-dom/no-missing-button-type

## Rule category

Suspicious.

## What it does

Enforces explicit `button` type `attribute` for `<button>` elements.

## Why is this bad?

The `button` element's `type` attribute must be specified explicitly. The default value is `type="submit"` which can easily lead to unexpected behavior, especially when used in a form.

## Examples

### Failing

```tsx
<button>Click me</button>;
```

### Passing

```tsx
<button type="button">Click me</button>;
```

## Further Reading

- [MDN: button - notes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#notes)
