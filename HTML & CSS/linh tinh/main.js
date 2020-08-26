//Bài 1. Viết 1 function kiểm tra 1 chuỗi có nằm trong chuỗi còn lại hay không. Nếu có trả về true, nếu không trả về false - Đầu vào có 2 tham số : Tham số 1 là chuỗi ban đầu, tham số 2 là chuỗi cần kiểm tra
function checkStringExist(ob1, ob2) {
    var n = ob1.includes(ob2);
    console.log(n)
}
checkStringExist("Hello World", "Hello");
//Bài 2. Viết hàm rút ngắn chuỗi bằng cách cắt ra 8 ký tự đầu của 1 chuỗi và thêm dấu ba chấm ở cuối chuỗi. 
function shortenString(obj1) {
    var n = obj1.slice(0,8)
    console.log(n + "...")
}
shortenString('Xin chào các bạn')
//Bài 4. Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần.
function repeat(obj1) {
    var n = obj1.repeat(10);
    console.log(n);
}
repeat("Hello") 
//Bài 5. Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang. 
function repeatString(obj) {
    var obj1 = obj + " "
    var n = obj1.repeat(10).replace(/ /g, "-")
    var m = n.split("")
    m.pop()
    var a = m.join("")
    console.log(a)
}
repeatString('a')
//Bài 6. Cho 1 chuỗi và 1 số nguyên n > 1, hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang. 
function repeatString(obj, num) {
    var obj1 = obj + " "
    var n = obj1.repeat(num).replace(/ /g, "-")
    var m = n.split("")
    m.pop()
    var a = m.join("")
    console.log(a)
}
repeatString('a', 5)
//Bài 7. Viết hàm đảo ngược chuỗi. Viết function với đầu vào là 1 chuỗi string. Trả về chuỗi đảo ngược của chuỗi đó
function reverseString(obj1) {
    var n = obj1.split("").reverse().join("")
    console.log(n)
}
reverseString("hello")
//Bài 8. Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường), kết quả trả về true hoặc
function checkReverse(obj1) {
    var n = obj1.split(" ").replace(" ", "").join("").toLowerCase().reverse()
    var m = obj1.toLowerCase()
    var result = ""
    if (m == n) {
        result += true;
    } else {
        result += false;
    }
    console.log(result)
}
checkReverse("Race car")
//Bài 9. Viết hàm tìm ra số nhỏ nhất trong mảng các số.
function minNum(obj1) {
    var n = Math.min(obj1);
    console.log(typeof n)
}
minNum(2,1,3)
//Bài 10. Viết hàm tìm ra số lớn thứ nhì trong mảng các số.
function secondMax(obj1) {
    var arr = Object.values(obj1)
    var max = Math.max.apply(null, arr); 
    arr.splice(arr.indexOf(max), 1); 
    return Math.max.apply(null, arr);
};
secondMax([1,2,3,4,5])
//Bài 12. Tính tổng các số chia hết cho 5 từ 0 -> 100.
var array = [];
for(i=1; i <= 100; i++){
    if(i % 5 === 0){
        array.push(i);
    }
}
var sum = array.reduce(function(a,b){return a + b;}, 0);
console.log(sum);
//Bài 14. Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất.
function findArrayWithMaxLength(arr) {
    let maxLength = findMaxLength(arr)
    let result = [];
    for(let v of arr) {
        if(v.length() == maxLength){
            result.push(v);
        }
    }
    return result
}
console.log(findArrayWithMaxLength('aba', 'ab', 'cd', 'bcd'))