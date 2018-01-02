import './index.css';
import numeral from 'numeral';

const busTicket = numeral(1000).format('£0,0.00');
console.log(`The bus ticket is ${busTicket} to London.`); // eslint-disable-line no-console
