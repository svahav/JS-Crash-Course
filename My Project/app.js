// const student= new Set(['Elad', 'shira', 'Hila']);
// console.log(student);

// student.add("Zipi");
// console.log(student);
// console.log(student.has('hila'));

// console.log(student.delete('Elad'));

// const studentArr=Array.from(student);
// // console.log(studentArr);
// student.clear();

const sections= new Map([['A001',["Hila", "Shira"]]]);
console.log(sections);

const students = sections.get("A001");
console.log(students);

students.push("Shira");
console.log(students);

//הוספת מערך נוסף למפ
sections.set('A002',["Zipi", "Yishay"]);
console.log(sections);

// תן לי את כל המפתחות של המאפ
console.log(sections.keys());
console.log(sections.values());
console.log(sections.entries());

console.log(sections.has("A002")) && sections.set("A002",[]) ;
console.log(sections);
