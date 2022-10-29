import axios from 'axios';

const getLatestRepos = async (data: { githubUsername: any }, token?: any) => {
  try {
    const username = data.githubUsername;

    if (token) {
      const res = await axios.get(
        `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );
      let repos = await res.data.items;
      let latestSixRepos = repos.splice(0, 6);
      // console.log("LATEST 6 repos", latestSixRepos);
      return latestSixRepos;
    } else {
      const res = await fetch(
        `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`
      ).then((resp) => resp.json());
      // const res = await axios.get(
      //   `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`
      // );

      let repos = res.items;
      let latestSixRepos = repos.splice(0, 6);
      console.log('😳😳😳 ', latestSixRepos);
      return latestSixRepos;
    }
  } catch (error) {
    console.log(error);
  }
};

export default getLatestRepos;
