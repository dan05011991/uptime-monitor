import { FETCH_MONITORS } from './types';
import * as api from '../api/monitorApi';
import { resolveList } from '../helpers/promiseResolver';

export const fetch = () => dispatch => {
  return resolveList(FETCH_MONITORS, api.fetch, dispatch);
};