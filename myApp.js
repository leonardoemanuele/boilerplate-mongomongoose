require("dotenv").config();
// Lesson 1: Install and set up Mongoose/MondoDB
const mongoose = require("mongoose");
const mySecret = process.env["MONGO_URI"];

mongoose.connect(mySecret, { useNewUrlParser: true, useUnifiedTopology: true });

// Lesson 2: Create a Schema for a Model
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});
const Person = mongoose.model("Person", personSchema);

// Lesson 3: Create and Save a Person
const createAndSavePerson = (done) => {
  const jdoe = new Person({
    name: "John Doe",
    age: 50,
    favoriteFoods: ["pasta", "pizza", "chips"],
  });
  jdoe.save((err, data) => {
    if (err) return console.log(err);
    done(null, data);
  });
};

// Lesson 4: Create many People with `Model.create()`
var arrayOfPeople = [
  { name: "Frankie", age: 74, favoriteFoods: ["Del Taco"] },
  { name: "Sol", age: 76, favoriteFoods: ["roast chicken"] },
  { name: "Robert", age: 78, favoriteFoods: ["wine"] },
];
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, people) => {
    if (err) return console.log(err);
    done(null, people);
  });
};

// Lesson 5: Use model.find() to Search Your Database
const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, function (err, personName) {
    if (err) return console.log(err);
    done(null, personName);
  });
};

// Lesson 6: Use model.findOne() to Return a Single Matching Document from Your Database
const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, function (err, food) {
    if (err) return console.log(err);
    done(null, food);
  });
};

// Lesson 7: Use model.findById() to Search Your Database By _id
const findPersonById = (personId, done) => {
  Person.findById(personId, (err, personId) => {
    if (err) return console.log(err);
    done(null, personId);
  });
};

// Lesson 8: Using Model.update() to perform old Find, Edit and Save
const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  // .findById() method to find a person by _id with the parameter personId as search key.
  Person.findById(personId, (err, person) => {
    if (err) return console.log(err);
    // Array.push() method to add "hamburger" to the list of the person's favoriteFoods
    person.favoriteFoods.push(foodToAdd);
    // and inside the find callback - save() the updated Person.
    person.save((err, updatedPerson) => {
      if (err) return console.log(err);
      done(null, updatedPerson);
    });
  });
};

// Lesson 9: Perform New Updates on a Document Using model.findOneAndUpdate()
const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Person.findOneAndUpdate(
    { name: personName },
    { age: ageToSet },
    { new: true },
    (err, ageUpdated) => {
      if (err) return console.log(err);
      done(null, ageUpdated);
    }
  );
};

// Lesson 10: Delete One Document Using model.findByIdAndRemove
const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, (err, personRemoved) => {
    if (err) return console.log(err);
    done(null, personRemoved);
  });
};

// Lesson 11: Delete Many Documents with model.remove()
const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Person.remove({ name: nameToRemove }, (err, personsRemoved) => {
    if (err) return console.log(err);
    done(null, personsRemoved);
  });
};

// Lesson 12: Chain Search Query Helpers to Narrow Search Results
const queryChain = (done) => {
  const foodToSearch = "burrito";
  // Store the query for later use
  Person.find({ favoriteFoods: foodToSearch })
    // Sort the returned array from the query by name ascending order
    .sort({ name: 1 })
    // Limit to and array containing only 2 items
    .limit(2)
    // Exlcude the age property
    .select({ age: 0 })
    // Execute the query chain
    .exec((err, people) => {
      if (err) return console.log(err);
      done(null, people);
    });
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
