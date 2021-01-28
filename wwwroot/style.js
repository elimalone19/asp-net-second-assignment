function calculate() {
    // jquery stuff
    let assignments = $('#assignments').val();
    let groupProjects = $('#groupProjects').val();
    let quizzes = $('#quizzes').val();
    let exams = $('#exams').val();
    let intex = $('#intex').val();

    // calculate grade (percent)

    let result = ((Number(assignments) / 100) * 1000) + ((Number(groupProjects) / 100) * 200)
        + ((Number(quizzes) / 100) * 200) + ((Number(exams) / 100) * 400) + ((Number(intex) / 100) * 200)

    let grade = (result / 2000) * 100

    // more jquery here
    $('#percent').text(String(grade) + '%')

    // calculate grade (letter)

    if (grade >= 93) {
        $('#grade').text('A')
    } else if (grade < 93 && grade >= 90) {
        $('#grade').text('A-')
    } else if (grade < 90 && grade >= 87) {
        $('#grade').text('B+')
    } else if (grade < 87 && grade >= 83) {
        $('#grade').text('B')
    } else if (grade < 83 && grade >= 80) {
        $('#grade').text('B-')
    } else if (grade < 80 && grade >= 77) {
        $('#grade').text('C+')
    } else if (grade < 77 && grade >= 73) {
        $('#grade').text('C')
    } else if (grade < 73 && grade >= 70) {
        $('#grade').text('C-')
    } else if (grade < 70 && grade >= 67) {
        $('#grade').text('D+')
    } else if (grade < 67 && grade >= 63) {
        $('#grade').text('D')
    } else if (grade < 63 && grade >= 60) {
        $('#grade').text('D-')
    } else {
        $('#grade').text('E')
    }
}