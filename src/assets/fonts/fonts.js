import { createGlobalStyle } from 'styled-components';

import Poppins400Woff from './poppins-v20-latin-regular.woff';
import Poppins400Woff2 from './poppins-v20-latin-regular.woff2';
import Poppins500Woff from './poppins-v20-latin-500.woff';
import Poppins500Woff2 from './poppins-v20-latin-500.woff2';
import Poppins600Woff from './poppins-v20-latin-600.woff';
import Poppins600Woff2 from './poppins-v20-latin-600.woff2';

export default createGlobalStyle`
    /* poppins-regular - latin */
    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        src: local(''), local(''),
            url(${Poppins400Woff2}) format('woff2'),
            url(${Poppins400Woff}) format('woff');
    }
    /* poppins-500 - latin */
    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        src: local(''), local(''),
            url(${Poppins500Woff2}) format('woff2'),
            url(${Poppins500Woff}) format('woff');
    }
    /* poppins-600 - latin */
    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        src: local(''), local(''),
            url(${Poppins600Woff2}) format('woff2'),
            url(${Poppins600Woff}) format('woff');
    }
`;