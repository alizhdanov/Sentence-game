This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Deployed version

Publicly accessible link: http://sentence-game.now.sh - deployed to now.sh free plan, so first visit might be long, because app froze.

#### Run localy

yarn

```bash
# install dependencies
yarn

# run dev server
yarn start

```

npm

```bash
# install dependencies
npm install

# run dev server
npm start
```

#### Dependency

- `React` - view layer
- `Redux` - state
- `Jest` - testing
- `prop-types` - typechecking
- `react-slick` - fancy sliding between inputs

#### Structure

```
├── README.md
├── now.json
├── package.json
├── public/ - static files
├── src
│   ├── App.js - App lives here
│   ├── components/ - react components located here
│   ├── index.js - entry file
│   ├── store/ - Redux related files
│   └── utils/ - Utility functions
└── yarn.lock
```
