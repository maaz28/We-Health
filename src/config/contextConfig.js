import React from "react";

const LoginContext = React.createContext({
    login : false,
    uid: '',
    gotUid: true,
    isLogin : () => {},
    gotUidFn : () => {},
    isBalanceUpdate : false,
    updateBalance : () => {}
});

export const LoginProvider = LoginContext.Provider;
export const LoginConsumer = LoginContext.Consumer;
