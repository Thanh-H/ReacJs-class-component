import React from "react";
import Formcomponent from "./FormComponent";
import Datacomponent from "./DataComponent";
import './demo.scss'
class Mycomponent extends React.Component {
    state = {arrAnimal :[
        {mdv:1, name:'Dog', leg:'4'},
        {mdv:2, name:'chicken', leg:'2'}
    ]} 
    addAnimal=(animal)=>{
        this.setState({
            arrAnimal: [...this.state.arrAnimal, animal]
        })
    }
    deleteAnimal=(animal)=> {
        let curentAnimal = this.state.arrAnimal 
        curentAnimal=curentAnimal.filter(item=> item.mdv !== animal.mdv)
        this.setState({
            arrAnimal:curentAnimal
        })
    }
    render(){
        return(
            <div>
                <Formcomponent
                addAnimal={this.addAnimal} />
                <Datacomponent 
                deleteAnimal={this.deleteAnimal}
                data={this.state.arrAnimal}
                />
            </div>
        )
    }
}
export default Mycomponent 