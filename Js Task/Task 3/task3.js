const wholeNumber = num => {

   // variable and array defined.
    let task = [];
    let output;

    // using an if/else statement.

    for (let i =1; i <= num; i++) {
        if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
            output = "yu-gi-oh";
        } else if (i % 2 === 0 && i % 3 === 0){
            output = "yu-gi";
        } else if (i % 2 === 0 && i % 5 === 0){
            output = "yu-oh";
        } else if (i % 3 === 0 && i % 5 === 0){
            output = "gi-oh";
        } else if (i % 2 === 0){
            output = "yu";
        } else if (i % 3 === 0){
            output = "gi";
        } else if (i % 5 === 0){
            output = "oh";
        } else {
            output = i;
        }
        task.push(output);
    }
    
    console.log (task);
    return task;
}

//passing an arguement
wholeNumber (100);
wholeNumber (50);