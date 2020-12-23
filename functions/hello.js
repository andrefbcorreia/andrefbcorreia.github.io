exports.handler = async (event) => {
  const subject = event.queryStringParameters.name || 'World'
  console.log("Its working");
  return {
    statusCode: 200,
    body: `Hello ${subject}!`,
  }
}
