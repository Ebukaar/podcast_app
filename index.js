const express = require("express");

const { google } = require("googleapis");

const app = express();

const async podcast = () => {


const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
});


// Create client instance for auth
const client = await auth.getClient();


// Instance of google sheets API
const googleSheets = google.sheets({version: "v4", auth: client});


const spreadsheetId = "1Al76fyd5nyurJ5GTklVODehuFBGDK3_4M46RwklkPaA";

// // Get metaData about spreadsheets
// const metaData = await googleSheets.spreadsheets.get({
//     auth,
//     spreadsheetId,

// });
}

app.get("/", async (req, res) => {
    // Read rows from spreadsheet
    const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: "Sheet1!A1:A3",
    })


    res.send(getRows.data);

});

app.get("/podcast", async (req, res) => {

    const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: "Sheet1!B1:B3",
    })

    res.send(getRows.data);
    
});


app.listen(1337, (req,res) => console.log("running on 1337"));




