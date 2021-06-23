const functions = require("firebase-functions");
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')('sk_test_51Iwp7qSDPCmkqu2HUtro3Ur8E8kRzDv3tE8UV7vDnuLq0faOe7dczK2v6xbpMHdOdJ1uFhV1tQEQrFA6w8zNl83B00XMw3jbGJ')


// API





// App config

const app = express()



// Middleware

app.use(cors({ origin : true }))
app.use(express.json())

// API routes

app.get('/', (req,res)=>{
    res.status(200).send('hello world')
})

app.post('/payments/create', async (req, res) => {
    const total = req.query.total
    // console.log('Payment request recieved of -- ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'inr'
    })
    res.status(201).send({
        clientSecret : paymentIntent.client_secret
    })
})

// Listen Command

exports.api = functions.https.onRequest(app)


// http://localhost:5001/clone-b7979/us-central1/api

















