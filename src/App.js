import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/layout/Main';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './route/PrivateRoute';
import Order from './components/Order';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/order',
        element: <PrivateRoute><Order></Order></PrivateRoute>
      },
    
    ]
  }
])
function App() {
  return (
    <div className="App">
   
  <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
