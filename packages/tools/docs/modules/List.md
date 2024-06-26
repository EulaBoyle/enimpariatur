[@eslint-react/tools](../README.md) / List

# Namespace: List

## Table of contents

### Namespaces

- [List](List.List.md)

### Interfaces

- [Cons](../interfaces/List.Cons.md)
- [Nil](../interfaces/List.Nil.md)

### Type Aliases

- [List](List.md#list)
- [TypeId](List.md#typeid)

### Variables

- [TypeId](List.md#typeid-1)

### Functions

- [append](List.md#append)
- [appendAll](List.md#appendall)
- [compact](List.md#compact)
- [cons](List.md#cons)
- [drop](List.md#drop)
- [empty](List.md#empty)
- [every](List.md#every)
- [filter](List.md#filter)
- [filterMap](List.md#filtermap)
- [findFirst](List.md#findfirst)
- [flatMap](List.md#flatmap)
- [forEach](List.md#foreach)
- [fromIterable](List.md#fromiterable)
- [getEquivalence](List.md#getequivalence)
- [head](List.md#head)
- [isCons](List.md#iscons)
- [isList](List.md#islist)
- [isNil](List.md#isnil)
- [last](List.md#last)
- [make](List.md#make)
- [map](List.md#map)
- [nil](List.md#nil)
- [of](List.md#of)
- [partition](List.md#partition)
- [partitionMap](List.md#partitionmap)
- [prepend](List.md#prepend)
- [prependAll](List.md#prependall)
- [prependAllReversed](List.md#prependallreversed)
- [reduce](List.md#reduce)
- [reduceRight](List.md#reduceright)
- [reverse](List.md#reverse)
- [size](List.md#size)
- [some](List.md#some)
- [splitAt](List.md#splitat)
- [tail](List.md#tail)
- [take](List.md#take)
- [toArray](List.md#toarray)
- [toChunk](List.md#tochunk)
- [unsafeHead](List.md#unsafehead)
- [unsafeLast](List.md#unsafelast)
- [unsafeTail](List.md#unsafetail)

## combinators

### compact

▸ **compact**\<`A`\>(`self`): [`List`](List.md#list)\<`A`\>

Removes all `None` values from the specified list.

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<[`Option`](O.md#option)\<`A`\>\> |

#### Returns

[`List`](List.md#list)\<`A`\>

**`Since`**

2.0.0

___

### drop

▸ **drop**(`n`): \<A\>(`self`: [`List`](List.md#list)\<`A`\>) => [`List`](List.md#list)\<`A`\>

Drops the first `n` elements from the specified list.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`fn`

▸ \<`A`\>(`self`): [`List`](List.md#list)\<`A`\>

##### Type parameters

| Name |
| :------ |
| `A` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |

##### Returns

[`List`](List.md#list)\<`A`\>

**`Since`**

2.0.0

▸ **drop**\<`A`\>(`self`, `n`): [`List`](List.md#list)\<`A`\>

Drops the first `n` elements from the specified list.

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |
| `n` | `number` |

#### Returns

[`List`](List.md#list)\<`A`\>

**`Since`**

2.0.0

___

### filter

▸ **filter**\<`A`, `B`\>(`refinement`): (`self`: [`List`](List.md#list)\<`A`\>) => [`List`](List.md#list)\<`B`\>

Filters a list using the specified predicate.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | [`Refinement`](../interfaces/Prd.Refinement.md)\<`NoInfer`\<`A`\>, `B`\> |

#### Returns

`fn`

▸ (`self`): [`List`](List.md#list)\<`B`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |

##### Returns

[`List`](List.md#list)\<`B`\>

**`Since`**

2.0.0

▸ **filter**\<`A`\>(`predicate`): (`self`: [`List`](List.md#list)\<`A`\>) => [`List`](List.md#list)\<`A`\>

Filters a list using the specified predicate.

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../interfaces/Prd.Predicate.md)\<`NoInfer`\<`A`\>\> |

#### Returns

`fn`

▸ (`self`): [`List`](List.md#list)\<`A`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |

##### Returns

[`List`](List.md#list)\<`A`\>

**`Since`**

2.0.0

▸ **filter**\<`A`, `B`\>(`self`, `refinement`): [`List`](List.md#list)\<`B`\>

Filters a list using the specified predicate.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |
| `refinement` | [`Refinement`](../interfaces/Prd.Refinement.md)\<`A`, `B`\> |

#### Returns

[`List`](List.md#list)\<`B`\>

**`Since`**

2.0.0

▸ **filter**\<`A`\>(`self`, `predicate`): [`List`](List.md#list)\<`A`\>

Filters a list using the specified predicate.

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |
| `predicate` | [`Predicate`](../interfaces/Prd.Predicate.md)\<`A`\> |

#### Returns

[`List`](List.md#list)\<`A`\>

**`Since`**

2.0.0

___

### filterMap

▸ **filterMap**\<`A`, `B`\>(`f`): (`self`: [`List`](List.md#list)\<`A`\>) => [`List`](List.md#list)\<`B`\>

Filters and maps a list using the specified partial function. The resulting
list may be smaller than the input list due to the possibility of the partial
function not being defined for some elements.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`a`: `A`) => [`Option`](O.md#option)\<`B`\> |

#### Returns

`fn`

▸ (`self`): [`List`](List.md#list)\<`B`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |

##### Returns

[`List`](List.md#list)\<`B`\>

**`Since`**

2.0.0

▸ **filterMap**\<`A`, `B`\>(`self`, `f`): [`List`](List.md#list)\<`B`\>

Filters and maps a list using the specified partial function. The resulting
list may be smaller than the input list due to the possibility of the partial
function not being defined for some elements.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |
| `f` | (`a`: `A`) => [`Option`](O.md#option)\<`B`\> |

#### Returns

[`List`](List.md#list)\<`B`\>

**`Since`**

2.0.0

___

### forEach

▸ **forEach**\<`A`, `B`\>(`f`): (`self`: [`List`](List.md#list)\<`A`\>) => `void`

Applies the specified function to each element of the `List`.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`a`: `A`) => `B` |

#### Returns

`fn`

▸ (`self`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |

##### Returns

`void`

**`Since`**

2.0.0

▸ **forEach**\<`A`, `B`\>(`self`, `f`): `void`

Applies the specified function to each element of the `List`.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |
| `f` | (`a`: `A`) => `B` |

#### Returns

`void`

**`Since`**

2.0.0

___

### partition

▸ **partition**\<`A`, `B`\>(`refinement`): (`self`: [`List`](List.md#list)\<`A`\>) => [excluded: List\<Exclude\<A, B\>\>, satisfying: List\<B\>]

Partition a list into two lists, where the first list contains all elements
that did not satisfy the specified predicate, and the second list contains
all elements that did satisfy the specified predicate.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | [`Refinement`](../interfaces/Prd.Refinement.md)\<`NoInfer`\<`A`\>, `B`\> |

#### Returns

`fn`

▸ (`self`): [excluded: List\<Exclude\<A, B\>\>, satisfying: List\<B\>]

##### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |

##### Returns

[excluded: List\<Exclude\<A, B\>\>, satisfying: List\<B\>]

**`Since`**

2.0.0

▸ **partition**\<`A`\>(`predicate`): (`self`: [`List`](List.md#list)\<`A`\>) => [excluded: List\<A\>, satisfying: List\<A\>]

Partition a list into two lists, where the first list contains all elements
that did not satisfy the specified predicate, and the second list contains
all elements that did satisfy the specified predicate.

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../interfaces/Prd.Predicate.md)\<`NoInfer`\<`A`\>\> |

#### Returns

`fn`

▸ (`self`): [excluded: List\<A\>, satisfying: List\<A\>]

##### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |

##### Returns

[excluded: List\<A\>, satisfying: List\<A\>]

**`Since`**

2.0.0

▸ **partition**\<`A`, `B`\>(`self`, `refinement`): [excluded: List\<Exclude\<A, B\>\>, satisfying: List\<B\>]

Partition a list into two lists, where the first list contains all elements
that did not satisfy the specified predicate, and the second list contains
all elements that did satisfy the specified predicate.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |
| `refinement` | [`Refinement`](../interfaces/Prd.Refinement.md)\<`A`, `B`\> |

#### Returns

[excluded: List\<Exclude\<A, B\>\>, satisfying: List\<B\>]

**`Since`**

2.0.0

▸ **partition**\<`A`\>(`self`, `predicate`): [excluded: List\<A\>, satisfying: List\<A\>]

Partition a list into two lists, where the first list contains all elements
that did not satisfy the specified predicate, and the second list contains
all elements that did satisfy the specified predicate.

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |
| `predicate` | [`Predicate`](../interfaces/Prd.Predicate.md)\<`A`\> |

#### Returns

[excluded: List\<A\>, satisfying: List\<A\>]

**`Since`**

2.0.0

___

### partitionMap

▸ **partitionMap**\<`A`, `B`, `C`\>(`f`): (`self`: [`List`](List.md#list)\<`A`\>) => [left: List\<B\>, right: List\<C\>]

Partition a list into two lists, where the first list contains all elements
for which the specified function returned a `Left`, and the second list
contains all elements for which the specified function returned a `Right`.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`a`: `A`) => [`Either`](E.md#either)\<`B`, `C`\> |

#### Returns

`fn`

▸ (`self`): [left: List\<B\>, right: List\<C\>]

##### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |

##### Returns

[left: List\<B\>, right: List\<C\>]

**`Since`**

2.0.0

▸ **partitionMap**\<`A`, `B`, `C`\>(`self`, `f`): [left: List\<B\>, right: List\<C\>]

Partition a list into two lists, where the first list contains all elements
for which the specified function returned a `Left`, and the second list
contains all elements for which the specified function returned a `Right`.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |
| `f` | (`a`: `A`) => [`Either`](E.md#either)\<`B`, `C`\> |

#### Returns

[left: List\<B\>, right: List\<C\>]

**`Since`**

2.0.0

___

### splitAt

▸ **splitAt**(`n`): \<A\>(`self`: [`List`](List.md#list)\<`A`\>) => [beforeIndex: List\<A\>, fromIndex: List\<A\>]

Splits the specified list into two lists at the specified index.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`fn`

▸ \<`A`\>(`self`): [beforeIndex: List\<A\>, fromIndex: List\<A\>]

##### Type parameters

| Name |
| :------ |
| `A` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |

##### Returns

[beforeIndex: List\<A\>, fromIndex: List\<A\>]

**`Since`**

2.0.0

▸ **splitAt**\<`A`\>(`self`, `n`): [beforeIndex: List\<A\>, fromIndex: List\<A\>]

Splits the specified list into two lists at the specified index.

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |
| `n` | `number` |

#### Returns

[beforeIndex: List\<A\>, fromIndex: List\<A\>]

**`Since`**

2.0.0

___

### take

▸ **take**(`n`): \<A\>(`self`: [`List`](List.md#list)\<`A`\>) => [`List`](List.md#list)\<`A`\>

Takes the specified number of elements from the beginning of the specified
list.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`fn`

▸ \<`A`\>(`self`): [`List`](List.md#list)\<`A`\>

##### Type parameters

| Name |
| :------ |
| `A` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |

##### Returns

[`List`](List.md#list)\<`A`\>

**`Since`**

2.0.0

▸ **take**\<`A`\>(`self`, `n`): [`List`](List.md#list)\<`A`\>

Takes the specified number of elements from the beginning of the specified
list.

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |
| `n` | `number` |

#### Returns

[`List`](List.md#list)\<`A`\>

**`Since`**

2.0.0

## concatenating

### append

▸ **append**\<`B`\>(`element`): \<A\>(`self`: [`List`](List.md#list)\<`A`\>) => [`Cons`](../interfaces/List.Cons.md)\<`B` \| `A`\>

Appends the specified element to the end of the `List`, creating a new `Cons`.

#### Type parameters

| Name |
| :------ |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `B` |

#### Returns

`fn`

▸ \<`A`\>(`self`): [`Cons`](../interfaces/List.Cons.md)\<`B` \| `A`\>

##### Type parameters

| Name |
| :------ |
| `A` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |

##### Returns

[`Cons`](../interfaces/List.Cons.md)\<`B` \| `A`\>

**`Since`**

2.0.0

▸ **append**\<`A`, `B`\>(`self`, `element`): [`Cons`](../interfaces/List.Cons.md)\<`A` \| `B`\>

Appends the specified element to the end of the `List`, creating a new `Cons`.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |
| `element` | `B` |

#### Returns

[`Cons`](../interfaces/List.Cons.md)\<`A` \| `B`\>

**`Since`**

2.0.0

___

### appendAll

▸ **appendAll**\<`S`, `T`\>(`that`): (`self`: `S`) => [`OrNonEmpty`](List.List.md#ornonempty)\<`S`, `T`, [`Infer`](List.List.md#infer)\<`S`\> \| [`Infer`](List.List.md#infer)\<`T`\>\>

Concatenates two lists, combining their elements.
If either list is non-empty, the result is also a non-empty list.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`List`](List.md#list)\<`any`\> |
| `T` | extends [`List`](List.md#list)\<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `that` | `T` |

#### Returns

`fn`

▸ (`self`): [`OrNonEmpty`](List.List.md#ornonempty)\<`S`, `T`, [`Infer`](List.List.md#infer)\<`S`\> \| [`Infer`](List.List.md#infer)\<`T`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `self` | `S` |

##### Returns

[`OrNonEmpty`](List.List.md#ornonempty)\<`S`, `T`, [`Infer`](List.List.md#infer)\<`S`\> \| [`Infer`](List.List.md#infer)\<`T`\>\>

**`Example`**

```ts
import * as List from "effect/List"

assert.deepStrictEqual(
  List.make(1, 2).pipe(List.appendAll(List.make("a", "b")), List.toArray),
  [1, 2, "a", "b"]
)
```

**`Since`**

2.0.0

▸ **appendAll**\<`A`, `B`\>(`self`, `that`): [`Cons`](../interfaces/List.Cons.md)\<`A` \| `B`\>

Concatenates two lists, combining their elements.
If either list is non-empty, the result is also a non-empty list.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |
| `that` | [`Cons`](../interfaces/List.Cons.md)\<`B`\> |

#### Returns

[`Cons`](../interfaces/List.Cons.md)\<`A` \| `B`\>

**`Example`**

```ts
import * as List from "effect/List"

assert.deepStrictEqual(
  List.make(1, 2).pipe(List.appendAll(List.make("a", "b")), List.toArray),
  [1, 2, "a", "b"]
)
```

**`Since`**

2.0.0

▸ **appendAll**\<`A`, `B`\>(`self`, `that`): [`Cons`](../interfaces/List.Cons.md)\<`A` \| `B`\>

Concatenates two lists, combining their elements.
If either list is non-empty, the result is also a non-empty list.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`Cons`](../interfaces/List.Cons.md)\<`A`\> |
| `that` | [`List`](List.md#list)\<`B`\> |

#### Returns

[`Cons`](../interfaces/List.Cons.md)\<`A` \| `B`\>

**`Example`**

```ts
import * as List from "effect/List"

assert.deepStrictEqual(
  List.make(1, 2).pipe(List.appendAll(List.make("a", "b")), List.toArray),
  [1, 2, "a", "b"]
)
```

**`Since`**

2.0.0

▸ **appendAll**\<`A`, `B`\>(`self`, `that`): [`List`](List.md#list)\<`A` \| `B`\>

Concatenates two lists, combining their elements.
If either list is non-empty, the result is also a non-empty list.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |
| `that` | [`List`](List.md#list)\<`B`\> |

#### Returns

[`List`](List.md#list)\<`A` \| `B`\>

**`Example`**

```ts
import * as List from "effect/List"

assert.deepStrictEqual(
  List.make(1, 2).pipe(List.appendAll(List.make("a", "b")), List.toArray),
  [1, 2, "a", "b"]
)
```

**`Since`**

2.0.0

___

### prepend

▸ **prepend**\<`B`\>(`element`): \<A\>(`self`: [`List`](List.md#list)\<`A`\>) => [`Cons`](../interfaces/List.Cons.md)\<`B` \| `A`\>

Prepends the specified element to the beginning of the list.

#### Type parameters

| Name |
| :------ |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `B` |

#### Returns

`fn`

▸ \<`A`\>(`self`): [`Cons`](../interfaces/List.Cons.md)\<`B` \| `A`\>

##### Type parameters

| Name |
| :------ |
| `A` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |

##### Returns

[`Cons`](../interfaces/List.Cons.md)\<`B` \| `A`\>

**`Since`**

2.0.0

▸ **prepend**\<`A`, `B`\>(`self`, `element`): [`Cons`](../interfaces/List.Cons.md)\<`A` \| `B`\>

Prepends the specified element to the beginning of the list.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |
| `element` | `B` |

#### Returns

[`Cons`](../interfaces/List.Cons.md)\<`A` \| `B`\>

**`Since`**

2.0.0

___

### prependAll

▸ **prependAll**\<`S`, `T`\>(`that`): (`self`: `S`) => [`OrNonEmpty`](List.List.md#ornonempty)\<`S`, `T`, [`Infer`](List.List.md#infer)\<`S`\> \| [`Infer`](List.List.md#infer)\<`T`\>\>

Prepends the specified prefix list to the beginning of the specified list.
If either list is non-empty, the result is also a non-empty list.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`List`](List.md#list)\<`any`\> |
| `T` | extends [`List`](List.md#list)\<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `that` | `T` |

#### Returns

`fn`

▸ (`self`): [`OrNonEmpty`](List.List.md#ornonempty)\<`S`, `T`, [`Infer`](List.List.md#infer)\<`S`\> \| [`Infer`](List.List.md#infer)\<`T`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `self` | `S` |

##### Returns

[`OrNonEmpty`](List.List.md#ornonempty)\<`S`, `T`, [`Infer`](List.List.md#infer)\<`S`\> \| [`Infer`](List.List.md#infer)\<`T`\>\>

**`Example`**

```ts
import * as List from "effect/List"

assert.deepStrictEqual(
  List.make(1, 2).pipe(List.prependAll(List.make("a", "b")), List.toArray),
  ["a", "b", 1, 2]
)
```

**`Since`**

2.0.0

▸ **prependAll**\<`A`, `B`\>(`self`, `that`): [`Cons`](../interfaces/List.Cons.md)\<`A` \| `B`\>

Prepends the specified prefix list to the beginning of the specified list.
If either list is non-empty, the result is also a non-empty list.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |
| `that` | [`Cons`](../interfaces/List.Cons.md)\<`B`\> |

#### Returns

[`Cons`](../interfaces/List.Cons.md)\<`A` \| `B`\>

**`Example`**

```ts
import * as List from "effect/List"

assert.deepStrictEqual(
  List.make(1, 2).pipe(List.prependAll(List.make("a", "b")), List.toArray),
  ["a", "b", 1, 2]
)
```

**`Since`**

2.0.0

▸ **prependAll**\<`A`, `B`\>(`self`, `that`): [`Cons`](../interfaces/List.Cons.md)\<`A` \| `B`\>

Prepends the specified prefix list to the beginning of the specified list.
If either list is non-empty, the result is also a non-empty list.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`Cons`](../interfaces/List.Cons.md)\<`A`\> |
| `that` | [`List`](List.md#list)\<`B`\> |

#### Returns

[`Cons`](../interfaces/List.Cons.md)\<`A` \| `B`\>

**`Example`**

```ts
import * as List from "effect/List"

assert.deepStrictEqual(
  List.make(1, 2).pipe(List.prependAll(List.make("a", "b")), List.toArray),
  ["a", "b", 1, 2]
)
```

**`Since`**

2.0.0

▸ **prependAll**\<`A`, `B`\>(`self`, `that`): [`List`](List.md#list)\<`A` \| `B`\>

Prepends the specified prefix list to the beginning of the specified list.
If either list is non-empty, the result is also a non-empty list.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |
| `that` | [`List`](List.md#list)\<`B`\> |

#### Returns

[`List`](List.md#list)\<`A` \| `B`\>

**`Example`**

```ts
import * as List from "effect/List"

assert.deepStrictEqual(
  List.make(1, 2).pipe(List.prependAll(List.make("a", "b")), List.toArray),
  ["a", "b", 1, 2]
)
```

**`Since`**

2.0.0

___

### prependAllReversed

▸ **prependAllReversed**\<`B`\>(`prefix`): \<A\>(`self`: [`List`](List.md#list)\<`A`\>) => [`List`](List.md#list)\<`B` \| `A`\>

Prepends the specified prefix list (in reverse order) to the beginning of the
specified list.

#### Type parameters

| Name |
| :------ |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | [`List`](List.md#list)\<`B`\> |

#### Returns

`fn`

▸ \<`A`\>(`self`): [`List`](List.md#list)\<`B` \| `A`\>

##### Type parameters

| Name |
| :------ |
| `A` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |

##### Returns

[`List`](List.md#list)\<`B` \| `A`\>

**`Since`**

2.0.0

▸ **prependAllReversed**\<`A`, `B`\>(`self`, `prefix`): [`List`](List.md#list)\<`A` \| `B`\>

Prepends the specified prefix list (in reverse order) to the beginning of the
specified list.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |
| `prefix` | [`List`](List.md#list)\<`B`\> |

#### Returns

[`List`](List.md#list)\<`A` \| `B`\>

**`Since`**

2.0.0

## constructors

### cons

▸ **cons**\<`A`\>(`head`, `tail`): [`Cons`](../interfaces/List.Cons.md)\<`A`\>

Constructs a new `List.Cons<A>` from the specified `head` and `tail` values.

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `head` | `A` |
| `tail` | [`List`](List.md#list)\<`A`\> |

#### Returns

[`Cons`](../interfaces/List.Cons.md)\<`A`\>

**`Since`**

2.0.0

___

### empty

▸ **empty**\<`A`\>(): [`List`](List.md#list)\<`A`\>

Constructs a new empty `List<A>`.

Alias of [nil](List.md#nil).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `never` |

#### Returns

[`List`](List.md#list)\<`A`\>

**`Since`**

2.0.0

___

### fromIterable

▸ **fromIterable**\<`A`\>(`prefix`): [`List`](List.md#list)\<`A`\>

Creates a new `List` from an iterable collection of values.

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `Iterable`\<`A`\> |

#### Returns

[`List`](List.md#list)\<`A`\>

**`Since`**

2.0.0

___

### make

▸ **make**\<`Elements`\>(`...elements`): [`Cons`](../interfaces/List.Cons.md)\<`Elements`[`number`]\>

Constructs a new `List<A>` from the specified values.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Elements` | extends readonly [`any`, `any`] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...elements` | `Elements` |

#### Returns

[`Cons`](../interfaces/List.Cons.md)\<`Elements`[`number`]\>

**`Since`**

2.0.0

___

### nil

▸ **nil**\<`A`\>(): [`List`](List.md#list)\<`A`\>

Constructs a new empty `List<A>`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `never` |

#### Returns

[`List`](List.md#list)\<`A`\>

**`Since`**

2.0.0

___

### of

▸ **of**\<`A`\>(`value`): [`Cons`](../interfaces/List.Cons.md)\<`A`\>

Constructs a new `List<A>` from the specified value.

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `A` |

#### Returns

[`Cons`](../interfaces/List.Cons.md)\<`A`\>

**`Since`**

2.0.0

## conversions

### toArray

▸ **toArray**\<`A`\>(`self`): `A`[]

Converts the specified `List` to an `Array`.

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |

#### Returns

`A`[]

**`Since`**

2.0.0

___

### toChunk

▸ **toChunk**\<`A`\>(`self`): `Chunk`\<`A`\>

Converts the specified `List` to a `Chunk`.

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |

#### Returns

`Chunk`\<`A`\>

**`Since`**

2.0.0

## elements

### every

▸ **every**\<`A`, `B`\>(`refinement`): (`self`: [`List`](List.md#list)\<`A`\>) => self is List\<B\>

Check if a predicate holds true for every `List` element.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | [`Refinement`](../interfaces/Prd.Refinement.md)\<`NoInfer`\<`A`\>, `B`\> |

#### Returns

`fn`

▸ (`self`): self is List\<B\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |

##### Returns

self is List\<B\>

**`Since`**

2.0.0

▸ **every**\<`A`\>(`predicate`): (`self`: [`List`](List.md#list)\<`A`\>) => `boolean`

Check if a predicate holds true for every `List` element.

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../interfaces/Prd.Predicate.md)\<`A`\> |

#### Returns

`fn`

▸ (`self`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |

##### Returns

`boolean`

**`Since`**

2.0.0

▸ **every**\<`A`, `B`\>(`self`, `refinement`): self is List\<B\>

Check if a predicate holds true for every `List` element.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |
| `refinement` | [`Refinement`](../interfaces/Prd.Refinement.md)\<`A`, `B`\> |

#### Returns

self is List\<B\>

**`Since`**

2.0.0

▸ **every**\<`A`\>(`self`, `predicate`): `boolean`

Check if a predicate holds true for every `List` element.

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |
| `predicate` | [`Predicate`](../interfaces/Prd.Predicate.md)\<`A`\> |

#### Returns

`boolean`

**`Since`**

2.0.0

___

### findFirst

▸ **findFirst**\<`A`, `B`\>(`refinement`): (`self`: [`List`](List.md#list)\<`A`\>) => [`Option`](O.md#option)\<`B`\>

Returns the first element that satisfies the specified
predicate, or `None` if no such element exists.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `refinement` | [`Refinement`](../interfaces/Prd.Refinement.md)\<`NoInfer`\<`A`\>, `B`\> |

#### Returns

`fn`

▸ (`self`): [`Option`](O.md#option)\<`B`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |

##### Returns

[`Option`](O.md#option)\<`B`\>

**`Since`**

2.0.0

▸ **findFirst**\<`A`\>(`predicate`): (`self`: [`List`](List.md#list)\<`A`\>) => [`Option`](O.md#option)\<`A`\>

Returns the first element that satisfies the specified
predicate, or `None` if no such element exists.

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../interfaces/Prd.Predicate.md)\<`NoInfer`\<`A`\>\> |

#### Returns

`fn`

▸ (`self`): [`Option`](O.md#option)\<`A`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |

##### Returns

[`Option`](O.md#option)\<`A`\>

**`Since`**

2.0.0

▸ **findFirst**\<`A`, `B`\>(`self`, `refinement`): [`Option`](O.md#option)\<`B`\>

Returns the first element that satisfies the specified
predicate, or `None` if no such element exists.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |
| `refinement` | [`Refinement`](../interfaces/Prd.Refinement.md)\<`A`, `B`\> |

#### Returns

[`Option`](O.md#option)\<`B`\>

**`Since`**

2.0.0

▸ **findFirst**\<`A`\>(`self`, `predicate`): [`Option`](O.md#option)\<`A`\>

Returns the first element that satisfies the specified
predicate, or `None` if no such element exists.

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |
| `predicate` | [`Predicate`](../interfaces/Prd.Predicate.md)\<`A`\> |

#### Returns

[`Option`](O.md#option)\<`A`\>

**`Since`**

2.0.0

___

### reverse

▸ **reverse**\<`A`\>(`self`): [`List`](List.md#list)\<`A`\>

Returns a new list with the elements of the specified list in reverse order.

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |

#### Returns

[`List`](List.md#list)\<`A`\>

**`Since`**

2.0.0

___

### some

▸ **some**\<`A`\>(`predicate`): (`self`: [`List`](List.md#list)\<`A`\>) => self is Cons\<A\>

Check if a predicate holds true for some `List` element.

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../interfaces/Prd.Predicate.md)\<`NoInfer`\<`A`\>\> |

#### Returns

`fn`

▸ (`self`): self is Cons\<A\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |

##### Returns

self is Cons\<A\>

**`Since`**

2.0.0

▸ **some**\<`A`\>(`self`, `predicate`): self is Cons\<A\>

Check if a predicate holds true for some `List` element.

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |
| `predicate` | [`Predicate`](../interfaces/Prd.Predicate.md)\<`A`\> |

#### Returns

self is Cons\<A\>

**`Since`**

2.0.0

## equivalence

### getEquivalence

▸ **getEquivalence**\<`A`\>(`isEquivalent`): `Equivalence`\<[`List`](List.md#list)\<`A`\>\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `isEquivalent` | `Equivalence`\<`A`\> |

#### Returns

`Equivalence`\<[`List`](List.md#list)\<`A`\>\>

**`Since`**

2.0.0

## folding

### reduce

▸ **reduce**\<`Z`, `A`\>(`zero`, `f`): (`self`: [`List`](List.md#list)\<`A`\>) => `Z`

Folds over the elements of the list using the specified function, using the
specified initial value.

#### Type parameters

| Name |
| :------ |
| `Z` |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `zero` | `Z` |
| `f` | (`b`: `Z`, `a`: `A`) => `Z` |

#### Returns

`fn`

▸ (`self`): `Z`

##### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |

##### Returns

`Z`

**`Since`**

2.0.0

▸ **reduce**\<`A`, `Z`\>(`self`, `zero`, `f`): `Z`

Folds over the elements of the list using the specified function, using the
specified initial value.

#### Type parameters

| Name |
| :------ |
| `A` |
| `Z` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |
| `zero` | `Z` |
| `f` | (`b`: `Z`, `a`: `A`) => `Z` |

#### Returns

`Z`

**`Since`**

2.0.0

___

### reduceRight

▸ **reduceRight**\<`Z`, `A`\>(`zero`, `f`): (`self`: [`List`](List.md#list)\<`A`\>) => `Z`

Folds over the elements of the list using the specified function, beginning
with the last element of the list, using the specified initial value.

#### Type parameters

| Name |
| :------ |
| `Z` |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `zero` | `Z` |
| `f` | (`accumulator`: `Z`, `value`: `A`) => `Z` |

#### Returns

`fn`

▸ (`self`): `Z`

##### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |

##### Returns

`Z`

**`Since`**

2.0.0

▸ **reduceRight**\<`Z`, `A`\>(`self`, `zero`, `f`): `Z`

Folds over the elements of the list using the specified function, beginning
with the last element of the list, using the specified initial value.

#### Type parameters

| Name |
| :------ |
| `Z` |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |
| `zero` | `Z` |
| `f` | (`accumulator`: `Z`, `value`: `A`) => `Z` |

#### Returns

`Z`

**`Since`**

2.0.0

## getters

### head

▸ **head**\<`A`\>(`self`): [`Option`](O.md#option)\<`A`\>

Returns the first element of the specified list, or `None` if the list is
empty.

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |

#### Returns

[`Option`](O.md#option)\<`A`\>

**`Since`**

2.0.0

___

### last

▸ **last**\<`A`\>(`self`): [`Option`](O.md#option)\<`A`\>

Returns the last element of the specified list, or `None` if the list is
empty.

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |

#### Returns

[`Option`](O.md#option)\<`A`\>

**`Since`**

2.0.0

___

### size

▸ **size**\<`A`\>(`self`): `number`

Returns the number of elements contained in the specified `List`

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |

#### Returns

`number`

**`Since`**

2.0.0

___

### tail

▸ **tail**\<`A`\>(`self`): [`Option`](O.md#option)\<[`List`](List.md#list)\<`A`\>\>

Returns the tail of the specified list, or `None` if the list is empty.

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |

#### Returns

[`Option`](O.md#option)\<[`List`](List.md#list)\<`A`\>\>

**`Since`**

2.0.0

## mapping

### map

▸ **map**\<`S`, `B`\>(`f`): (`self`: `S`) => [`With`](List.List.md#with)\<`S`, `B`\>

Applies the specified mapping function to each element of the list.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`List`](List.md#list)\<`any`\> |
| `B` | `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`a`: [`Infer`](List.List.md#infer)\<`S`\>, `i`: `number`) => `B` |

#### Returns

`fn`

▸ (`self`): [`With`](List.List.md#with)\<`S`, `B`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `self` | `S` |

##### Returns

[`With`](List.List.md#with)\<`S`, `B`\>

**`Since`**

2.0.0

▸ **map**\<`S`, `B`\>(`self`, `f`): [`With`](List.List.md#with)\<`S`, `B`\>

Applies the specified mapping function to each element of the list.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`List`](List.md#list)\<`any`\> |
| `B` | `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | `S` |
| `f` | (`a`: [`Infer`](List.List.md#infer)\<`S`\>, `i`: `number`) => `B` |

#### Returns

[`With`](List.List.md#with)\<`S`, `B`\>

**`Since`**

2.0.0

## models

### List

Ƭ **List**\<`A`\>: [`Cons`](../interfaces/List.Cons.md)\<`A`\> \| [`Nil`](../interfaces/List.Nil.md)\<`A`\>

Represents an immutable linked list of elements of type `A`.

A `List` is optimal for last-in-first-out (LIFO), stack-like access patterns.
If you need another access pattern, for example, random access or FIFO,
consider using a collection more suited for that other than `List`.

**`Since`**

2.0.0

#### Type parameters

| Name |
| :------ |
| `A` |

## refinements

### isCons

▸ **isCons**\<`A`\>(`self`): self is Cons\<A\>

Returns `true` if the specified value is a `List.Cons<A>`, `false` otherwise.

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |

#### Returns

self is Cons\<A\>

**`Since`**

2.0.0

___

### isList

▸ **isList**\<`A`\>(`u`): u is List\<A\>

Returns `true` if the specified value is a `List`, `false` otherwise.

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `u` | `Iterable`\<`A`\> |

#### Returns

u is List\<A\>

**`Since`**

2.0.0

▸ **isList**(`u`): u is List\<unknown\>

Returns `true` if the specified value is a `List`, `false` otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `u` | `unknown` |

#### Returns

u is List\<unknown\>

**`Since`**

2.0.0

___

### isNil

▸ **isNil**\<`A`\>(`self`): self is Nil\<A\>

Returns `true` if the specified value is a `List.Nil<A>`, `false` otherwise.

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |

#### Returns

self is Nil\<A\>

**`Since`**

2.0.0

## sequencing

### flatMap

▸ **flatMap**\<`S`, `T`\>(`f`): (`self`: `S`) => [`AndNonEmpty`](List.List.md#andnonempty)\<`S`, `T`, [`Infer`](List.List.md#infer)\<`T`\>\>

Applies a function to each element in a list and returns a new list containing the concatenated mapped elements.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`List`](List.md#list)\<`any`\> |
| `T` | extends [`List`](List.md#list)\<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | (`a`: [`Infer`](List.List.md#infer)\<`S`\>, `i`: `number`) => `T` |

#### Returns

`fn`

▸ (`self`): [`AndNonEmpty`](List.List.md#andnonempty)\<`S`, `T`, [`Infer`](List.List.md#infer)\<`T`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `self` | `S` |

##### Returns

[`AndNonEmpty`](List.List.md#andnonempty)\<`S`, `T`, [`Infer`](List.List.md#infer)\<`T`\>\>

**`Since`**

2.0.0

▸ **flatMap**\<`A`, `B`\>(`self`, `f`): [`Cons`](../interfaces/List.Cons.md)\<`B`\>

Applies a function to each element in a list and returns a new list containing the concatenated mapped elements.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`Cons`](../interfaces/List.Cons.md)\<`A`\> |
| `f` | (`a`: `A`, `i`: `number`) => [`Cons`](../interfaces/List.Cons.md)\<`B`\> |

#### Returns

[`Cons`](../interfaces/List.Cons.md)\<`B`\>

**`Since`**

2.0.0

▸ **flatMap**\<`A`, `B`\>(`self`, `f`): [`List`](List.md#list)\<`B`\>

Applies a function to each element in a list and returns a new list containing the concatenated mapped elements.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |
| `f` | (`a`: `A`, `i`: `number`) => [`List`](List.md#list)\<`B`\> |

#### Returns

[`List`](List.md#list)\<`B`\>

**`Since`**

2.0.0

## symbol

### TypeId

Ƭ **TypeId**: typeof [`TypeId`](List.md#typeid-1)

**`Since`**

2.0.0

___

### TypeId

• `Const` **TypeId**: unique `symbol`

**`Since`**

2.0.0

## unsafe

### unsafeHead

▸ **unsafeHead**\<`A`\>(`self`): `A`

Unsafely returns the first element of the specified `List`.

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |

#### Returns

`A`

**`Since`**

2.0.0

___

### unsafeLast

▸ **unsafeLast**\<`A`\>(`self`): `A`

Unsafely returns the last element of the specified `List`.

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |

#### Returns

`A`

**`Since`**

2.0.0

___

### unsafeTail

▸ **unsafeTail**\<`A`\>(`self`): [`List`](List.md#list)\<`A`\>

Unsafely returns the tail of the specified `List`.

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `self` | [`List`](List.md#list)\<`A`\> |

#### Returns

[`List`](List.md#list)\<`A`\>

**`Since`**

2.0.0
