$(document).ready(function(){

    renderStudentTable(data.students)

    $('#search').click(function(){
        
        let filteredStudents = data.students.filter(function(student) {
            return student.age >= $("#searchAge").val();
        });

        renderStudentTable(filteredStudents)

    })

})

function renderStudentTable(students){
    var table = $("<table>")
    var tr = $("<tr>")
    tr.append("<th>Id</td")
    tr.append("<th>Name</td")
    tr.append("<th>Class</td")
    tr.append("<th>Age</td")
    tr.append("<th>Address</td")
    tr.append("<th>Grade</td")
    table.append(tr)

    for(var i = 0; i < students.length; i++){
        var tr = $("<tr>")
        tr.append($("<td>").html(students[i].id))
        tr.append($("<td>").html(students[i].name))
        tr.append($("<td>").html(students[i].class))
        tr.append($("<td>").html(students[i].age))
        tr.append($("<td>").html(students[i].address))
        tr.append($("<td>").html(students[i].grade))
        table.append(tr)
    }
    
    $("#app").html(table);
}