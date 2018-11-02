export const getActiveId = state =>
  state.activate.activate ? state.activate.activate.activeId.id : null;
