class Company {

     
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !position || !department || Number(salary) <= 0) {
            throw new Error('Invalid input!')
        }
        salary = Number(salary)
        if (this.departments[department] == undefined) {
            this.departments[department] = [];
        };
        this.departments[department].push({name, salary, position});
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    };


    bestDepartment() {
        const currentBest = {
            name: '',
            salary: 0
        }
        for (let depkey in this.departments) {
            let avSalary = 0;

            for(let empKey in this.departments[depkey]) {
                avSalary += this.departments[depkey][empKey].salary;
            }

            let averSalary = avSalary / this.departments[depkey].length;
            if (currentBest.salary < averSalary) {
                currentBest.name = depkey;
                currentBest.salary = averSalary;
            }
        }
        const bestDep = this.departments[currentBest.name];
        bestDep.sort(function (a, b) {
            
            if (b.salary > a.salary) {
                return 1;
            }else if (b.salary < a.salary) {
                return -1;
            }

            if (a.name < b.name) {
                return -1
            }else if(a.name > b.name) {
                1;
            }
        })

        let resultString = ``;
        resultString += `Best Department is: ${currentBest.name}\n`;
        resultString += `Average salary: ${currentBest.salary.toFixed(2)}\n`;
        let end = [];
        bestDep.forEach(empl => {
            end.push(`${empl.name} ${empl.salary} ${empl.position}`)
            
        });
        resultString += end.join('\n');
        return bestDep, resultString;

       
    }

}


let c = new Company();
c.addEmployee('Stanimir', 2000, 'engineer', 'Construction');
c.addEmployee('Pesho', 1500, 'electrical engineer', 'Construction');
c.addEmployee('Slavi', 500, 'dyer', 'Construction');
c.addEmployee('Stan', 2000, 'architect', 'Construction');
c.addEmployee('Stanimir', 1200, 'digital marketing manager', 'Marketing');
c.addEmployee('Pesho', 1000, 'graphical designer', 'Marketing');
c.addEmployee('Gosho', 1350, 'HR', 'Human resources');
console.log(c.bestDepartment());



// let Company = result;
// let c = new Company();

// let actual1 = c.addEmployee("Stanimir", 2000, "engineer", "Human resources");
// let expected1 = "New employee is hired. Name: Stanimir. Position: engineer";
// assert.equal(actual1,expected1);

// c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
// c.addEmployee("Slavi", 500, "dyer", "Construction");
// c.addEmployee("Stan", 2000, "architect", "Construction");
// c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
// c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
// c.addEmployee("Gosho", 1350, "HR", "Human resources");

// let act = c.bestDepartment();
// let exp = "Best Department is: Human resources\nAverage salary: 1675.00\nStanimir 2000 engineer\nGosho 1350 HR";
// assert.equal(act,exp);