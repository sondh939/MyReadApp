# MyReadApp

## Instruction
- How to start project:
  Run `npm install` for install libraries and dependencies
  Run `npm run dev` for start project with your localhost.
- About Project:
  > MyReadApp is a website for find your book you want to read and save for your own favor.
  > You can Search with some titles, Add to your shelve and Update status of book.

## Project Structure
  README.md - This file.
  SEASRCH_TERMS.md - The whitelisted short collection of available search terms for you to use with your app.
  vite.config.ts
  tsconfig.node.json
  tsconfig.json
  tsconfig.app.json
  package.json - npm package manager file.
  package-lock.json
  public
    vite.svg
  src
    components
      Book
        Book.tsx - Component for book
        index.ts
      BookShelve
        BookShelve.tsx - Component for shelf of book
        index.ts
    icons
      add.svg
      arror-back.svg
      arror-drop-down.svg
    screen
      Mainsc
