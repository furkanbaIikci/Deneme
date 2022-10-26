import axios from 'axios';
import { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

function OnurUc() {
    const [user, setUser] = useState([]);
    const [ad, setAd] = useState("");
    const [soyAd, setSoyAd] = useState("");
    useEffect(() => {
        axios.get('http://192.168.10.8:8080/api/listele').then(res => {

            setUser(res.data);
            console.log(user);
        })


    }, [])





    function postData() {
        axios.post("http://192.168.10.8:8080/api/kaydet", {
            ad: ad,
            soyAd: soyAd,
        }).then(function (response) {
            console.log("basarili", response)
        }

        ).catch(function (error) {
            console.log("basarisiz", error)
        }

        )
    }

    function listele() {
        user.map((data) => {
            console.log(data.ad);
        }

        )
    }


    return (
        <div>
            <TextField key="1" xs={{ m: 5 }} id="filled-basic" color='success' label="Ad" variant="filled" onChange={e => setAd(e.target.value)} />

            <br />
            <TextField key="2" id="filled-basic" color='success' label="Soyad giriniz" variant="filled" onChange={e => setSoyAd(e.target.value)} />
            <br />
            <Button variant="contained" onClick={postData}>Contained</Button>


            <button onClick={listele}>
                tikla
            </button>
        </div>
    )

}
export default OnurUc;