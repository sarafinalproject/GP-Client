// import logo from './logo.svg';
import logo from './gemach.png'
import Products from './components/Products'
// import './App.css';
import MainPageComp from './components/MainPageComp';
import SecondPage from './components/SecondPage';
import CategoryDropDown from './components/SecondPage';
import {  Routes, Route, Link } from 'react-router-dom';
import PersonalArea from './components/PersonalArea';
import AddNewGemach from './components/AddNewGemach'
import AddNewGmach2 from './components/AddNewGmach2'
import Some from './components/Some'
import Loading from './components/Loading'
// import Form from './components/Form'
// import 'Secondtest.css'
//import Test from './components/Test'
function App() {
  
  return (
    <div className="App">
      {/* <Loading></Loading> */}
      {/* <Try></Try> */}
      {/* <Header></Header> */}
      {/* <img src={logo} alt="gemach" />; */}
      {/* <Form></Form> */}
      {/* <Some></Some> */}
      {/* <Test></Test> */}
        <Routes>
          <Route path="*" element={<MainPageComp />} />
          <Route path={'.logo'} element={<MainPageComp />} />
          <Route path={'/SecondPage'} element={<CategoryDropDown/>} />
          <Route path={'/PersonalArea'} element={<PersonalArea />} />
          <Route path={'/AddNewGmach2'} element={<AddNewGmach2/>} />


        </Routes>
    </div>
  );
}
export default App;