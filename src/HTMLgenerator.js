//create html template
//create card generator function for each employee role
//loops through new team array
//switch statement to getrole

const employee = require("../lib/employee");

//custom card as per role
function genManagerCard(manager) {
  return`
    <div>
            <h2>Manager</h2>
            <h3Nname:${manager.name}</h3>
            <h3>email:${manager.email}</h3>
            <h3>Eployee ID:${manager.employeeID}</h3>
            <h3>Office:${manager.officeNum}</h3>
        </div>
    `;
}

function genEngineerCard(engineer) {
  return` <div>
    <h2>Engineer</h2>
    <h3>name:${engineer.name}</h3>
    <h3>email:${engineer.email}</h3>
    <h3>employeeID:${engineer.employeeID}</h3>
    <h3>github:${engineer.github}</h3>
</div>`;
}

function genInternCard(intern) {
  return ` <div>
     <h2>Intern</h2>
     <h3>name:${intern.name}</h3>
     <h3>email:${intern.email}</h3>
     <h3>employeeID:${intern.employeeID}</h3>
     <h3>github:${intern.school}</h3>
 </div>`;
}
let cardArray = []

function createCards(newTeam) {
  let htmlArray = [];
    for (let i = 0; i < newTeam.length; i++) {
        const newCard = newTeam[i]
        const employeeRole = newCard.employeeRole;
        if (employeeRole === "Manager")
      let newManager = genManagerCard(newCard);
      cardArray.push(newManager)
      break;

    case "Engineer":
      html = genEngineerCard();
      cardArray.push(html)
      break;

    case "Intern":
      html = genInternCard();
      cardArray.push(html)
      break;
    
    default:
        console.error("Switch Error!")
        break;
  }};
  console.log(cardArray)


createCards()
console.log(cardArray)

const htmlBootstrap = `<!DOCTYPE html>
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
        ${createCards()}
    </div>
</main>
</body>
</html>`;

module.exports = createCards