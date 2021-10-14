// Write your solution in this file!
const employee = {
    name: "bob",
    streetAddress: "4343",
}
function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj};
    newObj[key] = value;
return newObj; 
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    
    return obj;
}
function deleteFromEmployeeByKey(obj, key) {
    const newArray = { ...obj};
     delete newArray[key];
     return newArray;
}
function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key]
    return obj;
    
}