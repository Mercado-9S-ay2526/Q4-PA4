function openGate() {
let  carCounter = 10;
const maxCars = 1000;

while (carCounter < maxCars) {
window.alert("Car No. " + carCounter + " is entering");
    carCounter += 1;

}
window.alert("The Garage is full at 1000 cars.");
}