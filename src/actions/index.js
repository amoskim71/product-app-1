import { PRODUCT_CREATE, PRODUCT_UPDATE, PRODUCT_DELETE } from './actionTypes';

export const productCreate = (product) => ({
    type: PRODUCT_CREATE,
    payload: product
});

export const productUpdate = (product) => ({
    type: PRODUCT_UPDATE,
    payload: product
});

export const productDelete = (product) => ({
    type: PRODUCT_DELETE,
    payload: product
});
