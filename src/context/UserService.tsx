import {api} from '../service/api';
import AuthHeader from './AuthHeader';

class UserService {

  getUserBoard() {
    return api.get('auth', { headers: AuthHeader() });
  }

}

export default new UserService();