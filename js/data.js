const products = [
    {
        image: "img/01.jpg",
        name: "Umkal Cabernet Sauvignon",
        description: `
            <strong>Visão:</strong> Cor rubi profunda.<br>
            <strong>Olfato:</strong> Um bouquet exuberante revela aromas de frutas vermelhas maduras, baunilha e chocolate. Notas sutis de tabaco.<br>
            <strong>Paladar:</strong> Taninos suaves e bem integrados, com uma estrutura robusta e persistente.<br>
            <strong>Harmonização:</strong> Ideal para carnes vermelhas, cordeiro e pratos de caça.
        `,
    },
    {
        image: "img/02.jpg",
        name: "Umkal Gran Reserva",
        description: `
            <strong>Visão:</strong> Vermelho rubi intenso.<br>
            <strong>Olfato:</strong> Frutas negras maduras, baunilha e chocolate.<br>
            <strong>Paladar:</strong> Intenso com taninos maduros.<br>
            <strong>Harmonização:</strong> Ideal para carnes e queijos curados.
        `,
    },
    {
        image: "img/03.jpg",
        name: "Umkal Reserva Especial",
        description: `
            <strong>Visão:</strong> Vermelho granada.<br>
            <strong>Olfato:</strong> Notas de cereja, cassis e especiarias com um toque de chocolate.<br>
            <strong>Paladar:</strong> Equilibrado e aveludado, com taninos macios e um final prolongado.<br>
            <strong>Harmonização:</strong> Carnes grelhadas e massas com molhos ricos.
        `,
    },
    {
        image: "img/04.jpg",
        name: "Umkal Chardonnay",
        description: `
            <strong>Visão:</strong> Amarelo palha com reflexos dourados.<br>
            <strong>Olfato:</strong> Frutas tropicais, como abacaxi e manga, com notas de baunilha.<br>
            <strong>Paladar:</strong> Fresco e vibrante, com uma acidez equilibrada e final cítrico.<br>
            <strong>Harmonização:</strong> Ideal com peixes, frutos do mar e queijos suaves.
        `,
    },
    {
        image: "img/05.jpg",
        name: "Umkal Syrah",
        description: `
            <strong>Visão:</strong> Rubi escuro e brilhante.<br>
            <strong>Olfato:</strong> Amora, framboesa e especiarias, com um toque de pimenta negra.<br>
            <strong>Paladar:</strong> Encorpado e denso, com taninos firmes e um final prolongado.<br>
            <strong>Harmonização:</strong> Ideal para carnes de caça e queijos curados.
        `,
    },
    {
        image: "img/06.jpg",
        name: "Umkal Rosé",
        description: `
            <strong>Visão:</strong> Rosa claro e brilhante.<br>
            <strong>Olfato:</strong> Morango, framboesa e toques florais.<br>
            <strong>Paladar:</strong> Leve e refrescante, com uma acidez equilibrada e final frutado.<br>
            <strong>Harmonização:</strong> Perfeito com saladas, frutos do mar e pratos leves.
        `,
    },
    {
        image: "img/07.jpg",
        name: "Umkal Merlot",
        description: `
            <strong>Visão:</strong> Rubi intenso.<br>
            <strong>Olfato:</strong> Frutas vermelhas maduras e ameixas, com notas de carvalho.<br>
            <strong>Paladar:</strong> Macio e aveludado, com taninos suaves e um final frutado.<br>
            <strong>Harmonização:</strong> Ideal para massas e pratos com cogumelos.
        `,
    },
    {
        image: "img/08.jpg",
        name: "Umkal Pinot Noir",
        description: `
            <strong>Visão:</strong> Vermelho rubi claro.<br>
            <strong>Olfato:</strong> Cerejas e morangos frescos com um toque de carvalho.<br>
            <strong>Paladar:</strong> Elegante, com taninos finos e um final delicado e frutado.<br>
            <strong>Harmonização:</strong> Ideal para aves e pratos à base de cogumelos.
        `,
    },
    {
        image: "img/09.jpg",
        name: "Umkal Carménère",
        description: `
            <strong>Visão:</strong> Vermelho púrpura intenso.<br>
            <strong>Olfato:</strong> Pimentão verde, frutas vermelhas e especiarias.<br>
            <strong>Paladar:</strong> Macio e redondo, com taninos aveludados e final persistente.<br>
            <strong>Harmonização:</strong> Ideal para carnes vermelhas grelhadas e queijos duros.
        `,
    },
    {
        image: "img/10.jpg",
        name: "Umkal Brut",
        description: `
            <strong>Visão:</strong> Amarelo claro com reflexos esverdeados e bolhas finas.<br>
            <strong>Olfato:</strong> Frutas cítricas e toques de flores brancas.<br>
            <strong>Paladar:</strong> Refrescante, com uma acidez viva e um final longo e seco.<br>
            <strong>Harmonização:</strong> Ideal para aperitivos e frutos do mar.
        `,
    },
    {
        image: "img/11.jpg",
        name: "Umkal Tannat",
        description: `
            <strong>Visão:</strong> Vermelho púrpura profundo.<br>
            <strong>Olfato:</strong> Frutas negras, tabaco e couro.<br>
            <strong>Paladar:</strong> Taninos firmes e marcantes, com um final prolongado.<br>
            <strong>Harmonização:</strong> Perfeito com carnes de caça e pratos robustos.
        `,
    },
    {
        image: "img/12.jpg",
        name: "Umkal Reserva Privada",
        description: `
            <strong>Visão:</strong> Rubi profundo com reflexos violáceos.<br>
            <strong>Olfato:</strong> Frutas vermelhas maduras, especiarias e toques de baunilha.<br>
            <strong>Paladar:</strong> Complexo e harmonioso, com taninos bem integrados.<br>
            <strong>Harmonização:</strong> Ideal para pratos elaborados e carnes vermelhas.
        `,
    },
    {
        image: "img/13.jpg",
        name: "Umkal Espumante Rosé",
        description: `
            <strong>Visão:</strong> Rosa claro com bolhas finas.<br>
            <strong>Olfato:</strong> Frutas vermelhas frescas e um toque floral.<br>
            <strong>Paladar:</strong> Leve, fresco e equilibrado, com uma acidez viva.<br>
            <strong>Harmonização:</strong> Ideal para sobremesas e pratos leves.
        `,
    },
    {
        image: "img/14.jpg",
        name: "Umkal Malbec",
        description: `
            <strong>Visão:</strong> Rubi intenso.<br>
            <strong>Olfato:</strong> Ameixas maduras, chocolate e especiarias doces.<br>
            <strong>Paladar:</strong> Encorpado, com taninos robustos e um final longo.<br>
            <strong>Harmonização:</strong> Ideal para carnes assadas e queijos fortes.
        `,
    }
];

// Função para carregar os produtos
function loadProducts() {
    const productSection = document.querySelector('#product-list');
    let productHTML = '';

    products.forEach((product) => {
        productHTML += `
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div class="product-item">
                    <img src="${product.image}" alt="${product.name}" class="img-fluid">
                    <div class="description">
                        <div>
                            <h4>${product.name}</h4>
                            <p>${product.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    productSection.innerHTML = productHTML;
}

document.addEventListener("DOMContentLoaded", loadProducts);
