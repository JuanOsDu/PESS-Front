import { React } from "react";
import { Card, Box } from '@mui/material';
import '../App.css';
import ResponsiveAppBar from './navbar';
import bg from '../media/bgWel.jpg'

function Welcome() {
    return (
        <div className="Welcome">
            <ResponsiveAppBar />
            <Box className="card-insert" sx={{ minWidth: 250 }}>
                <Card>
                    <div className="top">
                        <h1>Bienvenido a PESS</h1>
                    </div>
                    <div className="bgWel">
                    </div>
                    <br></br>
                </Card>
            </Box>
            <img src={bg} alt="background" className="imgBg"></img>

        </div >
    );
}
export default Welcome;

