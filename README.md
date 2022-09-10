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

- ## Use `model.find()` to Search Your Database
  In its simplest usage, `Model.find()` accepts a query document (a JSON object) as the first argument, then a callback. It returns an array of matches. It supports an extremely wide range of search options. Read more in the docs.

- ## Use `model.findOne()` to Return a Single Matching Document from Your Database
    `Model.findOne()` behaves like `Model.find()`, but **it returns only one document (not an array)**, even if there are multiple items. It is especially useful when searching by properties that you have declared as unique.

- ## Use `model.findById()` to Search Your Database By `_id`
  When saving a document, MongoDB automatically adds the field `_id`, and set it to a unique alphanumeric key. Searching by `_id` is an extremely frequent operation, so Mongoose provides a dedicated method for it.
  
- ## Perform Classic Updates by Running Find, Edit, then Save
    Mongoose has a dedicated updating method: `Model.update()`. It is bound to the low-level mongo driver. It can bulk-edit many documents matching certain criteria, but it doesn’t send back the updated document, only a `'status'` message. Furthermore, it makes model validations difficult, because it just directly calls the mongo driver.
    
- ## Perform New Updates on a Document Using `model.findOneAndUpdate()`
  Recent versions of Mongoose have methods to simplify documents updating. Some more advanced features (i.e. pre/post hooks, validation) behave differently with this approach, so the classic method is still useful in many situations. findByIdAndUpdate() can be used when searching by id.
  
- ## Delete One Document Using `model.findByIdAndRemove`
  `findByIdAndRemove` and `findOneAndRemove` are like the previous update methods. They pass the removed document to the db. As usual, use the function argument personId as the search key.

- ## Delete Many Documents with `model.remove()`
  `Model.remove()` is useful to delete all the documents matching given criteria.
  
- ## Chain Search Query Helpers to Narrow Search Results
  If you don’t pass the callback as the last argument to Model.find() (or to the other search methods), the query is not executed. You can store the query in a variable for later use. This kind of object enables you to build up a query using chaining syntax. The actual db search is executed when you finally chain the method .exec(). You always need to pass your callback to this last method. There are many query helpers, here we'll use the most commonly used.
