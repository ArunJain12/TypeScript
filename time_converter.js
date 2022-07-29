

function timeConversion(s) {
    // Write your code here
    const isPM = s.indexOf('PM');
    let hours = s.slice(0, 2);
    
    if (isPM !== -1) {
        const numHours = hours !== '12' ? Number(hours)+12 : hours;
        return numHours + s.slice(2, s.length-2);
    } else {
        const calHrs = hours !== '12' ? hours : '00';
        return calHrs + s.slice(2, s.length-2);
    }

}

console.log(timeConversion('07:05:45PM'));