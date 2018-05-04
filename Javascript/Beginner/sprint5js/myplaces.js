function main(){

var myPlaces = ["Rome", "Hanoi", "Tokyo", "Hong Kong", "New York"];     //Create an array with city names
var friendPlaces = ["Berlin", "London", "New York", "Rome"]; //Create another array with city names with at least one same city.


for (let myPlacesIndex = 0; myPlacesIndex<myPlaces.length; myPlacesIndex++) //Finish the for sentence
{
    for (let friendPlacesIndex = 0; friendPlacesIndex<friendPlaces.length; friendPlacesIndex++)
    //Finish the for sentence
        if(friendPlaces[friendPlacesIndex] == myPlaces[myPlacesIndex]){ //Find out online what the difference between "===" and "==" operator is.
            console.log("We both would like to visit... " + myPlaces[myPlacesIndex]); //Finish the sentence
      }
  }
}
