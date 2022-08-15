import {getHelper} from './requestHelper';

export const getStories = async type => {
  let url = `https://hacker-news.firebaseio.com/v0/${type}.json?print=pretty`;

  return getHelper(url, null);
};

export const getItem = async id => {
  let url = `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;

  return getHelper(url, null);
};
