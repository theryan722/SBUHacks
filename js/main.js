// Setting Social Media Buttons

window.onload = function (){
    var c = document.getElementById("svg1").contentDocument;

    var fb = c.getElementById("XMLID_420_");
    fb.setAttribute("onclick", "window.open('http://www.facebook.com/SBUHacks', '_blank');");

    var insta = c.getElementById("XMLID_444_");
    insta.setAttribute("onclick", "window.open('https://www.instagram.com/sbuhacks/', '_blank');");

    var twitter = c.getElementById("XMLID_425_");
    twitter.setAttribute("onclick", "window.open('https://twitter.com/SBUHacks', '_blank');");

    var twitter2 = c.getElementById("XMLID_421_");
    twitter2.setAttribute("onclick", "window.open('https://twitter.com/SBUHacks', '_blank');");

    var twitter3 = c.getElementById("XMLID_422_");
    twitter3.setAttribute("onclick", "window.open('https://twitter.com/SBUHacks', '_blank');");

    var reddit = c.getElementById("XMLID_443_");
    reddit.setAttribute("onclick", "window.open('https://www.reddit.com/user/SBUHacks', '_blank');");
}
