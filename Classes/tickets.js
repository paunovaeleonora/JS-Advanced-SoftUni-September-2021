function tickets(array, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }


    let result = [];
    array.forEach((element) => {
        const [destination, price, status] = element.split('|');
        result.push(new Ticket(destination, price, status));

    });

    if (criteria == 'destination') {
        result.sort((a, b) => {
            return a.destination.localeCompare(b.destination);
        });
    } else if (criteria == 'price') {
        result.sort((a, b) => {
            return a.price - b.price;
        });
    } else {
        result.sort((a, b) => {
            return a.status.localeCompare(b.status);
        });
    }
    


    return result;
}

const input = [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
]

console.log(tickets(input, 'status'))