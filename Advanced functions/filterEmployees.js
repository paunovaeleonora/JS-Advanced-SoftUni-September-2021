function filterEmployees(data, criteria) {
    const employees = JSON.parse(data);
    let result = '';
    let matchingEmployees;
    let splitCriteria = criteria.split('-');
    if (splitCriteria.length === 1 && splitCriteria[0] === 'all') {
        matchingEmployees = employees;
        let count = 0
        matchingEmployees.forEach(e => {
        result += `${count}. ${e.first_name} ${e.last_name} - ${e.email}\n`
        count++;
    });
    } else if (splitCriteria.length == 2){
        prop = criteria.split('-')[0];
        value = criteria.split('-')[1];
        matchingEmployees = employees.filter(x => x[prop] === value);
        let count = 0
        matchingEmployees.forEach(e => {
        result += `${count}. ${e.first_name} ${e.last_name} - ${e.email}\n`
        count++;
    });
    }else {
        return 'error';
    }

    return result;
}

input = `[{
    "id": "1", 
    "first_name": "Adrine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
}, {
    "id": "2", 
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
}, {
    "id": "3", 
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
}]`;

console.log(filterEmployees(input, 'all'));