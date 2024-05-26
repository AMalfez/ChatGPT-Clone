const moment = require('moment');

const today = moment()
const SevenDayBefore = moment().subtract(7,'days')
const ThirtyDayBefore = moment().subtract(30,'days')

function SevenDayData(data){
    const sdd = data.map(d=>{
        const date = moment(d.date,"DD/MM/YY hh:mm:ss");
        const check1 = date.isBefore(today);
        const check2 = date.isAfter(SevenDayBefore);
        return check1&&check2 ? d:undefined;
    })
    return sdd;
}

function ThrityDayData(data){
    const sdd = data.map(d=>{
        const date = moment(d.date,"DD/MM/YY hh:mm:ss");
        const check1 = date.isBefore(today);
        const check2 = date.isAfter(ThirtyDayBefore);
        return check1&&check2 ? d:undefined;
    })
    return sdd;
}

export {SevenDayData,ThrityDayData};
