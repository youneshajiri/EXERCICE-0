
const productNames = ['T-shirt blanc', 'Chaussures de sport', 'Sac à dos', 'Chemise en jean', 'Sac de voyage en cuir', 'Pantalon en toile', 'Bottes en cuir', 'Robe de soirée', 'Chaussures à talons hauts', 'Sac à main en cuir'];

const productDescriptions = ['T-shirt blanc en coton', 'Chaussures de sport légères', 'Sac à dos pour ordinateur portable', 'Chemise en jean à manches longues', 'Sac de voyage en cuir de haute qualité', 'Pantalon en toile pour homme', 'Bottes en cuir pour homme', 'Robe de soirée pour femme', 'Chaussures à talons hauts pour femme', 'Sac à main en cuir de qualité supérieure'];

const productPrices = [15.99, 49.99, 39.99, 29.99, 99.99, 39.99, 89.99, 129.99, 79.99, 119.99];

const categoryName = ['Vêtements', 'Chaussures', 'Sacs'];
const catProductIds = [
    [1, 4, 6, 8, 9], [2, 7, 9], [3, 5, 10]
];

const clientName = [
    'Jean Dupont',
    'Marie Martin',
    'Pierre Durand',
    'Sophie Dupont',
    'Antoine Laurent'
  ];

const clientProductIds = [
    [1, 3, 4],
    [2, 4, 5],
    [1, 3, 5],
    [6, 7, 8],
    [2, 9, 10]
    ];
    
    
    function Product (id,nom,description,prix) {
    this.id=id
    this.nom=nom
    this.description=description
    this.prix=prix
    }
    P = new Product(1, productNames[0], productDescriptions[0], productPrices[0])
    console.log(P)
    
    
    function Category(nom,iD) {
        this.iD=iD
        this.nom=nom
    }
    C = new Category(categoryName[0], catProductIds[1])
    console.log(C)
    
    
    function Client(nom,ID) {
        this.ID=ID
        this.nom=nom
    }
    L = new Client(clientName[0],clientProductIds[2])
    console.log(L)