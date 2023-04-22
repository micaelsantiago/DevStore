const products = [
	{productID: 0, image: './images/products/product_mug.webp', title: 'Caneca "Function Repeat"', shortDescription: 'Caneca com função escrita.', fullDescription: 'Se você é um amante de programação, uma caneca "Function Repeat" pode ser a escolha perfeita para adicionar um toque divertido à sua rotina diária. Essas canecas apresentam uma mensagem inspiradora e bem-humorada que resume a essência da programação.',price: 'R$49,90', link: './pages/product.html'},
	{productID: 1, image: './images/products/product_shirt.webp', title: 'Camisa "Programador"', shortDescription: 'Camisa tamanho M.', fullDescription: 'Se você é um programador ou simplesmente ama tecnologia, essa camisa pode ser a escolha perfeita para mostrar sua paixão pelo assunto. Essas camisas são projetadas especificamente para programadores e apresentam designs únicos e divertidos que destacam a sua profissão!', price: 'R$79,00', link: './pages/product.html'},
	{productID: 2, image: './images/products/product_sticky.webp', title: 'Adesivo "bug"', shortDescription: 'Adesivo para colar no seu notebook!', fullDescription: 'Se você está procurando uma maneira divertida e personalizada de decorar o seu notebook, um adesivo pode ser a escolha perfeita! Além de ser uma forma prática de identificar e diferenciar o seu dispositivo, os adesivos podem expressar sua personalidade, interesses e gostos!', price: 'R$5,90', link: './pages/product.html'}
]

const productsElement = document.querySelector('.container--main');

if (productsElement != null) {
	products.forEach(product => {
		let html = document.createElement('div');
		html.classList.add('products');

		html.innerHTML = `
			<div class="products--content">
				<div class="products--content--image">
					<img src="${product.image}" alt="Imagem do produto">
				</div>

				<div class="products--content--title">
					<h2>${product.title}</h2>
				</div>

				<div class="products--content--description">
					<p>${product.shortDescription}</p>
				</div>

				<div class="products--content--links">
					<span id="price">${product.price}</span>
					<a href="pages/product.html?productID=${product.productID}">Detalhes</a>
				</div>
			</div>
		`;

	productsElement.appendChild(html);
})	
}


function showDetailsInPage() {
   const urlParams = new URLSearchParams(window.location.search);
   const parameter = 'productID'

   if (urlParams.get(parameter)) {
   	showProductDetails(urlParams.get(parameter));	
   }
}



function showProductDetails(productID) {
	const main = document.querySelector('.main');
	const product = products[productID];
   let html = document.createElement('div');

   html.classList.add('container--main--content');

   html.innerHTML = `
		<div class="container--main--productImage">
			<img src="../${product.image}" alt="Imagem do produto">
		</div>
		
		<div class="container--main--productDescription">
			<h1>${product.title}</h1>
			<p>${product.shortDescription}</p>
			<p id="price">${product.price}</p>

			<div class="container--main--productFullDescription">
				<h2>Descrição</h2>
				<p>${product.fullDescription}</p>
			</div>
		</div>
   `;

   main.appendChild(html);
   document.title = `${product.title}`
}


showDetailsInPage()