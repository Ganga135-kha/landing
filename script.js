var buttonOne=document.getElementById('btn1');
var buttonTwo=document.getElementById('btn2');
var buttonThree=document.getElementById('btn3');
var buttonFour=document.getElementById('btn4');

buttonOne.addEventListener('click',function(){

		document.getElementById('container').style.background="#b5a1a542";
		document.getElementById('head-img').innerHTML="<img src='gu1.jpg'>";
		document.getElementById('head-head').innerHTML="Gucci";
		document.getElementById('description').innerHTML="The Gucci 1955 Horsebit bag has been brought back to life for cruise 2020, with the print accentuated in the new design. With it being a style so quintessential to the brand, this will is a piece that will never date.Horsebit shoulder bag, £1,580, Gucci";




	})

	buttonTwo.addEventListener('click',function(){
		
		document.getElementById('container').style.background="#729a38";
		document.getElementById('head-img').innerHTML="<img src='giv111.png'>";
		document.getElementById('head-head').innerHTML="Michael Kors";
		document.getElementById('description').innerHTML="Michael Kors is a great go-to for affordable designer handbags that you will rely on for years. This soft leather shoulder bag with tassels and an MK chain will make a great addition to your working wardrobe.";
		document.getElementById('container').style.background="	rgba(247, 146, 105, 0.49)";
	})
	buttonThree.addEventListener('click',function(){
		
		document.getElementById('container').style.background="white";
		document.getElementById('head-img').innerHTML="<img src='lou22.png'>";
		document.getElementById('head-head').innerHTML="Strathberry";
		document.getElementById('description').innerHTML="Strathberry might be one of the youngest brands in our round-up (the Scottish label was founded in 2013) but with its attention to detail, focus on premium craftsmanship and unique designs, it is definitely one to watch – and of course, the bags are royally approved, having been carried by the Duchess of Sussex on more than one occasion.";


	})

	buttonFour.addEventListener('click',function(){
		
		document.getElementById('container').style.background="rgba(48, 51, 43, 0.56)";
		document.getElementById('head-img').innerHTML="<img src='en333.jpg'>";
		document.getElementById('head-head').innerHTML="JW Anderson";
		document.getElementById('description').innerHTML="JW Anderson’s Keyts style is the ultimate everyday bag for a fashionista; small and compact, it also features the brand's new gold-tone chain hardware inspired by a sardine tin opener.";

	})