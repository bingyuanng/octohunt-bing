const URL = `https://api.github.com/search/users`

const GithubService = {
  getUsersByLanguageAndLocation: function(language, location) {
    const query =  encodeURIComponent(`type:user language:${language} location:${location}`);
    return fetch(`${URL}?q=${query}`)
  }
}

export default GithubService