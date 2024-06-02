// import logo from './logo.svg';
import './App.css';
import Router from "./Router";
import { Outlet, RouterProvider } from "react-router-dom";
import bg from "./assets/images/background-image.jpg";
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Home from './components/Home';
function App() {
  return (
    <>
      <RouterProvider router={Router}></RouterProvider>
        <Header></Header>
        <div className='app'>
          {/* <img src={bg} /> */}
          {/* <Outlet></Outlet> */}
          {/* <Home></Home> */}
        </div>
        <Footer />
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
