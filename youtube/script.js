var mp3Btn = document.getElementById('mp3');
var	mp4Btn = document.getElementById('mp4');
var URLinput = document.querySelector('.URL-input');
var server = 'https://github.com/kadirdenalkitabi/kadirdenalkitabi.github.io/blob/master/youtube/79154904-young-man-back-flip-parkour-in-the-urban-space-sport-in-the-city-sport-activities-outdoors-acrobatic.jpg?raw=true';

mp3Btn.addEventListener('click', () => {
	console.log(`URL: ${URLinput.value}`);	
	redirectMp3(URLinput.value);
});


mp4Btn.addEventListener('click', () => {
	console.log(`URL: ${URLinput.value}`);	
	redirectMp4(URLinput.value);
});

function redirectMp3(query) {
	window.location.href = `${server}/downloadmp3?url=${query}`;
}

function redirectMp4(query) {
	window.location.href = `${server}/downloadmp4?url=${query}`;
}
