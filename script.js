const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbnails = document.querySelectorAll('.thumbnail-item');
// add event ke container
container.addEventListener('click', function(e){
	// cek yang di klik adalah thumbnail
	if (e.target.className == 'thumbnail-item') {
		// ambil & ganti src gambar
		jumbo.src = e.target.src;
		jumbo.classList.add('fade');
		setTimeout(function(){
			jumbo.classList.remove('fade');
		}, 500);
		// looping thumbnail
		thumbnails.forEach(function(thumbnail){
			if (thumbnail.classList.contains('active')) {
				thumbnail.classList.remove('active');
			}
		});

		e.target.classList.add('active');
	}
});