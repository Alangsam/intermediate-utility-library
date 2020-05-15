// Counting cards
var count = 0
function countingCards(card) {


    switch (card) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        count += 1;
        break;
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
        count -= 1;
        break;
    }
    if (count > 0) {
      return count + " Bet";
    } else {
      return count + " Hold";
    }
  }

//Recorrd Collection

var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [
        "1999",
        "Little Red Corvette"
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
  };
  

  function updateRecords(id, prop, value) {
    if (prop !== "tracks" && value !== "") {
      collection[id][prop] = value;
    } else if (collection[id].hasOwnProperty("tracks") == false ) {
      collection[id][prop] = [];
      collection[id][prop].push(value);
    } else if (value == "") {
      delete collection[id][prop];
    } else {
      collection[id][prop].push(value)
    }
  
    return collection;
  }
  
  updateRecords(5439, "artist", "ABBA");
  
// Iterate odd numbers with a for loop
var myArray = [];
for (var nums = 1; nums < 10; nums += 2) {
  myArray.push(nums);
}

//profile lookup
// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
for (var nums = 0; nums < contacts.length; nums += 1) {
    if (contacts[nums].firstName === name) {
        if (contacts[nums].hasOwnProperty(prop)) {
            return contacts[nums][prop];
        } else return "No such property"
    } 
} 
return "No such contact"
// Only change code above this line
}

lookUpProfile("Akira", "likes");

//generate random whole numbers within range
function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax-myMin +1) + myMin);
    // Only change code above this line
  }

//  Remove Items Using splice() (gets rid of first and last)
function splicin(anArray) {
    anArray.splice(0, 1);
    anArray.splice(-1, 1);
    return anArray;
}

//Add Items Using splice()  (adds "halfway" halfway through the array)

function kindOfSplicin(myArray) {
    myArray.splice((myArray.length + 1) / 2, 0, "Halfway");
    return myArray;
}

//Check For The Presence of an Element With indexOf()
function checking(theArray, searchForThis) {
    if (theArray.indexOf(searchForThis) !== -1) {
        return "It's in there all right";
    } else return "Oh no I can't find it";
}


//Use typeof to Check the Type of a Variable
