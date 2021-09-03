import { request } from './generic.service';

const addItem = () =>
  request({ url: 'cart', method: 'post', params: { ...params } });

export { addItem };
