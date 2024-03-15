# nodejs-tutorial

### This Repo contains nodejs practice.

#### [NodeJS Documentation](https://nodejs.org/docs/latest/api/)

Refer to documentation while learning/developing apps.
It helps 😊.

- NodeJS has an event Driven Architecture.

#### [NodeJS Tutorial](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)

<!-- Initial Setup -->

### Steps to setup Express

- express js
- install
- express js boilerplate code
  - go to npm
  - search express
  - copy the code
- express js ejs setup
  - install ejs
  - set view engine
  - create views folder
  - create ejs files
  - render ejs files inside route
- express static files setup
  - architecture of public folder

### Express Generator

hum logo ko kaafi saara kaam karna padta hai express setup krne
mein iska matlab har baar jab hum naya project banaayege to har baar
fir se utna hi kaam krna padega, matlab ki poora code likho and sab
kuchh setup karo, is time ko bacha sakte ho with help of express
generator, use express generator and it will make the folder structure
for you and it will also write the basic code for the project

express generator ek folder bana ke deta hai, jiska matlab aapko
khudse folder nahi banana hai, to express gen saare files ko is folder
mein daal ke dega

- ## Steps
  - install Express Generator
    ` npm i express-generator`
  - Create App
    ` express appName --view=ejs`

## Database

har naye app ka data store hoga storage mein, par usey directly rakne
ki jagah ek container mein rakhege, us container mein sirf us app ka
data aayega

- DB(setup) => Db formaition
- Model(code)=> Collections (DB)
- schema (code) => documents (db)

- ek app ka poora data => db
- ek app mein variety of data hota hai par poora data hota app ka hi
  hai, par us data ka sub category kehlaata hai collection
- collection matlab ki bola users ka data, ek user pe baat kri to hua
  document

### Setup

- install mongodb
- install mongoosejs
- require and setup connection
- make schema
- create model and export
  I

```
  const mongoose = require("mongoose");

  mongoose. connect("mongodb://127.0.0.1:27017/practicekaro"); //Setup
// Create Schema/Document
  const userschema = mongoose. Schema ( {
  username: String,
  name: String,
  age: Number

  })
// Creating Collection
  mongoose.model (naam, schema) ;
```
