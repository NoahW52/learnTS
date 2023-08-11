var counter = document.getElementById('counter');
var increment = document.getElementById('increment');
var decrement = document.getElementById('decrement');
//Unlike javascript, typescript doesn't have buuilt in awareness of the dom manipulation structure
var count = 0;
function updateCounter() {
    counter.innerHTML = count.toString();
}
increment === null || increment === void 0 ? void 0 : increment.addEventListener('click', function () {
    count++;
    updateCounter();
});
decrement === null || decrement === void 0 ? void 0 : decrement.addEventListener('click', function () {
    count--;
    updateCounter();
});
updateCounter();
