import { React } from "react";
import { Card, Box } from '@mui/material';
import '../App.css';
import ResponsiveAppBar from './navbar';


function Welcome() {
    return (
        <div className="Welcome">
            <ResponsiveAppBar/>
            <Box className="card-insert" sx={{ minWidth: 250 }}>
                <Card>
                    <div className="top">
                        <h1>Bienvenido a PESS</h1>
                    </div>
                    <br></br>
                </Card>
            </Box>
            
        </div >
    );
}
export default Welcome;

