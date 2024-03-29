function binarySearch(list, element) {
    let left = 0;
    let right = list.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (list[mid] === element && (mid === 0 || list[mid - 1] !== element)) {
            return mid; 
        } else if (list[mid] < element) {
            left = mid + 1; 
        } else {
            right = mid - 1; 
        }
    }

    return -1
}

const array = [18,18,18];
const target = 18;
const index = binarySearch(array, target);
console.log(index); // Output: 0 (index of the first occurrence of 1)