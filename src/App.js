import './App.css';
// import bootstrap/jquery
import "bootstrap/dist/css/bootstrap.min.css"
import "jquery/dist/jquery"
import "bootstrap/dist/js/bootstrap.bundle.min"
// import components
import Header from "./Components/header/header"
import Footer from "./Components/footer/footer"
import { Fragment } from 'react';

function App() {
  return (
    <div className="App">
      <Fragment>
        <Header />
        <Footer />
      </Fragment>
     
    </div>
  );
}

export default App;
