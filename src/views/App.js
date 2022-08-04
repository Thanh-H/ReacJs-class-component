// import logo from './logo.svg';
import './App.scss';
import Mycomponent from './example/myCompenents';
import TodoList from './Todo App/TodoList';
import { ToastContainer,  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from './example/home';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ListUsers from './Users/ListUsers';
import DetailUser from './Users/DetailUser';
const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav/>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
     
        
        

        
        <Switch>
          <Route path="/" exact>
          <Home/>
          </Route>
          <Route path="/Todos">
          <TodoList />
          </Route>
          <Route path="/about">
          <Mycomponent/>
          </Route>
          <Route path='/user' exact>
            <ListUsers/>
          </Route>
          <Route path='/user/:id'>
            <DetailUser/>
          </Route>
        </Switch>

      </header>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
    </BrowserRouter>
  );
}

export default App;
