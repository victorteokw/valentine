import { createActions } from 'redux-actions';

const { nextPhase, prevPhase } = createActions({
  NEXT_PHASE: ({ name }) => ({ name }),
  PREV_PHASE: () => ({})
});

export { nextPhase, prevPhase };
