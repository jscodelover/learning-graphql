# React-Redux-Starter-Kit

- Includes --
  - Redux Setup
  - Sass Setup
  - React Router Dom Setup
  - Template for .env files
  - Basic css styling setup
  - Flow Type Checking(for props and state checking)
  - Pre commit git hooks for prettier and eslint

## Scripts

| Script          | Description                                     |
| --------------- | ----------------------------------------------- |
| `npm install`   | Installs all dependencies                       |
| `npm start`     | Starts project in `development` environment     |
| `npm run build` | Builds the project for `production` environment |

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Folder structure

```
.
├── public                     # Static public assets (not imported anywhere in source code)
│   ├── index.html             # Main HTML page container
|   ├── favicon.ico            # favicon file
|   ├── manifest.json          # Provides information about an application (such as name, author, icon, and description)
├── src                        # Application source code
│   ├── index.js               # Application bootstrap and rendering
│   ├── index.css              # Basic css for the project
│   ├── components             # Global Reusable Components
│   ├── modules                # Components that dictate major functionalities
│   │   ├── home               # Directories with the same names as the routes in App.js
│   │   ├── index.js           # Main route definitions and split points
│   ├── store                  # Redux-specific pieces
│   │   ├── createStore.js     # Create and instrument redux store
│   │   ├── rootReducers.js    # Reducer registry and injection
│   ├── utils                  # have utilities like your API wrapper, string utils etc
│   │   ├── codeSplitting.js   # Split your code into small chunks which you can then load on demand
```

### Directory Structure (which contain redux and component)

```
├── src
│   ├── modules
│   │   ├── home
│   │   │   ├── duck                 # Duck directory which houses all your Redux Code
│   │   │   │   ├── action.js        # Contain all your action creators
│   │   │   │   ├── operations.js    # Define any logic surrounding our actions and side effects (including Async logic)
│   │   │   │   ├── reducers.js      # Deal with updating the state
│   │   │   │   ├── types.js         # Contains string literals for your action types
│   │   │   │   ├── index.js         # Re-export our operations, reducers and action types
│   │   │   ├── Home.css             # Contain css (it can also be a Scss/Sass file also)
│   │   │   ├── HomeComponent.jsx    # Presentational components are suffixed with 'Component'
│   │   │   ├── HomeContainer.js     # Containers are suffixed with 'Container'
│   │   │   ├── index.js             # Re-export our directory
```

### Developer guidelines

#### .envtemplate

Edit this template according to your project requirement, so that whoever clone your git repo will know what .env variables they need.
Secret api key, token no. should be save in .env file and that file should not be push to remote git repo for security.
( setup is also done for not pushing .env file ).
example -

- For creating .env variables -- `REACT_APP_(your-specified-name)`
- For using -- `process.env.REACT_REACT_APP_(your-specified-name)`

#### Code splitting

Use `createSplitPoint` from `utils/codeSplitting` which takes a required parameter `path` that describes the module path relative to directory name eg - `home/`
Example use:

```
import createSplitPoint from '../../utils/codeSplitting';

export default createSplitPoint('home/HomeContainer');
```
