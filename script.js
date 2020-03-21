var name = 'Iniobong Benson'
var courses = ['HTML','CSS','JavaScript']
console.log('Name: \n'+name+'\n')

console.log('Courses: ')

for (var i of courses ) {
console.log(i);
}

console.log('\nOdd numbers from 1-200 are: ');
for (i=1; i<=200; i++){
   if (i % 2 != 0){
    console.log(i)
    }
}