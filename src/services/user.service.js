import { requestUser } from './generic.service';

const getUser = id => requestUser({ url: `users/${id}`, method: 'get' });

const createUser = () => requestUser({ url: 'users', method: 'post' });

export { createUser, getUser };
