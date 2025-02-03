# Hermes

## HermesInternalType

### Properties

#### getRuntimeProperties()?

```ts
optional getRuntimeProperties: () => object;
```

Query the VM for any sort of runtime properties that it wants to report.
There are no guarantees about what keys exist in it, but they can be
printed for informational purposes.

##### Returns

`object`

An object that maps strings to various types of runtime properties.

###### Build

```ts
Build: string;
```

###### OSS Release Version

```ts
OSS Release Version: string;
```
