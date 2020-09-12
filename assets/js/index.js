let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
	let progressHeight = (window.pageYOffset / totalHeight) * 100;
	progress.style.height = progressHeight + "%";
};
// =======================================================




// function imgSlider(anything){
// 	document.getElementById("slider").src = anything;
// }

// gsap.timeline({
// 	scrollTrigger: {
// 		trigger: ".box2",
// 		start: "center 100%",
// 		markers: false,
// 		scrub: false,
// 		pin: false
// 	}
// })
// .from('.box2 img', {x : innerWidth * -1})
// .from('.box2 h2', {y : innerHeight * -1})
// .from('.box2 p', {x : innerWidth * 1})
// gsap.timeline({
// 	scrollTrigger: {
// 		trigger: ".box3",
// 		start: "center 100%",
// 		markers: false,
// 		scrub: false,
// 		pin: false
// 	}
// })
// .from('.box3 img', {x : innerWidth * -1})
// .from('.box3 h2', {x : innerWidth * 1})
// .from('.box3 p', {x : innerWidth * 1})
// gsap.timeline({
// 	scrollTrigger: {
// 		trigger: ".box4",
// 		start: "center 100%",
// 		markers: false,
// 		scrub: false,
// 		pin: false
// 	}
// })
// .from('.box4 img', {x : innerWidth * -1})
// .from('.box4 h2', {x : innerWidth * 1})
// .from('.box4 p', {y : innerHeight * 1})


// $(document).ready(function(){
//     $(".nav").on("click","a", function (event) {
//         event.preventDefault();
//         var id  = $(this).attr('href'),
//             top = $(id).offset().top;
//         $('body,html').animate({scrollTop: top}, 1500);
//     });
// });