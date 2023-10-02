import axios from 'axios';
import dummyData from '../data/dummyData.json';

const baseUrl = 'https://vteam.free.beeceptor.com/my/api/path';

class TeamService {
  async getTeam() {
    try {
      const response = await axios.get(baseUrl);
      console.log(response.data)
      return response.data;
    } catch (error) {
      return dummyData;
    }
  }
}

export default new TeamService();