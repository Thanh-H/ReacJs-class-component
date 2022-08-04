import React from "react";
class Datacomponent extends React.Component {
    state ={
        showAnimal : false
    }
    handleShowHide =()=> {
        this.setState ({
            showAnimal:!this.state.showAnimal
        })
    }
    handleDelete = (animal)=>{
        this.props.deleteAnimal(animal)
    }
    render() {
        let {data}=this.props
        let {showAnimal}=this.state
        return (
            <div> {showAnimal === false ?
                <button onClick={()=>this.handleShowHide()}>Show</button>
            : <>
                <table className="table" > 
                    <thead> 
                        <tr>
                        <th> Item </th>
                        <th> Name</th>
                        <th>Legs</th>
                        </tr>
                    </thead>
                {data.map((item,index)=>
              <tbody  key={item.mdv} >
                <tr>
                <td>{item.mdv}</td>
                <td>{item.name}</td>
                <td>{item.leg}</td>
                <td onClick={()=>this.handleDelete(item)}> &nbsp; X  &nbsp; </td>
                </tr>
              </tbody>
              )}
              </table>
              <button onClick={()=>this.handleShowHide()}>Hide</button> </>
            }
            </div>
        )
    }
}
export default Datacomponent