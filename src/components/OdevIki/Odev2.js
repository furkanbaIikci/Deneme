import { useEffect, useState } from "react";
import Users from "./Users";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Icon from '@mui/material/Icon';
import Grid from '@mui/material/Grid'
import { borderRadius } from "@mui/system";


function Odev2() {
    const [users, setUsers] = useState([]);
    const [openAddUserDialog, setOpenAddUserDialog] = useState(false);
    const [name, setName] = useState("");
    const [imgSrc, setImgSrc] = useState();
    const [selectedUser, setSelectedUser] = useState();
    var userTemp;



    function createUser() {
        setOpenAddUserDialog(true);
        userTemp = {
            userName: name,
            imageSource: imgSrc
        }
        if (name) {

            setUsers((users) => [...users, userTemp]);
            console.log("bosdegil");
        }
        console.log(users);
        setOpenAddUserDialog(false);
        setName("");
    }

    function getUser() {
        console.log(users);
    }

    function setDialogWindow() {
        setOpenAddUserDialog(!openAddUserDialog);
    }



    return (
        <div>
            {/*  <Users name="furkan" />
            <Users name="balikci" />
            <Users name="asd" />
 */}


            <Button onClick={setDialogWindow}><Icon sx={{ mr: 1 }}>add_circle</Icon>Add User</Button>

            <Grid container sx={{ mx: 5 }} spacing={3}>
                {users.map((data) => {
                    return (
                        <Button onClick={(e) => setSelectedUser(data.userName)}>
                            <Grid item key={data.userName}>
                                <Users name={data.userName} img={data.imageSource} />
                            </Grid>
                        </Button>
                    )
                })}
            </Grid>

            {selectedUser}

            <Grid container>
                <Dialog open={openAddUserDialog}>
                    <Grid item>
                        <Grid container

                            spacing={2}
                            direction="column"


                            justifyContent="center"

                            sx={{ height: '200px', width: '400px' }}
                        >
                            <Grid container alignItems="flex-end" direction="column" >
                                <Grid item>

                                    <Button onClick={setDialogWindow}><Icon sx={{ mr: 1 }}>close</Icon></Button>
                                </Grid>

                            </Grid>
                            <Grid container alignItems="center" direction="column" spacing={2}>
                                <Grid item >
                                    <TextField
                                        onChange={(e) => setName(e.target.value)}
                                        id="filled-basic"
                                        label="Enter Name"
                                        variant="filled"
                                        color="primary"
                                        name="namee"
                                    />
                                </Grid>
                                <Grid item >
                                    <input type="url" placeholder="Enter IMG URL" onChange={(e) => setImgSrc(e.target.value)}></input>
                                </Grid>
                                <Grid item>
                                    <Button onClick={createUser}>Olustur</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Dialog>
            </Grid>
        </div >
    );
}
export default Odev2;
