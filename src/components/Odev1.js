import axios from "axios";
import { useState, useEffect, forwardRef } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = forwardRef(function Alert(props, ref) {
    const alertShow = true
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Odev1() {
    const [users, setUsers] = useState([]);
    const [randomUser, setRandomUser] = useState([]);
    const [tempUsers, setTempUsers] = useState([]);
    const [messageDialog, setMessageDialog] = useState(false);
    const [message, setMessage] = useState("");
    const [removeId, setRemoveId] = useState();
    let sayi;
    let temp = new Set();

    useEffect(() => {
        getData();
    }, []);

    //verileri getiren fonk.
    async function getData() {
        await axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                setUsers(res.data);
            })
            .catch((e) => {
                setMessageDialog(true);
                setMessage(e, "Data could not be loaded!");
                setTimeout(() => {
                    setMessageDialog(false);
                }, 5000);
            });
    }

    //Hangi kullanicinin getirelecegini belirlemek icin atanan random sayi
    function getRandomNumber() {
        while (randomUser.length !== users.length) {
            sayi = Math.floor(Math.random() * 10);

            if (!randomUser.includes(users[sayi])) {
                setRandomUser([...randomUser, users[sayi]]);
                setTempUsers([...randomUser, users[sayi]]);
                break;
            }
        }
    }

    //Son eklenen kullaniciyi kaldiran fonksion
    function removeUserCard() {
        if (randomUser.length === 0) {
            setMessageDialog(true);
            setMessage("No users!");
            setTimeout(() => {
                setMessageDialog(false);
            }, 1000);
        } else {
            randomUser.pop();
            setRandomUser([...randomUser]);
            setTempUsers([...randomUser]);
        }
    }

    //Girilen idye gore kullaniciyi kaldiran fonk.
    function removeUserById(id) {
        id = removeId;
        setRemoveId();
        let count = 0;
        randomUser.forEach((element) => {
            if (element.id == id) {
                randomUser.splice(count, 1);
                count = -1;
            } else {
                count++;
            }
        });
        if (count === randomUser.length) {
            setMessageDialog(true);
            setMessage("User Not Found");
            setTimeout(() => {
                setMessageDialog(false);
            }, 1000);
        } else {
            setRandomUser([...randomUser]);
            setTempUsers([...randomUser]);
        }
    }

    //Isme gore filtreleme yapan fonk.
    function filterByName(event) {
        temp.clear();

        tempUsers.filter((element) => {
            if (
                element.name.toLowerCase().includes(event.target.value.toLowerCase())
            ) {
                temp.add(element);
            }
        });
        setRandomUser(Array.from(temp));
    }

    return (
        <div>
            {/* Random user cagiran buton */}
            <Button variant="contained" onClick={getRandomNumber}>
                Get User
            </Button>

            {/* Son eklenen kullaniciyi kaldiran buton */}
            <Button variant="contained" sx={{ m: 3 }} onClick={removeUserCard}>
                Remove Last User
            </Button>

            {/* Isme gore yapılan filtreleme icin alınan text input*/}
            <TextField
                onChange={filterByName}
                id="filled-basic"
                label="Filter by Name"
                variant="filled"
                size="small"
                color="primary"
                sx={{ my: 2 }}
            />

            {/* Girilen idye gore kaldırma */}
            <TextField
                onChange={(e) => setRemoveId(e.target.value)}
                id="filled-basic"
                label="ID for Remove"
                variant="filled"
                size="small"
                color="primary"
                sx={{ my: 2, mx: 3 }}
            />
            {/* Idye gore yapılan kaldırma islemi icin buton */}
            <Button variant="contained" onClick={removeUserById}>
                Remove User By Id
            </Button>

            {/* Hata mesajlarini gosteren snackbar */}
            <Snackbar open={messageDialog} autoHideDuration={1000}>
                <Alert severity="error" sx={{ width: "100%" }}>
                    {message}
                </Alert>
            </Snackbar>

            {/* User kartlarinin bastirildigi alan */}
            <Grid container>
                {randomUser.map((data) => {
                    return (
                        <Grid key={data.id} item mx={3} mb={3}>
                            <Card sx={{ minWidth: 250 }}>
                                <CardContent>
                                    <Typography variantMapping={{ caption: "id" }}>
                                        {data.id}
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} color="black">
                                        {data.name}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
}
export default Odev1;
