module.exports = (app) => {
  // Your code here
  app.log('Yay! The app was loaded!')
  app.log('Whoooo!')

  // example of probot responding 'Hello World' to a new issue being opened
 app.on('issues.opened', async context => {
    const issueComment = context.issue({ body: 'Thanks for opening this issue!' })
    return context.github.issues.createComment(issueComment)
  })
}