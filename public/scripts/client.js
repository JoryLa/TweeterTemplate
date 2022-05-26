/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {
  
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]
  
  const renderTweets = function(tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    for (let tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('.tweets-container').append($tweet);
      console.log($tweet);
    }
  }
  
  const createTweetElement = function (obj) {
    const $tweet = `<article>
    <div class="withTweet">
      <div class="withAt">
        <div class="profileInfo">
          <img class="profile-pic" src="${obj.user.avatars}">
          <h3 id="name">${obj.user.name}</h3>
        </div>
        <h3 id="handle">${obj.user.handle}</h3>
      </div>
      <p>${obj.content.text}</p>
    </div>
    <div class="postInfo">
      <p class="whenPosted"> ${timeago.format(obj.created_at)}</p>
      <div class="icons">
        <i class="fa-solid fa-flag" id="flag"></i>
        <i class="fa-solid fa-retweet" id="retweet"></i>
        <i class="fa-solid fa-heart" id="like"></i>
      </div>
    </div>
  </article>`
  return $tweet;
  };

  renderTweets(data);

}); 
