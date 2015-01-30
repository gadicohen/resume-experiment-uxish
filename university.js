/*
Create By: Sir Gadddi Cohen 
Date: December 2014 
Description: This is a code generates a web page that is used as my resume. 
				The code demonstrates my capabilites with GUI. 
*/

var lastPosition = window.pageYOffset;
var x=0;
var y=0;
var i;
var titlepos;
var scrolled;
var a=0;
var paper = Raphael("bgimages","100%","100%");
var circles={};
var pexists={};
for (j=0;j<6;j++){
	pexists[j]=false;
}
var stars={};
var staropacity={};
var height=$(window).height();
var width=$(window).width();
var alltraits=$( "#traits" ).find( ".trait" );
var reset=false;
var starsset=false;
var stars0=false;
var circlesreset=true;
/*
White circles as pointers for information about me.
Such as 
- Work Expirance 
- Skills
- Education 
- Languages 
- Sample work 
- Recomendations 
*/
for (q=0;q<6;q++){
	/* set location of each circle - use an array to set default location
	 									for each circle so that they'll be
	 									proportional. */ 

}



//names of each circle 
var traits={0: "Experience", 1:"Skills", 2:"Education", 3:"Projects/Research", 4:"Writings", 5:"About me"};

$(document).ready(function() {

	titlepos=$("#title").position().top;

		//make stars
		for (i=0;i<1500;i++){

				var rand=Math.random();
				var rand1=Math.random();
				var rand2=Math.random();

			if (i<6){
				var circle = paper.circle((1/7+i/7)*width, .5*height*rand1, 20);

				circle.node.setAttribute("class","mainStar");
				circles[i]=circle;
			}

			circle = paper.circle(width*rand, .85*height*rand1, 2*rand2);

			circle.node.setAttribute("class","minorStar");
			stars[i]=circle;
			staropacity[i]=.8*Math.random();
		}


	scroll();

  $(window).scroll(function(){
  	scroll();
  	});

});






var a;
var b;
var c;
var r,g,d;


/*
Scroll through the page 
*/
function scroll(){
	scrolled = window.pageYOffset;
	console.log("y"+scrolled);

	if (lastPosition === scrolled) {
		return false;
	} 

	else {

		//update last position when scrolling
		lastPosition = scrolled;


		intro();
		
		scene1();

		scene2();

		

		//edges();
		
		

	}	
}


function intro(){
	//intro titles
	if (scrolled>3000&&scrolled<7000){
		$("#title").css("top",100+.05*(3000-scrolled));
		$("#welcome").css("letter-spacing",-2+(scrolled-3000)/700+"px");
		$("#by").css("opacity",1-(scrolled-3000)/3200);
		$("#welcome").css("opacity",1-(scrolled-3000)/3200);
		$("#by").css("letter-spacing",3+(scrolled-3000)/400+"px");
	}

}


function fadeOutandIn(out,fadein,begin,end){
	if (scrolled>begin && scrolled<end){
		$(out).css("opacity",(end-1000-scrolled)/2000);
		$(fadein).css("opacity",(scrolled-(end-1000))/2000);
	}
}

function edges(){
	//pars opacity
	if (scrolled<4500||scrolled>9000){
		$("#p1").css("opacity",0);
	} 
	if (scrolled<9000||scrolled>12000){
		$("#p2").css("opacity",0);
	} 
	if (scrolled<12000||scrolled>15000){
		$("#p3").css("opacity",0);
	} 
	if (scrolled<15000||scrolled>18000){
		$("#p4").css("opacity",0);
	} 
	if (scrolled<18000||scrolled>20000){
		$("#p5").css("opacity",0);
	} 
	if (scrolled<20000||scrolled>23000){
		$("#p6").css("opacity",0);
	} 
	if (scrolled<23000||scrolled>30000){
		$("#p7").css("opacity",0);
	} 
	if (scrolled<27000||scrolled>34000){
		$("#p8").css("opacity",0);
	} 
	if (scrolled<22000){
		if (!stars0){
			for (i=0;i<1500;i++){
				stars[i].attr("opacity",0);//(scrolled-22000)/(35000-22000)*staropacity[i]);
			}
			stars0=true;
		}
	}
}


