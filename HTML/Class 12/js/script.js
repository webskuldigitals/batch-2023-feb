$(document).ready(function(){

    var students = Array(
        {
            name: 'Jasvant',
            father_name: 'Balamrit',
            total_marks: 440
        },
        {
            name: 'Akash',
            father_name: 'Amit',
            total_marks: 678
        },
        {
            name: 'Avi',
            father_name: 'ram',
            total_marks: 673
        },
        {
            name: 'Ram',
            father_name: 'Dashrath',
            total_marks: 490
        },
        {
            name: 'Modi',
            father_name: 'Damodar',
            total_marks: 340
        },
        {
            name: 'Spider',
            father_name: 'Marvel',
            total_marks: 456
        },
        {
            name: 'Rajesg',
            father_name: 'Abc',
            total_marks: 456
        },
        {
            name: 'Akash',
            father_name: 'Amit',
            total_marks: 678
        },
        {
            name: 'Avi',
            father_name: 'ram',
            total_marks: 673
        },
        {
            name: 'Ram',
            father_name: 'Dashrath',
            total_marks: 490
        },
        {
            name: 'Modi',
            father_name: 'Damodar',
            total_marks: 340
        },
        {
            name: 'Spider',
            father_name: 'Marvel',
            total_marks: 456
        },
        {
            name: 'Rajesg',
            father_name: 'Abc',
            total_marks: 456
        },
        {
            name: 'Akash',
            father_name: 'Amit',
            total_marks: 678
        },
        {
            name: 'Avi',
            father_name: 'ram',
            total_marks: 673
        },
        {
            name: 'Ram',
            father_name: 'Dashrath',
            total_marks: 490
        },
        {
            name: 'Modi',
            father_name: 'Damodar',
            total_marks: 340
        },
        {
            name: 'Spider',
            father_name: 'Marvel',
            total_marks: 456
        },
        {
            name: 'Rajesg',
            father_name: 'Abc',
            total_marks: 456
        },
        {
            name: 'Akash',
            father_name: 'Amit',
            total_marks: 678
        },
        {
            name: 'Avi',
            father_name: 'ram',
            total_marks: 673
        },
        {
            name: 'Ram',
            father_name: 'Dashrath',
            total_marks: 490
        },
        {
            name: 'Modi',
            father_name: 'Damodar',
            total_marks: 340
        },
        {
            name: 'Spider',
            father_name: 'Marvel',
            total_marks: 456
        },
        {
            name: 'Rajesg',
            father_name: 'Abc',
            total_marks: 456
        },
        {
            name: 'Akash',
            father_name: 'Amit',
            total_marks: 678
        },
        {
            name: 'Avi',
            father_name: 'ram',
            total_marks: 673
        },
        {
            name: 'Ram',
            father_name: 'Dashrath',
            total_marks: 490
        },
        {
            name: 'Modi',
            father_name: 'Damodar',
            total_marks: 340
        },
        {
            name: 'Spider',
            father_name: 'Marvel',
            total_marks: 456
        },
        {
            name: 'Rajesg',
            father_name: 'Abc',
            total_marks: 456
        },
        {
            name: 'Akash',
            father_name: 'Amit',
            total_marks: 678
        },
        {
            name: 'Avi',
            father_name: 'ram',
            total_marks: 673
        },
        {
            name: 'Ram',
            father_name: 'Dashrath',
            total_marks: 490
        },
        {
            name: 'Modi',
            father_name: 'Damodar',
            total_marks: 340
        },
        {
            name: 'Spider',
            father_name: 'Marvel',
            total_marks: 456
        },
        {
            name: 'Rajesg',
            father_name: 'Abc',
            total_marks: 456
        },
        {
            name: 'Akash',
            father_name: 'Amit',
            total_marks: 678
        },
        {
            name: 'Avi',
            father_name: 'ram',
            total_marks: 673
        },
        {
            name: 'Ram',
            father_name: 'Dashrath',
            total_marks: 490
        },
        {
            name: 'Modi',
            father_name: 'Damodar',
            total_marks: 340
        },
        {
            name: 'Spider',
            father_name: 'Marvel',
            total_marks: 456
        },
        {
            name: 'Rajesg',
            father_name: 'Abc',
            total_marks: 456
        },
        {
            name: 'Akash',
            father_name: 'Amit',
            total_marks: 678
        },
        {
            name: 'Avi',
            father_name: 'ram',
            total_marks: 673
        },
        {
            name: 'Ram',
            father_name: 'Dashrath',
            total_marks: 490
        },
        {
            name: 'Modi',
            father_name: 'Damodar',
            total_marks: 340
        },
        {
            name: 'Spider',
            father_name: 'Marvel',
            total_marks: 456
        },
        {
            name: 'Rajesg',
            father_name: 'Abc',
            total_marks: 456
        },
        {
            name: 'Akash',
            father_name: 'Amit',
            total_marks: 678
        },
        {
            name: 'Avi',
            father_name: 'ram',
            total_marks: 673
        },
        {
            name: 'Ram',
            father_name: 'Dashrath',
            total_marks: 490
        },
        {
            name: 'Modi',
            father_name: 'Damodar',
            total_marks: 340
        },
        {
            name: 'Spider',
            father_name: 'Marvel',
            total_marks: 456
        },
        {
            name: 'Rajesg',
            father_name: 'Abc',
            total_marks: 456
        },
        {
            name: 'Akash',
            father_name: 'Amit',
            total_marks: 678
        },
        {
            name: 'Avi',
            father_name: 'ram',
            total_marks: 673
        },
        {
            name: 'Ram',
            father_name: 'Dashrath',
            total_marks: 490
        },
        {
            name: 'Modi',
            father_name: 'Damodar',
            total_marks: 340
        },
        {
            name: 'Spider',
            father_name: 'Marvel',
            total_marks: 456
        },
        {
            name: 'Rajesg',
            father_name: 'Abc',
            total_marks: 456
        },
        {
            name: 'Akash',
            father_name: 'Amit',
            total_marks: 678
        },
        {
            name: 'Avi',
            father_name: 'ram',
            total_marks: 673
        },
        {
            name: 'Ram',
            father_name: 'Dashrath',
            total_marks: 490
        },
        {
            name: 'Modi',
            father_name: 'Damodar',
            total_marks: 340
        },
        {
            name: 'Spider',
            father_name: 'Marvel',
            total_marks: 456
        },
        {
            name: 'Rajesg',
            father_name: 'Abc',
            total_marks: 456
        },
        {
            name: 'Akash',
            father_name: 'Amit',
            total_marks: 678
        },
        {
            name: 'Avi',
            father_name: 'ram',
            total_marks: 673
        },
        {
            name: 'Ram',
            father_name: 'Dashrath',
            total_marks: 490
        },
        {
            name: 'Modi',
            father_name: 'Damodar',
            total_marks: 340
        },
        {
            name: 'Spider',
            father_name: 'Marvel',
            total_marks: 456
        },
        {
            name: 'Rajesg',
            father_name: 'Abc',
            total_marks: 456
        },
        {
            name: 'Akash',
            father_name: 'Amit',
            total_marks: 678
        },
        {
            name: 'Avi',
            father_name: 'ram',
            total_marks: 673
        },
        {
            name: 'Ram',
            father_name: 'Dashrath',
            total_marks: 490
        },
        {
            name: 'Modi',
            father_name: 'Damodar',
            total_marks: 340
        },
        {
            name: 'Spider',
            father_name: 'Marvel',
            total_marks: 456
        },
        {
            name: 'Rajesg',
            father_name: 'Abc',
            total_marks: 456
        },
        {
            name: 'Akash',
            father_name: 'Amit',
            total_marks: 678
        },
        {
            name: 'Avi',
            father_name: 'ram',
            total_marks: 673
        },
        {
            name: 'Ram',
            father_name: 'Dashrath',
            total_marks: 490
        },
        {
            name: 'Modi',
            father_name: 'Damodar',
            total_marks: 340
        },
        {
            name: 'Spider',
            father_name: 'Marvel',
            total_marks: 456
        },
        {
            name: 'Rajesg',
            father_name: 'Abc',
            total_marks: 456
        },
        {
            name: 'Akash',
            father_name: 'Amit',
            total_marks: 678
        },
        {
            name: 'Avi',
            father_name: 'ram',
            total_marks: 673
        },
        {
            name: 'Ram',
            father_name: 'Dashrath',
            total_marks: 490
        },
        {
            name: 'Modi',
            father_name: 'Damodar',
            total_marks: 340
        },
        {
            name: 'Spider',
            father_name: 'Marvel',
            total_marks: 456
        },
        {
            name: 'Rajesg',
            father_name: 'Abc',
            total_marks: 456
        },
        {
            name: 'Akash',
            father_name: 'Amit',
            total_marks: 678
        },
        {
            name: 'Avi',
            father_name: 'ram',
            total_marks: 673
        },
        {
            name: 'Ram',
            father_name: 'Dashrath',
            total_marks: 490
        },
        {
            name: 'Modi',
            father_name: 'Damodar',
            total_marks: 340
        },
        {
            name: 'Spider',
            father_name: 'Marvel',
            total_marks: 456
        },
        {
            name: 'Rajesg',
            father_name: 'Abc',
            total_marks: 456
        },
        {
            name: 'Akash',
            father_name: 'Amit',
            total_marks: 678
        },
        {
            name: 'Avi',
            father_name: 'ram',
            total_marks: 673
        },
        {
            name: 'Ram',
            father_name: 'Dashrath',
            total_marks: 490
        },
        {
            name: 'Modi',
            father_name: 'Damodar',
            total_marks: 340
        },
        {
            name: 'Spider',
            father_name: 'Marvel',
            total_marks: 456
        },
        {
            name: 'Rajesg',
            father_name: 'Abc',
            total_marks: 456
        },
        {
            name: 'Akash',
            father_name: 'Amit',
            total_marks: 678
        },
        {
            name: 'Avi',
            father_name: 'ram',
            total_marks: 673
        },
        {
            name: 'Ram',
            father_name: 'Dashrath',
            total_marks: 490
        },
        {
            name: 'Modi',
            father_name: 'Damodar',
            total_marks: 340
        },
        {
            name: 'Spider',
            father_name: 'Marvel',
            total_marks: 456
        },
        {
            name: 'Rajesg',
            father_name: 'Abc',
            total_marks: 456
        },
        {
            name: 'Akash',
            father_name: 'Amit',
            total_marks: 678
        },
        {
            name: 'Avi',
            father_name: 'ram',
            total_marks: 673
        },
        {
            name: 'Ram',
            father_name: 'Dashrath',
            total_marks: 490
        },
        {
            name: 'Modi',
            father_name: 'Damodar',
            total_marks: 340
        },
        {
            name: 'Spider',
            father_name: 'Marvel',
            total_marks: 456
        },
        {
            name: 'Rajesg',
            father_name: 'Abc',
            total_marks: 456
        },
        {
            name: 'Akash',
            father_name: 'Amit',
            total_marks: 678
        },
        {
            name: 'Avi',
            father_name: 'ram',
            total_marks: 673
        },
        {
            name: 'Ram',
            father_name: 'Dashrath',
            total_marks: 490
        },
        {
            name: 'Modi',
            father_name: 'Damodar',
            total_marks: 340
        },
        {
            name: 'Spider',
            father_name: 'Marvel',
            total_marks: 456
        },
        {
            name: 'Rajesg',
            father_name: 'Abc',
            total_marks: 456
        },
        {
            name: 'Akash',
            father_name: 'Amit',
            total_marks: 678
        },
        {
            name: 'Avi',
            father_name: 'ram',
            total_marks: 673
        },
        {
            name: 'Ram',
            father_name: 'Dashrath',
            total_marks: 490
        },
        {
            name: 'Modi',
            father_name: 'Damodar',
            total_marks: 340
        },
        {
            name: 'Spider',
            father_name: 'Marvel',
            total_marks: 456
        },
        {
            name: 'Rajesg',
            father_name: 'Abc',
            total_marks: 456
        },
        {
            name: 'Akash',
            father_name: 'Amit',
            total_marks: 678
        },
        {
            name: 'Avi',
            father_name: 'ram',
            total_marks: 673
        },
        {
            name: 'Ram',
            father_name: 'Dashrath',
            total_marks: 490
        },
        {
            name: 'Modi',
            father_name: 'Damodar',
            total_marks: 340
        },
        {
            name: 'Spider',
            father_name: 'Marvel',
            total_marks: 456
        },
        {
            name: 'Rajesg',
            father_name: 'Abc',
            total_marks: 456
        },
        {
            name: 'Akash',
            father_name: 'Amit',
            total_marks: 678
        },
        {
            name: 'Avi',
            father_name: 'ram',
            total_marks: 673
        },
        {
            name: 'Ram',
            father_name: 'Dashrath',
            total_marks: 490
        },
        {
            name: 'Modi',
            father_name: 'Damodar',
            total_marks: 340
        },
        {
            name: 'Spider',
            father_name: 'Marvel',
            total_marks: 456
        },
        {
            name: 'Rajesg',
            father_name: 'Abc',
            total_marks: 456
        }
    )

    console.table(students)

    for(var i = 0; i < students.length; i++){
        $('#app').append(students[i].name);
    }

})