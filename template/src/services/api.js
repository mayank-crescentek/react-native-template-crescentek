import Api from '../utils/Api';

export function setLoginDetails(token) {
  console.log('setLoginDetails ==>', token);
  Api.defaultHeader({
    authorization: `Bearer ${token}`,
  });
}

function getStatus(response) {
  if (response.status === 200 || response.status === 204) {
    return { status: true, response: response.response };
  } else if (response.status === 502) {
    // Alert.alert('Internet not available', 'Please check your internet setting');
    return { status: false };
  } else {
    if (response.status === 400) {
      return { status: false, response: response.response, isWithError: true };
    } else if (response.status === 428) {
      // Alert.alert(response, 'Something Wrong');
      return { status: false, response: response.response };
    } else {
      return { status: false, response: response };
    }
  }
}

// login
export async function signIn(params) {
  try {
    const res = await Api.POST('auth/sign-in', params);
    if (res) {
      console.log('signIn ==>', res);
      return getStatus(res);
    } else {
      return { status: false, message: res.message };
    }
  } catch (error) {
    console.log('signIn error: ', error);
    return { status: false, message: 'Oops, Something Went Wrong' };
  }
}
