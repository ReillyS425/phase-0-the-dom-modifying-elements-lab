const main = document.getElementById('main');
main.remove('main');

const newHeader = document.createElement("h1");
//document.body.append(newHeader);

newHeader.id=('victory');
newHeader.innerHTML = 'Reilly is the champion';
document.body.append(newHeader);

