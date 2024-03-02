import React from 'react'
import './Home.css'
import './About.css'
import './Service.css'
import './Team.css'
import './Contact.css'
import Grid  from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

function All() {
return (
    <div className="all">
        <div className="home">
            <h1>We sell an amazing products!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat reprehenderit, odit sed, saepe nisi in perferendis dolorem iusto numquam consectetur atque fugit, quae vitae quia.
                Natus repellat ex vitae qui!</p>
        </div>
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
        <div className="team">
            <h1>Teams are working</h1>
            <div className="team-cards">
                <Card sx={{ maxWidth: 345 }} className='cards'>
                <CardMedia
                    sx={{ height: 140 }}
                    image="../asstes/abt.jpg"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }} className='cards'>
                <CardMedia
                    sx={{ height: 140 }}
                    image="../asstes/Contact.jpg"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }} className='cards'>
                <CardMedia
                    sx={{ height: 140 }}
                    image="../asstes/homeback.jpg"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }} className='cards'>
                <CardMedia
                    sx={{ height: 140 }}
                    image="../asstes/payment.jpg"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
                </Card>
            </div>
            <div className="cont">
                <div className="count-1">
                    <h2>Let's Get In Touch</h2>
                    <h2>Ready to start your Journey</h2>
                    <p>check it out</p>
                </div>
                <div className="count-2">
                    <Button variant="outlined">view more</Button>
                </div>
            </div>
        </div>
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
    </div>
)
}

export default All
