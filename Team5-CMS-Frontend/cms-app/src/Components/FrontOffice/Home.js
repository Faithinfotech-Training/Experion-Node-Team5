import React from 'react'
import {Link } from 'react-router-dom'
function Home() {
    return (
        <div style={{
            display: 'block',
            width: 700,
            padding: 30,
            marginLeft: '35%',
            marginTop: 50,
            backgroundColor: 'rgb(90, 1, 0)'
        }}>

            <Link to='/addpatient'><button style={{ backgroundColor: 'rgb(218, 153, 79)', border: 'none', color: 'black', width: '100%', height: "100%" }}>Patient Registration</button><br /><br /></Link>
            <Link to='/viewpatient'><button style={{ backgroundColor: 'rgb(218, 153, 79)', border: 'none', color: 'black', width: '100%', height: "100%" }}>Patient Record</button> <br /><br /></Link>
            <Link to='/doctorassign'><button style={{ backgroundColor: 'rgb(218, 153, 79)', border: 'none', color: 'black', width: '100%', height: "100%" }}>Doctor Assignment</button>  <br /> <br /></Link>
            <Link to='/daywiselabreport'><button style={{ backgroundColor: 'rgb(218, 153, 79)', border: 'none', color: 'black', width: '100%', height: "100%" }}>Day-Wise Lab Report</button><br /><br /></Link>
            <button style={{ backgroundColor: 'rgb(218, 153, 79)', border: 'none', color: 'black', width: '100%', height: "100%" }}>Pre-Booking</button>
        </div>
    )
}
export default Home;