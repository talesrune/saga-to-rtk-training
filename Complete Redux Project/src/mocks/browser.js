import { setupWorker } from 'msw/browser';

import { handlers } from './handlers';
import { handlers as childHandlers } from 'saga2/handlers'; //not possible
// import React, { Suspense, lazy } from 'react';
// const handler2 = lazy(() => import('saga2/handlers'));
const allHandlers = [...handlers, ...childHandlers]

// Setup browser service worker using the given handlers
export const worker = setupWorker(...allHandlers);

export const startMockServiceWorker = () => {
    worker.start();
}

export const stopMockServiceWorker = () => {
    worker.stop();
}
