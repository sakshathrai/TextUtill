# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Notes:
Certainly! Below is a detailed breakdown of the code you've provided, organized into various topics such as JSX, Props, PropTypes, Hooks, Event Handling, and CSS inside JS. I've included examples from your code to illustrate each topic.

### Topic 1: Basics of JSX
JSX (JavaScript XML) is a syntax extension for JavaScript used in React for defining the structure of user interfaces.

**Example:**
```jsx
return (
  <div className="container">
    <h3>{props.heading}</h3>
    {/* ...other JSX elements */}
  </div>
);
```

### Topic 2: Introduction to Props
Props (short for properties) are a way to pass data from a parent component to a child component in React. They are read-only and help in creating reusable components.

**Example:**
```jsx
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
<TextForm heading="Enter the text to Analyze below" mode={mode} />
```

### Topic 3: PropTypes
PropTypes are used for type-checking props in React components. They help ensure that the correct types of props are passed to a component.

**Example:**
```jsx
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
};
```

### Topic 4: Hooks
Hooks are functions that allow functional components to use state and other React features. The `useState` hook is used to manage state.

**Example:**
```jsx
const [mode, setmode] = useState('light');
const [text, setText] = useState('');
```

### Topic 5: Event Handling
Event handling in React involves defining functions to respond to events triggered by user interactions.

**Example:**
```jsx
const toggleMode = () => {
  if (mode === 'light') {
    setmode('dark');
    // ...other code
  } else if (mode === 'dark') {
    setmode('light');
    // ...other code
  }
};
```

### Topic 6: CSS Inside JS
In React, you can include CSS styles directly within your JavaScript code using object literals or template literals.

**Example:**
```jsx
<textarea
  className="form-control"
  rows="8"
  value={text}
  id="myBox"
  placeholder="Enter the Text"
  style={{
    backgroundColor: props.mode === 'light' ? 'white' : '#1B1B1B',
    color: props.mode === 'dark' ? 'white' : 'black',
  }}
></textarea>
```

### Topic 7: Conditional Rendering
Conditional rendering allows you to render different content based on conditions.

**Example:**
```jsx
<button className="btn btn-primary mx-1 my-1" onClick={conUp}>
  Convert to UpperCase
</button>
<button className="btn btn-primary mx-1 my-1" onClick={conLo}>
  Convert to LowerCase
</button>
```

### Topic 8: Extracting Data
Your code includes functions to extract specific data from the input text, such as email addresses and website URLs.

**Example:**
```jsx
<p><b>Email: </b>{extractEmails()}</p>
<p><b>Website: </b>{extractWeb()}</p>
```

### Topic 9: Copy to Clipboard
You have a function to copy the text to the clipboard, which uses the `navigator.clipboard.writeText` method.

**Example:**
```jsx
<button className="btn btn-primary mx-1 my-1" onClick={cpy}>Copy</button>
```

### Topic 10: State Management
State is managed using the `useState` hook to keep track of `mode` and `text` in your application.

### Topic 11: Component Composition
Your application is composed of multiple components (`App`, `Navbar`, and `TextForm`) that work together to create the user interface.
![image](https://github.com/sakshathrai/TextUtill/assets/90779367/416806d5-850d-4ad7-b0ac-f7e3a123f613)
