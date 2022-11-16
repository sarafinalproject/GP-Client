
/*const SecondPage = ()=>
{
    return(<h1>blablabla</h1>)

}
export default SecondPage*/
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function CategoryDropDown() {
  const [category, setCategory] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-controlled-open-select-label">Categories</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={category}
          label="Category"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          <MenuItem value={"Medicines"}>Medicines</MenuItem>
          <MenuItem value={"Baby_products"}>Baby_products</MenuItem>
          <MenuItem value={"Tools"}>Tools</MenuItem>
          <MenuItem value={"Electricity"}>Electricity</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}