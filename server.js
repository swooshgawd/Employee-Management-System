const inquirer = require('inquirer');
const db = require("./db/connection");
require("console.table");
function viewEmployees() {
    console.log("viewEmployees Function")
    db.promise().query("SELECT * FROM employee;")
    .then(result => {
        console.table(result[0]);
        mainMenu();
    })
}
function viewRoles() {
    console.log("view all roles")
    db.promise().query("SELECT * FROM role")
    .then(result => {
        console.table(result[0]);
        mainMenu();
    })
}
function viewDepartment() {
    console.log("View all department")
    db.promise().query("SELECT id, name FROM department;")
    .then(result => {
        console.table(result[0]);
        mainMenu();
    })
}
function createDepartment() {
    console.log("Create Department")
    inquirer.prompt([
        {
            name: "name",
            message: "What is the name of the department?"
        }
    ]).then(ans => {
        let name = ans;
        db.promise().query("INSERT INTO department SET ?", name)
        .then(() => console.log(`Added ${name.name} to the database`))
        .then(() => mainMenu())
    })
}
function quit() {
    console.log("Bye bye!!!")
    process.exit();
}
function mainMenu() {
    console.log("Main Menu")
    inquirer.prompt(
        {
            type: "list",
            name: "choice",
            message: "What do you want?",
            choices: [
                {
                    name: "View All Employees",
                    value: "VIEW_EMPLOYEES"
                },
                {
                    name: "View All Department",
                    value: "VIEW_DEPARTMENT"
                },
                {
                    name: "View All Roles",
                    value: "VIEW_ROLES"
                },
                {
                    name: "Create new Department",
                    value: "CREATE_DEPARTMENT"
                },
                {
                  name: "Quit",
                  value: "QUIT"
                }
            ]
        }
    ).then((answers) => {
        console.log(answers)
        switch(answers.choice){
            case "VIEW_EMPLOYEES":
                viewEmployees();
                break;
            case "VIEW_DEPARTMENT":
                viewDepartment();
                break;
            case "VIEW_ROLES":
                viewRoles();
                break;
            case "CREATE_DEPARTMENT":
                createDepartment();
                break;    
            default:
                quit();
        }
    })
}
function init() {
    console.log('EMPLOYEE');
    mainMenu();
}
init();