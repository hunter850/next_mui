require("dotenv").config();
const cli = require("next/dist/cli/next-build");

cli.nextBuild(["-p", process.env.PORT || 3000]);
