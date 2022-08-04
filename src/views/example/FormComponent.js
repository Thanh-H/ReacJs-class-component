import React from "react";


class Formcomponent extends React.Component {
    state ={
        mdv:'',
        name:'',
        leg:''
    }
  
    handleOnchangeMdv =(e)=> {
        this.setState ({
            mdv: e.target.value
        })
    }
    handleOnchangeName = (e)=> {
        this.setState ({
            name : e.target.value
        })
    }
    handleOnchangeLeg = (e)=> {
        this.setState ({
            leg : e.target.value
        })
    }
    handleSubmit =(e)=>{
        e.preventDefault()
       if(!this.state.mdv || !this.state.name || !this.state.leg) {
        alert ('missing data')
        return;
       }
       this.props.addAnimal(
        {
            mdv: this.state.mdv,
            name: this.state.name,
            leg:this.state.leg
        }
       )
       this.setState({
        mdv:'',
        name:'',
        leg:''
       })
    }
    
       render() {
        return (
            <form className="form">
                <div >
                    <h5 className="hh" >Mã Động Vật</h5>
                    <input value={this.state.mdv} type='text' onChange={(e)=>this.handleOnchangeMdv(e)} ></input>
                </div>

                <div >
                    <h5 >Name</h5>
                    <input value={this.state.name} type='text' onChange={(e)=>this.handleOnchangeName(e)}  ></input>
                </div>

                <div >
                    <h5 >leg</h5>
                    <input value={this.state.leg} type='text' onChange={(e)=>this.handleOnchangeLeg(e)}  ></input>
                </div>
                <button onClick={(e)=>this.handleSubmit(e)}>Submit</button>
            </form>
            )
    }
}
export default Formcomponent