$.getJSON("https://api.covidtracking.com/v1/us/daily.json",function getPositive(data){
    let positive = data[0].positive;
    $(".positive").append(positive);
    let negative = data[0].negative;
    $(".negative").append(negative);
    let death = data[0].death;
    $(".death").append(death);
    let deathIncrease = data[0].deathIncrease;
    $(".deathIncrease").append(deathIncrease);
    let hospitalized = data[0].hospitalized;
    $(".hospitalized").append(hospitalized);
    let recovered = data[0].recovered;
    $(".recovered").append(recovered);
});
