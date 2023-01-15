import { Link, Router } from 'react-router-dom';
import logo from '../gemach.png'
import { Button } from '@mui/material';
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

const PersonalArea = ()=>
{
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
    <Link to='/AddNewGemach' style={{ fontSize: '18px' }}>Add New Gemach</Link>
  </Button>

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