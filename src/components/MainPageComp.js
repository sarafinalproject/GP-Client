// import './App.css';

import { Link, Router } from 'react-router-dom';
function MainPageComp() {
  return (
    <div className="App">
      <h1 style={{color:"green"}}>Welcome to Gemach web site</h1>
      <h2 style={{color:"GrayText"}}>We provide loan services.<br></br> here you can find all the things you need for each kind of thing</h2>
      {/* <input type="button" value="Next" to={"second"} /> */}
      {/* <Router> */}
      <Link to='/secondpage' style={ {position: 'absolute', bottom: 4, right: 20, color: "blue", fontSize: 30}}>next</Link>
      {/* </Router> */}
    </div>
  );
}
export default MainPageComp;
