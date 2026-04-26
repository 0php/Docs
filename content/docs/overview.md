# Zero Framework Overview

Zero is a lightweight, native-PHP micro-framework inspired by Laravel's developer experience. It keeps runtime dependencies to a minimum (no Composer required) while providing ergonomic tooling for routing, HTTP handling, templating, and database access.

## Architecture at a glance

- **Entry point** — [`public/index.php`](../public/index.php) bootstraps configuration, sessions, helpers, then delegates to the router.
- **Routing** — `Zero\Lib\Router` maps URIs to controller actions, runs middleware, and resolves controller dependencies. → [router.md](/docs/router)
- **Request / Response** — `Zero\Lib\Http\Request` captures query/body/JSON/files; `Zero\Lib\Http\Response` builds replies; controllers can return any scalar/array/model/`Response`. → [request-response.md](/docs/request-response)
- **Views** — `Zero\Lib\View` renders PHP templates with Blade-inspired directives, layouts, sections, and optional caching. → [view.md](/docs/view)
- **Database (DBML)** — `Zero\Lib\DB\DBML` is the fluent query builder on top of the PDO bridge. → [dbml.md](/docs/dbml)
- **Models** — `Zero\Lib\Model` is an active-record layer with relations, scopes, and soft deletes. → [models.md](/docs/models)
- **Migrations** — `Zero\Lib\DB\Schema` + `Blueprint` for structural changes. → [migrations.md](/docs/migrations)
- **Authentication** — `Zero\Lib\Auth\Auth` issues JWT cookies and integrates with the bundled login/register/reset scaffold. → [auth.md](/docs/auth)
- **Mailing** — `Zero\Lib\Mail\Mailer` wraps SMTP delivery with fluent `Message` composition. → [mail.md](/docs/mail)
- **Queue** — `Zero\Lib\Queue\Queue` + `dispatch()` push background jobs through `sync` or `database` drivers; worker via `php zero queue:work`. → [queue.md](/docs/queue)
- **HTTP & SOAP clients** — `Zero\Lib\Http` for outbound REST + `Http::soap()` for SOAP. → [support/http.md](/docs/support/http), [support/soap.md](/docs/support/soap)
- **Storage** — `Zero\Lib\Storage\Storage` for file IO across disks (local + S3). → [storage.md](/docs/storage)
- **i18n** — `Zero\Lib\I18n\Translator` for locale resolution, fallback chains, and YAML/JSON loaders. → [i18n.md](/docs/i18n)
- **CLI** — the `zero` script ships generators (`make:*`), database tools (`migrate`, `db:seed`, `db:dump`), and the scheduler (`schedule:run`). → [cli.md](/docs/cli)
- **Scheduler / cron** — `routes/cron.php` defines tasks; `php zero schedule:run` evaluates and dispatches them every minute. → [cron.md](/docs/cron)
- **Rate limiting** — global + per-route throttling configured via `config/rate_limit.php`. → [rate-limiting.md](/docs/rate-limiting)
- **Support utilities** — `Str`, `Stringable`, `Arr`, `Collection`, `Number`, `DateTime`. → [support/](/docs/support)
- **Global helpers** — built-in (`view`, `response`, `redirect`, `route`, `auth`, `session`, `collect`, …) plus user-defined helper classes. → [helpers.md](/docs/helpers)

## Documentation map

```
docs/
├── overview.md              ← you are here
├── request-response.md      ← Request/Response API
├── router.md                ← routing, groups, middleware, named routes
├── view.md                  ← templates, directives, layouts
├── models.md                ← active-record + relations + ModelQuery
├── dbml.md                  ← fluent query builder
├── migrations.md            ← Schema + Blueprint + CLI workflow
├── database-connections.md  ← driver config (MySQL, PostgreSQL, SQLite)
├── auth.md                  ← Auth facade, JWT, scaffolded login/register flow
├── mail.md                  ← Mailer + Message API
├── i18n.md                  ← translations, locales, fallbacks
├── storage.md               ← file storage + uploads
├── cli.md                   ← generators + database + serve commands
├── cron.md                  ← scheduler API
├── rate-limiting.md         ← throttling config + middleware
├── date.md                  ← DateTime / Date helpers
├── helpers.md               ← global functions + user-defined helpers
├── support.md               ← directory index for utility classes
├── support/
│   ├── index.md             ← per-class index
│   ├── str.md               ← Str::* (94 methods)
│   ├── stringable.md        ← fluent Stringable
│   ├── arr.md               ← Arr::* (39 methods)
│   ├── collection.md        ← collect()/Collection (95 methods)
│   ├── number.md            ← Number::*
│   ├── http.md              ← Http client + ClientResponse
│   ├── soap.md              ← Http::soap()
│   └── filesystem.md        ← File factories + Storage integration
└── deployment.md            ← Nginx + PHP-FPM, env, cron, log rotation
```

## Common workflows

- **Build an API endpoint** → [router.md](/docs/router) → [request-response.md](/docs/request-response) → [models.md](/docs/models)
- **Add a new database table** → [migrations.md](/docs/migrations) → [models.md](/docs/models)
- **Send transactional email** → [mail.md](/docs/mail) → [view.md](/docs/view) (templates) → [i18n.md](/docs/i18n) (translated subjects/body)
- **Protect routes** → [auth.md](/docs/auth) → [router.md#middleware](/docs/router#middleware) → [rate-limiting.md](/docs/rate-limiting)
- **Process uploads** → [request-response.md](/docs/request-response) (`->file()`) → [storage.md](/docs/storage)
- **Schedule recurring jobs** → [cli.md](/docs/cli) (`make:command`) → [cron.md](/docs/cron)
- **Talk to a third-party service** → [support/http.md](/docs/support/http) for REST, [support/soap.md](/docs/support/soap) for SOAP

## Deployment

For production configuration (Nginx + PHP-FPM, environment, logging, cron), see [deployment.md](/docs/deployment).
