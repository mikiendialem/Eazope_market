import React from 'react'
import './Service.css';
import Grid  from '@mui/material/Grid'
import Stack from '@mui/material/Stack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function Service() {
return (
    <div className='service'>
        <h1>States about work!</h1>
        <Grid container spacing={4} columns={24}>
            <Grid item xs={8} className='serv'></Grid>
            <Grid item xs={8} className='ser'>
                <Stack spacing={2}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus officia nulla, animi excepturi voluptatibus aliquam dignissimos magnam est! Expedita, iste. 
                    Soluta animi nobis ea corporis odio vel saepe quia numquam.<ArrowForwardIcon/></p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus officia nulla, animi excepturi voluptatibus aliquam dignissimos magnam est! Expedita, iste. 
                    Soluta animi nobis ea corporis odio vel saepe quia numquam.<ArrowForwardIcon/></p>
                </Stack>
            </Grid>
            <Grid item xs={8} className='ser'>
                <Stack spacing={2}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusamus officia nulla, animi excepturi voluptatibus aliquam dignissimos magnam est! Expedita, iste. 
                        Soluta animi nobis ea corporis odio vel saepe quia numquam.<ArrowForwardIcon/></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusamus officia nulla, animi excepturi voluptatibus aliquam dignissimos magnam est! Expedita, iste. 
                        Soluta animi nobis ea corporis odio vel saepe quia numquam.<ArrowForwardIcon/></p>
                </Stack>
            </Grid>
        </Grid>
    </div>
)
}

export default Service
