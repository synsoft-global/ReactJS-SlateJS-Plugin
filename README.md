## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

1. npm install slate slate-react and immutable
2. `import { Editor } from 'slate-react'`
3. See error
4. `Import { Value } from 'slate'`
5. Create value with `const value = Value.fromJSON({...})`
6. To render text the Value needs at least one document property,
   A document needs a block, and a block needs text.
7. Add state to component with `const [value, setValue] = useState(value)`
