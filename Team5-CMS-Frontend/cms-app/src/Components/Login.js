import axios from 'axios'
import React,{useState} from 'react'

import {Form,Button} from 'react-bootstrap'



function Login() {
    const [login,setLogin] = useState({})
    
    function handleChange(event){
        const name = event.target.name
        const value = event.target.value

        setLogin(values => ({...values,[name]:value}))
    }

    const handleSubmit = (event) => {
        console.log(login)
        event.preventDefault()

            axios   
                .post('/',login)
                .then(response => {
                    console.log(response)
                    alert(`Welcome ${login.username}`)
                })
                .catch(error => {
                    console.log(error)
                })
    }

    const handleReset = () => {
        console.clear()
    }
    return (
        <div>
            <div style={{ 
                    display: 'block', 
                    width: 700, 
                    padding: 30 ,
                    marginLeft : '35%',
                    marginTop : 50,
                    backgroundColor : 'rgb(90, 1, 0)'
                  }} > 
                <Form onSubmit={handleSubmit}>
                    <Form.Group className='mb-3' controlId='formUserName'>
                        <Form.Control
                        className='Form-Control'
                        id= 'UserName'
                        type= 'text'
                        placeholder='Enter username'
                        name = 'UserName'
                        value = {login.BookName}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formPassword'>
                        <Form.Control
                        className='Form-Control'
                        id='Password'
                        type='text'
                        placeholder='EnterPassword'
                        name = 'Password'
                        value = {login.Password}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>

                <Button type='submit' variant='primary' style={{backgroundColor:'rgb(218, 153, 79)',border:'none',color:'black'}}>Login</Button>
                <Button type='reset' variant='primary' style={{backgroundColor:'rgb(218, 153, 79)',border:'none',color:'black',marginLeft:20}} onClick={handleReset} >Cancel</Button>
                </Form>
            </div>        
        </div>
    )
}


export default Login