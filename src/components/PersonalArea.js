import { Link, Router } from 'react-router-dom';
import logo from '../gemach.png'
import { Button } from '@mui/material';
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import UtilsService from './UtilsService';


const PersonalArea = ()=>

{
	const utilsService = new UtilsService();
	 const delete1= () => {utilsService.deleteItem("http://localhost:8000/api/products","6356ec7714460ce520baf4f6");
	alert("del");}
	// const delete1=()=>{alert("hhhhhh");}
    return(
    <div>
		    {/* <Link to='/'><img src={logo} alt="gemach" /></Link> */}
			<AppBar position="static">
        <Toolbar>
          <Typography variant="h6"
            component="div" sx={{ flexGrow: 1 }}>
            Gemach Personal Area
          </Typography>
    <Link to='/'><img src={logo} alt="gemach" /></Link>
            </Toolbar>
      </AppBar>

    <Button variant="outlined" style={{marginLeft: '62%'}}>
    <Link to='/AddNewGmach2' style={{ fontSize: '18px' }}>Add New Gemach</Link>
  </Button>
  <Button variant="outlined" style={{marginRight:'62%'} } onClick={delete1}>Delete</Button>
  
        <h1>Hello + user !+</h1>
        <h2>Here you can find all your own Gemach</h2>
        <table>
		<tr>
		<th>Product Name</th>
		<th>Description</th>
		<th>Gender</th>
		</tr>
		<tr>
		<td>Anom</td>
		<td>19</td>
		<td>Male</td>
		</tr>
		<tr>
		<td>Megha</td>
		<td>19</td>
		<td>Female</td>
		</tr>
		<tr>
		<td>Subham</td>
		<td>25</td>
		<td>Male</td>
		</tr>
	</table>
    </div>
    )

}
export default PersonalArea