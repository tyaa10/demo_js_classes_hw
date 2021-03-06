class Measure{

constructor(id,name,description){

if ( arguments.length !==3
    || typeof id !== `number`
    || typeof name !== `string`
    || typeof description !== `string`
    || id === 0 
    || !/^[a-zа-я]{1,10}$/.test(name) 
    || !/^[a-zа-я\s]{1,255}$/.test(description)
    ){
    throw new Error(`Wrong data input (class: Measure)`)
    }

    this.id=id
    this.name=name 
    this.description=description
}}

class Category{

constructor(id,name,parentid){

if (arguments.length !==3
    || typeof id !== `number`
    || typeof name !== `string`
    || typeof parentid !== `number`
    || id == 0
    || name.length == 0
    || /^[A-ZА-Я][a-zа-я]{1,255}$/.test(name) 
    || parentid == 0
    ) {
        throw new Error(`Wrong data input (class: Category)`)
    }

this.id=id 
this.name=name
this.parentid=parentid
}}

class InfoAboutProduct{

constructor(id,name,description,price,quantity,measureid,categoryid,personalshoppingcondition){

if (arguments.length !==8
    || typeof id !== `number` 
    || typeof name !== `string`
    || typeof description !== `string`
    || typeof price !== `number`
    || typeof quantity !== `number`
    || typeof measureid !== `number`
    || typeof categoryid !== `number`
    || typeof personalshoppingcondition !== `boolean`
    || id == 0
    || name.length == 0
    || !/^[A-ZА-Я][a-zа-я]{1,255}$/.test(name)
    || description.length == 0
    || !/^[A-ZА-Я][a-zа-я]{1,255}$/.test(description)
    || price == 0 
    || measureid == 0
    || categoryid == 0  
){

    throw new Error(`Wrong data input (class: InfoAboutProduct)`)

}

this.id=id
this.description=description
this.price=price
this.quantity=quantity
this.measureid=measureid
this.categoryid=categoryid
this.personalshoppingcondition=personalshoppingcondition
this.GetAmountOfProductAviable=function(){

if (personalshoppingcondition==true){

return quantity-1

}

}

}

}

const measureVariants = [

new Measure (1,'kg','kilograms'),
new Measure (2,'l','litr'),
new Measure (3,'amount','amount of product') 
];

console.log(measureVariants)
