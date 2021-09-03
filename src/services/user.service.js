import { requestUser } from './generic.service';

const getUser = id => requestUser({ url: `user/${id}`, method: 'get' });

const createUser = () => requestUser({ url: 'user', method: 'post' });

export { createUser, getUser };
