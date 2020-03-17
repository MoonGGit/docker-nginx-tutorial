import React from 'react';

import('../src/App').then(({ default: App }) => {
    import('react-dom').then(({ default: ReactDOM }) => {
        ReactDOM.render(<App />, document.getElementById('container'));
    });
});
