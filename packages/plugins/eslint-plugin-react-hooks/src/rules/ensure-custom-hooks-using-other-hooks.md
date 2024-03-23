# react-hooks/ensure-custom-hooks-using-other-hooks

## Rule category

Correctness.

## What it does

Warns when custom Hooks that don't use other Hooks.

## Why is this good?

Custom Hooks may call other Hooks (that’s their whole purpose). If a custom Hook is not calling other Hooks, it might be a sign that it's unnecessary or incorrectly implemented. This rule helps you catch those cases.

## Examples

### Failing

```tsx
const useClassnames = (obj) => {
  // Invalid, because useClassnames doesn't use any other React Hooks.
  var k, cls = "";
  for (k in obj) {
    if (obj[k]) {
      cls && (cls += " ");
      cls += k;
    }
  }
  return cls;
};
```

### Passing

```tsx
const useData = (key) => {
  // Valid, because useData is using other React Hooks.
  return useSWR(key);
};
```

## Further Reading

- [react.dev: invalid-hook-call-warning (the first note)](https://react.dev/warnings/invalid-hook-call-warning)
- [react.dev: should-all-functions-called-during-rendering-start-with-the-use-prefix (the deep dive)](https://react.dev/learn/reusing-logic-with-custom-hooks#should-all-functions-called-during-rendering-start-with-the-use-prefix)
