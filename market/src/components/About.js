import React from 'react'
import './About.css'
import Grid  from '@mui/material/Grid'
import Button from '@mui/material/Button'

function About() {
return (
    <div className='about'>
        <Grid container spacing={4} columns={16}>
        <Grid item xs={8} className='abtt'>
            <h1>States about work!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus officia nulla, animi excepturi voluptatibus aliquam dignissimos magnam est! Expedita, iste. 
                Soluta animi nobis ea corporis odio vel saepe quia numquam.</p>
            <Button variant='outlined'>View More</Button>
        </Grid>
        <Grid item xs={8} className='abt'></Grid>
        </Grid>
    </div>
)
}

export default About;
