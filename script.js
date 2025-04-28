function getInput()
{
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    return {num1,num2};

}
function add()
{
    const {num1,num2} = getInput();
    if(isNaN(num1) || isNaN(num2)) 
    {
        document.getElementById("outputArea").value = "Please enter valid numbers.";
        return;    
    }
    else
    {
        let result = num1 + num2;
        document.getElementById("outputArea").value = num1 + "+" + num2 + " = " + result;
        return result;
    }
}

function subtract()
{
    const {num1,num2}=getInput(); 
    if(isNaN(num1) || isNaN(num2)) 
    {
        document.getElementById("outputArea").value = "Please enter valid numbers.";
        return;    
    }
    else
    {
        let result = num1 - num2;
        document.getElementById("outputArea").value = num1 + "-" + num2 + " = " + result;
        return result;
    }
}

function multiply()
{
    const {num1,num2}=getInput(); 
    if(isNaN(num1) || isNaN(num2)) 
    {
        document.getElementById("outputArea").value = "Please enter valid numbers.";
        return;    
    }
    else
    {
        let result = num1*num2;
        document.getElementById("outputArea").value = num1 + "x" + num2 + " = " + result;
        return result;
    }
}

function divide()
{
    const {num1,num2}=getInput(); 
    if(isNaN(num1) || isNaN(num2)) 
    {
        document.getElementById("outputArea").value = "Please enter valid numbers.";
        return;    
    }
    else if(num2==0)
    {
        document.getElementById("outputArea").value = "Division by zero is not allowed.";
        return;
    }
    else
    {
        let result = num1/num2;
        document.getElementById("outputArea").value = num1 + "/" + num2 + " = " + result;
        return result;
    }
}

function clearScreen()
{
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("outputArea").value="";
}

function toggleDarkMode()
{
    let element = document.getElementById("main");
    if (element.classList.contains("dark-mode"))
         {
        element.classList.remove("dark-mode");
        element.classList.add("light-mode");
    } 
    else 
    {
        element.classList.remove("light-mode");
        element.classList.add("dark-mode");
    }
}