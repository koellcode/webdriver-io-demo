require("babel-register");
require("./runner")
  .run()
  .catch(function(error) {
    console.log("ERROR", error);
  });
