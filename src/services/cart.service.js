import { request } from './generic.service';

const addItem = () => request({ url: 'cart', method: 'post', params: { ...params } });

const deleteItem = () => request({ url: 'cart', method: 'delete' });

const getCart = () => request({ url: 'cart', method: 'get' });

export { addItem, getCart, deleteItem };
