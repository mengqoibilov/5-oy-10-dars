// bu esa 1 table bilan qilinadigan vazifa
const employees = [
    { name: "John Doe", email: "johndoe@mail.com", phone: "(171) 555-2222" },
    { name: "Peter Parker", email: "peterparker@mail.com", phone: "(313) 555-5735" },
    { name: "Fran Wilson", email: "franwilson@mail.com", phone: "(503) 555-9931" }
];


function loadEmployees() {
    const tableBody = document.getElementById("employeeBody");
    tableBody.innerHTML = ""; 
    employees.forEach((employee, index) => {
        const row = `
            <tr>
                <td>${employee.name}</td>
                <td>${employee.email}</td>
                <td>${employee.phone}</td>
                <td class="actions">
                    <span class="edit" onclick="editEmployee(${index})">✏️</span>
                    <span class="delete" onclick="deleteEmployee(${index})">🗑️</span>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}


function editEmployee(index) {
    const newName = prompt("Enter new name:", employees[index].name);
    if (newName !== null) {
        employees[index].name = newName;
        loadEmployees();
    }
}


function deleteEmployee(index) {
    if (confirm(`Delete ${employees[index].name}?`)) {
        employees.splice(index, 1);
        loadEmployees();
    }
}

function addEmployee() {
    const name = prompt("Enter name:");
    const email = prompt("Enter email:");
    const phone = prompt("Enter phone:");
    if (name && email && phone) {
        employees.push({ name, email, phone });
        loadEmployees();
    }
}


loadEmployees();






// bu 1 rasmdagi vazifa
const car1 = {
    brand: "Toyota",
    calculateSpeed(distance, time) {
        return `${this.brand} tezlik: ${(distance / time)} km/soat`;
    },
};

const car2 = {
    brand: "Honda",
};


const speed = car1.calculateSpeed.call(car2, 100, 2); 
console.log(speed); 



// bu 2 chi rasmdagi vazifa
const ages = [25, 30, 18, 22, 40];

const youngest = Math.min.apply(null, ages); 
console.log(youngest); 


// bu 3 rasmdagi vazifa
const product = {
    price: 200,
};

function applyDiscount(discount) {
    return this.price - (this.price * discount) / 100;
}


const tenPercentDiscount = applyDiscount.bind(product, 10);
console.log(tenPercentDiscount()); 




// bu 4 rasmdagi vazifa
function greet(greeting) {
    return `${greeting}, men ${this.name}, ${this.role}!`;
}

const person1 = { name: "Alice", role: "Dasturchi" };
const person2 = { name: "Bob", role: "Dizayner" };


const greetAlice = greet.call(person1, "Salom");
const greetBob = greet.call(person2, "Salom");

console.log(greetAlice); 
console.log(greetBob);  