function scene1(){

		//Paragraphs fade in and out

			if (scrolled>4500 && scrolled<7000){
				$("#p1").css("opacity",(Math.floor(scrolled-4500)/1500));
			}

			fadeOutandIn("#p1","#p2",7000,10000);
			fadeOutandIn("#p2","#p3",10000,13000);
			fadeOutandIn("#p3","#p4",13000,16000);
			fadeOutandIn("#p4","#p5",16000,19000);
			fadeOutandIn("#p5","#p6",19000,21000);
			fadeOutandIn("#p6","#p7",21000,24000);
			fadeOutandIn("#p7","#p8",24000,30000);

			if (scrolled>30000 && scrolled<34000){
				$("#p8").css("opacity",1-((scrolled-30000)/4000));
			}

			edges();


		//university hall, background colors

			if (0<scrolled<6000){
				$("#universityhall img.top").css('opacity',1-scrolled/6000);
				i=scrolled/(6000/169);

				if (i>0 && i<=169){
					a=Math.floor(169-i);
					b=Math.floor(219-i*(128/169));
					c=Math.floor(252-i*(91/169));
					$("body").css("background-color","rgb("+a+","+b+","+c+")");
				}
			}

		//night falls background color
			if (scrolled>7000 && scrolled<=30000){
				i = (scrolled-7000)/((30000-7000)/(161-38));
				if (i>0 && i<=161-38){
					r=Math.floor(0);
					g=Math.floor(91-i*((91-21)/(161-38)));
					d=Math.floor(161-i);
					$("body").css("background-color","rgb("+r+","+g+","+d+")");
				}
			}

		//night falls on university hall
			if (scrolled>7000 && scrolled<=12000){
				$("#universityhall img.second").css('opacity',1-((scrolled-7000)/(12000-7000)));
			}
			if (scrolled>14000 && scrolled<=18000){
				$("#universityhall img.third").css('opacity',1-((scrolled-14000)/(18000-14000)));
			}
			if (scrolled>22000&&scrolled<=28000){
				$("#universityhall img.fourth").css('opacity',1-((scrolled-22000)/(28000-22000)));
			}


			if (scrolled<22000){
				if (starsset){
					for (i=0;i<1500;i++){
						stars[i].attr("opacity",0);//(scrolled-22000)/(35000-22000)*staropacity[i]);
					}
					starsset=false;
				}
			}


}

function scene2(){

	//university hall falls down
	if (scrolled>25000 && scrolled<=40000){
			a++;
			var ypos=340+scrolled-25000;
			var div=(.5*height-340)/(15000);
			console.log(340+(scrolled-25000)/(15000/(.8*height)-340),.8*height);

			$("#universityhall").css("top",340+(scrolled-25000)/(15000/((.54*height)-340))+"px");
		}

	if (scrolled>22000&&scrolled<51000){
		
		if (!starsset){
			console.log("STARSET");
			for (i=0;i<1500;i++){
				stars[i].attr("opacity",staropacity[i]);//(scrolled-22000)/(35000-22000)*staropacity[i]);
			}
			starsset=true;
			stars0=false;

		}

	}

	var circle;

	if (scrolled<35000){
		if (!circlesreset){
			for (cir=0;cir<6;cir++){
					circle=circles[cir];

					var anim = Raphael.animation({cx: circle.getBBox().cx, cy: .1+.4*height*Math.random()}, 3000, '<');
					circle.animate(anim); 

					circle.attr("opacity",0);
			}

			circlesreset=true;
			//reset=false;
		}
	}

	if (scrolled>=35000 && scrolled<=45000){
		var sub=(45000-35000)/6;
		for (n=35000;n<=45000;n+=sub){
			console.log(n+"n");
			if (scrolled<=n){
				var num=Math.floor((scrolled-35000)/sub);

				if (!pexists[num]){
					console.log(num,"NNNNNN");
					circle=circles[num];
					var ax=circle.getBBox().cx-25;
					var ay=circle.getBBox().cy+10;
					
					alltraits[num].style.top=ay+"px";
					alltraits[num].style.left=ax+"px";// (scrolled-35000)/10000);

					alltraits[num].style.opacity=1;

					// (scrolled-35000)/10000);
					circle.attr("opacity",1);	

					//$("#bgimages").append(p);	

					pexists[num]=true;

				}


			}
		}






	}


		if (scrolled>47000 && scrolled<=53000){

			if (!reset){

				for (cir=0;cir<6;cir++){
					circle=circles[cir];

					var anim = Raphael.animation({cx: circle.getBBox().cx, cy: .2*height}, 3000, '<');
					circle.animate(anim); 
					//trait.animate(anim);
					var curry=circle.getBBox().cy+10;

					//console.log($( "#bgimages" ).find( ".trait" ))
					var trait=$( "#traits" ).find( ".trait" )[cir];
					trait.style.opacity=0;

					
					//.css( "top", curry+(.2*height-curry+10)*(scrolled-45000)/10000);
					// run the given animation immediately

				}

				circlesreset=false;

			for (i=0;i<1500;i++){
					stars[i].attr("opacity",0);//staropacity[i]-(scrolled-45000)/(53000-45000));
				}
				reset=true;
				starsset=false;

		}

	
			/*var ypos=340+scrolled-25000;
			var div=(.5*height-340)/(15000);
			console.log(340+(scrolled-25000)/(15000/(.8*height)-340),.8*height);

			$("#universityhall").css("top",340+(scrolled-25000)/(15000/((.54*height)-340))+"px");*/
		}

		if (scrolled>49000){
			$("#by").css("opacity",(scrolled-51000)/1000);
			$("#title").css("top","-80px");

		}


/*

	if (scrolled>32000 && scrolled<43000){
		if (scrolled<35000){
			$("#whoami").css("opacity",(Math.floor(scrolled-32000)/14000));
		}
		$("#whoami").css("letter-spacing",-5+(scrolled-32000)/500+"px");

	}

	if (scrolled>35000 && scrolled < 44000) {
		$("#whoami").css("opacity",1-(scrolled-35000)/3000);
	}
*/

}


