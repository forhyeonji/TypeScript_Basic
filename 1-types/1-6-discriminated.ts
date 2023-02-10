{
  // union 을 만들때 공통된 프로퍼티를 가지고 있고 value만 다르게 구분하면 편하게 사용 가능.
  // 아래의 result = 'success' or 'fail'
  // function: login => success, fail ⏱️
  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    result: 'fail';
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login2(id: string, pw: number): LoginState {
    return {
      result: 'success',
      response: {
        body: 'logged in!',
      },
    };
  }

  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 🥲 reason
  function printLoginState2(state: LoginState): void {
    if (state.result === 'success') {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`🥲 ${state.reason}`);
    }
  }
}
