import { Order } from '@pages';
import { withProviders } from './providers';
import './style/index.scss';

function App() {
  return (
    <div>
      <Order />
    </div>
  );
}

export default withProviders(App);
