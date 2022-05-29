import { React,} from "react";
import { Button, h4, Grid, Card, Box, CardContent, Typography, CardActions } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import '../App.css';
const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
    </Box>
);
function Welcome2() {
    return (
        <div >
            <Grid container spacing={3}>
                <h1>Contenidos</h1>
                <Grid item xs="auto">
                    <h2>1</h2>
                </Grid>
                <Grid item xs={6}>
                    <h2>2</h2>
                </Grid>
                <Grid item xs>
                    <h2>3</h2>
                </Grid>
            </Grid>
        </div >
    );
}
export default Welcome2;

