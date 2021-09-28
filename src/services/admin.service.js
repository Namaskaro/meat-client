import { requestUser } from './generic.service';

const signIn = () => requestUser({ url: 'auth/login', method: 'post', body: { ...params } });

export { signIn };
