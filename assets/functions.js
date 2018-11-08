function Age() {
    var userAge = document.getElementById('age').value;
    var userDate = new Date();
    var userYear = userDate.getFullYear();
    var calculate = userYear - userAge;
    document.getElementById('year').value = calculate;
};
function Year() {
    var userAge2 = document.getElementById('year').value;
    var userDate2 = new Date();
    var userYear2 = userDate2.getFullYear();
    var calculate2 = userAge2 - userYear2;
    var hack = calculate2 + -calculate2 + -calculate2;
    document.getElementById('age').value = hack;
};

/** vidoes are hidden by default with inline style attribute */
function Vid1() {
    /** on btn click, show vid1 and hide vid2 */
    document.getElementById('vid1').style.display = 'block';
    document.getElementById('vid2').style.display = 'none';
    document.getElementById('show').style.display = 'none';
};
function Vid2() {
    /** on btn click, show vid2 and hide vid1 */
    document.getElementById('vid2').style.display = 'block';
    document.getElementById('vid1').style.display = 'none';
    document.getElementById('show').style.display = 'none';
};

function showTimer() {
    document.getElementById('timer1').style.visibility = "visible";
    setTimeout("hideTimer()", 3000);
};
function hideTimer() {
    document.getElementById('timer1').style.visibility = "hidden";
};
setTimeout("showTimer()", 3000);
