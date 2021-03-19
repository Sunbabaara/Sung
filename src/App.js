import {useState} from "react";
import NavComp from "./components/NavComp";
import FormComp from "./components/FormComp";
import Footer from "./components/Footer";

function App() {
  //states for input
  const [breakfast, setBreakfast]=useState(
    [ "Oatsmeal", "Mole Porridge", "wheatmeal", "Tombrown", "Tea", "Omlet"
  ])
  const [snack, setSnack]=useState([
    "cake", "chips", "biscuit", "meatpie", "softdrinks"])
  const [lunch, setLunch]=useState([
    "rice", "banku", "fufu", "riceballs", "jollof", "waakye"])
  


  return (
    <div>
      <>
      <NavComp/>
      <FormComp/>
      <Footer/>
      </>
    </div>
  );
}

export default App;
