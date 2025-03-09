// 1.	Telefon raqamini topish
// Format: (998)-123-4567
// Input: "Mening raqamim (998)-123-4567"
// Expected Match: (998)-123-4567

let telNumber = "Mening telefon raqamim (998)-123-4567";
// telefon raqamni tekshirish uchun raqamda ishtrok etgann belgilar va ularni soni
const chekNumber = /\(998\)\-\d{3}-\d{4}/gi;
console.log(telNumber.match(chekNumber));

// 2. Email adresini topish.
// Satr ichidan oddiy email adresini topuvchi RegEx yozing.
// Input: "Mening emailim ulugbek@gmail.com"
// Expected Match: ulugbek@gmail.com

let email = "Mening emailim ulugbek@gmail.com";
// emailni tekshiramiz bu joyda + belgisi ishlatilgan bu belgi yonidagi belgidan matnda kamida 1 ta bo'lsa mos kelishini bildiradi
const chekEmail = /\b[A-za-z0-9._%+-]+@[A-za-z0-9.-]+\.[A-Za-z]{2,}/gi;
console.log(email.match(chekEmail));

// 3.	Foydalanuvchi ismiga moslash
// Harflar, raqamlar, va pastki chiziqdan iborat foydalanuvchi ismlarini topuvchi RegEx yozing.
// Input: "Mening ismim user_123"
// Expected Match: user_123
let userName = "Mening ismim user_123";
const chekUserName = /\b[user_123]+/gi;
console.log(userName.match(chekUserName));

// 4.	URL ni topish
// Input: "Mening saytlarim https://example.com va http://test.com"
// Expected Matches: https://example.com, http://test.com

let links = "Mening saytlarim https://example.com va http://test.com";
const chekLinks = /https?:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
console.log(links.match(chekLinks));

//  5.	Ismlar orasidagi boâ€™sh joylarni olib tashlash
// Matnda ismlar orasidagi boâ€™sh joylarni olib tashlash uchun RegEx yozing.
// Input: "John    Smith"
// Expected Result: "John Smith"
let name = "John    Smith";
const chekName = /\b[a-zA-Z0-9]+/gi;
console.log(name.match(chekName));

// Faqat katta harflarni topish
// Matndan faqat katta harflarni topuvchi RegEx yozing.
// Input: "Salom, MENING ismim Ulug'bek"
// Expected Match: MENING
let uppercase = "Salom, MENING ismim Ulug'bek";
const chekUpperCase = /\b[A-Z]+/g;
console.log(uppercase.match(chekUpperCase));

// 	Validatsiya qilingan kredit karta raqamlarini topish
// Quyidagi formatlarda boâlgan kredit karta raqamlarini topuvchi RegEx yozing (bosh joylar bolishi mumkin):
// Format: XXXX XXXX XXXX XXXX yoki XXXXXXXXXXXXXXXX
// Input: "Mening karta raqamim 1234 5678 9123 4567 yoki 1234567891234567"
// Expected Match: 1234 5678 9123 4567, 1234567891234567
let cardNumber =
  "Mening karta raqamim 1234 5678 9123 4567 yoki 1234567891234567";
const chekCardNumber = /\b\d{4}(\s?\d{4}){3}|\d{16}\b/g;
console.log(cardNumber.match(chekCardNumber));

// Curriyng
// . Infinite Currying bilan sonlarni toâ€™plang va natijani chop qiling
// Foydalanuvchi istalgancha son kiritadi, kiritish tugagach, umumiy yigâ€™indini chop etadi. Bunga erishish uchun currying va limitani qanday ishlatishni tushunib olishingiz kerak boâ€™ladi.
// Talablar:
// â€¢	Foydalanuvchi sonlarni cheksiz kiritishi kerak.
// â€¢	Agar argument berilmasa yoki undefined boâ€™lsa, yigâ€™indini chop qiling.
// sum(1)(2)(3)(4)(); // 10
// sum(5)(10)(15)(20)(25)(); // 75

function sum1(num) {
  let max = num;
  function sum2(num2) {
    if (num2 === undefined) {
      return max;
    }
    max += num2;
    return sum2;
  }
  return sum2;
}
console.log(sum1(110)(12)(15)(15)());

// 2. Infinity Currying bilan argumentlar soniga qarab natija qaytarish
// Cheksiz ravishda argumentlarni qabul qiladigan funktsiyani yarating,
// va agar sonlar roâ€™yxati oxirida 0 boâ€™lsa, yigâ€™indini qaytaring,
//  agar 1 boâ€™lsa koâ€™paytmani qaytaring.
// Talablar:
// 	â€¢	Foydalanuvchi sonlarni cheksiz kiritishi kerak.
// 	â€¢	Oxirgi argument 0 boâ€™lsa, barcha kiritilgan sonlarning yigâ€™indisini qaytarish kerak.
// 	â€¢	Oxirgi argument 1 boâ€™lsa, barcha kiritilgan sonlarning koâ€™paytmasini qaytarish kerak.
function curryFunc(num) {
  let sum = [num];
  function curryFunc2(num2) {
    if (num2 === 0) {
      return sum.reduce((acc, cur) => acc += cur, 0);
    } else if (num2 === 1) {
      return sum.reduce((acc, cur) => (acc *= cur), 1);
    } else {
      sum.push(num2);
      return curryFunc2;
    }
    return curryFunc2;
  }
  return curryFunc2;
}
console.log(curryFunc(12)(15)(115)(15)(14)(1));




// Curry funktion
function multiply(num) {
  let sum = num;
  function multiply1(num1) {
    sum += num1;
    multiply1.res = sum;
    return multiply1;
  }

  return multiply1;
}
console.log(multiply(10)(10).res);
