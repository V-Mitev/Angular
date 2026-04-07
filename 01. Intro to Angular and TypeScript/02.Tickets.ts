class Ticket {
    destination: string;
    price: number;
    status: string;

    constructor(destination: string, price: number, status: string) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

function ticketManager(input: string[], sortingCriteria: string): Ticket[] {
    const tickets = input.map(ticket => {
        let [destination, price, status] = ticket.split('|');

        return new Ticket(destination, Number(price), status);
    })

    return tickets.sort((a, b) => {
        const aValue = a[sortingCriteria as keyof Ticket];
        const bValue = b[sortingCriteria as keyof Ticket];

        if (typeof aValue === 'number' && typeof bValue === 'number') {
            return aValue - bValue;
        }

        return aValue.toString().localeCompare(bValue.toString());
    });
}

const result = ticketManager([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'destination');

console.log(result);