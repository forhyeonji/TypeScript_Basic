{
  type NetworkErrorState = {
    result: 'fail';
    reason: 'offline' | 'down' | 'timeout';
  };

  type SuccessState = {
    result: 'success';
  };

  type ResultState = SuccessState | NetworkErrorState;

  class NetworkClient {
    tryConnect(): ResultState {
      return {
        result: 'success',
      };
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      this.client.tryConnect();
      // login.....
    }
  }

  class App {
    constructor(private service: UserService) {}

    run() {
      try {
        this.service.login();
      } catch (e) {
        // show dialog to user
        // 의미있는 처리를 할 수 있는 곳에서 try-catch를 사용한다.
        console.log('너 오류났어!! 그치만 의미있는 로그를 보여줄게!!');
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);

  app.run();
}
