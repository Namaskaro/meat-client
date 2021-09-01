import { request } from './generic.service';

const getUser = id => request({ url: `user/${id}`, method: 'get' });

const createUser = () => request({ url: 'user', method: 'post' });

export { createUser, getUser };
