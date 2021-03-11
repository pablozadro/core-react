interface IAPIService {
  getUsers: Function;
}

const BASE_URL = 'http://localhost:9000/api/v1';

const APIService:IAPIService = {
  getUsers: () => {
    return fetch(`${BASE_URL}/users?delay=750`)
      .then(res => res.json())
      .then(res => res.payload.users);
  }
};

export default APIService;