import React from "react";
import axios from "axios";
import { withRouter } from 'react-router-dom';

class DetailUser extends React.Component {
    state = {
        detailUser: {}
    }
    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id
            let res = await axios.get(`https://reqres.in/api/users/${id}`)
            console.log(res)
            this.setState({
                detailUser: res.data && res.data.data ? res.data.data : {}

            })
            console.log(this.state.detailUser)
        }

    }
    handleBackUser=()=>{
        this.props.history.push('/user')
    }
    render() {
        let { detailUser } = this.state
        let isEmptyObj = Object.keys(detailUser).length === 0;

        return (
            <div className="detail-user-container">
                <div>Profile USer</div>
                {isEmptyObj === false &&
                    <>
                        <div>Name: {detailUser.first_name} {detailUser.last_name}  </div>
                        <div>Email: {detailUser.email}   </div>
                        <img src={detailUser.avatar}></img>
                        <br/>
                        <button type="button" onClick={()=>this.handleBackUser()}>Back</button>
                    </>}
                    
            </div>
        )
    }
}
export default withRouter(DetailUser) 