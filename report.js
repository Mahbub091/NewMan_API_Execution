const newman = require("newman");

newman.run(
  {
    collection: require("./collections/AutomationExerciseNew.postman_collection.json"),

    iterationCount: 1,
    reporters: "htmlextra",
    reporter: {
      htmlextra: {
        export: "./Reports/report.html",
        title: "My Newman Html Report",
        browserTitle: "Toms Newman Html Report"
      },
    },
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log("collection run complete!");
  }
);