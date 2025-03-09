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
  }
  return curryFunc2;
}
console.log(curryFunc(12)(15)(115)(15)(14)(1));


//  3. Infinity Currying va string concatenation
// Cheksiz boâ€™lib turadigan har xil turdagi qiymatlar kiritilganda,
//  ularni string sifatida birlashtiradigan funktsiyani yozing.
//  Argumentlar tugagach, stringni qaytarishingiz kerak.
// Talablar:
// 	â€¢	Sonlar va stringlar birlashtirilishi kerak.
// 	â€¢	Tugallanganda, umumiy birlashtirilgan string qaytarilishi kerak.
//  concat('Hello')(' ')('World')('!')(); // 'Hello World!'
//  concat('This')(' is')(' a')(' test')('!')(); // 'This is a test!'
function strCurry(str){
    let result=str;
    function strCurry1(str2){
       if(typeof str2==='undefined'){
        return result
       }
       result+=str2
        return strCurry1
    };
    return strCurry1
};
console.log(strCurry('hello')(' ')('world')());


// 4. Infinity Currying bilan filter qoidasi
// Infinity currying yordamida sonlar roâ€™yxatini oluvchi va
//  faqat oxirida kiritilgan filter shartiga mos keladigan sonlarni
//  qaytaradigan funktsiyani yozing.
// Talablar:
// 	â€¢	Foydalanuvchi sonlarni cheksiz kiritishi kerak.
// 	â€¢	Oxirgi argument filter qoidasi boâ€™lishi kerak (masalan, juft sonlar, toq sonlar, 10 dan katta yoki kichik sonlar).
// filter(1)(2)(3)(4)(5)(6)('even'); // [2, 4, 6] (juft sonlar)
// filter(10)(25)(30)(45)(55)('odd'); // [25, 45, 55] (toq sonlar)

function chekFilter(num){
    let result=[num];
    function filter(num2){
     if(typeof num2==='string'){
        if(num2==='even'){
            return result.filter(number=>number%2===0);
        }else if(num2==='odd'){
            return result.filter(number=>number %2!==0);
        }
        else{
            return "noto'g'ri filter qoidasi berildi"
        }
     }else{
        result.push(num2);
        return filter
    }
    };

    return filter
}
console.log(chekFilter(1)(2)(3)(4)(5)(6)('odd'));


// 5. Infinity Currying va operatorga asoslangan hisoblash
// Funktsiyaga cheksiz sonlar va oxirida operator (+, -, *, /) kiritiladi.
//  Shunga mos ravishda hisoblash amalga oshiriladi.
// Talablar:
// 	â€¢	Foydalanuvchi cheksiz ravishda sonlar kiritishi kerak.
// 	â€¢	Oxirgi argument operator boâ€™lib, kiritilgan sonlar oâ€™sha 
// operator asosida hisoblanishi kerak.
// calculate(2)(3)(4)('+'); // 9 (yig'indisi)
// calculate(10)(2)(5)('*'); // 100 (ko'paytmasi)
// calculate(10)(2)('/'); // 5 (bo'lish)
function mathOperations(num){
    let res=[num];
    function mathOperations1(num2){
        if(typeof num2==='string'){
            if(num2==='+'){
                return res.reduce((acc ,curr)=>acc+curr,0)
            }
            else if(num2==='-'){
                return res.reduce((acc ,curr)=>acc-curr)
            }
            else if(num2==='*'){
                return res.reduce((acc ,curr)=>acc*curr,1)
            }
            else if(num2==='/'){
                return res.reduce((acc ,curr)=>acc/curr)
            }
            else{
                return "hato belgi kiritdingiz"
            }
        }else{
            res.push(num2)
            return mathOperations1
        }
        return mathOperations1
    }
    return mathOperations1
};

console.log(mathOperations(15)(3)(15)(18)('*'));


