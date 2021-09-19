import { request } from './generic.service';

const addItem = () => request({ url: 'cart', method: 'post', params: { ...params } });

const deleteItem = id => request({ url: 'cart', method: 'delete' });

const removeItem = id => request({ url: 'cart', method: 'post' });

const getCart = () => request({ url: 'cart', method: 'get' });

export { addItem, getCart, deleteItem, removeItem };
