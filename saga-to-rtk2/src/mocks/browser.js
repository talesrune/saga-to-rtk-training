import { setupWorker } from 'msw/browser';

import { handlers } from './handlers';

// Setup browser service worker using the given handlers
export const worker = setupWorker(...handlers);

export const startMockServiceWorker = () => {
    // worker.start();
    worker.start({
        onUnhandledRequest(req, print) {
            console.log('oi')
            console.log(req.url.pathname)
          if (req.url.pathname === undefined) {
            console.log('oi2')
            return 
          }
      
          print.warning()
        }
    })
}

export const stopMockServiceWorker = () => {
    worker.stop();
}
