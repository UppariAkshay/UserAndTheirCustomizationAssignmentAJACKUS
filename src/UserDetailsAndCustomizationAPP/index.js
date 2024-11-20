import {Component} from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


class UserDetailsAndCustomizationAPP extends Component
{
    state = {allUser: []}

    // componentDidMount()
    // {
    //     this.fetchAllUsers() // calling this method to get all users using fetching
    // }

    // fetchAllUsers = async () => {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //     const responseInJson = await response.json()

    //     this.setState({allUser: responseInJson})
    // }

    // displayUserInTableRow = userData => {
    //     return (
    //         <tr>
    //             <td>{userData.name}</td>
    //             <td>{userData.username}</td>
    //             <td>{userData.phone}</td>
    //             <td>{userData.email}</td>
    //             <td>{userData.addrerss}</td>
    //             <td>{userData.company.name}</td>
    //             <td>{userData.website}</td>
    //             <td><button className='btn btn-dark'>Edit</button></td>
    //         </tr>
    //     )
    // }

    render()
    {
        const {allUser} = this.state

        return (
            <div class='mainContainerDIV'>
                <h1>User Details</h1>
                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">Company Name</th>
                        <th scope="col">Website</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {/* <tbody>
                        {
                            allUser.map(eachUser => this.displayUserInTableRow(eachUser)) // Iterating all users display each user in table row
                        }
                    </tbody> */}
                </table>
            </div>
            
        )
    }
}

export default UserDetailsAndCustomizationAPP