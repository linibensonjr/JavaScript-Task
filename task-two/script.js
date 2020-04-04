let data = [
    {
        principal: 2500,
        time: 1.8
    },
    {
        principal: 1000,
        time: 5
    },
    {
        principal: 3000,
        time: 1
    },
    {
        principal: 2000,
        time: 3
    }
]

let interestData = [];

function interestCalculator(dataArr) {
    for (i=0; i<dataArr.length; i++) {
      //re-assigning the indices
        let principal = dataArr[i].principal;
        let time = dataArr[i].time;
        let rate;
        if (principal >= 2500 && (time>1 && time<3)) {
            rate = 3;
            interest=(principal*rate*time)/100;
            //new object to store interest results
            newObj={principal:principal, time:time, rate:rate, interest:interest};

        } else if (principal >= 2500 && time >= 3) {
            rate = 4;
            interest=(principal*rate*time)/100;
            newObj={principal:principal, time:time, rate:rate, interest:interest};

        } else if (principal < 2500 || time <= 1) {
            rate = 2;
            interest=(principal*rate*time)/100;
            newObj={principal:principal, time:time, rate:rate, interest:interest};
        } else {
            rate = 1;
            interest=(principal*rate*time)/100;
            newObj={principal:principal, time:time,rate:rate, interest:interest};
        }
        interestData.push(newObj);
    }
    console.log(interestData);
    return interestData;
}

interestCalculator(data);