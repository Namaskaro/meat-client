import createApp from './app';

async function initApp(context) {
  const { app, router, store } = createApp();
  await router.push(context.url);
  return { app, router, store };
}

export default initApp;
