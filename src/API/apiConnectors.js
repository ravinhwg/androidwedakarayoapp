import axios from 'axios';
import GhostCredentials from '../../GHOST_API_KEY.json';
// configure axios to use baseURL and set headers for androidwedakarayo.com
axios.defaults.baseURL = 'https://androidwedakarayo.com/ghost/api/v3/content';
axios.defaults.headers.common['Content-Type'] = 'application/json';

// Android wedakarayo api Key
const API_KEY = GhostCredentials.GHOST_API_KEY;

const getPosts = async ({pageParam = 1}) => {
  try {
    const response = await axios.get(
      `/posts/?key=${API_KEY}&page=${pageParam}&limit=15&include=tags&include=authors&filter=tags:-hash-lifestyle`,
    );
    return response.data;
  } catch (e) {
    console.log('errorpparam', pageParam);

    console.log(e.response.data);
  }
};

const grabFeaturedArticle = async () => {
  try {
    const response = await axios.get(
      `/posts/?key=${API_KEY}&filter=featured:true&limit=1&include=tags&include=authors`,
    );
    return response.data;
  } catch (e) {
    console.log(e.response.data);
  }
};

const grabTags = async ({pageParam = 1}) => {
  try {
    const response = await axios.get(
      `/tags/?key=${API_KEY}&filter=visibility:public&page=${pageParam}&limit=16&include=count.posts`,
    );
    return response.data;
  } catch (e) {
    console.log('errorpparam', pageParam);

    console.log(e.response.data);
  }
};

const grabArticlesFromTag = async ({queryKey, pageParam = 1}) => {
  try {
    const response = await axios.get(
      `/posts/?key=${API_KEY}&filter=tags:${queryKey[0]}&page=${pageParam}&limit=15&include=tags&include=authors`,
    );
    return response.data;
  } catch (e) {
    console.log('errorpparam', pageParam);
    console.log(e.response.data);
  }
};
export {getPosts, grabFeaturedArticle, grabTags, grabArticlesFromTag};
