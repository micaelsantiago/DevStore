function toggleMenuMobile() {
	const menu = document.querySelector('.menu--mobile');

	menu.classList.toggle('container--header--nav--mobile--links');
}

function updateLabel() {
  const input = document.getElementById('file-upload');
  const label = document.getElementById('file-upload-label');

  label.innerHTML = `
		Imagem
		<div id="fileContent">
			Arquivo selecionado: ${input.files[0].name}
			<input type="file" name="product_image" id="file-upload" accept="image/png, image/jpeg" required onchange="updateLabel()">
		</div>
  `;
}
