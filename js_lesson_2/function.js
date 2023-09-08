function filterByGrade(students, minGrade) {
    const a = students.filter(student => student.grade >= minGrade);
    return a;
}

function sortByAge(students) {
    const sort = students.slice().sort((a, b) => a.age - b.age);
    return sort;
}

function calculateAverageGrade(students) {
    if (students.length === 0) {
        return 0;
    }
    const average = students.reduce((s, student) => s + student.grade, 0) / students.length;
    return average.toFixed(2);
}

function findByName(students, name) {
    return students.find(student => student.name === name) || null;
}

const students = [
    { name: "Ігор", age: 21, grade: 8 },
    { name: "Світлана", age: 21, grade: 12 },
    { name: "Вова", age: 19, grade: 11 },
    { name: "Жора", age: 22, grade: 10 },
    { name: "Вася", age: 20, grade: 9 },
    { name: "Марія", age: 18, grade: 12 },
    { name: "Вікторія", age: 21, grade: 10 },
];

// виведення список студентів на сторінку html
const studentTable1 = document.getElementById("studentTable_1");
students.forEach(student => {
    const c = document.createElement("tr");
    c.innerHTML = `
    <td>${student.name}</td>
    <td>${student.age}</td>
    <td>${student.grade}</td> `;
    studentTable1.appendChild(c);
});

const minGrade = 10;
const minGradeElement = document.getElementById("minGrade1");
minGradeElement.textContent = minGrade;

// фільтрація за оцінкою
const filterStudents = filterByGrade(students, minGrade);

const studentTable = document.getElementById("studentTable");
filterStudents.forEach(student => {
    const b = document.createElement("tr");
    b.innerHTML = `
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.grade}</td>
    `;
    studentTable.appendChild(b);
});

// сортування за віком
const sortStudents = sortByAge(students);

const studentTable2 = document.getElementById("studentTable_2");
sortStudents.forEach(student => {
    const d = document.createElement("tr");
    d.innerHTML = `
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.grade}</td>
    `;
    studentTable2.appendChild(d);
})

// середній бал
const averageStudents = calculateAverageGrade(students);
const result = document.getElementById("averageResult");
result.textContent = averageStudents;

// пошук студента на ім'я
const findName = "Жора";
const find = findByName(students, findName);

const result_1 = document.getElementById("findName1");
if (find) {
    result_1.textContent = `студента ${find.name} знайдено.`;
    result_1.classList.add("found");
} else {
    result_1.textContent = `студента ${findName} не знайдено.`;
    result_1.classList.add("not-found");
}

const findName2 = "Ірина";
const find2 = findByName(students, findName2);

const result_2 = document.getElementById("findName2");
if (find2) {
    result_2.textContent = `студента ${find2.name} знайдено.`;
    result_2.classList.add("found");
} else {
    result_2.textContent = `студента ${findName2} не знайдено.`;
    result_2.classList.add("not-found");
}