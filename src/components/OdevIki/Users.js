import Grid from '@mui/material/Grid'


function Users(props) {
    const name = props.name;
    return (
        <div>
            <Grid key={props.name} container direction="column" spacing={1}>
                <Grid item>
                    {name}
                </Grid>
                <Grid item>
                    <img width={50} height={50} style={{ borderRadius: "50%" }} src={props.img}></img>
                </Grid>
            </Grid>
        </div>
    )

}
export default Users;