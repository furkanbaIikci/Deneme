import { useEffect, useState } from "react";
import Users from "./Users";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import Grid from "@mui/material/Grid";
import { height } from "@mui/system";
import Messages from "./Messages";

function Odev2() {
    const [users, setUsers] = useState([]);
    const [openAddUserDialog, setOpenAddUserDialog] = useState(false);
    const [name, setName] = useState("");
    const [imgSrc, setImgSrc] = useState();
    const [selectedUser, setSelectedUser] = useState();
    const [userId, setUserId] = useState(0);
    const [message, setMessage] = useState();

    const [messages, setMessages] = useState([]);
    var userTemp;
    let changeUserId;
    let messageData;
    let newMsg;

    function createUser() {
        setOpenAddUserDialog(true);
        userTemp = {
            id: userId,
            userName: name,
            imageSource: imgSrc,
        };
        if (name) {
            setUsers((users) => [...users, userTemp]);
            console.log("bosdegil");
        }

        setOpenAddUserDialog(false);
        setName("");
        changeUserId = userId;
        console.log(changeUserId++);
        setUserId(changeUserId++);
    }

    function setDialogWindow() {
        setOpenAddUserDialog(!openAddUserDialog);
    }
    function sendMessage() {


        users.map((data) => {

            if (data.id === selectedUser) {
                console.log("giriyor", data.id);
                newMsg = {
                    msg: message,
                    user: data,

                }
            }
        })
        console.log(messages);
        setMessages((messages) => [...messages, newMsg])

    }

    return (
        <div>
            {selectedUser}
            <Button onClick={setDialogWindow}>
                <Icon sx={{ mr: 1 }}>add_circle</Icon>Add User
            </Button>

            <Grid container sx={{ my: 2, mx: 5 }} spacing={3}>
                {users.map((data) => {
                    return (
                        <Button key={data.id} onClick={() => setSelectedUser(data.id)}>
                            <Grid item>
                                <Users name={data.userName} img={data.imageSource} />
                            </Grid>
                        </Button>
                    );
                })}
            </Grid>

            <Grid container>
                <Dialog open={openAddUserDialog}>
                    <Grid item>
                        <Grid
                            container
                            spacing={2}
                            direction="column"
                            justifyContent="center"
                            sx={{ height: "200px", width: "400px" }}>
                            <Grid container alignItems="flex-end" direction="column">
                                <Grid item>
                                    <Button onClick={setDialogWindow}>
                                        <Icon sx={{ mr: 1 }}>close</Icon>
                                    </Button>
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                alignItems="center"
                                direction="column"
                                spacing={2}>
                                <Grid item>
                                    <TextField
                                        onChange={(e) => setName(e.target.value)}
                                        id="filled-basic"
                                        label="Enter Name"
                                        variant="filled"
                                        color="primary"
                                        name="namee"
                                    />
                                </Grid>
                                <Grid item>
                                    <input
                                        type="url"
                                        placeholder="Enter IMG URL"
                                        onChange={(e) => setImgSrc(e.target.value)}></input>
                                </Grid>
                                <Grid item>
                                    <Button onClick={createUser}>Olustur</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Dialog>
            </Grid>

            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="center">

                <Grid
                    item
                    sx={{ backgroundColor: "gray", width: "50%", height: "500px" }}>
                    <Grid container direction="column" alignItems="flex-start" justifyContent="flex-start">
                        {

                            messages.map((data) => {
                                return (
                                    <Grid key={data.user.id} item ml={3} mt={3}>
                                        <Messages users={data.user} msg={data.msg}></Messages>

                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Grid>

                <Grid item sx={{ width: "50%" }}  >

                    <Grid container>
                        <Grid item sx={{ width: "90%" }}>
                            <TextField onChange={(e) => setMessage(e.target.value)} fullWidth />
                        </Grid>
                        <Grid item sx={{ width: "10%" }} mt={1}>
                            <Button onClick={sendMessage} ><Icon>send</Icon></Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
export default Odev2;
