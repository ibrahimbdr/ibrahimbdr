
// Create a new date instance dynamically with JS

let d = new Date();
let newDate = d.getMonth()+1+'/'+ d.getDate()+'/'+ d.getFullYear();
 
// Global Variables

const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const APIkey = '&appid=26a80eaa1c64b59272818c17c62dadff&units=metric';

// creaing async function to get data from api server asynchronously

const getWInfo = async(baseURL, zip, key) => {
    const response = await fetch (baseURL+zip+key)
    try {
        const data = await response.json();
        console.log(data);
        return data;
    } catch(error) {
        console.log('error', error);
    }
}

// Adding event listener for the generate button to start getting data and bring it to the web page

document.getElementById('generate').addEventListener('click', () => {
    const zipCode = document.getElementById('zip').value;
    const TodaysFeel = document.getElementById('feelings').value;
    getWInfo(baseURL, zipCode, APIkey)
    .then((data) => {
        console.log(data);
        const NewData = {
            date:newDate,
            temp:data.main.temp+' &#176C',
            content:TodaysFeel,
            city:data.name
        }
        postData('http://localhost:8000/add', NewData);
        UpdateUI();
})
});


// Creating async function to post data to the server

const postData = async(url = "", data = {}) => {
    console.log(data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });
    try{
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch(error){
        console.log('error', error);
    }
}

//Creating async function to push the received data from the local server to the front-end
const UpdateUI = async() => {
    const response = await fetch('http://localhost:8000/all');
    try{
        const Data = await response.json();
        document.getElementById('date').innerHTML = Data.date;
        document.getElementById('temp').innerHTML = Data.temp;
        document.getElementById('content').innerHTML = Data.content;
        document.getElementById('city').innerHTML = Data.city;
    } catch(error){
        console.log('error', error);
    }
}

