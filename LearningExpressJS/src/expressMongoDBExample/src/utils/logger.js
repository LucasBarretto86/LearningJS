module.exports = (req, res, next) => {
  let queries = JSON.stringify(req.query);
  let params = JSON.stringify(req.body);

  let log = ` => ${req.method} ${req.url}, Queries: ${queries}, Parameters: ${params}`;

  console.log(log);

  next();
};
