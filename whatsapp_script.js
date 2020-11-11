function simulateMouseEvents(element, eventName) {
    var mouseEvent = document.createEvent('MouseEvents');
    mouseEvent.initEvent(eventName, true, true);
    element[0].dispatchEvent(mouseEvent);
}

var eventFire = (MyElement, ElementType) => {
    var MyEvent = document.createEvent("MouseEvents");
    MyEvent.initMouseEvent
        (ElementType, true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        MyElement.dispatchEvent(MyEvent);
};

function myFunc() {

    messageBox = document.querySelectorAll("[contenteditable='true']")[1];

    message = "My Message"; // Replace My Message with your message use   to add spaces to your message 

    counter = 1; // Replace 5 with the number of times you want to send your message 

    for (i = 0; i < counter; i++) {
        event = document.createEvent("UIEvents");
        messageBox.innerHTML = message.replace(/ /gm, ''); // test it 
        event.initUIEvent("input", true, true, window, 1);
        messageBox.dispatchEvent(event);

        eventFire(document.querySelector('span[data-icon="send"]'), 'click');
    }
}

// Replace My Contact Name with the name  
// of your WhatsApp contact or group 
function send(){
    name = "सब मोह माया है ..😊" 
    var contact = $("[title='"+name+"']")
    simulateMouseEvents(contact, 'mousedown');
    setTimeout(myFunc, 3000);
}

setTimeout(send, 6000);