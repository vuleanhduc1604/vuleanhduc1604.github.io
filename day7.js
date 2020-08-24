//Bài 1: Viết một hàm JavaScript để lấy ngày hiện tại
function getCurrentDate(str) {
    var today = new Date();
    console.log(today.getDate() + str + (today.getMonth()+1) + str + today.getFullYear())
}
getCurrentDate("/")
//bai 3
function isWeekend() {
    var d = new Date();
    var n = d.getDay();
    if( n == 6 || n == 0) {
        return true
    } else {
        return false
    }
}
isWeekend()
//bai 4
function mins(num) {
    var a = num/60
    var b = Math.round(a)
    var c = num%60
    if (b >= 1) {
        return b + ":" + c;
    } else {
        return c
    }
}
mins(80)
//bai 5
function sinceFirstYear() {
    var d = Date.now()
    var a = new Date(2020, 1, 1);
    var result = Math.floor((d - a) / (1000*60*60*24))
    return result
}
sinceFirstYear()
//bai 7
function getMonday(d) {
    d = new Date(d);
    var day = d.getDay(),
        diff = d.getDate() - day + (day == 0 ? -6:1); 
    return diff
  }
getMonday(new Date());
//bai 9
function nextYear() {
    var d = Date.now()
    var a = new Date(2021, 1, 1);
    var result = Math.floor((a - d) / (1000*60*60*24))
    return result
}
nextYear()