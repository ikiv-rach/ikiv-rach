let data = [ 
    {principal:2500, time:1.8},

    {principal:1000, time: 5},
        
    {principal:3000, time:1},
        
    {principal:2000, time:3}
];

function interestCalculator(calc){
    let interestData =[];
    for (let i=0;i<calc.length;i++)
    {
        if (calc[i].principal >= 2500 && calc[i].time > 1 && calc[i].time < 3)
        {
            calc[i].rate = 3;
        } else if(calc[i].principal >= 2500 && calc[i].time >= 3){
            calc[i].rate = 4;
        } else if (calc[i].principal < 2500 || calc[i].time <= 1){
            calc[i].rate = 2;
            }
            else {
                calc[i].rate= 1;
        }

        calc[i].interest = (calc[i].principal * calc[i].rate * calc[i].time) / 100;

        interestData.push(calc[i]);
    }

console.log(interestData);
return interestData;
}

interestCalculator(data);


