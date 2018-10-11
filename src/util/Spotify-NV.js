let userAccessToken='';
let clientID='9c63b585728549c581be50cd23d5784a';
let redirectURI='http://localhost:3000/';

function getQueryVariable(variable)
{
       var query = window.location.href.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] === variable){return pair[1];}
       }
       return(false);
}

class Spotify {

static getAccessToken(){
  if (userAccessToken!==''){return userAccessToken}



  if (window.location.href.match('/access_token=([^&]*)/') && window.location.href.match('/expires_in=([^&]*)/'))
  {
    let userAccessToken;
    userAccessToken=getQueryVariable('access_token');
    let userExpirationTime;
    userExpirationTime=getQueryVariable('expires_in');
    window.setTimeout(() => userAccessToken = '', userExpirationTime * 1000);
  window.history.pushState('Access Token', null, '/');
console.log(userAccessToken);


  }
  else
  {
  window.location = "https://accounts.spotify.com/authorize?client_id=" + clientID + "&response_type=token&scope=playlist-modify-public&redirect_uri=" + redirectURI;
//console.log(window.location);
}

}

static savePlaylist(playlistName,trackURIs){


userAccessToken==Spotify.getAccessToken();
let headers;
headers={Authorization: `Bearer ${userAccessToken}`}
let userID;
userID='';

if(playlistName !== '' && trackURIs!=='')
{}
else {
  return;
}

};

 static search(searchTerm){

   userAccessToken==Spotify.getAccessToken();

let headers;
headers={
  headers: {Authorization: `Bearer ${userAccessToken}`}
};

console.log(headers);

  fetch('https://api.spotify.com/v1/search?type=track&q='.$searchTerm,headers).then(response => {
    if (response.ok) {
      //console.log(response);
      JSON.stringify(response);
      console.log(response);
      return response;
    }
    throw new Error('Request failed!');
}, networkError => console.log(networkError.message)
).then(jsonResponse => {


});
}

};

 export default Spotify;
