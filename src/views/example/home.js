import React from "react";
import logo from '../../assets/img/phong-canh-1.jpg'
import {connect} from 'react-redux'
class Home extends React.Component {
    handleDeleteUser(user){
        console.log(user)
     
      this.props.deleteUserRedux(user);
  
    }
    handleCreateUser(){
        this.props.addUserRedux()
    }

    render(){
        let {dataRedux}=this.props
        return(

            <div>
                <img style={{width:'300px'}} src={logo}></img>
                { dataRedux && dataRedux.length>0 && dataRedux.map((item,index)=>{
                    return (  <div key={item.id}> {index+1} {item.name}  
                    <span onClick={()=>this.handleDeleteUser(item)} > &nbsp; x</span> 
                    </div> )
                      } )}
                      <button onClick={()=>this.handleCreateUser()} >Add new</button>
                
            </div>
            
        )
    }
}
const mapStateToProps = (state) =>  {
return{dataRedux: state.users}
}
const mapDispatchToProps =(dispatch) =>{
    return {
        deleteUserRedux: (userDelete) => dispatch({ type:'DELETE_USER',payload: userDelete}),
        addUserRedux: ()=> dispatch({type: 'CREATE_USER'}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)