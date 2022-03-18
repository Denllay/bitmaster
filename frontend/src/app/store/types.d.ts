// * we can't import from app

declare type RootState = ReturnType<typeof import('./index').store.getState>;
declare type AppThunk<ReturnType = void> = import('redux-thunk').ThunkAction<
  ReturnType,
  RootState,
  unknown,
  import('redux').AnyAction
>;
