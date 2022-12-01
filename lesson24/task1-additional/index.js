// input: array
// output: obj

// const formatter = new Intl.DateTimeFormat('en', { month: 'short' });

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const studentsBirthDays = students => {
  return students
    .slice()
    .sort((a, b) => new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate())
    .reduce((acc, { name, birthDate }) => {
      const month = months[new Date(birthDate).getMonth()];
      return { ...acc, [month]: acc[month] ? acc[month].concat(name) : [name] };
    }, {});
};

// test data
const students = [
  { name: 'Ben', birthDate: '01/17/2008' },
  { name: 'Tom', birthDate: '01/15/2010' },
  { name: 'Sam', birthDate: '03/15/2010' },
];

console.log(studentsBirthDays(students));

// [ { name: 'Tom', birthDate: '01/15/2010' }] => {Jan: ['Tom'], [Month]: [name1, name2]}
