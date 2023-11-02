const getBorrowers = "SELECT * FROM borrowers;";
const addBorrower = "INSERT INTO borrowers (name, email, registered_date) VALUES ($1, $2, $3);"
const deleteBorrower = "DELETE FROM borrowers WHERE id = $1;"

module.exports = {
    getBorrowers,
    addBorrower,
    deleteBorrower,
};