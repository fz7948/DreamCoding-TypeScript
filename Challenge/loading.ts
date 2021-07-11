{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState3(state: ResourceLoadState) {
    switch (state.state) {
      case "loading":
        console.log(`👀 loading...`);
        break;
      case "success":
        console.log(`😃 ${state.response.body}`);
        break;
      case "fail":
        console.log(`😱 ${state.reason}`);
        break;
      default:
        throw new Error(`unknown state: ${state}`);
    }
  }

  printLoginState3({ state: "loading" }); // 👀 loading...
  printLoginState3({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLoginState3({ state: "fail", reason: "no network" }); // 😱 no network
}
