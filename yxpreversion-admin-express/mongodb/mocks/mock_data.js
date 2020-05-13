const article = require("./article")
const course = require("./course")
const homework = require("./homework")
const note = require("./note")
const props = require("./props")
const school = require("./school")
const student = require("./student")
const teacher = require("./teacher")


// school.success_teacher()
// student.success_teacher()
// teacher.success_teacher()
// course.success_teacher()

// article.success_teacher()
// homework.success_teacher()
// note.success_teacher()
// props.success_teacher()

function two(func) {
  return new Promise((res, rej) => {
    func.success_teacher();
    res(1);
  })
}

async function one() {
  await two(school)

  await two(teacher)
  await two(student)

  await two(course)
  await two(article)

  await two(note)
  await two(props)
  await two(homework)
}

one()