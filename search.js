String.prototype.replaceChars = function(character, replacement){
    var str = this;
    var a;
    var b;
    for(var i=0; i < str.length; i++){
        if(str.charAt(i) == character){
            a = str.substr(0, i) + replacement;
            b = str.substr(i + 1);
            str = a + b;
        }
    }
    return str;
}
 
function search(query){
    switch(query.substr(0, 2)){
        
        case "-y":
            query = query.substr(3);
            window.location =
                "https://www.youtube.com/results?search_query=" +
                query.replaceChars(" ", "+");
            break;

             case "-s":
            query = query.substr(3);
            window.location =
                "https://soundcloud.com/search" +
                query.replaceChars(" ", "+");
            break;

        default:
            window.location="https://www.google.com/#q=" +
                query.replaceChars(" ", "+");
    }
}
 
window.onload = function(){
    // search
    searchinput = document.getElementById("searchbox");
    if(!!searchinput){
        searchinput.addEventListener("keypress", function(a){
            var key = a.keyCode;
            if(key == 13){
                var query = this.value;
                search(query);
            }
        });
    }
 
    // jump to search when tab is pressed
    var search_sqr = document.getElementById("search_sqr");
 
        }
 
 function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s ;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();


//
// To add a new search provider, paste the following between the last "break;" and "default:" (Line 39 & 40)
//
//         case "-a":
//          query = query.substr(3);
//          window.location =
//             "https://en.website.com/" +
//             query.replaceChars(" ", "%20");
//          break;
//
// -a on ln68 should be replaced with a "-letter" of your choice. You can also change it to !a, .a, /a etc.
// https://en.website.com/ on ln70 should be replaced with the search page of the website. To find this, make a few searches on your website. 
//Try to identify where your search is in the URL. If you're not sure, post in the thread and someone should help you out
//
// You can use the above two to modify an existing rule
//
// If you wish to change the number of characters in a "case", you need to change the line below, changing query.substr() to n+1, n being the number of characters.
// This ensures that when you search for something, the whole of your idenfier and the space between the identifier and query are removed.