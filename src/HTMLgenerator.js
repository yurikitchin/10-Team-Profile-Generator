//create html template
//create card generator function for each employee role
//loops through new team array
//switch statement to getrole

const employee = require("../lib/employee");
let cardArray = []

//custom card as per role
function genManagerCard(manager) {
  return`
    <div>
            <h2>Manager</h2>
            <h3>name:${manager.name}</h3>
            <h3>email:${manager.email}</h3>
            <h3>Eployee ID:${manager.id}</h3>
            <h3>Office:${manager.officeNum}</h3>
        </div><br>
    `;
}

function genEngineerCard(engineer) {
  return` <div>
    <h2>Engineer</h2>
    <h3>name:${engineer.name}</h3>
    <h3>email:${engineer.email}</h3>
    <h3>employeeID:${engineer.id}</h3>
    <h3>github:${engineer.github}</h3>
</div><br>`;
}

function genInternCard(intern) {
  return ` <div>
     <h2>Intern</h2>
     <h3>name:${intern.name}</h3>
     <h3>email:${intern.email}</h3>
     <h3>employeeID:${intern.id}</h3>
     <h3>github:${intern.school}</h3>
 </div><br>`;
}


function createCards(newTeam) {
    for (let i = 0; i < newTeam.length; i++) {
        const newCard = newTeam[i]
        console.log("this is new card", newCard)
        const employeeRole = newCard.getRole();
        console.log("this is employeeRole", employeeRole)
        if (employeeRole === "Manager"){
      let newManager = genManagerCard(newCard);
      console.log("newManager = ", newManager)
      cardArray.push(newManager)
        }

      if (employeeRole === "Engineer") {
        let newEngineer = genEngineerCard(newCard);
        console.log("newEngineer = ", newEngineer)
        cardArray.push(newEngineer)
      }
      
      if (employeeRole === "Intern") {
        let newIntern = genInternCard(newCard);
        console.log("newIntern = ", newIntern)
        cardArray.push(newIntern)
      }
      
    
      console.log(cardArray)
      console.log(htmlWrite(cardArray))
  }};



  function htmlWrite(cardArray) {
    return `<!DOCTYPE html>
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
}
module.exports = createCards