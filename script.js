// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collect employee data
const collectEmployees = function () {
  const employees = []; // Array to hold employee data
  let adding = true; // Continue collecting employees until the user chooses to stop

  while (adding) {
    // Prompt user for employee details
    const firstName = prompt("Enter the employee's first name:");
    const lastName = prompt("Enter the employee's last name:");

    let salary;

    // Keep prompting until a valid number is entered
    while (true) {
      salary = parseFloat(
        prompt("Enter the employee's salary (numbers only):")
      );
      if (!isNaN(salary) && salary >= 0) {
        break; // Exit the loop if the salary is a valid number
      } else {
        alert("Please enter a valid positive number for salary.");
      }
    }

    // Add the new employee object to the array
    employees.push({ firstName, lastName, salary });

    // Ask if the user wants to add another employee
    adding = confirm("Do you want to add another employee?");
  }

  return employees; // Return the array of employees
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // Calculate the total salary
  const totalSalary = employeesArray.reduce(
    (sum, employee) => sum + employee.salary,
    0
  );

  // Calculate the average salary
  const averageSalary = totalSalary / employeesArray.length;

  // Log the results to the console
  console.log(`Total Employees: ${employeesArray.length}`);
  console.log(
    `Average Salary: ${averageSalary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })}`
  );
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const employee = employeesArray[randomIndex];
  console.log(`Random Employee: ${employee.firstName} ${employee.lastName}`);
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
