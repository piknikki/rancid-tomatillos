# Rancid Tomatillos
A small movie app that displays all movies pulled in from an API, and upon clicking, shows that movie's profile. 

Team Members:  Nikki Petersen as solo developer [My GitHub Profile](https://github.com/piknikki)

Learning goals:  To refresh myself on React, implementing RESTful APIs along the way, and learning 
(or at least getting an introduction to) Cypress to test the user flows. 

Evolution of the project:  This project flowed according to the project specs, but I also refactored 
along the way whenever I saw a better way to do something or when I received feedback on how to DRY up my 
code. I deployed to Heroku immediately so that I didn't have to worry about it at the end of the project 
time. Although I could have implemented more api calls (like embedding video), I decided to try to refresh/learn React 
and Cypress well and to make solid, well-informed programming decisions, instead of adding a bunch of bells and whistles.

As far as other extensions, I looked into this article -- 
[Medium article on Redux and Hooks](https://medium.com/javascript-scene/do-react-hooks-replace-redux-210bab340672) -- 
when considering whether to implement Redux and hooks. 
Although I learned a lot about both, I determined that most of the power of Redux and hooks would go unrealized because this 
project is so small and I just stuck with the basics of React. 

Here is a gif of the basic functionality of the app:  [gif](./src/assets/tomatillos.gif)

Here is the deployed site:  [Rancid Tomatillos](https://rancid-tomatillos-np.herokuapp.com/)







## Available Scripts

Feel free to clone the repo, and then in the project directory you can run:

### `yarn install`

Installs all dependencies and packages required to run the project locally.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn run cypress:open`

Runs cypress testing -- a browser window will open, and you click on the tests you want to run (then 
another window will open, showing you those tests as it runs them).

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
