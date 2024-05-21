# Practice 3: Training a technical interview for trainees and juniors

Relevant concepts practiced:

- useCallback, useMemo, useRef, FlexBox and Grid

<hr>

## Trainee/Junior technical interview based on the Technical test for React Juniors and Trainees from 'midudev', original code: [here](https://github.com/midudev/aprendiendo-react/tree/master/projects/05-react-buscador-peliculas)

Create an application to find movies

API to use: - https://www.omdbapi.com/ Get the API Key on the website itself by registering your email.

- Requirements:

  - You need to show an input to search for the movie and a button to search.

  - List the movies and show the title, year and poster.

  - Make the formwork

  - Make the movies show in a responsive grid.

  - Fetch data to the API

- First iteration:

  - Avoid doing the same search twice in a row.

  - Have the search done automatically when typing.

  - Prevent the search from being done continuously when typing (debounce)

<hr>

Fixed error from the original code: Uncaught TypeError: movies is not iterable 👉 when empty input and sort check box activated.

[...movies].sort((a, b) => a.title.localeCompare(b.title)) <br>
👇 <br>
movies && [...movies].sort((a, b) => a.title.localeCompare(b.title))

<hr>

## to run the project

- Create a .env file at the root of the project. The environment variable is defined inside the file like this: </br>

- ### npm run dev
  Runs the app in the development mode.
  Open http://127.0.0.1:5173/ to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.
