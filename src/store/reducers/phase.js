import { handleActions } from 'redux-actions';
import concat from 'lodash/concat';
import dropRight from 'lodash/dropRight';
import last from 'lodash/last';

export default handleActions({
  NEXT_PHASE: (state, { payload }) =>
    ({ phases: concat(state.phases, payload.name), current: payload.name }),
  PREV_PHASE: (state, { _ }) =>
    ({ phases: dropRight(state.phases), current: last(state.phases) }),
}, { phases: [], current: undefined });
