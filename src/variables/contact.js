let dataContact = []
let localContact = localStorage.getItem('localContact')

if (localContact !== null) {
    dataContact = JSON.parse(localContact);
}

export { dataContact }