export const getActiveId = state =>
  state.active && state.active.activeId ? state.active.activeId.id : null;
