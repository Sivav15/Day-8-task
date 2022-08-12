let url = "https://restcountries.com/v3.1/all";
// // 1) Get all the countries from the Asia continent /region using the Filter function
async function getdata1() {
  let url = "https://restcountries.com/v3.1/all";
  let s1 = await fetch(url);
  let s2 = await s1.json();
  let res = s2.filter((item) => {
    return item.region === "Asia";
  });

  console.log("Countries from the Asia continent : ", res);
}
getdata1();

// // 2) Get all the countries with a population of less than 2 lakhs using Filter function

async function getdata2() {
  let s1 = await fetch(url);
  let s2 = await s1.json();

  let res = s2.filter((item) => {
    return item.population < 200000;
  });

  console.log("Population of less than 2 lakhs : ", res);
}
getdata2();

// // 3) Print the following details name, capital, flag using forEach function
async function getdata3() {
  let s1 = await fetch(url);
  let s2 = await s1.json();

  s2.forEach((item) => {
    console.log(`Name : ${item.name}`);
    console.log(`Capital : ${item.capital}`);
    console.log(`Flag : ${item.flags}`);
  });
}
getdata3();

// // 4) Print the total population of countries using reduce function
async function getdata4() {
  let s1 = await fetch(url);
  let s2 = await s1.json();

  let res = s2
    .map((item) => {
      return item.population;
    })
    .reduce((initialValue, currentValue) => {
      return initialValue + currentValue;
    });

  console.log(`Total population : ${res}`);
}
getdata4();

// // 5) Print the country which uses US Dollars as currency.

async function getdata5() {
  let s1 = await fetch(url);
  let s2 = await s1.json();

  let res = s2.filter((item) => {
    for (let cur in item.currencies) {
      if (item.currencies[cur].name === "United States dollar") {
        return true;
      }
    }
  });

  console.log("Countrys is used US doller : ", res);
}
getdata5();
