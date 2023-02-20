function compareArrays(arr1, arr2) {
    return arr1.every((element, index) => arr1.length === arr2.length && element === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
    if (users.length === 0) {
      return 0;
    } else if(gender !== "мужской" && gender !== "женский") {
      return 0;    
    } else if (gender === "мужской") {
      let result = people.filter((Male) => Male.gender === "мужской").map((ages) => ages.age).reduce((acc, item, index, arr) => {
        acc += item;
        if (index === arr.length -1) {
        return acc / arr.length;
        }
        return acc;
        }, 0)
      return result;
  
    } else if (gender === "женский") {
      let result = people.filter((female) => female.gender === "женский").map((maleAge) => maleAge.age).reduce((acc, item, index, arr) => {
        acc += item;
        if (index === arr.length -1) {
        return acc / arr.length;
        }
        return acc;
        }, 0)
      return result;
  
    }
  };



//function getUsersNamesInAgeRange(users, gender) {
//  
//}
