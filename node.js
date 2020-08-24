//Bài 1: Viết chương trình JavaScript để lấy một phần tử ngẫu nhiên từ một mảng
function ranInt(arr) {
    var ran = arr[Math.floor(Math.random() * arr.length)];
    return ran
}
ranInt([3, 7, 9, 11])
//Bài 2: Viết chương trình đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
}
shuffle([3, 7, 9, 11])
//Bài 3:
function duplicates(arr1, arr2) {
    var arr = arr1.concat(arr2)
    let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)
    console.log(findDuplicates(arr)) 
}
//Bài 4:
function symmetricDifference(arr1, arr2) {
    var arr = arr1.concat(arr2)
    let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)
    var a = findDuplicates(arr)
    var c = a
    var b = arr.indexOf(a)
    return b
}
symmetricDifference([1, 2, 3], [1, 2, 4])
//Bài 5: Viết function lấy tất cả các phần tử không trùng nhau trong cả 2 mảng
function union(arr1, arr2) {
    var arr = arr1.concat(arr2)
    const set = new Set(arr);
    const newArr = [...set]
    return newArr
}
union([1,2,3], [1,2,4])
//Bài 6:
function random_hex_color_code() {
    function getRanInt(max) {
        return Math.floor(Math.random()*Math.floor(max))
    }
    console.log(getRanInt(255) + ", " + getRanInt(255) + ", " + getRanInt(255))
}
random_hex_color_code()
