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


# configured tailwind css using these commands.
-npm install -D tailwindcss@3
-npx tailwindcss init
and added the below lines in index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
Also added this in content of tailwind config file.
"./src/**/*.{js,jsx,ts,tsx}"

# Features:
1. header with logo.
2. main movie( trailer in background)
3. title and description and play button above the trailer.
4. movie list*n 
5. movie list is vertically scrolled.
6. all above will be visible once user is logged in.
7. if you are not logged in tand user tries to go to browser page  it takes you to login/signup page.
8. add another page with netflix gpt ---> search bar and movie suggestions.

1. Login/Signup page
    --Login /signup Form
    --redirect to browse Page
2. Browse (After authentication)
    --Header
    --Main Movie
        --trailer in background
        --name
        --description
        --play button
    -- Movie suggestions
        --moovies*n
3. Netflix gpt
    --search bar
    --movie suggestions
4. Redux store 
    -- manage states in a store with data.
    --npm i -D @reduxjs/toolkit
    --npm i react-redux
    -- create a file as appStore.js
    which will be from configureStore as 
        import { configureStore } from "@reduxjs/toolkit";
        const appStore=configureStore(
        {
        reducer:{}})//this will have different reducers for different slices.
    --create userSlice.js
        --add reducer with name and initialState
        inside recuer add actions addUser and removeUser. export these actions and reducer.
    -- add userReducer to appStore.
    -- provide this appStore to main app.js using Provider
    -- dispatch add and remove user actions using firebase's utility method onAuthStateChange.(signin/signout)