
import React, { useState, useEffect } from 'react';
import UtilsService from './UtilsService';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
// import logo1 from './toolsIcon.png'
import logo from '../gemach.png'
import MainPageComp from './MainPageComp';
import { Routes, Route, Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import ReactLoading from "react-loading";



import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from '@mui/material';

export default function CategoryDropDown() {

  const [products, setProducts] = useState([]);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [productsByCategory, setProductsByCategory] = useState([]);
  const [valueProductField, setValueProductField] = useState('')
  const utilsService = new UtilsService();
  const [cities, setCities] = useState([])
  const [valueCityField, setValueCityField] = useState('')
  // const [CategoriesClear, setCategoriesClear] = useState('')


  useEffect(async () => {

    await utilsService.getItems("http://localhost:8000/api/products")
      .then(data => {
        setProducts(data)
        console.log(data)
        if (products)
          createRows(data)
      })

  }, [])

  const onSelectCategory = (event) => {
    setProductsByCategory([])
    setCities([])
    setValueProductField('')
    setValueCityField('')
    const categorySeleced = products.filter((item) => {
      if (item.category.toLowerCase() === event.toLowerCase())
        return item.name;
    })
    setProductsByCategory(categorySeleced)
    console.log('categorySeleced', categorySeleced)
  };
  const onSelectProduct = (event) => {
    setValueProductField(event)
    setValueCityField('')
    setCities([])
    const filterProducts = productsByCategory.filter((i) => {
      if (i.name.toLowerCase() === event.toLowerCase()) {
        return i;
      }
    })
    setCities(filterProducts)
    console.log(event, filterProducts)
  }
  const onSelectCity = (event) => {
    setValueCityField(event)

  }
  const Categories = ['Medicines', 'Baby products', 'Work tools', 'Electricity']

  const createRows = (data) => {
    const a = data.map((i, key) => {
      return { id: key, category: i.category, name: i.name, city: i.city , street: i.street, phone:i.phone, description: i.description}
    })
    setRows(a);
    console.log('a', a)
    setLoading(true)
  }

  const columns = [
    { field: 'category', headerName: 'Category', width: 150 },
    { field: 'name', headerName: 'Product name', width: 150 },
    { field: 'city', headerName: 'City', width: 150 },
    { field: 'street', headerName: 'Street', width: 150 },
    { field: 'phone', headerName: 'Phone', width: 150 },
    { field: 'description', headerName: 'Description', width: 150 },



  ];
  const changeRow = () => {
    console.log('products', products)
    setLoading(false)
    const searchResult = products.filter((i, key) => {
      if (i.category.toLowerCase() === productsByCategory[0].category.toLowerCase() && i.name.toLowerCase() === valueProductField.toLowerCase() && i.city.toLowerCase() === valueCityField.toLowerCase()) {
        return i;
      }
    })
    createRows(searchResult)
  }


  const clearSearch = () => {
    setValueCityField('')
    setValueProductField('')
    setProductsByCategory([{}])
    // setCategoriesClear('')
    createRows(products)
  }


  return (

    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6"
            component="div" sx={{ flexGrow: 1 }}>
            Search For Gemach
          </Typography>
          <Link to='/'><img src={logo} alt="gemach"/></Link>
        </Toolbar>
      </AppBar>

      <div style={{ margin: '20px 200px' }}>
        <p>SEARCH PRODUCT</p>
        <div style={{ display: 'flex', margin: '0px 0 60px' }} >

          <Autocomplete
            value={productsByCategory[0]}
            options={Categories}
            sx={{ width: 300 }}
            onChange={(event, newValue) => {
              onSelectCategory(newValue);
            }}
            renderInput={(params) => <TextField {...params} label="Category" />}
          />
          <Autocomplete
            value={valueProductField}
            options={productsByCategory.map((i) => {
              return i?.name?.charAt(0).toUpperCase() + i?.name?.slice(1)
            })}
            sx={{ width: 300 }}
            onChange={(event, newValue) => {
              onSelectProduct(newValue);
            }}
            renderInput={(params) => <TextField {...params} label="Products" />}
          />
          <Autocomplete
            value={valueCityField}
            options={cities?.map((i) => {
              return i.city ? i.city : 'Missing city data';
            })}
            sx={{ width: 300 }}
            onChange={(event, newValue) => {
              onSelectCity(newValue);
            }}
            renderInput={(params) => <TextField {...params} label="Cities" />}


          />

          <Button disabled={!valueCityField} variant="outlined" onClick={changeRow}>Search</Button>
          <Button disabled={!valueCityField}onClick={clearSearch}>Clear Search</Button>

          {/* <img src={logo2} alt="loading..." style={{ display: 'flex', marginTop: '50px', alignItems: 'center' }} /> */}

        </div>
        {loading ?
          <div style={{ height: 300, width: '100%' }}>
            <p>All product {rows.length}</p>
            <DataGrid rows={rows} columns={columns} />
          </div> :
          <ReactLoading
            type="spinningBubbles"
            color="#0000FF"
            height={100}
            width={50}
          />
        }
      </div>
    </div>
  );

}



