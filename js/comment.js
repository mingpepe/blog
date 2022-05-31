document.addEventListener("DOMContentLoaded", function(event) {
  function loadComments(data) {
    for (var i=0; i<data.length; i++) {
      var name = data[i].user.login;
      var content = data[i].body;
      $("#githubissue_comments").append("<div class=comments><p>name : " + name + "</p><p> content : " + content + "</p></div>");
    }
    $("#githubissue_comments").append("<a href='https://github.com/{{site.GITHUB_REPO}}/blog/issues/{{page.issueid}}#new_comment_field}' class='button'>Leave comments</button>");
  }
  console.log('Send get request to get comments according to issue id')
  $.ajax("https://api.github.com/repos/{{site.GITHUB_REPO}}/blog/issues/{{page.issueid}}/comments", {
    headers: {Accept: "application/vnd.github.squirrel-girl-preview.full+json"},
    dataType: "json",
    success: function(msg){
      console.log(msg);
      loadComments(msg);
    }
  });
});
