# MyReadApp

## Instruction
- How to start project:
  Run `npm install` for install libraries and dependencies
  Run `npm run dev` for start project with your localhost.
- About Project:
  > MyReadApp is a website for find your book you want to read and save for your own favor.
  > You can Search with some titles, Add to your shelve and Update status of book.

## Project Structure
  > README.md - _This file._

  > SEASRCH_TERMS.md - _The whitelisted short collection of available search terms for you to use with your app._
  > vite.config.ts
  > tsconfig.node.json
  > tsconfig.json
  > tsconfig.app.json
  > package.json - _npm package manager file._
  > package-lock.json
  > public
    > vite.svg - _system default icon._
  > src
    > components
    > Book
        > Book.tsx - _Component for book._
        > index.ts
      > BookShelve
        > BookShelve.tsx - _Component for shelf of book._
        > index.ts
    > icons
      > add.svg
      > arror-back.svg
      > arror-drop-down.svg
    > screen
      > Mainscreen.tsx - _Main UI of web app. Contain 3 shelves for each status of books._
      > SearchScreen.tsx - _Contain UI of Search function._
    > service
      > BooksAPI.tsx - _Contain API service for project._
    > App.css - _Contain styles of project._
    > App.tsx - _This is the root of project. Contain Routes and logic features in project._
    > index.css
    > main.tsx
    > type.ts - _This file includes all types of project._
    > vite-env.d.ts
