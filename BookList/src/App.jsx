import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SignUp from './auth/SignUp';
import Login from './auth/login';
import {createBrowserRouter,  RouterProvider } from "react-router-dom";
import routes from './router/routes.jsx'


const router = createBrowserRouter([...routes]);


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

    <RouterProvider router = {router}/>


{/* <h1> Welcome  to React Class</h1>
      <SignUp/>
      <Login/> */}



      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

     
    </>
  )
}

export default App
