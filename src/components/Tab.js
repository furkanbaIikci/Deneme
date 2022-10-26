import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';
import GetData from '../GetData';
import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';

function Tab({ children, activeTab }) {
    const [active, setActive] = useState(activeTab)
    const arabalar = [["nissan", "350z"], ["toyota", "supra"]];
    var users = [];

    useEffect(() => {
        console.log("calisiyor");

        /* fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                users = json;
                console.log("users", users);
            }) */

        //users = dataGetir();
        
            users = dataGetir();

          /*   users.forEach(element => {
                console.log(element);
            }); */

            console.log(users);

    }, [])

    function yazdir(){
        console.log(users);
        console.log("deneme");
    }


    return (
        <div>
            <nav>
                {children.map((tab, index) =>
                    <Grid key={index}>
                        <Button onClick={() => setActive(index)}
                            variant="contained" size="large" color={active === index ? "secondary" : "primary"}>
                            {tab.props.title}
                        </Button>
                    </Grid>
                )}
            </nav>
            {children[active]}
            {/*  {
                setTimeout(() => {
                    console.log("users" , users)    
                }, 1000)
                
            } */}

            {

                users.map((data) => {

                    console.log(JSON.stringify(data));
                })
            }
            <Button onClick={yazdir}>tikle</Button>

        </div>
    )
}

export default Tab

Tab.Panel = function ({ children, title }) {
    return (
        <div>
            <Grid >
                {children}
            </Grid>
            <Grid>
                deneme
            </Grid>
        </div>
    )
}


 function dataGetir() {
    let users = [];

    setTimeout(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
            let resData = res.data;
            resData.forEach(element => {
               users.push(element);
            });
    })
    }, 1500);
  
setTimeout(() => {
    return users;

}, 2500);
    
}