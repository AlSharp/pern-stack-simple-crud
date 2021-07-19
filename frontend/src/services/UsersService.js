import axios from 'axios';

class UsersService {
  constructor(path) {
    this.path = path;
  }

  async getUsers() {
    try {
      const response = await axios(this.path);
      if (response.data.users) {
        return response.data.users;
      }
      return [];
    }
    catch(error) {
      console.log(error);
      return error;
    }
  }
}

const usersService = new UsersService('http://localhost:5000/api/users');

export default usersService;