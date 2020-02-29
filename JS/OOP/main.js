class Table{
    constructor(title, width, height, length, countertopMaterial, footMaterial, countertopShape, price){
        this.title = title;
        this.width = width;
        this.height = height;
        this.length = length;
        this.countertopMaterial = countertopMaterial;
        this.footMaterial = footMaterial;
        this.countertopShape = countertopShape;
        this.price = price;
    }
};
const table = new Table("стол", 100, 100, 50, 'дерево', 'дерево', 'круглий', 1200);
console.log(table)

//Функция-генератор
function Table2(title, width, height, length, countertopMaterial, footMaterial, countertopShape, price){
        this.title = title;
        this.width = width;
        this.height = height;
        this.length = length;
        this.countertopMaterial = countertopMaterial;
        this.footMaterial = footMaterial;
        this.countertopShape = countertopShape;
        this.price = price;
}
const table2 = new Table2("стекляний-стол", 120, 60, 40, 'стекло', 'метал', 'Квадратный', 2500);
console.log(table2);


class Footwear{
    constructor(size, title, price, material){
        this.size = size;
        this.title = title;
        this.price = price;
        this.material = material;
    }
}
const footwear = new Footwear(39, "кроссовки", 2900, "Натуральная кожа" );
console.log(footwear)

//Функция-генератор
function Footwear2(size, title, price, material){
        this.size = size;
        this.title = title;
        this.price = price;
        this.material = material;
}
const footwear2 = new Footwear2(42, "ботинки", 1200, "Натуральная кожа" );
console.log(footwear2);


class Employee{
    constructor( name, surname, Date_of_Birth, education, gender, employment_date, nationality, specialty){
        this.name = name;
        this.surname = surname;
        this.Date_of_Birth = Date_of_Birth;
        this.education = education;
        this.gender = gender;
        this.employment_date = employment_date;
        this.nationality = nationality;
        this.specialty = specialty;
    }
}
const employee = new Employee("Витя", "Янукович", "9.07.1950", "5 класов школы", "Мужской", "25.02.2010", `еврей`, "електрик" );
console.log(employee);

//Функция-генератор
function Employee2(name, surname, Date_of_Birth, education, gender, employment_date, nationality, specialty){
    this.name = name;
        this.surname = surname;
        this.Date_of_Birth = Date_of_Birth;
        this.education = education;
        this.gender = gender;
        this.employment_date = employment_date;
        this.nationality = nationality;
        this.specialty = specialty;
}
const employee2 = new Employee2("Витя", "Янукович", "9.07.1950", "5 класов школы", "Мужской", "25.02.2010", `еврей`, "електрик" );
console.log(employee2);