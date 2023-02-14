var list = document.querySelector('.output ul');
var totalBox = document.querySelector('.output p');
var total = 0;
list.innerHTML = '';
totalBox.textContent = '';

var products = ['Underpants:6.99',
 'Socks:5.99',
 'T-shirt:14.99',
 'Trousers:31.99',
 'Shoes:23.99'];

for(var i = 0; i < products.length; i++) {
    var subArray = products[i].split(':');
    console.log(subArray);

    var name = subArray[0];
    console.log(name);

    var price = Number(subArray[1]);
    console.log(price);

    total += price;
    console.log(total);

    itemText = name + ' — $' + price;

    var listItem = document.createElement('li');
    
    listItem.textContent = itemText;
    list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);