# Learning ReactJS
  
- [Learning ReactJS](#learning-reactjs)
  - [Create new project](#create-new-project)
    - [Project tree](#project-tree)
  - [Create main app `app.js` or `index.js`](#create-main-app-appjs-or-indexjs)
  - [Create component](#create-component)
    - [Import component](#import-component)
  - [Dealing with routes](#dealing-with-routes)
  - [React Router](#react-router)
    - [Above version 6](#above-version-6)
  - [Hooks](#hooks)
  - [Apollo](#apollo)
    - [Apollo dependencies](#apollo-dependencies)
    - [Using query component to keep code more JSX like](#using-query-component-to-keep-code-more-jsx-like)
    - [Using userQuery Hook](#using-userquery-hook)
    - [Query loaders for Webpack](#query-loaders-for-webpack)
  - [ESLint](#eslint)
    - [Adding ESlint to the project](#adding-eslint-to-the-project)
    - [Interactive configuration](#interactive-configuration)
    - [ESlint basic config](#eslint-basic-config)
    - [Some additional rules](#some-additional-rules)
      - [To add new rules](#to-add-new-rules)
  - [Testing frameworks](#testing-frameworks)
    - [JEST](#jest)

## Create new project

```shell
npx create-react-app my-app
```

### Project tree

## Create main app `app.js` or `index.js`

```js
import React from 'react'
import ReactDOM from 'react-dom'

// Simple example component
const Hello = props => { <h1>Hello {name}</h1>}

Hello.defaultProps {
  name: 'Lucas'
}

// Required method to render components
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello />,
    document.body.appendChild(document.createElement('div')))
})
```

## Create component

```jsx
import React from 'react'

const Airlines = props => (
    <h1> My Flights App - version: {props.version}</h1>
)

Airlines.defaultProps = {
  version: 0.1
}

export default Airlines
```

### Import component

```js
import React from 'react'
import ReactDOM from 'react-dom'
import Airlines from './my_flights_app/views/Airlines'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Airlines/>,
    document.body.appendchild(document.createElement('div')))
})
```

## Dealing with routes

## React Router

### Above version 6

```js
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import '../styles/global.css'

import Layout from '../containers/Layout'
import Home from '../pages/Home'
import Login from '../containers/Login'
import RecoveryPassword from '../containers/RecoveryPassword'
import NotFound from '../pages/NotFound'

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/recovery-password" element={<RecoveryPassword/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
```

## Hooks

**Example:**

```jsx
import { useMemo } from 'react'
import { useQuery } from '@apollo/client'
import getDoctors from '@/v2/graphql/queries/Doctors.gql'

export const useGetDoctors = () => {
  const { data, loading, error } = useQuery(getDoctors)

  return useMemo(
    () => ({ loading, error, data: data?.doctors || [] }),
    [loading, error, data]
  )
}
```

## Apollo

### Apollo dependencies

```shell
yarn add react-apollo @apollo/client graphql
```

### Using query component to keep code more JSX like

```jsx
<Query query={GET_AIRLINES}>
  {({ loading, error, data }) => {
    if (loading) return "loading..."
    if (error) return `ERROR: ${error.message}`
    return <AirlinesList airlines={data.airlines}/>
  }}
</Query>
```

### Using userQuery Hook

```jsx
import React from 'react'
import { useTheme } from '@mui/material/styles';
import { useQuery } from '@apollo/client/react/hooks/useQuery'
import { parseISO, startOfMonth, addDays, format } from 'date-fns'
import DayCard from './components/DayCard'
import Filterbar from "./components/Filterbar";
import { DATE_QUERY_FORMAT, WEEK_DAYS } from "@/v2/constants";
import { Canvas, MonthlyView } from './styles'
import WeekBar from './components/WeekBar'
import getMonthSchedule from '@/v2/graphql/queries/MonthSchedules.gql'

const Monthly = ({ date }) => {
  const firstDate = startOfMonth(parseISO(date))
  const lastDate = addDays(firstDate, ((6 * 7) - 1))

  const theme = useTheme()
  const { loading, error, data } = useQuery(getMonthSchedule, {
    variables: {
      from: format(firstDate, DATE_QUERY_FORMAT),
      to: format(lastDate, DATE_QUERY_FORMAT)
    }
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error}`;

  return (
    <Canvas>
      <Filterbar date={date} />
      <MonthlyView>
        <WeekBar theme={theme.palette} />
        {data.daySchedules.map(day =>
          <DayCard
            key={day.id}
            theme={theme.palette}
            dateAsString={day.dateAsString}
            fulfillmentRate={day.fulfillmentRate}
            appointmentsCount={day.appointmentsCount}
            confirmedAppointmentsCount={day.confirmedAppointmentsCount}
            closed={!day.hours.isOpen}
          />
        )}
      </MonthlyView>
    </Canvas>
  )
}

export default Monthly

```

### Query loaders for Webpack

To be able to make webpack understand imports from `.gql` and `.graphql` files we need to add a config:

```js
  module: {
      rules: [
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
    ],
  }

```

## ESLint

### Adding ESlint to the project

```shell
yarn add -D eslint
```

### Interactive configuration

```shell
eslint --init
```

**Output:**

```mono
You can also run this command directly using 'npm init @eslint/config'.
npx: installed 40 in 8.683s
✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JavaScript
The config that you\'ve selected requires the following dependencies:eslint-plugin-react@latest
✔ Would you like to install them now? · No / Yes
✔ Which package manager do you want to use? · yarn
```

### ESlint basic config

```js
// .eslintrc.js

module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'array-bracket-spacing': ['error', 'never'],
    'brace-style': ['error', '1tbs'],
    'comma-dangle': ['error', {
      'arrays': 'never',
      'objects': 'never',
      'imports': 'never',
      'exports': 'never',
      'functions': 'ignore'
    }],
    'jsx-quotes': ['error', 'prefer-single'],
    'keyword-spacing': ['error'],
    'linebreak-style': ['error', 'unix'],
    'no-console': 'warn',
    'object-curly-spacing': ['error', 'always'],
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'quote-props': ['error', 'consistent'],
    'react/prop-types': ['off'],
    'semi': ['error', 'never'],
    'space-in-parens': ['error', 'never']
  }
}

```

### Some additional rules

```js
  'rules': {
    'array-bracket-spacing': ['error', 'never'],
    'brace-style': ['error', '1tbs'],
    'comma-dangle': ['error', {
      'arrays': 'never',
      'objects': 'never',
      'imports': 'never',
      'exports': 'never',
      'functions': 'ignore'
    }],
    'jsx-quotes': ['error', 'prefer-single'],
    'keyword-spacing': ['error'],
    'linebreak-style': ['error', 'unix'],
    'no-console': 'warn',
    'object-curly-spacing': ['error', 'always'],
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'quote-props': ['error', 'consistent'],
    'react/prop-types': ['off'],
    'semi': ['error', 'never'],
    'space-in-parens': ['error', 'never']
  }

```

#### To add new rules

<https://eslint.org/docs/rules/>

## Testing frameworks

<https://www.campuscode.com.br/conteudos/algumas-impressoes-sobre-mocha-e-jest>

### JEST

<https://jestjs.io/>
