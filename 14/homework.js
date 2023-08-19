let months = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentabr",
    "Oktabr",
    "Noyabr",
    "Dekabr",
  ];
  
  let days = [
    "Yakshanba",
    "Dushanba",
    "Seyshanba",
    "Chorshanba",
    "Payshanba",
    "Juma",
    "Shanba",
  ];
  
  let moment = () => {
    let date = new Date();
    return {
      format(param) {
        switch (param) {
            case "LT": return `${date.getHours()} : ${date.getMinutes()}`;
            case "LTS": return `${date.getHours()}: ${date.getMinutes()}:${date.getSeconds()}`;
            case "L": return `${date.getMonth}/${date.getDate()}/${date.getFullYear()}`;
            case "LL": return `${months[date.getMonth()]}, ${date.getDate()} ${date.getFullYear()}`;
            case "LLL": return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()} ${date.getHours() >= 13 ? "PM" : "AM"}`;
            case "LLLL": return `${days[date.getDay()]} ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()} ${date.getHours() >= 13 ? "PM" : "AM"}`;
        }
      },
    };
  };
  console.log(moment().format("LT"));