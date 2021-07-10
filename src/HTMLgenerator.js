//create html template
//create card generator function for each employee role
//loops through new team array
//switch statement to getrole

const employee = require("../lib/employee");
const fs = require('fs');
let cardArray = [];

//custom card as per role
function genManagerCard(manager) {
  return`
    <div>
            <h2>Manager</h2>
            <h3>name:${manager.name}</h3>
            <h3>email:${manager.email}</h3>
            <h3>Eployee ID:${manager.id}</h3>
            <h3>Office:${manager.officeNum}</h3>
        </div>
    `;
}

function genEngineerCard(engineer) {
  return` <div>
    <h2>Engineer</h2>
    <h3>name:${engineer.name}</h3>
    <h3>email:${engineer.email}</h3>
    <h3>employeeID:${engineer.id}</h3>
    <h3>github:${engineer.github}</h3>
</div>`;
}

function genInternCard(intern) {
  return ` <div>
     <h2>Intern</h2>
     <h3>name:${intern.name}</h3>
     <h3>email:${intern.email}</h3>
     <h3>employeeID:${intern.id}</h3>
     <h3>github:${intern.school}</h3>
 </div>`;
}


function createCards(newTeam) {
    for (let i = 0; i < newTeam.length; i++) {
        console.log("newTem length html 46", newTeam.length)
        console.log("this is new team html 47", newTeam)
        const newCard = newTeam[i]
        console.log("this is new card html 47", newCard)
        const employeeRole = newCard.getRole();
        console.log("this is employeeRole html 49", employeeRole)
        if (employeeRole === "Manager"){
      let newManager = genManagerCard(newCard);
      console.log("newManager html 52 = ", newManager)
      cardArray.push(newManager)
        }

      if (employeeRole === "Engineer") {
        let newEngineer = genEngineerCard(newCard);
        console.log("newEngineer html 58= ", newEngineer)
        cardArray.push(newEngineer)
      }
      
      if (employeeRole === "Intern") {
        let newIntern = genInternCard(newCard);
        console.log("newIntern html 64= ", newIntern)
        cardArray.push(newIntern)
      }
  
      else {
      html = cardArray.join(" <br> ")
      }
     htmlWrite(html)
  }};

  function creatNewIndex(data) {
    fs.writeFile('./dist/index.html', data, (error) => 
    error ? console.error(error) : console.log("your team profile has been generated"))
}

  function htmlWrite(cardArray) {
        console.log("this is the card array html 80", cardArray)
      console.log("htmlWrite Starts")
data = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<main>
    <div>
        <!--Team Cards go here-->
        ${cardArray}
    </div>
</main>
</body>
</html>`;

creatNewIndex(data)
}
module.exports = createCards