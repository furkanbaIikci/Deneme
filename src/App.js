import './App.css';
import Tab from './components/Tab';
import Api from './components/Api'
import TaskOne from './components/TaskOne';
import TaskTwo from './components/TaskTwo';
import Accordion from '@mui/material/Accordion';
import { AccordionDetails, AccordionSummary } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import TaskTwoTable from './components/TaskTwoTable';
import OnurUc from './components/OnurUc';
import Odev1 from './components/Odev1';
import Odev2 from './components/OdevIki/Odev2'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* Kullanulan */}

        {/* <TaskTwoTable sx={{ mb: 5 }}></TaskTwoTable>


        <Grid container rowSpacing={5} columnSpacing={1}>

          <Grid item xs={6}>
            <Accordion>
              <AccordionSummary>
                Users
              </AccordionSummary>
              <AccordionDetails>
                <TaskTwo></TaskTwo>

              </AccordionDetails>

            </Accordion>
          </Grid>
          <Grid item xs={6}>
            <Accordion>
              <AccordionSummary>
                Posts
              </AccordionSummary>
              <AccordionDetails>
                <TaskOne></TaskOne>

              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid> */}

        {/* <Odev1></Odev1> */}
        <Odev2></Odev2>


      </header>
    </div>
  );
}

export default App;
