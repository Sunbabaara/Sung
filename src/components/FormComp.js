import Image from "./Image"
function FormComp (){
    return (
        <form style ={{background:`url("./pics/meals.png")`}}>
            <div className="demo" >
            <input type="text" placeholder="enter name"/>
            <input type="number" placeholder="hotel room number"/>
            </div>
            <div className= "menu">
            <input type="text" placeholder="enter Breakfast"/>
            <input type="text" placeholder="enter Snack"/>
            <input type="text" placeholder="enter Lunch"/>
            <input type="text" placeholder="enter Super"/>
            <button>SUBMIT</button>
            </div>
    
        </form>
    );
}
export default FormComp;