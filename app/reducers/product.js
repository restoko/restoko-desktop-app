import { GET_PRODUCTS } from '../actions/product';

export default function products(state = [], action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return state = [
                {
                    picture: 'Acrylic (Transparent)',
                    category: '25',
                    name: '$2.90',
                    price: '$2.90'
                },
                {
                    picture: 'Acrylic (Transparent)',
                    category: '25',
                    name: '$2.90',
                    price: '$2.90'
                },
                {
                    picture: 'Acrylic (Transparent)',
                    category: '25',
                    name: '$2.90',
                    price: '$2.90'
                }
            ];
        default:
            return state;
    }
}
