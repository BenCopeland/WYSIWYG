"use strict";

var famousPeopleObj = [
	{
	title: "Samurai",
	name: "Tomoe Gozen",
	bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
	image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
	lifespan: {
		birth: 1747,
		death: 1797
		}
	},{
	title: "King",
	name: "Albert Edward VII",
	bio: "King of the United Kingdom and the British Dominions and Emperor of India from 22 January 1901 until his death.",
	image: "http://www.thamesweb.co.uk/windsor/windsorhistory/images/kings/edvii03.jpg",
	lifespan: {
		birth: 1841,
		death: 1910
		}
	},{
	title: "Yeezus",
	name: "Kanye Omari West",
	bio: "American hip hop recording artist, songwriter, record producer, fashion designer, and entrepreneur.",
	image: "http://www.stlucianewsonline.com/wp-content/uploads/2016/02/kanye-west.jpg",
	lifespan: {
		birth: 1977,
		death: "nope"
		}
	},{
	title: "45th Vice President of the United States",
	name: "Albert Arnold Gore Jr.",
	bio: "American politician and environmentalist who served as the 45th Vice President of the United States from 1993 to 2001 under President Bill Clinton.",
	image: "https://brennerbrief.files.wordpress.com/2013/02/al-gore.jpg",
	lifespan: {
		birth: 1948,
		death: "n/a"
		}
	},{
	title: "'Aliens' Guy",
	name: "Giorgio A. Tsoukalos",
	bio: "Swiss-born Greek-Austrian writer and television personality.",
	image: "http://generator-meme.com/inc/media/memes/ancient-aliens-guy.jpg",
	lifespan: {
		birth: 1978,
		death: "Aliens"
		}
	},{
	title: "My Hero",
	name: "Shia LaBeouf",
	bio: "American actor, performance artist, and director who became known for being dope and doing dope shit.",
	image: "https://s-media-cache-ak0.pinimg.com/736x/15/0e/8e/150e8ed8b5cebc0fcb2339799eccb875.jpg",
	lifespan: {
		birth: 1986,
		death: "not this day"
		}
	}
];

//targeting output element and text field.
var outputEl = document.getElementById("outputEl");
var inputEl = document.getElementById("inputEl");

//adds person container divs with individual ids
var counter = 0;
for (; counter < famousPeopleObj.length ; counter++) {
	outputEl.innerHTML += `<div class="person__container" id="person--${counter}"></div>`;
	//targets individual ids and populates container divs with content from famousPeopleObj
	var output = document.getElementById(`person--${counter}`);
	output.innerHTML += `<person><header>`+famousPeopleObj[counter].name+`, `+famousPeopleObj[counter].title+`</header><img src="`+famousPeopleObj[counter].image+`"</img><section>`+famousPeopleObj[counter].bio+`</section><footer>`+famousPeopleObj[counter].lifespan.birth+` - `+famousPeopleObj[counter].lifespan.death+`</footer></person>`;
}

//globally accessable variable to be used in keyup eventlistener
var currentContainer;
//keyup event listener to replace bio with input field text
inputEl.addEventListener("keyup", function(e) {
  var test = currentContainer[0].children[0].children[2];
  test.innerHTML = inputEl.value;
});

//targets all person containers
var containerEl = document.getElementsByClassName("person__container");
//adds event listeners to person containers and adds dotted border to clicked divs while removing dotted class from previously clicked divs
for (let i = 0; i < containerEl.length; i++) {
	var currentPerson = containerEl[i];
	currentPerson.addEventListener("click", function (event) {
		//removes dotted class from all person container divs
		for (let i = 0; i < containerEl.length; i++) {
			var output = document.getElementById(`person--${i}`);
			output.classList.remove(`dotted`);
		};
		//adds class of dotted to clicked person container div
		this.classList.add(`dotted`);
		//gives input field focus
		inputEl.focus();
		//resets input field value to zero upon clicking different person container div
		inputEl.value = "";
		//most recent person container div clicked added to globally accessable variable
		currentContainer = document.getElementsByClassName("dotted");
	});
}

//clear input field on enter key press
document.addEventListener("keyup", function(e) {
	if(e.keyCode == 13){
		inputEl.value = "";
		//removes dotted border
		currentContainer[0].classList.remove(`dotted`);
	}
});







