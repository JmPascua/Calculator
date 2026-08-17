const display = document.getElementById("display");

function moveLeft() 
{
    let position = display.selectionStart;

    if (position > 0) 
    {
        display.setSelectionRange(position - 1, position - 1);
        display.focus();
    }
}

function moveRight() 
{

    let position = display.selectionStart;

    if (position < display.value.length) 
    {
        display.setSelectionRange(position + 1, position + 1);
        display.focus();
    }
}

function addToDisplay(value)
{
    let position = display.selectionStart;

    display.value =
        display.value.substring(0, position) +
        value +
        display.value.substring(position);

    display.setSelectionRange(position + 1, position + 1);
    display.focus();
}
