import { request } from './generic.service';

const addItem = () => request({ url: 'cart', method: 'post', params: { ...params } });

const getCartItems = () => request({ url: 'cart', method: 'get' });

export { addItem, getCartItems };
