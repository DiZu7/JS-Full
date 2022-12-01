// input: array
// output: obj

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const studentsBirthDays = students => {
  const studentsObj = students.reduce((acc, student) => {
    const month = months[new Date(student.birthDate).getMonth()];
    return { ...acc, [month]: acc[month] ? acc[month].concat(student) : [student] };
  }, {});

  return Object.entries(studentsObj).reduce((acc, [month, studentsList]) => {
    return {
      ...acc,
      [month]: studentsList
        .sort((a, b) => new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate())
        .map(({ name }) => name),
    };
  }, {});
};

// test data
const students = [
  { name: 'Tom', birthDate: '01/15/2010' },
  { name: 'Ben', birthDate: '01/17/2008' },
  { name: 'Sam', birthDate: '03/15/2010' },
];

console.log(studentsBirthDays(students));

// [ { name: 'Tom', birthDate: '01/15/2010' }] => {Jan: ['Tom'], [Month]: [name1, name2]}
