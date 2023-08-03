const fulfilledRegistration = (state, {payload}) =>{
    state.user = payload.user;
    state.token = payload.token;
    state.isLoggedIn = payload.isLoggedIn;
}