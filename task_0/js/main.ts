interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentOne: Student = {
  firstName: "Doaa",
  lastName: "Ahmed",
  age: 25,
  location: "Egypt",
};
const studentTwo: Student = {
  firstName: "Nada",
  lastName: "Ahmed",
  age: 22,
  location: "NewYork",
};

const studentsList: Student[] = [studentOne, studentTwo];

// ======= Create the table =============

// Create <table>
const table = document.createElement("table");
const tableBody = document.createElement("tbody");
// table.border = "1";

// Add table headers
const headerRow = table.insertRow();
const header1 = headerRow.insertCell(0);
header1.innerText = "First Name";
const header2 = headerRow.insertCell(1);
header2.innerText = "Location";

// Append rows for each student in the array
studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);

  cell1.innerText = student.firstName; // First Name
  cell2.innerText = student.location; // Location
});

// Append the table to the document body
document.body.appendChild(table);
