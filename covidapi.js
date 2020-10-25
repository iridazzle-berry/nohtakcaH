function getState(){
    var stateCode = document.getElementById("stateCode");
    if (stateCode = 'us') {
        return "https://api.covidtracking.com/v1/" + stateCode + "/daily.json";
    }
    else {
        return "https://api.covidtracking.com/v1/states" + stateCode + "/daily.json";
    }
};

function getStats(){
    $.getJSON(getState(),function(data){
        let positive = data[0].positive;
        $(".positive").text("Number of Positive Cases:  " + positive);
        let negative = data[0].negative;
        $(".negative").text("Number of Negative Cases: " + negative);
        let death = data[0].death;
        $(".death").text("Total Deaths: " + death);
        let deathIncrease = data[0].deathIncrease;
        $(".deathIncrease").text("Death Increase: " + deathIncrease);
        let hospitalized = data[0].hospitalized;
        $(".hospitalized").text("Hospitalized: " + hospitalized);
        let recovered = data[0].recovered;
        $(".recovered").text("Recovered: " + recovered);
    });
};
