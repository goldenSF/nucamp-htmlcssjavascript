function getName() {
    const userName = prompt('What is You Name?');
    sayHello(userName);    
}
function sayHello(name) {
    alert('Hello ' + name + '!');
    console.log('Alert sent!');
}