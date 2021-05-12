# CS18 Summer 2021 Course Website

### Making Updates
Updating the course website is super simple: just follow these steps! Remember to keep the rest of the staff updated with your changes on the **website** slack channel! 

1. Clone this repository to your local machine.
2. Run the website locally in development mode by running `yarn start` and opening http://localhost:3000 in a web browser. If you do not have yarn installed, you can follow [these](https://classic.yarnpkg.com/en/docs/install/#mac-stable) instructions.
3. Find the page/component you would like to update by navigating to the `src` directory. If you want to update the content of the page, you will probably want to look in `src/Info`, while if you want to update the code or structure of the page, you should look in `src/Components` or `src/Pages`.
4. Make and commit your changes, leaving a descriptive commit message.
5. Pull from GitHub (in case any changes have been pushed since you last pulled) and resolve any merge conflicts.
6. Push your changes to Github.
7. Run `npm run build && npm run deploy` to actually build and deploy your changes to the website.

### Serving static files
We often want to serve static files to users (lecture notes, starter code, prep questions, etc.) We store all static files in the `public/static` directory. For example, the files for Lecture 1 are stored in `public/static/classes/1`. To reference these files in the website (perhaps from an `IconLink`) you provide the path **not** including `public`. To link the lecture notes for the first class the url would be `/static/classes/1/lec01.pdf`. When adding files to the static folder, make sure you add them to the proper directory or create a new one if necessary!

### Questions?
If you have any questions, don't hesitate to ask in the slack channel or email the HTA's!

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
