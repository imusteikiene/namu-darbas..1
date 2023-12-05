// 1. Parašykite funkciją, kuri priims minutes (number) ir grąžins sekundes (string: "x seconds").
// Pvz: fn(3) => "180 seconds".
// 2. Parašykite funkciją, kuri priims varotojų amžių ir grąžins kiek dienų jis jau nugyveno (skaičių, metų tikslumu, neskaičiuojant keliamųjų metų - t.y. visada 365 dienos).
// Pvz: fn(20) => 7300.
// 3. Parašykite arrow funkciją (viena eilutė), kuriai padavus skaičių – ji grąžintų jo kvadratą.
// Pvz.: fn(5) -> 25
// 4. Parašykite arrow funkciją (viena eilutę), kuri paėmus du skaičius (aukštį ir plotį) grąžintų trikampio plotą ((aukštis * plotis) / 2)
// Pvz: fn(10, 10) -> 50
// 5. Parašykite funkciją, kuri paims parametrą String, ir grąžins to parametro paskutinę raidę.
// pvz. Paduodu: "Petras", grąžina "s".
// 6. Sukurkite funkciją, kuri paims stringą ir grąžins jį apverstą mažosiomis.
// T.y. "Petras" -> "sartep"
// 7. Parašykite funkciją, kuri paims array skaičių ir grąžins didžiausią neigiamą skaičių.
// pvz: [-1, -100, -5, 10, 0, 11] -> "-1"
// 8. Sukurkite funkciją, kuri paims skaičių parametrą ir sugeneruos array su tiek random skaičių (nuo 1 - 10)), kiek parametre nurodyta.
// T.y. "3" => [1, 6, 3].
// 9. Sukurkite arrow funkciją, kuri paimtų du skaičius ir grąžintų boolean value ar skaičių suma didesnė už 100 ar mažesnė (ir lygi).
// Pvz.: fn(10, 50) -> true
// 10. Parašykite funkciją, kuri paimtų array (susideda iš objektų su vardu ir amžium) bei grąžina array išrykiuotą pagal amžių ir jei amžius sutampa – vardus a>z tvarka.
// Pvz.: fn([{name: „Alfredas“, age: 25}, {name: „Jonas“, age: 25}, {name: „Kasparas“, age: 20}]) -> [{name: „Kasparas“, age: 20}, {name: „Alfredas“, age: 25}, {name: „Jonas“, age: 25}]
// 11. Parašykite funkciją, į kurią padavus datą, pasakys ar išeiginė ar ne (visos išeiginės turi būti saugomos array.)
// Pvz.: fn(new Date(2020, 12, 25)) -> true
// 12. Sukurkite funkciją, kuri kaip parametrą gaus array su skaičiais. Funkcija turės grąžinti mažiausią trūkstamą skaičių iš array.
// Pvz. Paduodu: [1, 2, 4, 5]; Grąžina: 3

// 1 uzduotis

function minutesToSeconds(minutes) {
    const seconds = minutes * 60;
    return `${seconds} seconds`;
  }
  
  
  const result = minutesToSeconds(3);
  console.log(result); 

//   2 uzduotis

function calculateDaysLived(age){
    const daysInYear = 365;
    const daysLived = age * daysInYear;
    return daysLived;
}
const daysLived = calculateDaysLived(20);
console.log(daysLived)

// 3 uzduotis

const square = (number) => number ** 2;

const result = square(5);
console.log(result); 


// 4 uzduotis

const triangleArea = (height, width) => (height * width) / 2;


const result = triangleArea(10, 10);
console.log(result);


// 5 uzduotis

function getLastCharacter(inputString) {
    if (inputString.length > 0) {
      return inputString.charAt(inputString.length - 1);
    } else {
      return "Eilutė yra tuščia";
    }
  }
  
  const result = getLastCharacter("Petras");
  console.log(result); 
  

// 6 uzduotis

function reverseStringToLowercase(inputString) {
    if (inputString.length > 0) {
      return inputString.split('').reverse().join('').toLowerCase();
    } else {
     
      return "Eilutė yra tuščia";
    }
  }
  
  const result = reverseStringToLowercase("Petras");
  console.log(result);
  
// 7 uzduotis

function findLargestNegativeNumber(numbers) {
    const negativeNumbers = numbers.filter(number => number < 0);
  
    if (negativeNumbers.length > 0) {
   
      const largestNegative = Math.max(...negativeNumbers);
      return largestNegative.toString();
    } else {
      return "Masyvas neturi neigiamų skaičių";
    }
  }
  
  const numbers = [-1, -100, -5, 10, 0, 11];
  const result = findLargestNegativeNumber(numbers);
  console.log(result);
  

// 8 uzduotis

function generateRandomNumbersArray(count) {
    const randomNumbersArray = [];
  
    for (let i = 0; i < count; i++) {
      const randomNumber = Math.floor(Math.random() * 10) + 1;
      randomNumbersArray.push(randomNumber);
    }
  
    return randomNumbersArray;
  }
  
  const result = generateRandomNumbersArray(3);
  console.log(result); 
  
// 9 uzduotis
const isSumGreaterThan100 = (number1, number2) => (number1 + number2) > 100;

const result = isSumGreaterThan100(10, 50);
console.log(result); 

// 10 uzduotis
function sortByAgeAndName(array) {
    const sortedArray = array.sort((a, b) => {
     
      if (a.age !== b.age) {
        return a.age - b.age;
      }
      
      return a.name.localeCompare(b.name);
    });
  
    return sortedArray;
  }
  

  const inputArray = [
    { name: "Alfredas", age: 25 },
    { name: "Jonas", age: 25 },
    { name: "Kasparas", age: 20 }
  ];
  
  const result = sortByAgeAndName(inputArray);
  console.log(result);
 
// 11 uzduotis

function isHoliday(date) {
    const holidays = [
      new Date(date.getFullYear(), 0, 1), 
      new Date(date.getFullYear(), 11, 25), 
     
    ];
    const isHoliday = holidays.some(holiday => holiday.getTime() === date.getTime());
    return isHoliday;
  }
  
  const inputDate = new Date(2020, 11, 25); 
  const holidayResult = isHoliday(inputDate);
  console.log(holidayResult); 
  