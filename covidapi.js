function getState(){
    var stateCode = document.getElementById("stateCode").defaultValue = "us"
    return "https://api.covidtracking.com/v1/" + stateCode + "/daily.json"
};

function getStats(){
    $.getJSON(getState(),function(data){
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
};
