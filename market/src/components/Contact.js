import React from 'react'
import './Contact.css'
import Grid  from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

function Contact() {
return (
    <div className='contact'>
        <Grid container spacing={3} columns={32}>
            <Grid item xs={8}>
                <h1>Eazope Market</h1>
                <p>The website for trading</p>
            </Grid>
            <Grid item xs={8}>
                <Stack spacing={2}>
                    <h1>Componys</h1>
                    <p>Event</p>
                    <p>Price</p>
                    <p>Career</p>
                    <p>Faq's</p>
                    <p>Blogs</p>
                </Stack>
            </Grid>
            <Grid item xs={8}>
                <Stack spacing={2}>
                    <h1>Quick lines</h1>
                    <p>Testimonies</p>
                    <p>Service</p>
                    <p>Portofolio</p>
                </Stack>
            </Grid>
            <Grid item xs={8}>
                <Stack spacing={2}>
                    <h1>Get in touch:</h1>
                    <p><LocalPhoneIcon/>+251941900743</p>
                    <p><EmailIcon/>femibiki273@gmail.com</p>
                    <p><FmdGoodIcon/>Addis Ababa, Ethiopia</p>
                </Stack>
            </Grid>
        </Grid>
    </div>
)
}

export default Contact
