import SpotifyWebApi from "spotify-web-api-node";

// user scopes
const scopes = [
    "user-top-read",
    "user-library-read",
    "user-read-currently-playing",
    "user-read-recently-played",
].join(",");

const params = {
    scope: scopes,
}

const queryParamString = new URLSearchParams(params).toString();

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString}`;

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
});

export default spotifyApi;
export { LOGIN_URL };