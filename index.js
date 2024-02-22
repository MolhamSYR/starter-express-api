const express = require('express');
const app = express();
const axios = require('axios')

app.post('/update', async (req, res) => {

    var response = await axios.get('https://atccontests.glitch.me/updatecontests');

    console.log("response");

    return res.status(200).send();
});

app.get('/', (req, res) => {

    res.status(200).send("Hello world!!!");

})

function keepPinging() {

    var url = "https://atccontests.glitch.me/";
    
    console.log("Sending Ping to ATC");
    axios
    .get(url)
    .then(function (response) {
        console.log("RESPONSE: " + response);

        console.log("Sent Ping to ATC");

        setTimeout(keepPinging, 1000 * 60);
    })
    .catch(function (error) {
        console.log(error);
    });
    
    

}

app.listen(process.env.PORT || 3000, async (err) => {

    console.log("Running on Port 30000!!!");

    keepPinging();
    
    console.log("Finished Function");
})