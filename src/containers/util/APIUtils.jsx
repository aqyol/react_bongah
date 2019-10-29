import React from 'react';
import { API_BASE_URL, ACCESS_TOKEN, REFFERENCE } from '../constants';
import { BasicNotification } from '../../shared/components/Notification';


const request = (options) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  if (localStorage.getItem(ACCESS_TOKEN)) {
    headers.append('Authorization', `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`);
  }

  const defaults = { headers };
  // options = Object.assign({}, defaults, options);
  const totalOptions = { ...defaults, ...options };
  console.log(totalOptions);
  return fetch(totalOptions.url, totalOptions)
    .then(response => response.json()
      .then((json) => {
        if (!response.ok) {
          return Promise.reject(json);
        }
        return json;
      }));
};

export const showNotification = (notificationLU, title, message, color) => {
  notificationLU.notice({
    content: <BasicNotification
      title={title}
      message={message}
      color={color}
    />,
    duration: 5,
    closable: true,
    style: {
      top: 0,
      left: 0,
    },
    className: 'left-up',
  });
};

// export function getAllPolls(page, size) {
//   const pageIndex = page || 0;
//   const totalSize = size || POLL_LIST_SIZE;
//
//   return request({
//     url: API_BASE_URL + "/polls?page=" + page + "&size=" + size,
//     method: 'GET'
//   });
// }
//
// export function createPoll(pollData) {
//   return request({
//     url: API_BASE_URL + "/polls",
//     method: 'POST',
//     body: JSON.stringify(pollData)
//   });
// }
//
// export function castVote(voteData) {
//   return request({
//     url: API_BASE_URL + "/polls/" + voteData.pollId + "/votes",
//     method: 'POST',
//     body: JSON.stringify(voteData)
//   });
// }

export function login(loginRequest) {
  return request({
    url: `${API_BASE_URL}/auth/signin`,
    method: 'POST',
    body: JSON.stringify(loginRequest),
  });
}

export function register(registerRequest) {
  return request({
    url: `${API_BASE_URL}/auth/register`,
    method: 'POST',
    body: JSON.stringify(registerRequest),
  });
}

export function active(activeRequest) {
  return request({
    url: `${API_BASE_URL}/auth/active`,
    method: 'POST',
    body: JSON.stringify(activeRequest),
  });
}

export function signup(signupRequest) {
  return request({
    url: `${API_BASE_URL}/auth/signup`,
    method: 'POST',
    body: JSON.stringify(signupRequest),
  });
}

export function checkUsernameAvailability(username) {
  return request({
    url: `${API_BASE_URL}/user/checkUsernameAvailability?username=${username}`,
    method: 'GET',
  });
}

export function checkEmailAvailability(email) {
  return request({
    url: `${API_BASE_URL}/user/checkEmailAvailability?email=${email}`,
    method: 'GET',
  });
}

export function getCurrentUser() {
  if (!localStorage.getItem(ACCESS_TOKEN)) {
    return Promise.reject(new Error('No access token set.'));
  }

  return request({
    url: `${API_BASE_URL}/user/me`,
    method: 'GET',
  });
}

export function getScopes() {
  return request({
    url: `${API_BASE_URL}/${REFFERENCE}/partner/scope/list`,
    method: 'GET',
  });
}

export function createScope(scope) {
  return request({
    url: `${API_BASE_URL}/${REFFERENCE}/partner/scope/add?label=${scope}`,
    method: 'POST',
  });
}

export function getUserProfile(partnerId) {
  return request({
    url: `${API_BASE_URL}/${REFFERENCE}/partner/info?partnerId=${partnerId}`,
    method: 'GET',
  });
}

export function getAccountInfo(id) {
  return request({
    url: `${API_BASE_URL}/accountInfo/${id}`,
    method: 'GET',
  });
}

export function getUserAdsList(type) {
  return request({
    url: `${API_BASE_URL}/ads/${type}/list`,
    method: 'GET',
  });
}

// export const showNotification = (notificationLU, title, message, color) => {
//   notificationLU.notice({
//     content: <BasicNotification
//       title={title}
//       message={message}
//       color={color}
//     />,
//     duration: 5,
//     closable: true,
//     style: {
//       top: 0,
//       left: 0,
//     },
//     className: 'left-up',
//   });
// };

export const UserContext = React.createContext({
  id: 0,
  name: '0',
  username: '',
});

export const LoginContext = React.createContext({
  handle: () => { },
});

export const LogoutContext = React.createContext({
  handle: () => { },
});

export function savePartner(editRequest) {
  return request({
    url: `${API_BASE_URL}/${REFFERENCE}/partner/save`,
    method: 'POST',
    body: JSON.stringify(editRequest),
  });
}

export function getPartnersList() {
  return request({
    url: `${API_BASE_URL}/${REFFERENCE}/partner/list`,
    method: 'GET',
  });
}

// export function getUserCreatedPolls(username, page, size) {
//   page = page || 0;
//   size = size || POLL_LIST_SIZE;
//
//   return request({
//     url: API_BASE_URL + "/users/" + username + "/polls?page=" + page + "&size=" + size,
//     method: 'GET'
//   });
// }
//
// export function getUserVotedPolls(username, page, size) {
//   page = page || 0;
//   size = size || POLL_LIST_SIZE;
//
//   return request({
//     url: API_BASE_URL + "/users/" + username + "/votes?page=" + page + "&size=" + size,
//     method: 'GET'
//   });
// }
