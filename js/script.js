
$(document).ready(function() {
	
	/*  Get Links  *\
	\*=============*/
	var linkString = $('abruzzi').text();

	/*  Clear Page  *\
	\*==============*/
	$('abruzzi').empty();

	/*  Create Array from linkString  *\
	\*================================*/
	var linkArray = linkString.split("\n");

	/*  Go thru Array  *\
	\*=================*/
	var i;
	var count = 1;
	var html = '';

	for(i in linkArray) {

		/*  Get line  *\
		\*============*/
		var line = jQuery.trim(linkArray[i]);

		// If line is empty, skip
		if(!line)
			continue;

		/*  If it doesn't start with http,  *\
		|*  it must be a seperator          *|
		\*==================================*/
		if(line.substr(0,4) != 'http') {
			if(count > 1)
				html = html + '</div>';
				html = html + '<div class="block"><h1>' + line + '</h1><ul>';
				count++;
				continue;
		}

		/*  Split URL and Title  *\
		\*=======================*/
		var lineArray = line.split(" || ");
		var url = lineArray[0];
		var title = lineArray[1];

		/*  Add HTML code  *\
		\*=================*/
		if(newwindow)
			html = html + '<li><a href="' + url + '" target="_blank">' + title + '</a></li>'
		else
			html = html + '<li><a href="' + url + '">' + title + '</a></li>'
	}

	/*  Add generated content to page  *\
	\*=================================*/
	
	html = html + '</ul></div>';
	$('body').append(html);


	/*  Animation Time!  *\
	\*===================*/
	
	/*  Hide lists  *\
	\*==============*/
	$('ul').slideUp();

	/*  Show on hover  *\
	\*=================*/
	$('.block').mouseenter(function() {
		$('ul', this).slideDown();
	});

	/*  Hide on unhover  *\
	\*===================*/
	$('.block').mouseleave(function() {
		$('ul', this).slideUp();
	});

});

	/*  Search Engines  *\
	\*==================*/
function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;
}

showTime();
setInterval(showTime, 1000);
