import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { sayHello } from './functions/say-hello/resource';

defineBackend({
  sayHello
});

defineBackend({
  auth,
  data,
});
