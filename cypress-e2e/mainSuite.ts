const runner = require("./featuresRunner");
let suites_to_run = process.env.SUITES;

function initialize() {
  console.log(`mainSuite initialize`);
}

if (!suites_to_run) {
  suites_to_run = "smoke";
}

const suites = {
  smoke: [
    "smoke_suite/authentication.feature",
    "smoke_suite/authorization.feature",
    "smoke_suite/tags_management.feature",
    "smoke_suite/blogs_management.feature"

  ]
};

let suites_array = suites_to_run.split(",");
let features_promise = new Promise((resolve, reject) => {
  let features = [];
  suites_array.forEach((element) => {
    if (suites[element.trim()]) {
      features = features.concat(suites[element.trim()]);
    }
  });
  resolve(features);
});

features_promise.then(async (features: string[]) => {
  console.log(`features_promise: `, features)
  runner.run(features);
});
