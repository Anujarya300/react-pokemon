React-Pokemon Project
==============
**Dependencies**

    react > 16.8.x,
    redux > 4.x,
    redux-thunk > 2.3.x
    typescript > 3.4.5, 
    webpack > 4.32.x,
    eslint > 5.16.x, 
    bootstrap > 4.3.x,
    sass > 6.x,
    gh-pages > 2.x (to deploy in github pages)

React-Pokemon Project Details
==============
1. Displaying all Pokemons with their avatar, stats, basic information and type with filter by Pokemon Type.
2. Show moves list and evolution information (Pokemon will they evolve into AND what Pokemon have they evolved from) on each Pokemon click.

#### Demo app: https://anujarya300.github.io/react-pokemon

Project consumes the following API https://pokeapi.co/

Getting Started
============

### First install all the necessary dependencies.
``` 
 yarn install
 npm install
```

### Start the development server (changes will now update live in browser)
```
yarn start
npm start
```
To view your project, go to: http://localhost:3000/


### Build to Production
```
yarn build
npm build
```

Locate your **build** folder in root directory for build artifacts.


### Linting using eslint (Enfore coding best practices)
```
yarn lint
npm lint
```

Use `yarn lint-fix or npm lint-fix` to fix auto-corrected lint errors.

### Deployment using Github Pages

Please refer for github pages deployment setup: https://reactgo.com/deploy-react-app-github-pages/

##### Deployment steps

1. Build
```
yarn predeploy
npm predeploy
```

2. Deploy

```
yarn deploy
npm deploy
```

Browse Url: https://anujarya300.github.io/react-pokemon/#/


Project Overview
===========

1. Folder Structure: 
```
  src/
    components/
      pokemon/
        actions
        reducers
        components
        containers
        models
        styles
      evolution/
         actions
         reducers
         components
         containers
         models
         styles
      common/
        Header.tsx
        Loader.tsx
```

Instead of having all components in components folder or all actions in actions folder, our project organized with modular pattern.
All features related with pokemon information, we have created a module folder pokemon having all dependent components, actions etc inside it.

2. React with Redux
    Redux lets data sharing between components through store, connect and dispatch actions to the store. In our case `evolutionContainer`     needs data from two sources i.e from api server and second one is from store (for selected pokemon).
    
3. 
    
    
    
