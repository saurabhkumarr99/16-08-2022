
function saveStudent() {

    let student = {
        Student_Name: document.getElementById("sname").value,
        Father_Nname: document.getElementById("fname").value,
        Mother_Nname: document.getElementById("mname").value,
        Student_address: document.getElementById("address").value,
    }
    document.getElementById("data").innerHTML = JSON.stringify(student);

}