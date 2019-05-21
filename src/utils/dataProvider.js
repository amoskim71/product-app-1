import faker from 'faker';
import { v4 } from 'uuid';

export const genreateFakeProduct = () => ({
    id: null,
    title: faker.commerce.productName(),
    description: 'Test-' + faker.commerce.productMaterial(),
    price: faker.commerce.price()
});


function productFactory(noOfProducts = 3) {
    let products = [];

    for (let i = 0; i < noOfProducts; i++) {
        let product = genreateFakeProduct();
        product.id = v4();
        products.push(product);
    }
    return products;
};


export const productSchema = {
    id: null,
    title: '',
    description: '',
    price: ''
}

export const products = productFactory();
