const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// middle wares
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.3exxtfz.mongodb.net/?retryWrites=true&w=majority`;
// console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const serviceCollection = client.db('travelService').collection('services');
        const reviewCollection = client.db('travelService').collection('reviews');

        app.get('/services', async (req, res) => {
            const query = {}
            const cursor = serviceCollection.find(query).sort({ _id: -1 });;
            const services = await cursor.limit(3).toArray();
            res.send(services);
        });

        app.get('/allservices', async (req, res) => {
            const query = {}
            const cursor = serviceCollection.find(query).sort({ _id: -1 });;
            const services = await cursor.toArray();
            res.send(services);
        });

        app.get('/services/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const service = await serviceCollection.findOne(query);
            res.send(service);
        });


        // Reviews api :
        app.post('/services', async (req, res) => {
            const user = req.body;
            console.log(user)
            const result = await serviceCollection.insertOne(user)
            res.send(result)
        })
        app.get('/reviews', async (req, res) => {
            const query = {}
            const cursor = reviewCollection.find(query).sort({ _id: -1 });
            const reviews = await cursor.toArray()
            res.send(reviews)
        })
        app.get('/reviews/:id', async (req, res) => {
            const id = req.params.id
            console.log(id)
            const query = { _id: ObjectId(id) }
            const result = await reviewCollection.findOne(query)
            console.log(result)
            res.send(result)
        })
        app.post('/reviews', async (req, res) => {
            const user = req.body;
            console.log(user)
            const result = await reviewCollection.insertOne(user)
            res.send(result)
        })
        app.put('/reviews/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: ObjectId(id) }
            const review = req.body;
            console.log(review)
            const option = { upsert: true }
            const updateReview = {
                $set: {
                    reviewData: review.reviewData
                }
            }
            const result = await reviewCollection.updateOne(filter, updateReview, option)
            res.send(result)
        })

        app.delete('/reviews/:id', async (req, res) => {
            const id = req.params.id
            console.log(id)
            const query = { _id: ObjectId(id) }
            const result = await reviewCollection.deleteOne(query)
            console.log(result)
            res.send(result)
        })

    }
    finally {

    }

}

run().catch(err => console.error(err));

app.get('/', (req, res) => {
    res.send('Travel service server is running')
})

app.listen(port, () => {
    console.log(`Travel service server running on ${port}`);
})