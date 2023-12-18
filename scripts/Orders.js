import { getProducts, getEmployees, getOrders } from "./database.js"

// Get copy of state for use in this module
const products = getProducts()
const employees = getEmployees()
const orders = getOrders()


// Function whose responsibility is to find the product for an order
export const Products = (order, allProducts) => {
    let orderProduct = null

    for (const product of allProducts) {
        if (product.id === order.productId) {
            orderProduct = product.name
        }
    }

    return orderProduct
}

// Function whose responsibility is to find the employee for an order
export const Employees = (order, allEmployees) => {
    let orderEmployee = null

    for (const employee of allEmployees) {
        if (employee.id === order.employeeId) {
            orderEmployee = employee.name
        }
    }

    return orderEmployee
}



export const Orders = () => {
    let html = "<ul>"

    for (const order of orders) {    
        const employee = Employees(order, employees)
        const product = Products(order, products)

        html += `<li>${product} was sold by ${employee} on ${new Date(order.timestamp).toLocaleDateString()}</li>`
    }

    html += "</ul>"

    return html
}











// - this is what they gave 
// export const Orders = () => {
//     //why not just do: let html = "<ul>"? 
//     let html = ""
//     html = "<ul>"

//     for (const order of orders) {    
//         const employee = getEmployees(order, employees)
//         const product = getProducts(order)

//         html += `<li>${product.name} was sold by ${employee.name} on ${new Date(order.timestamp).toLocaleDateString()}</li>`
//     }

//     html += "</ul>"

//     return html
// }

