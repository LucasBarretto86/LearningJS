# Learning ReactJS

- [Learning ReactJS](#learning-reactjs)
  - [Create new project](#create-new-project)
  - [Create main app `app.js` or `index.js`](#create-main-app-appjs-or-indexjs)
  - [Create component](#create-component)
  - [React Router](#react-router)
  - [Hooks](#hooks)
    - [useState](#usestate)
    - [useEffect](#useeffect)
    - [useContext](#usecontext)
    - [useReducer](#usereducer)
    - [useMemo](#usememo)
    - [useRef](#useref)
    - [useLocation](#uselocation)
    - [useNavigate](#usenavigate)
    - [useImperativeHandle](#useimperativehandle)
  - [Apollo](#apollo)
  - [Styled Components](#styled-components)
  - [Tailwind CSS](#tailwind-css)
  - [Testing frameworks](#testing-frameworks)
    - [JEST](#jest)
  - [CRACO](#craco)
  - [Rails Action Cable](#rails-action-cable)

---

## Create new project

```shell
npx create-react-app my-app
```

**Project tree:**

---

## Create main app `app.js` or `index.js`

**Before React 17:**

```js
import React from 'react';
import ReactDOM from 'react-dom';

// Simple example component
const Hello = ({ name = 'Lucas' }) => <h1>Hello {name}</h1>;

// Required method to render components
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello />,
    document.body.appendChild(document.createElement('div'))
  );
});
```

**From 18 and beyond:**

```js
import React from 'react';
import ReactDOM from 'react-dom/client';

const Hello = ({ name }) => <h1>Hello {name}</h1>;

document.addEventListener('DOMContentLoaded', () => {
  const root = ReactDOM.createRoot(document.querySelector('#root'));
  root.render(
    <React.StrictMode>
      <Hello name='Lucas' />
    </React.StrictMode>
  );
});
```

---

## Create component

```jsx
import React from 'react'

const MyComponent = ({ title = "My title", description }) => (
    <>
      <h1> {title}</h1>
      <p>{description}</p>
    </>
)

export default MyComponent
```

**Import component:**

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import MyComponent from './my-app/MyComponent'

document.addEventListener('DOMContentLoaded', () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <React.StrictMode>
      <MyComponent title='Here goes Johnny!' description ='Lorem ...' />
    </React.StrictMode>
  );
});
```

> `getElementById` is more efficient because `querySelector` has to parse the selector and check for any potential matches

---

## React Router

To manage routes from react we use an additional dependency `react-router-dom@latest`

```sh
yarn add react-router-dom@latest
```

After adding the router we can create a Router component like this:

```js
// ./src/routes/MainRoutes/index.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home'

const MainRoutes = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" exact component={Home} />
        </Routes>
    </Router>
  );
};

export default MainRoutes;
```

And to add this to the app we just encapsulate our application with this router component

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import MainRoutes from './routes/MainRoutes'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <MainRoutes>
      <App/>
    </MainRoutes>
  </React.StrictMode>
)
```

---

**Above version 6:**

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

---

## Hooks

### useState

### useEffect

### useContext

### useReducer

### useMemo

### useRef

### useLocation

### useNavigate

### useImperativeHandle

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

---

## Apollo

**Apollo dependencies:**

```sh
yarn add @apollo/client graphql
```

**Using query component to keep code more JSX like:**

```jsx
import { Query } from '@apollo/client/react/components'
import getDoctors from '@/v2/graphql/queries/Doctors.gql'

const DoctorsComponent = () => {
  return (
    <Query query={getDoctors}>
      {({ data, loading, error }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error: {error.message}</p>
        return <div>{data?.doctors?.map(doctor => <p key={doctor.id}>{doctor.name}</p>)}</div>
      }}
    </Query>
  )
}
```

**Using userQuery Hook:**

```jsx
import { useQuery } from '@apollo/client'
import getDoctors from '@/v2/graphql/queries/Doctors.gql'

export const useGetDoctors = () => {
  const { data, loading, error } = useQuery(getDoctors)

  return { loading, error, data: data?.doctors || [] }
}
```

---

## Styled Components

## Tailwind CSS

**Installing Tailwind:**

```sh
yarn add -D tailwindcss

# OR
npm install -D tailwindcss
```

**Setup tailwind:**

**1. Create Tailwind config file:**

To start the step we need to run to create tailwindcss config file

```sh
npx tailwindcss init
```

**2. Update config file:**

It will generate `tailwind.config.js`

Then we add the specifics for JSX and JS files:

```js
// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**3. Import tailwind CSS:**

To be able to use tailwind css we also need to import the files into our main reset file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Testing frameworks

### JEST

**CRA:**

On a regular React app (CRA  - Create React App ) we have already built in JEST as the test framework, so we don't need to configure anything, you will also notice the existence of configuration file `SetupTests.js`

This file we use to create general instruction to setup the test environment, for instance to guarantee that the DOM elements are present and correct:

```js
// SetupTests.js

// This runs before each test
beforeEach(() => {
  // Ensure the root div is available for the portal
  const rootDiv = document.createElement('div');
  rootDiv.id = 'root';
  document.body.appendChild(rootDiv);

  // Add the notifications div for portals
  const notificationsDiv = document.createElement('div');
  notificationsDiv.id = 'notifications';
  document.body.appendChild(notificationsDiv);

  // Add the modals div for portals
  const modalsDiv = document.createElement('div');
  modalsDiv.id = 'modals';
  document.body.appendChild(modalsDiv);
});

// Optionally, clean up the DOM after each test
afterEach(() => {
  document.body.innerHTML = ''; // Clears out the entire DOM after each test
});

```

In this case i want to guarantee the structure from my public index.html, because I use `createPortal` to handle modal and notifications:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My React App</title>
  </head>
  <body>
    <div id="notifications"></div>
    <div id="modal"></div>
    <div id="root"></div>
  </body>
</html>

```

**Non-CRA:**

**Setup for React:**

```sh
yarn add --dev jest babel-jest @testing-library/react @testing-library/jest-dom
```

**Axios mocking:**

in some cases JEST might request specific configs even on CRA application, these configures we can adjust using package.json, since configurations from CRA is inject:

```js
"jest": {
    "transformIgnorePatterns": [
      "node_modules/(?!axios)"
    ]
  },
```

> Case we want change other specific configurations we would need to `eject` configurations from CRA, or we could use `CRACO`

---

## CRACO

CRACO (Create React App Configuration Override) is a tool that allows you to customize the configuration of Create React App (CRA) without ejecting. It provides an easy way to override webpack, Babel, Jest, ESLint, and other CRA settings by modifying a single configuration file `craco.config.js`. It simplifies the process of adjusting CRA settings while keeping the project structure intact.

**Craco Installation:**

```sh
yarn add -D @craco/craco
```

All craco configuration goes to `craco.config.js` in the root dir from the project

```sh
touch craco.config.js
```

## Rails Action Cable

When we have a backend on Rails and we want to consume an action cable channel we need to setup this:

**Dependency Installation:**

```sh
npm install -S react-actioncable-provider

# OR

yarn add -D react-actioncable-provider
```

**Setup consumer:**

We will need at at least three components, a ActionCableProvider, ActionCableConsumer, and a Hook to get the notifications, in this simple example I used a Context to handle the Websocket

```js
// ./src/contexts/NotificationContext/index.js

import React, { createContext, useState, useContext, useMemo, useCallback } from 'react'
import { ActionCableProvider, ActionCableConsumer } from 'react-actioncable-provider'
import { wsURL } from '../../utils/request'

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([])

  const handleReceivedNotification = useCallback((message) => {
    setNotifications((prevNotifications) => [...prevNotifications, message])
  }, [])

  const value = useMemo(() => ({ notifications, handleReceivedNotification }), [notifications, handleReceivedNotification])

  return (
    <ActionCableProvider url={wsURL}>
      <NotificationContext.Provider value={value}>
        {children}
      </NotificationContext.Provider>
    </ActionCableProvider>
  )
}

export const NotificationConsumer = () => {
  const { notifications, handleReceivedNotification } = useNotifications()

  return (<ActionCableConsumer channel={{ channel: 'NotificationChannel' }}>
    {({ received }) => {
      if (received) {
        handleReceivedNotification(received.notification)
      }
    }}
    <div>
      {
        notifications.map((notification) => {
          return (<div>
            <p>{notification.title}</p>
            <p>{notification.content}</p>
          </div>)
        })
      }
    </div>
  </ActionCableConsumer>)
}

export const useNotifications = () => useContext(NotificationContext)
```
