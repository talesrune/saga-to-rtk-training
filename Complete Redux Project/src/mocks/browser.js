import { setupWorker } from 'msw/browser';

import { handlers } from './handlers';
// import { handlers as childHandlers } from 'saga2/handlers'; //not possible
// import React, { Suspense, lazy } from 'react';
// const handler2 = lazy(() => import('saga2/handlers'));
// const allHandlers = [...handlers] //, ...childHandlers]

// // Setup browser service worker using the given handlers
// export const worker = setupWorker(...allHandlers);

export const startMockServiceWorker = async () => {
    const childHandlers = await loadChildHandlers()
    const allHandlers = [...handlers, ...childHandlers];
    
    // Setup browser service worker using the combined handlers
    const worker = setupWorker(...allHandlers);
    
    worker.start();
}

// export const stopMockServiceWorker = () => {
//     worker.stop();
// }

const loadRemoteModule = async (url, scope, module) => {
    // eslint-disable-next-line no-undef
    await __webpack_init_sharing__('default');
    const container = window[scope];
    // eslint-disable-next-line no-undef
    await container.init(__webpack_share_scopes__.default);
    const factory = await window[scope].get(module);
    const Module = factory();
    return Module;
};

const loadChildHandlers = async () => {
const { handlers: childHandlers } = await loadRemoteModule(
    'http://localhost:3005/remoteEntry.js',
    'sagaToRtk2',
    './handlers'
);
return childHandlers;
};



