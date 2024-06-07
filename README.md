## Getting Started

```
npm install - Setting up dependencies
npm run dev - Launching a frontend project in dev mode
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Project Architecture

The project is written according to the Feature sliced design methodology

Link to documentation - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

---

## Linting

The project uses eslint to check typescript code.

##### Launching linters

- `npm run lint` - Checking ts files with linter

---

### Working with data

Interacting with data is done using local storage and react context.

Requests to the server are sent using Tanstack Query and axios [axios](/src/shared/api/api.ts)

---

## Entities

- [Job](/src/entities/Job)
- [Profile](/src/entities/Profile)

## Features

- [EditableProfileCard](/src/features/EditableProfileCard)
- [LikeButton](/src/features/LikeButton)
