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

### **Topic 1: JSX (JavaScript XML)**
**Explanation:** JSX is a syntax extension for JavaScript used in React to define the structure of user interfaces. It allows you to write HTML-like code within JavaScript.

**Example:**
```jsx
return (
  <div className="container">
    <h3>{props.heading}</h3>
    <p>This is a sample JSX element.</p>
  </div>
);
```

In this example, JSX is used to define the structure of a component's rendering output, including HTML-like elements such as `<div>`, `<h3>`, and `<p>`.

### **Topic 2: Props (Properties)**
**Explanation:** Props are used to pass data from a parent component to a child component in React. They are read-only and help in creating reusable components.

**Example:**
```jsx
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
<TextForm heading="Enter the text to Analyze below" mode={mode} />
```

In this example, props (`title`, `mode`, `toggleMode`, `heading`) are passed from parent components to child components (`Navbar` and `TextForm`) to customize their behavior and content.

### **Topic 3: PropTypes**
**Explanation:** PropTypes are used for type-checking props in React components. They help ensure that the correct types of props are passed to a component.

**Example:**
```jsx
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
};
```

In this example, PropTypes are defined for the `Navbar` component to specify that `title`, `about`, and `mode` should be strings, and they are required (cannot be omitted).

### **Topic 4: Hooks**
**Explanation:** Hooks are functions that allow functional components to use state and other React features. The `useState` hook is used to manage state.

**Example:**
```jsx
const [mode, setMode] = useState('light');
const [text, setText] = useState('');
```

In this example, the `useState` hook is used to create state variables (`mode` and `text`) and functions to update their values (`setMode` and `setText`).

### **Topic 5: Event Handling**
**Explanation:** Event handling in React involves defining functions to respond to events triggered by user interactions.

**Example:**
```jsx
const toggleMode = () => {
  if (mode === 'light') {
    setMode('dark');
    // ...other code
  } else if (mode === 'dark') {
    setMode('light');
    // ...other code
  }
};
```

In this example, the `toggleMode` function is defined to handle the click event on a button. It toggles the `mode` state variable between 'light' and 'dark'.

### **Topic 6: CSS Inside JS**
**Explanation:** In React, you can include CSS styles directly within your JavaScript code using object literals or template literals.

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

In this example, CSS styles are applied directly to the `textarea` element using the `style` attribute, which is an object that specifies the styles based on the `props.mode` value.

### **Topic 7: Conditional Rendering**
**Explanation:** Conditional rendering allows you to render different content based on conditions.

**Example:**
```jsx
<button className="btn btn-primary mx-1 my-1" onClick={conUp}>
  Convert to UpperCase
</button>
<button className="btn btn-primary mx-1 my-1" onClick={conLo}>
  Convert to LowerCase
</button>
```

In this example, buttons are conditionally rendered based on certain conditions. For instance, the `conUp` function may control whether the "Convert to UpperCase" button is displayed.

### **Topic 8: Extracting Data**
**Explanation:** Your code includes functions to extract specific data from the input text, such as email addresses and website URLs.

**Example:**
```jsx
<p><b>Email: </b>{extractEmails()}</p>
<p><b>Website: </b>{extractWeb()}</p>
```

In this example, functions like `extractEmails` and `extractWeb` are used to extract specific data from the input text, and the results are displayed within paragraphs.

### **Topic 9: Copy to Clipboard**
**Explanation:** You have a function to copy the text to the clipboard, which uses the `navigator.clipboard.writeText` method.

**Example:**
```jsx
<button className="btn btn-primary mx-1 my-1" onClick={cpy}>Copy</button>
```

This button triggers the `cpy` function, which utilizes the Clipboard API to copy text to the user's clipboard when clicked.

### **Topic 10: State Management**
**Explanation:** State is managed using the `useState` hook to keep track of `mode` and `text` in your application. State allows your components to react to changes and re-render as needed.

### **Topic 11: Component Composition**
**Explanation:** Your application is composed of multiple components (`App`, `Navbar`, and `TextForm`) that work together to create the user interface. Component composition is a fundamental concept in React, allowing you to build complex UIs by combining smaller, reusable components.
.
![image](https://github.com/sakshathrai/TextUtill/assets/90779367/7d9909b4-4f88-4115-bb01-ad2257627f9e)
