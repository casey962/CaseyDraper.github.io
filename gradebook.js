// todo: fetch data from the postgreSQL database (to be implemented later)
function fetchGradeData() {
  // This function will query the postegreSQL database and return grade data 
  console.log("Fetching grade data...");
}



//Todo: Populate the table with grade data
function populateGradebook(data) {
  // This function will take the fetched grade dat and populate the table
  console.log("populating gradebook with data:", data);
}
const gradeData = fetchGradeData();
populategradebook(gradeData);
// END REMOVE
function fetchGradeData() {

  const response = await fetch('/grades'); 
  const data = await response.json();       

  console.log("Populating gradebook with data:", data);
  let tableElm = document.getElementById("gradebook");

  data.forEach(function (assignment) {
      let row = document.createElement("tr");

      
      let nameCell = document.createElement("td");
      nameCell.textContent = assignment.student_name;  
      row.appendChild(nameCell);


      let gradeCell = document.createElement("td");
      gradeCell.textContent = assignment.total_grade;
      row.appendChild(gradeCell);

      tableElm.appendChild(row);
  });

} catch (error) {
  console.error("Error fetching grade data:", error);
}
}


function populateGradebook(data) {
  console.log("Populating gradebook with data:", data);

  const tableBody = document.getElementById("gradebook-body");
  tableBody.innerHTML = ""; s

  data.forEach(student => {
      const row = document.createElement("tr");

      
      const nameCell = document.createElement("td");
      nameCell.textContent = student.student_name;
      row.appendChild(nameCell);

      const assignments = ['assignment1', 'assignment2', 'assignment3'];
      assignments.forEach(key => {
          const cell = document.createElement("td");
          cell.textContent = student[key] ?? 'N/A';
          row.appendChild(cell);
      });

      tableBody.appendChild(row);
  });
}
