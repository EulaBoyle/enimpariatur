[@eslint-react/tools](../README.md) / Helper

# Namespace: Helper

## Table of contents

### Type Aliases

- [ArrayElement](Helper.md#arrayelement)
- [Cast](Helper.md#cast)
- [FromEntries](Helper.md#fromentries)
- [LooseRecord](Helper.md#looserecord)
- [Narrow](Helper.md#narrow)
- [Pretty](Helper.md#pretty)
- [Remap](Helper.md#remap)
- [UnionFromTuple](Helper.md#unionfromtuple)
- [UnionToIntersection](Helper.md#uniontointersection)

### Functions

- [asConst](Helper.md#asconst)
- [constant](Helper.md#constant)
- [entries](Helper.md#entries)
- [fromEntries](Helper.md#fromentries-1)
- [id](Helper.md#id)
- [keys](Helper.md#keys)
- [narrow](Helper.md#narrow-1)
- [noop](Helper.md#noop)
- [values](Helper.md#values)

## Type Aliases

### ArrayElement

Ƭ **ArrayElement**\<`A`\>: `A` extends readonly infer T[] ? `T` : `never`

Returns the element type of an array.

**`Since`**

0.4.0

**`Template`**

type of the array elements.

**`Param`**

The array to get the element type from.

#### Type parameters

| Name |
| :------ |
| `A` |

___

### Cast

Ƭ **Cast**\<`X`, `Y`\>: `X` extends `Y` ? `X` : `Y`

**`Since`**

0.4.0

#### Type parameters

| Name |
| :------ |
| `X` |
| `Y` |

___

### FromEntries

Ƭ **FromEntries**\<`T`\>: `T` extends [infer Key, `unknown`][] ? \{ [K in Cast\<Key, string\>]: Extract\<ArrayElement\<T\>, [K, unknown]\>[1] } : \{ [key in string]: unknown }

#### Type parameters

| Name |
| :------ |
| `T` |

___

### LooseRecord

Ƭ **LooseRecord**\<`T`\>: `Record`\<`PropertyKey`, `T`\>

A record with loose keys.

**`Since`**

0.4.0

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the values. |

___

### Narrow

Ƭ **Narrow**\<`TType`\>: \{ [K in keyof TType]: Narrow\<TType[K]\> } \| `TType` extends [] ? [] : `never` \| `TType` extends `Function` ? `TType` : `never` \| `TType` extends `bigint` \| `boolean` \| `number` \| `string` ? `TType` : `never`

Infers embedded primitive type of any type

**`Since`**

0.0.1

**`Param`**

Type to infer

**`Example`**

```ts
type Result = Narrow<['foo', 'bar', 1]>
```

**`See`**

https://twitter.com/hd_nvim/status/1578567206190780417

#### Type parameters

| Name |
| :------ |
| `TType` |

___

### Pretty

Ƭ **Pretty**\<`T`\>: \{ [P in keyof T]: T[P] } & {}

**`Since`**

0.0.1

#### Type parameters

| Name |
| :------ |
| `T` |

___

### Remap

Ƭ **Remap**\<`T`\>: \{ [P in keyof T]: T[P] }

**`Since`**

0.0.1

#### Type parameters

| Name |
| :------ |
| `T` |

___

### UnionFromTuple

Ƭ **UnionFromTuple**\<`T`\>: `T` extends infer U[] ? `U` : `never`

**`Since`**

0.0.1

**`Example`**

```ts
type Result = UnionFromTuple<['foo', 'bar', 1]>
// Result = 'foo' | 'bar' | 1
```

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type to get the union from |

___

### UnionToIntersection

Ƭ **UnionToIntersection**\<`U`\>: `U` extends `unknown` ? (`k`: `U`) => `void` : `never` extends (`k`: infer I) => `void` ? `I` : `never`

**`Since`**

0.0.1

**`Template`**

The type to get the intersection from

**`Example`**

```ts
type Result = IntersectionFromTuple<['foo', 'bar', 1]>
// Result = 'foo' & 'bar' & 1
```

#### Type parameters

| Name |
| :------ |
| `U` |

## Functions

### asConst

▸ **asConst**\<`T`\>(`a`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | `T` | The value to infer. |

#### Returns

`T`

**`Since`**

0.0.1

___

### constant

▸ **constant**\<`T`\>(`a`): () => `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T` |

#### Returns

`fn`

▸ (): `T`

##### Returns

`T`

**`Since`**

0.0.1

___

### entries

▸ **entries**\<`T`\>(`value`): \{ [K in string \| number \| symbol]-?: [K, T[K]] }[keyof `T`][]

type-safe version of Object.entries

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LooseRecord`](Helper.md#looserecord)\<`unknown`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | The value to get the entries from. |

#### Returns

\{ [K in string \| number \| symbol]-?: [K, T[K]] }[keyof `T`][]

The entries of the value.

**`Since`**

0.4.0

___

### fromEntries

▸ **fromEntries**\<`T`\>(`entries`): [`FromEntries`](Helper.md#fromentries)\<`T`\>

type-safe version of Object.fromEntries

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`PropertyKey`, `unknown`][] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entries` | `T` | The entries to create the object from. |

#### Returns

[`FromEntries`](Helper.md#fromentries)\<`T`\>

The object created from the entries.

**`Since`**

0.4.0

___

### id

▸ **id**\<`T`\>(`a`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `T` |

#### Returns

`T`

**`Since`**

0.0.1

___

### keys

▸ **keys**\<`T`\>(`value`): keyof `T`[]

type-safe version of Object.keys

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LooseRecord`](Helper.md#looserecord)\<`unknown`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | The value to get the keys from. |

#### Returns

keyof `T`[]

The keys of the value.

**`Since`**

0.4.0

___

### narrow

▸ **narrow**\<`TType`\>(`a`): [`Narrow`](Helper.md#narrow)\<`TType`\>

Infers embedded primitive type of any type
Same as `as const` but without setting the object as readonly and without needing the user to use it.

#### Type parameters

| Name |
| :------ |
| `TType` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`Narrow`](Helper.md#narrow)\<`TType`\> | Value to infer |

#### Returns

[`Narrow`](Helper.md#narrow)\<`TType`\>

Value with embedded type inferred

**`Since`**

0.0.1

**`Example`**

```ts
const result = narrow(['foo', 'bar', 1])
```

___

### noop

▸ **noop**(): `void`

#### Returns

`void`

**`Since`**

0.0.1

___

### values

▸ **values**\<`T`\>(`value`): `T`[keyof `T`][]

type-safe version of Object.values

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`LooseRecord`](Helper.md#looserecord)\<`unknown`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | The value to get the values from. |

#### Returns

`T`[keyof `T`][]

The values of the value.

**`Since`**

0.4.0
