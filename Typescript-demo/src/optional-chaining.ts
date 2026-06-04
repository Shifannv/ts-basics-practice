type Customer ={
    birthday : Date
}
function getCustomer(id: number): Customer | null {
return id === 0 ? null : { birthday : new Date() }
}

let Customer = getCustomer(0)
//  optional property access operator
console.log(Customer?.birthday?.getFullYear());

// optional element access operator
//  customers?.[0]
