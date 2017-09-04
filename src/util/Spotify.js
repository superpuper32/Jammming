const CLIENT_ID = '';
const REDIRECT_URI = "http://localhost:3000/";

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }
  }

  search() {
    return await fetch(`https://api.spotify.com/v1/search?type=track&q=${TERM}`, );
  }
};

export default Spotify;
