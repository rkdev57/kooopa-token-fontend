import React, { FC, useMemo } from "react";

export interface State {
  wallet: any;
}

const initialState = {
  wallet: {
    accounts: [],
    provider: "",
  },
};

type Action = {
  type: "UPDATE_WALLET";
  value: any;
};

export const UIContext = React.createContext<State | any>(initialState);
UIContext.displayName = "UIContext";

function uiReducer(state: State, action: Action) {
  switch (action.type) {
    case "UPDATE_WALLET": {
      return {
        ...state,
        wallet: action.value,
      };
    }
  }
}

export const UIProvider: FC = (props) => {
  const [state, dispatch] = React.useReducer(uiReducer, initialState);

  const updateWallet = (value: any) =>
    dispatch({ type: "UPDATE_WALLET", value });

  const currentValue = useMemo(
    () => ({
      ...state,
      updateWallet,
    }),
    [state]
  );

  return <UIContext.Provider value={currentValue} {...props} />;
};

export const useUI = () => {
  const context = React.useContext(UIContext);
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`);
  }
  return context;
};

export const ManagedUIContext: FC = ({ children }) => (
  <UIProvider>{children}</UIProvider>
);
