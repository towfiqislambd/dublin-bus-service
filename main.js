const noSeatBooked = document.getElementById('no-seat-booked');
const clickedSeatNum = document.getElementById('selected-seat');
const counter = document.getElementById('counter');
const totalPrice = document.getElementById('total-price');
const grandPrice = document.getElementById('grand-price');
const couponField = document.getElementById('coupon-field');
const couponBtn = document.getElementById('coupon-btn');
const couponBox = document.getElementById('coupon-box')

let selectedItems = [];
let sum = 0;

function handleSelectedItem(event) {
    if (selectedItems.includes(event.innerText)) {
        return alert('Seat already added')
    }
    else if (selectedItems.length > 3) {
        return alert('Maximum seat added')
    }
    else {
        event.classList.add('bg-primary');
        event.classList.add('text-white');
        noSeatBooked.classList.add('hidden')
        const seatName = event.innerText;
        clickedSeatNum.innerHTML += `
        <li class="flex justify-between">
            <span>${seatName}</span>
            <span>Economy</span>
            <span>550</span>
        </li>
    `
        selectedItems.push(seatName);
        const arrayLength = selectedItems.length;
        counter.innerText = arrayLength;
        const availableSeatEl = document.getElementById('available-seat').innerText;
        const newAvailableSeat = Number(availableSeatEl) - 1;
        document.getElementById('available-seat').innerText = newAvailableSeat;
        sum += 550;
        totalPrice.innerText = sum;
        if (arrayLength === 4) {
            couponField.removeAttribute('disabled')
            couponBtn.removeAttribute('disabled')
        }
    }
}


document.getElementById('coupon-btn').addEventListener('click', function() {
    // 15% Discount
    if (couponField.value === 'NEW50') {
        const discount = sum * .15;
        document.getElementById('grand-price').innerText = sum - discount;
        couponBtn.classList.add('hidden');
        couponField.classList.add('hidden');
        couponBox.innerHTML = `
        <p class="font-semibold text-lg">Discount</p>
        <p class="flex gap-1 items-center font-semibold text-lg">
            <span>-BDT: </span>
            <span>${discount}</span>
        </p>
    `
    }

    // 20% Discount
    if (couponField.value === 'Couple 20') {
        const discount = sum * .20;
        document.getElementById('grand-price').innerText = sum - discount;
        couponBtn.classList.add('hidden');
        couponField.classList.add('hidden');
        couponBox.innerHTML = `
        <p class="font-semibold text-lg">Discount</p>
        <p class="flex gap-1 items-center font-semibold text-lg">
            <span>-BDT: </span>
            <span>${discount}</span>
        </p>
    `
    }
})

document.getElementById('phone-number').addEventListener('input', function(event) {
    if (event.target.value.length === 11) {
        document.getElementById('next-btn').removeAttribute('disabled')
    }
})

document.getElementById('continue').addEventListener('click', function() {
    window.location.reload()
})
