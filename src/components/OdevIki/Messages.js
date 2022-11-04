import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

function Messages(props) {
    //mesajı gonderen kullanici,
    //mesaj

    //tarih
    console.log(props.users);

    return (
        <div>
            <Grid container>
                <Grid item>
                    <img src={props.users.imageSource} width="50px" height="50px" style={{ borderRadius: "50%" }}></img>
                </Grid>
                <Grid item>
                    {props.users.userName}
                </Grid>
                <Grid item sx={{ backgroundColor: "#25a5be" }} maxHeight="50px" style={{ borderRadius: "30%" }} mx={3} >
                    <Typography px={3} py="14%" sx={{ color: "white" }} justifyContent="center" alignItems="center">
                        {props.msg}
                    </Typography>
                </Grid>
            </Grid>
        </div >
    )
}
export default Messages;