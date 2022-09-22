/* India Time and Day */
var getIndiaTime = function () {
    document.getElementById('indiaTime').innerHTML = new Date().toLocaleString("en-US", {timeZone:'Asia/Kolkata', timeStyle:'medium', hourCycle:'h12'});
    document.getElementById('indiaDate').innerHTML = new Date().toLocaleString("en-US", {timeZone:'Asia/Kolkata', weekday:'long', month:'long', day:'numeric', year:'numeric' });
}
getIndiaTime();
setInterval(getIndiaTime, 1000);

/* London Time and Day */
var getLondonTime = function () {
    document.getElementById('londonTime').innerHTML = new Date().toLocaleString("en-US", {timeZone:'Europe/London', timeStyle:'medium', hourCycle:'h12'});
    document.getElementById('londonDate').innerHTML = new Date().toLocaleString("en-US", {timeZone:'Europe/London', weekday:'long', month:'long', day:'numeric', year:'numeric' });
}
getLondonTime();
setInterval(getLondonTime, 1000);

/* USA California Time and Day */
var getCaliforniaTime = function () {
    document.getElementById('californiaTime').innerHTML = new Date().toLocaleString("en-US", {timeZone:'America/Los_Angeles', timeStyle:'medium', hourCycle:'h12'});
    document.getElementById('californiaDate').innerHTML = new Date().toLocaleString("en-US", {timeZone:'America/Los_Angeles', weekday:'long', month:'long', day:'numeric', year:'numeric' });
}
getCaliforniaTime();
setInterval(getCaliforniaTime, 1000);