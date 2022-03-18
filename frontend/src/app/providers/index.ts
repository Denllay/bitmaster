import { compose } from 'recompose';
import { withRedux } from './with-redux';

export const withProviders = compose(withRedux);
