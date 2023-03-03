function compareArrays(arr1, arr2) {
    return arr1.every((element, index) => arr1.length === arr2.length && element === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
  if (users.length === 0 || gender !== "мужской" && gender !== "женский") {
      return 0;   
    } else if (gender === "женский") {
       result = users.filter((user) => user.gender === "женский").reduce((acc, cur) => acc + cur.age, 0) / users.filter((user) => user.gender === "женский").map((ages) => ages.age).length;
    return result;
    }else if (gender === "мужской") {
       result = users.filter((user) => user.gender === "мужской").reduce((acc, cur) => acc + cur.age, 0) / users.filter((user) => user.gender === "мужской").map((ages) => ages.age).length;
    return result;
    }
}

//function getUsersNamesInAgeRange(users, gender) {
//  if (users.length === 0 || gender !== "мужской" && gender !== "женский") {
//      return 0;   
//    } else if (gender === "женский") {
//       result = users.filter((user) => user.gender === "женский").reduce((acc, cur) => acc + cur.age, 0) / users.filter((user) => user.gender === "женский").reduce((acc, cur) => acc + 1, 0);
//    return result;
//    }else if (gender === "мужской") {
//       result = users.filter((user) => user.gender === "мужской").reduce((acc, cur) => acc + cur.age, 0) / users.filter((user) => user.gender === "мужской").reduce((acc, cur) => acc + 1, 0);
//    return result;
//    }
//}