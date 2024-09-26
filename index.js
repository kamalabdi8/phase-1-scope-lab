var customerName = 'bob';
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    return customerName;
}
function setBestCustomer(){
    bestCustomer = 'not bob';
    customerName = bestCustomer;
    return bestCustomer;
}
function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';

}
const leastFavoriteCustomer = 'cindy';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'ted';
    return leastFavoriteCustomer;
}
