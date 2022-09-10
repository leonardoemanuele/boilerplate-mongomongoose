# MongoDB and Mongoose Challenges

This is the boilerplate for the MongoDB and Mongoose lessons. Instructions for completing these lessons start at https://www.freecodecamp.org/learn/apis-and-microservices/mongodb-and-mongoose/

## Set up a hosted database on MongoDB Atlas.

Follow [this tutorial](https://www.freecodecamp.org/news/get-started-with-mongodb-atlas/) to set up a hosted database on MongoDB Atlas.

- ## Create a Model
  First of all we need a Schema. Each schema maps to a MongoDB collection. It defines the shape of the documents within that collection. Schemas are         building block for Models. They can be nested to create complex models, but in this case we'll keep things simple. A model allows you to create instances   of your objects, called documents.

  Create a person schema called `personSchema` having this prototype:
 
  `name : string required`
  `age : number`
  `favoriteFoods : array of strings`
  
- ## Create Many Recordds with `Model.create()`
  Sometimes you need to create many instances of your models, e.g. when seeding a database with initial data. `Model.create()` takes an array of objects like `[{name: 'John', ...}, {...}, ...]` as the first argument, and saves them all in the db. 

- ## Use model.find() to Search Your Database
  In its simplest usage, `Model.find()` accepts a query document (a JSON object) as the first argument, then a callback. It returns an array of matches. It supports an extremely wide range of search options. Read more in the docs.
