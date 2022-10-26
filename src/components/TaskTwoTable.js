import { useState, useEffect } from "react";
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function TaskTwoTable() {
    const [users, setUsers] = useState([]);
    const [dataKeys, setDataKeys] = useState([]);

    useEffect(() => {
        getData();

        console.log("asd")
    }, [])

    async function getData() {
        await axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
            setUsers(res.data);

            while (true) {
                if (res.data[0] != null) {
                    setDataKeys(Object.keys(res.data[0]))
                }
                break;
            }


        })
    }





    return (
        <div>
            
            {
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                {
                                    dataKeys.map((data) => {
                                        return (
                                            <TableCell key={data} align="center">{data}</TableCell>
                                        )
                                    })
                                }
                                {/* <TableCell>ID</TableCell>
                                <TableCell align="center">Name</TableCell>
                                <TableCell align="center">Username</TableCell>
                                <TableCell align="center">Email</TableCell>
                                <TableCell align="center">Adress</TableCell>
                                <TableCell align="center">Phone</TableCell>
                                <TableCell align="center">Website</TableCell>
                                <TableCell align="center">Company</TableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user) => (

                                <TableRow
                                    key={user.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    {dataKeys.map((keyy) => {
                                        //console.log(user["'"+key+"'"]);

                                        /* let icerik = "";
                                        while (user[keyy] == Object) {
                                            user[keyy].map((data)=>{
                                                if(data==obj)
                                            })
                                        } */
                                        if (typeof ((user[keyy])) != 'object') {


                                            return (

                                                <TableCell key={user[keyy]} align="left">{user[keyy]}</TableCell>

                                            )
                                        } else {
                                            return (
                                                <TableCell key={user.id + "1" + keyy.toString()} align="left"></TableCell>
                                            )

                                        }
                                    })}
                                    {/* <TableCell component="th" scope="row">
                                        {user.id}
                                    </TableCell>

                                    <TableCell align="left">{user.name}</TableCell>
                                    <TableCell align="left">{user.username}</TableCell>
                                    <TableCell align="left">{user.email}</TableCell>
                                    <TableCell align="left">{user.address.street}/ {user.address.city}</TableCell>
                                    <TableCell align="left">{user.phone}</TableCell>
                                    <TableCell align="left">{user.website}</TableCell>
                                    <TableCell align="left">{user.company.name}</TableCell> */}

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            }

        </div>

    )

}
export default TaskTwoTable;