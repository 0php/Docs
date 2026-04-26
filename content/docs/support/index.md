# Support Utilities

Zero ships a family of dependency-free helpers under `Zero\Lib\Support`. Each one is documented on its own page with a runnable example for every method.

| Topic | Class / namespace | Doc |
| --- | --- | --- |
| Strings | `Zero\Lib\Support\Str` | [str.md](/docs/support/str) |
| Fluent strings | `Zero\Lib\Support\Stringable` (via `Str::of()` / `str()`) | [stringable.md](/docs/support/stringable) |
| Arrays | `Zero\Lib\Support\Arr` | [arr.md](/docs/support/arr) |
| Collections | `Zero\Lib\Support\Collection` (via `collect()`) | [collection.md](/docs/support/collection) |
| Numbers | `Zero\Lib\Support\Number` | [number.md](/docs/support/number) |
| Dates | `Zero\Lib\Support\Date` / `DateTime` | [../date.md](/docs/date) |
| HTTP client | `Zero\Lib\Http` | [http.md](/docs/support/http) |
| SOAP client | `Http::soap()` | [soap.md](/docs/support/soap) |
| Filesystem | `Zero\Lib\Filesystem\File` | [filesystem.md](/docs/support/filesystem) |
| Global helpers | `core/libraries/Support/Helper.php` | [../helpers.md](/docs/helpers) |

## Code organization

`Str`, `Arr`, and `Collection` are composed of topical traits under `core/libraries/Support/Concerns/<Class>/<Topic>.php`. The public class names and FQCNs are unchanged — `use Zero\Lib\Support\Str;` etc. work exactly as before.

The trait split mirrors the doc topic split:

- **`Str`** → [Transforms](/docs/support/str#transforms), [Search](/docs/support/str#search), [Extraction](/docs/support/str#extraction), [Replacement](/docs/support/str#replacement), [Composition](/docs/support/str#composition), [Identity](/docs/support/str#identity), [Encoding](/docs/support/str#encoding), [Pluralization](/docs/support/str#pluralization), [Casing](/docs/support/str#casing), [Padding](/docs/support/str#padding), [Random](/docs/support/str#random), [Fluent](/docs/support/str#fluent)
- **`Arr`** → [Access](/docs/support/arr#access), [Iteration](/docs/support/arr#iteration), [Shape](/docs/support/arr#shape), [Sorting](/docs/support/arr#sorting), [Tests](/docs/support/arr#tests)
- **`Collection`** → [Building](/docs/support/collection#building), [Conversion](/docs/support/collection#conversion), [Iteration](/docs/support/collection#iteration), [Filtering](/docs/support/collection#filtering), [Querying](/docs/support/collection#querying), [Mutation](/docs/support/collection#mutation), [Slicing](/docs/support/collection#slicing), [Reshaping](/docs/support/collection#reshaping), [Set Operations](/docs/support/collection#set-operations), [Sorting](/docs/support/collection#sorting), [Aggregates](/docs/support/collection#aggregates), [Conditional](/docs/support/collection#conditional)
