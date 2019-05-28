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
1. Displaying all Pokemons with their avatar, stats, basic information and type with filter by Pokemon Type with **Infinite Scrolling**.
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

NOTE: I have used HashRouter instead of BroswerRouter beacuse there is some open issue with HashRouter in github pages hosting.

Project Overview
===========

### Folder Structure: 
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

### React with Redux
  Redux lets data sharing between components through store, connect and dispatch actions to the store. In our case `evolutionContainer`     needs data from two sources i.e from api server and second one is from store (for selected pokemon).
    
### Components structure and responsibilities

#### Display Pokemon list with it's info and stats
```
    <PokemonContainer>
        ...
           <FilterText>
                ...
           </FilterText>
           <InfiniteScroll>
               ...
                <PokemonComponent>
                ...
                    <PokemonDetailComponent>
                        ...
                    </PokemonDetailComponent>
                    <PokemonStatComponent>
                        ...
                    </PokemonStatComponent>
                </PokemonComponent>
           </InfiniteScroll>
    </PokemonContainer>
   ``` 
    
1. PokemonContainer- A Statefull component
    * It connects to the redux store and resposible for data fetch and renders its child components.
    * Contains state which handles filter
    * Contains PokemonComponent, PokemonDetailComponent, PokemonListComponent, PokemonStatComponent

2. FilterText- A stateless component
    * Render Typeahead filter

3. InfiniteScroll- 
    * Responsible for rendering Pokemons in a grid with infinite scrolling.
    * Infinte scrolling for filter selected also.
4. PokemonComponent-
    * Renders a single Pokemon view
5. PokemonDetailComponent-
    * Renders details information of a Pokemon

6. PokemonStatComponent-
    * Renders stats of a Pokemon with progress bar

#### Display Evolution 
```
    <EvolutionContainer>
        ...
           <PokemonEvolutionComponent>
               ...
                <NestedEvolutionComponent>
                    ...
                    <EvolutionArrowComponent>
                        ...
                    </EvolutionArrowComponent>
                    <SingleEvolveComponent>
                        ...
                        <MoveListComponent>
                            ...
                        </MoveListComponent>
                    </SingleEvolveComponent>
                </NestedEvolutionComponent>
           </PokemonEvolutionComponent>
    </EvolutionContainer>
   ``` 
    
1. EvolutionContainer- A Statefull component
    * It connects to the redux store and resposible for data fetch and renders its child components passing data as props.
    * Contains PokemonEvolutionComponent, NestedEvolutionComponent, EvolutionArrowComponent, EvolutionArrowComponent

3. PokemonEvolutionComponent- 
    * Responsible for rendering recursive pokemon evolution chain view.
    
4. EvolutionArrowComponent-
    * Renders a Arrow with relationship in the evolution chain.
    
5. SingleEvolveComponent-
    * Renders a single pokemon with brief information

6. MoveListComponent-
    * Renders pokemon all move list

#### Evolution Component recursive rendering
Evolution JSON- 
source: https://pokeapi.co/api/v2/evolution-chain/1

    ```javascript
        "chain": {
            evolves_to: [
                evolution_details:[...],
                is_baby: false,
                species: {...},
                evolves_to: [
                    evolution_details:[...],
                    is_baby: false,
                    species: {...},
                    evolves_to:[...]
                 ]
             ]
        }
    ```
    
Evolution api response json is recursive in nature. `PokemonEvolutionComponent` constructs a dynamic components elements by passing required config to a generic json tree traversal method which is written in `src/common/utils/renderNestedComponent.ts`.
    
#### API Call middleware
`src/moddlewares/api.ts`- 
    Middleware to handle all api axios calls. It intercepts the dispatched action and read the api configuration and fire axios calls. And     after it advance to next() with approriate action type which will later recieved to reducers. By this way we do not need to write         axios call manually in actions.
   
 Test Cases: TODO 
    
