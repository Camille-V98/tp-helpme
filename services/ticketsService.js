const tickets = [];



function findTickets () {
    return tickets
}

function setTickets (lists) {
    lists.forEach(ticket => {
        tickets.push(ticket)
    });
    
}


module.exports = {findTickets, setTickets};