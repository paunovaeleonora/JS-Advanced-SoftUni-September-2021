function previousDate (year, month, day) {
    const date = new Date(year, month, day);
 
    console.log("first", date.getFullYear(), date.getMonth(), date.getDate());
    const millisecs = 1000 * 60 * 60 * 24;
    date.setDate(date.getDate() - 1);
    console.log("result", date.getFullYear() +  "-" + date.getMonth() + "-" + date.getDate());
 
    // let dateString = year + '-' + month + '-' + day;
    // let event = new Date(dateString);
    // event.setDate(day-1);
    // console.log(event.getFullYear()+`-` + (Number(event.getMonth()) + 1)+ '-' + event.getDate());
}