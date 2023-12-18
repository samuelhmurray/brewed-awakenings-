import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li data-type= "employee"
                     data-name="${employee.name}"
                     data-id="${employee.id}"

        >${employee.name}</li>`
    }

    html += "</ul>"

    return html
}
document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target;
    if (itemClicked.dataset.type === "employee") {
        const employeeName = itemClicked.dataset.name
        const employeeId = itemClicked.dataset.id
        let index = 0;
        for (const order of orders) {
            if (order.employeeId===+employeeId) {
                index++
            }
        }
        window.alert(`${employeeName} has sold ${index} products`)
    }
});

// iterate over orders (maybe .find instead of for of)
//if productId to empty array 