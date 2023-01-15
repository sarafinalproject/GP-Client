// import './App.css';
import { Button } from '@mui/material';
import { Link, Router } from 'react-router-dom';
import logo from '../gemach.png'
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

function MainPageComp() {
  return (
    <div className="App">
    {/* <Link to='/'><img src={logo} alt="gemach" /></Link> */}
    <AppBar position="static">
        <Toolbar>
          <Typography variant="h6"
            component="div" sx={{ flexGrow: 1 }}>
            Gemach Home Page
          </Typography>
    <Link to='/'><img src={logo} alt="gemach" /></Link>
            </Toolbar>
      </AppBar>

      <Button variant="outlined" style={{marginLeft: '62%'}}>
        <Link to='/PersonalArea' style={{ fontSize: '18px' }}>Enter the personal area </Link>
      </Button>
      <h1 style={{ color: "green" }}>Welcome to Gemach web site</h1>
      <h2 style={{ color: "GrayText" }}>We provide loan services.<br></br> here you can find all the things you need for each kind of thing</h2>
      
      {/* <div class="card">
    <div class="flex flex-wrap align-items-center justify-content-center card-container blue-container">
        <div class="fadeinleft animation-duration-1000 animation-iteration-infinite flex align-items-center justify-content-center
         font-bold bg-blue-500 text-white border-round m-2 px-5 py-3">aaa</div>
         <div class="fadeinleft animation-duration-1000 animation-iteration-infinite flex align-items-center justify-content-center
         font-bold bg-blue-500 text-white border-round m-2 px-5 py-3">bbb</div>
         <div class="fadeinleft animation-duration-1000 animation-iteration-infinite flex align-items-center justify-content-center
         font-bold bg-blue-500 text-white border-round m-2 px-5 py-3">ccc</div>
    </div>
</div> */}

      <Link to='/SecondPage' style={{ position: 'absolute', bottom: 4, right: 20, color: "blue", fontSize: 30 }}>next</Link>
      {/* <div style={{display: 'flex', justifyContent: 'right'}}>
            <button>Logout</button>
        </div> */}
    </div>
  );
}
export default MainPageComp;
