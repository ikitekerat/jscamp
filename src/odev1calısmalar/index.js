class Customer{
    constructor(id,customerNumber){
        this.id = id
        this.customerNumber = customerNumber
    }
}
let customer = new Customer(1,"12345")

//Prototyping deniyor aşağıdaki olaya
customer.name = "Mücahit Çekim"
console.log(customer.name)
Customer.bisey = "Bişey"
console.log(Customer.bisey)

class IndividualCustomer extends Customer{
    constructor(firstName,id,customerNumber){
        super(id,customerNumber)
        this.firstName = firstName
    }
}
class CorporaterCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)
        this.companyName = companyName
    }
}