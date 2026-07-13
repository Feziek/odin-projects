# HashMap Project

A custom `HashMap` implementation in JavaScript, built from scratch as part of [The Odin Project](https://www.theodinproject.com/) JavaScript curriculum. The hash map is backed by a self-built `LinkedList` (separate chaining) for collision handling, and automatically resizes when it grows past its load factor.

## Features

- Custom hashing function using the prime multiplier technique
- Separate chaining collision resolution via singly linked lists
- Automatic resizing (capacity doubling) once the load factor threshold is exceeded
- Full CRUD API: `set`, `get`, `has`, `remove`
- Aggregate accessors: `length`, `keys`, `values`, `entries`
- `clear()` to reset the map

## File Structure

```
src/
  Hashmap.js     # HashMap class
  LinkedList.js  # LinkedList + Node classes (used internally by each bucket)
main.js          # Example usage / manual test script
```

## How It Works

### Hashing

`hash(key)` walks each character of the key, combining it into a running hash code using a prime multiplier (`31`), then constrains it to the current bucket array size via modulo:

```js
hashCode = (31 * hashCode + key.charCodeAt(i)) % capacity;
```

### Collision Handling

Each index in `#buckets` holds a `LinkedList` instance rather than a single value. When multiple keys hash to the same index, they're appended as separate nodes (`{ key, value }`) in that bucket's list, and `find()` / `contains()` traverse the list comparing against `node.value.key` to locate the right entry.

### Resizing

`set()` checks whether inserting a new key would push the map's fill ratio (`length() / capacity`) past `loadFactor` (default `0.75`). If so, it:

1. Captures all current entries via `entries()`
2. Doubles `#capacity` and rebuilds `#buckets` as empty lists
3. Re-inserts every captured entry so they land in the correct new bucket indices
   Note that **updating** an existing key never triggers a resize, since it doesn't increase the number of stored entries — only inserting a genuinely new key can.

## API

| Method            | Description                                                                                                |
| ----------------- | ---------------------------------------------------------------------------------------------------------- |
| `set(key, value)` | Inserts a new key-value pair, or updates the value if the key already exists. Triggers a resize if needed. |
| `get(key)`        | Returns the value for the given key, or `null` if not found.                                               |
| `has(key)`        | Returns `true`/`false` depending on whether the key exists.                                                |
| `remove(key)`     | Removes the entry for the given key. Returns `true` if removed, `false` if the key wasn't found.           |
| `length()`        | Returns the total number of key-value pairs stored.                                                        |
| `clear()`         | Removes all entries, resetting every bucket.                                                               |
| `keys()`          | Returns an array of all keys.                                                                              |
| `values()`        | Returns an array of all values.                                                                            |
| `entries()`       | Returns an array of `[key, value]` pairs.                                                                  |

## Usage

```js
import HashMap from "./src/Hashmap.js";

const map = new HashMap();

map.set("apple", "red");
map.set("banana", "yellow");
map.set("apple", "green"); // updates existing key, doesn't duplicate

map.get("apple"); // "green"
map.has("banana"); // true
map.length(); // 2

map.remove("banana");
map.has("banana"); // false

map.keys(); // ["apple"]
map.values(); // ["green"]
map.entries(); // [["apple", "green"]]
```

## Running the Example

```bash
node main.js
```

## Credits

Built as part of The Odin Project's [HashMap Data Structure](https://www.theodinproject.com/lessons/javascript-hashmap) lesson and Project: HashMap Project.
