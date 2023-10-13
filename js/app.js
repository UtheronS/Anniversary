/* https://greensock.com/gsap */
TweenLite.set('#petals', { perspective: 600 })
TweenLite.set('img', { xPercent: '-50%', yPercent: '-50%' })

var total = 75
var warp = document.getElementById('petals'),
	w = window.innerWidth,
	h = window.innerHeight

for (i = 0; i < total; i++) {
	var Div = document.createElement('div')
	TweenLite.set(Div, {
		attr: { class: 'dot' },
		x: R(0, w),
		y: R(-200, -150),
		z: R(-200, 200),
	})
	warp.appendChild(Div)
	animm(Div)
}

function animm(elm) {
	TweenMax.to(elm, R(6, 15), {
		y: h + 100,
		ease: Linear.easeNone,
		repeat: -1,
		delay: -15,
	})
	TweenMax.to(elm, R(4, 8), {
		x: '+=100',
		rotationZ: R(0, 180),
		repeat: -1,
		yoyo: true,
		ease: Sine.easeInOut,
	})
	TweenMax.to(elm, R(2, 8), {
		rotationX: R(0, 360),
		rotationY: R(0, 360),
		repeat: -1,
		yoyo: true,
		ease: Sine.easeInOut,
		delay: -5,
	})
}

function R(min, max) {
	return min + Math.random() * (max - min)
}

/* https://mattboldt.com/typed.js/ */
var typed = new Typed('#text', {
	strings: [
		'Любимая, мы с тобой прошли столько всего за этот год! Помнишь, как год назад мы признались друг другу в чувствах?',
		'Эти теплые, приятные воспоминания оставили глубокий след в наших сердцах. Я никогда не забуду, как горел огонек любви внутри нас, просто наслаждаясь этим этапом влюбленности.',
		'Мы ездили в станцию морскую, гуляли по целине, парк Горького. Но я никогда не забуду нашу первую встречу. Как мы сидели с тобой в беседке неподалеку от берега моря, наблюдая за луной, пока ребята были на своей волне. Мы мило и тихо разговаривали, делали фотографии луны.',
		'Я очень рад, что ты у меня есть, я счастлив с тобой, мне с тобой очень комфортно. Порой у нас возникают трудности, но мы их решаем вместе и благодаря этому наши отношения только укрепляются.',
		'Мы прошли этап влюбленности со всеми этими бабочками в животе. Теперь мы на новом этапе. Продолжая работать над собой и нашими отношениями, мы становимся все более зрелыми.',
	],
	startDelay: 3000,
	typeSpeed: 50,
	backSpeed: 0,
	fadeOut: true,
	loop: false,
	showCursor: false,
	onComplete: function () {
		var author = document.getElementById('author')
		author.style.opacity = 1
	},
})
