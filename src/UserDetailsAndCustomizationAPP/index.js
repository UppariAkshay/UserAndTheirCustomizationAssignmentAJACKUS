import {Component} from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


class UserDetailsAndCustomizationAPP extends Component
{
    state = {allUser: [], newUser: {}}

    componentDidMount()
    {
        this.fetchAllUsers() // calling this method to get all users using fetching
    }

    fetchAllUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const responseInJson = await response.json()

        this.setState({allUser: responseInJson})
    }

    // this method will make a DELETE user by accessing the userID from arguments
    deleteUser = async userId => {
        const deleteUserUrl = `https://jsonplaceholder.typicode.com/users/${userId}`
        const options = {
            method: 'DELETE',
        }

        const response = await fetch(deleteUserUrl, options)
        const responseInJson = await response.json() // on DELETE request api gives empty object as deleted 

        this.setState(prevState => ({
            allUser: prevState.allUser.filter(eachUser => eachUser.id !== userId) // this will update our state and delete the user
        }))
    }

    displayUserInTableRow = userData => {
        return (
            <tr>
                <td>{userData.name}</td>
                <td>{userData.username}</td>
                <td>{userData.phone}</td>
                <td>{userData.email}</td>
                <td>{userData.address.city}</td>
                <td>{userData.company.name}</td>
                <td>{userData.website}</td>
                <td><button className='btn btn-dark'>Edit</button></td>

                {/* onClicking this delete button, we send ID as paramter for call back function deleteUser() for reference for DELETE requset to delete specific user */}
                <td><button onClick={() => this.deleteUser(userData.id)} className='btn btn-danger'>Delete</button></td>
            </tr>
        )
    }

    onChangeName = event => {
        this.setState(prevState => ({
            newUser: {...prevState.newUser, name: event.target.value}
        }))
    }

    onChangeUserName = event => {
        this.setState(prevState => ({
            newUser: {...prevState.newUser, username: event.target.value}
        }))
    }

    onChangPhone = event => {
        this.setState(prevState => ({
            newUser: {...prevState.newUser, phone: event.target.value}
        }))
    }

    onChangeEmail = event => {
        this.setState(prevState => ({
            newUser: {...prevState.newUser, email: event.target.value}
        }))
    }

    onChangeAddress = event => {
        this.setState(prevState => ({
            newUser: {...prevState.newUser, address: {city: event.target.value}}
        }))
    }

    onChangCompnay = event => {
        this.setState(prevState => ({
            newUser: {...prevState.newUser, company: {name: event.target.value}}
        }))
    }

    onChangeWebsite = event => {
        this.setState(prevState => ({
            newUser: {...prevState.newUser, website: event.target.value}
        }))
    }

    addNewUser = event => {
        event.preventDefault()

        this.addNewUserIntoDatabase() // calling this function to make a POST request to add new user
    }

    // this function will make a POST request to add a new user
    addNewUserIntoDatabase = async () => {
        const {newUser} = this.state

        const addNewUserUrl = 'https://jsonplaceholder.typicode.com/users'
        const options = {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              }
        }

        const response = await fetch(addNewUserUrl, options) // using POST request to add new user into database
        const responseInJson = await response.json() 

        console.log(responseInJson) // POST request gives new user data

        this.setState(prevState => ({
            allUser: [...prevState.allUser, responseInJson]
        })) // updating state with new user
    }

    render()
    {
        const {allUser} = this.state

        return (
            <div class='mainContainerDIV'>
                <h1>User Details</h1>
                
                {/* this form will help in adding new user by taking inputs from this form */}
                <form onSubmit={this.addNewUser} class="container-fluid addNewUserFORM">
                    <input onChange={this.onChangeName} class="form-control" type='text' placeholder='Enter name' />
                    <input onChange={this.onChangeUserName} class="form-control" type='text' placeholder='Enter user name' />
                    <input onChange={this.onChangPhone} class="form-control" type='text' placeholder='Enter Phone' />
                    <input onChange={this.onChangeEmail} class="form-control" type='text' placeholder='Enter Email' />
                    <input onChange={this.onChangeAddress} class="form-control" type='text' placeholder='Enter Address' />
                    <input onChange={this.onChangCompnay} class="form-control" type='text' placeholder='Enter Compnay Name' />
                    <input onChange={this.onChangeWebsite} class="form-control" type='text' placeholder='Enter Wesbite' />
                    <button type='submit' class='btn btn-success'>ADD</button>
                </form>


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
                    <tbody>
                        {
                            allUser.map(eachUser => this.displayUserInTableRow(eachUser)) // Iterating all users display each user in table row
                        }
                    </tbody>
                </table>
            </div>
            
        )
    }
}

export default UserDetailsAndCustomizationAPP