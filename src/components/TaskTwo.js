import { useState, useEffect } from "react"
import axios from 'axios';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Unstable_Grid2/Grid2";

function TaskTwo(){
    const [user,setUser] = useState([]);
    useEffect(() => {
      getData();
      
    }, [])

    async function getData() {
        await axios.get("https://jsonplaceholder.typicode.com/users").then(res=>setUser(res.data))
    }

    return (
        <div>
            {
                user.map((tab, index) =>

                    <Grid key={tab.id} container sx={{ m: 4, width: '500px' }}>
                        <Accordion >
                            <AccordionSummary
                            sx={{ backgroundColor: "#344f59" }}
                            >
                                <Typography color={"white"}>{tab.name}</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{backgroundColor: "#4e7482"}}>
                                <Typography color={"white"}>
                                    {tab.name}
                                    <br></br>
                                    {tab.username}
                                    <br></br>
                                    {tab.email}
                                    <br></br>
                                    {tab.website}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>

                )}

        </div>
    )
    
}

export default TaskTwo