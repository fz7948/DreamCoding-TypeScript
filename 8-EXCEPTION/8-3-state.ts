{
  class TimeoutError extends Error {}
  class OfflineError extends Error {}

  interface NetworkUser {
    tryConnect(): void;
  }

  type NetworkErrorState = {
    result: "fail";
    reason: "offline" | "down" | "timeout";
  };
  type SuccessState = {
    result: "success";
  };
  type ResultState = SuccessState | NetworkErrorState;

  class NetworkClient implements NetworkUser {
    tryConnect(): ResultState {
      throw new Error("no network!");
    }
  }

  class UserService {
    constructor(private client: NetworkUser) {}

    login() {
      this.client.tryConnect();
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch (error) {
        // error는 any 타입
        // show dialog to user
        // UserService.login에서 try, catch를 하는것보단 직접적으로 처리가 가능한 app.run에서 try, catch 해주는것이 좋다
        console.log("catched!");
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);

  const app = new App(service);
  app.run();
}
