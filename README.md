Typescript is the superset of Javascript. Javascript with superpowers forms typescript.
Typescript needs to compiled to generate relevant Javascript files, which then gets executed in browser.(Typechecker)
Determine errors at a very early stage with Types in Typescript.

Types -> Data Types

Phases:

TS Code

-> Lexer (Tokinize)

-> Parser (AST)

-> Binder (1. builds Symbol Tables for :string, undefined, types(struct) or interfaces forms a table, 2. Build Parent pointers, 3. Flow Nodes)

-> Checker(Not in JS. Check for provided types. Short-circuit(Value might change). Checks strict syntax checking)

-> Emitter(Generates relevant files. Strip of what TS has added)

-> .js, .d.ts, .map files

Installation:

`npm install -D typescipt` - For Global add `-g` flag. Based on where it is used(node or react) install `@types/node`, `@types/react` as well.

`npx tsc -- init` - Generates tsconfig.json for configuration

Compile:

`npx tsc` or `npx tsc --filename` - Output files get generated in `.dist` folder or any other provided in `tsconfig.json` file.

Running:

Add scripts in package.json file.
start: `node dist/index.js`
dev: `npx tsc` or `npx ts-node src/index.ts`

Type Annotation and inference in TS:
`Annotation` - I will explain. To Annotate
`Inference` - Understand yourself using available information, evidence, and your own knowledge
