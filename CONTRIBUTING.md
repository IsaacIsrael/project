# Contribution Guidelines

We welcome contributions to this project! To ensure consistency and maintain a clear and organized project history, we ask that you follow these guidelines.

## General Rules

- **Language**: All commit messages must be written in English.
- **Code Formatting**: Use backticks (`` ` ``) to wrap keywords, library names, file names, or any code-related terms. For example: `feat`, `ESLint`, `package.json`.

## Commit Message Convention

This project follows the [**Conventional Commits**](https://www.conventionalcommits.org/v1.0.0/) specification. This convention provides a structured format for commit messages, making them easier to read and track. GitHub Copilot is expected to follow this format when generating commit messages.

### Format

Each commit message consists of a **header**, a **body**, and a **footer**.

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

### Header

The header is mandatory and must follow the `type(scope): subject` format.

#### **Type**

Must be one of the following, in lowercase:

- **`feat`**: A new feature.
- **`fix`**: A bug fix.
- **`docs`**: Documentation only changes.
- **`style`**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
- **`refactor`**: A code change that neither fixes a bug nor adds a feature.
- **`perf`**: A code change that improves performance.
- **`test`**: Adding missing tests or correcting existing tests.
- **`build`**: Changes that affect the build system or external dependencies (example scopes: `gulp`, `broccoli`, `npm`).
- **`ci`**: Changes to our CI configuration files and scripts (example scopes: `Travis`, `Circle`, `BrowserStack`, `SauceLabs`).
- **`chore`**: Other changes that don't modify `src` or `test` files.
- **`revert`**: Reverts a previous commit.

#### **Scope** (Optional)

The scope should be the name of the package or module affected (e.g., `auth`, `ui`, `api`). It must be in **lowercase**.

#### **Subject**

The subject contains a succinct description of the change:

- Use the imperative, present tense: "change" not "changed" nor "changes".
- Don't capitalize the first letter.
- Do not add a period (`.`) at the end.
- The entire header must not be longer than 72 characters.

### Body (Optional)

The body is used to provide additional context or explain the "why" behind the change. Use it to explain what and why vs. how.

### Footer (Optional)

The footer is used for referencing issue trackers (e.g., `Fixes #123`, `Closes #456`).

### Examples

Here are some examples based on the project's history:

**Adding a new library:**

```
build: add `msw` to the project
```

**Adding a new test:**

```
test: add `counting` flow end-to-end `android` test
```

**Adding a new configuration file:**

```
chore: add `.vscode` `launch` file
```

**Changing CI/CD scripts or configuration:**

```
ci: add `deploy_doc` action
```

**Refactoring code:**

```
refactor: organize `helpers` test functions
```

**Fixing a bug:**

```
fix: update `ESLint` config to include Jest
```

---

By following these guidelines, you help us maintain a high-quality and understandable codebase.
