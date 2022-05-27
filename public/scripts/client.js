/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {



  const renderTweets = function (tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    console.log('tweets: ', tweets);
    for (let tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('.tweets-container').append($tweet);

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
      <p class="tweetText">${obj.content.text}</p>
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



  //Submit a new tweet
  $("#submit").submit(function (event) {
    event.preventDefault();
    let data = $(this).serialize();
    let tweetText = $('#tweet-text').val();
    let max = 140;
    if (tweetText.length > max) {
      alert('Must be less than 140 characters.')
    } else if (tweetText.length < 1 || tweetText.length === null) {
      alert('Must contain at least 1 character.')
    } else {
      $.ajax({ url: "/tweets", method: "POST", data: data })
        .then(loadLastSubmittedTweet)
    }
  });

  const loadLastSubmittedTweet = function () {
    $.ajax(('/tweets'), { method: 'GET' })
      .then(function (result) {
        let lastTweet = result[result.length - 1]
        const $tweet = createTweetElement(lastTweet);
        $('.tweets-container').prepend($tweet);
      });
  }






  function loadTweets() {
    $.ajax(('/tweets'), { method: 'GET' })
      .then(function (result) {
        renderTweets(result);
      });
  }

  loadTweets();

  /*Upon page load, lod existing tweets from database.
    When 'tweet' button is clicked, submit the form. If there's no errors store in database and render last tweet.
    */

});






