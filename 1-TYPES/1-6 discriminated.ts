{
  // function: login -> success, fail
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail";
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login2(id: string, password: string): LoginState {
    return {
      result: "success",
      response: {
        body: "logged in!",
      },
    };
  }
  //   function login(id: string, password: string): Promise<LoginState> {
  //     return {
  //       response: {
  //         body: "logged in!",
  //       },
  //     };
  //   }

  // printLoginState(state: LoginState)
  // success -> body
  // fail -> reason

  function printLoginState2(state: LoginState) {
    //   state.result  success or fail
    if (state.result === "success") {
      console.log(`성공 ${state.response.body}`);
    } else {
      console.log(`실패 ${state.reason}`);
    }
  }
}
