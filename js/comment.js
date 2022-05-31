function loadGithubComments(repo, issueid) {
  function loadComments(data) {
    for (var i=0; i<data.length; i++) {
      var name = data[i].user.login;
      var content = data[i].body;
      $("#githubissue_comments").append("<div class=comments><p>name : " + name + "</p><p> content : " + content + "</p></div>");
    }
    url = `https://github.com/${repo}/blog/issues/${issueid}#new_comment_field}`
    console.log("Leave comments at " + url)
    $("#githubissue_comments").append(`<a href='${url}'` class='button'>Leave comments</button>");
  }
  console.log(`Send get request to get comments according to issue id, repo = ${repo}, issueid = ${issueid}`)
  $.ajax(`https://api.github.com/repos/${repo}/blog/issues/${issueid}/comments`, {
    headers: {Accept: "application/vnd.github.squirrel-girl-preview.full+json"},
    dataType: "json",
    success: function(msg){
      console.log(msg);
      loadComments(msg);
    }
  });
}
