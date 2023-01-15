
import logo from '../gemach.png'
import {  Routes, Route, Link } from 'react-router-dom';
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
const AddNewGemach = ()=>
{
    return(
    <div>
		    {/* <Link to='/'><img src={logo} alt="gemach" /></Link> */}
            <AppBar position="static">
        <Toolbar>
          <Typography variant="h6"
            component="div" sx={{ flexGrow: 1 }}>
            Add New Gemach
          </Typography>
    <Link to='/'><img src={logo} alt="gemach" /></Link>
            </Toolbar>
      </AppBar>
        <h1>to take this form from Chaya</h1>
  
    </div>
    )

}
export default AddNewGemach

