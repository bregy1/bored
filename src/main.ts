import ReactDOM from 'react-dom';

import App from './main/app.container';
import { K, O } from './main/utils';

ReactDOM.render(
  K(App, O),
  document.getElementById('root')
);
