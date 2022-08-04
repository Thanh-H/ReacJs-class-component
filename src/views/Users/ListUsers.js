import { toBeInTheDOM } from "@testing-library/jest-dom/dist/matchers";
import axios from "axios";
import React from "react";
import './ListUser.scss'
import { withRouter } from 'react-router-dom';

class ListUsers extends React.Component{

    state={
        listUser:[]
    }
handleGetUser=(user)=>{
   this.props.history.push(`/user/${user.id}`)
    console.log('check id',user)
}
   async componentDidMount(){
    
       let res= await axios.get('https://reqres.in/api/users?page=2')
       console.log(res.data.data)
       this.setState({
        listUser: res && res.data && res.data.data ? res.data.data : []
       })
       console.log('>>>check list user ', this.state.listUser)
    }
    render(){
        let {listUser}=this.state
        return(
            <div className="list-user-container">
              <div className="title"> Fetch all Lists User </div>
              <div className="list-user-content" >
              {listUser && listUser.length>0 && 
              listUser.map((item,index)=> {
                return(
                    <div onClick={()=>this.handleGetUser(item)} className="child" key={item.id}>
                       {index+1}-{item.first_name} {item.last_name}
                </div>
                )
              } ) }
              </div>
                
            </div>
        )
    }
}
export default withRouter(ListUsers)