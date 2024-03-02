import * as React from 'react'
import './Team.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Team() {
    return (
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
    );
}