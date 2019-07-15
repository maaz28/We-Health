import React from "react";

const LoginContext = React.createContext({
    login : false,
    uid: '',
    isLogin : () => {},
    // gotUid: true,
    // gotUidFn : () => {},
    isBalanceUpdate : false,
    updateBalance : () => {}
});

export const LoginProvider = LoginContext.Provider;
export const LoginConsumer = LoginContext.Consumer;
