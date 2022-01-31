module.exports = {
    _comment:
        "This config was generated using 'stryker init'. Please take a look at: https://stryker-mutator.io/docs/stryker-js/configuration/ for more information",
    packageManager: "npm",
    reporters: ["html", "clear-text", "progress"],
    testRunner: "jest",
    coverageAnalysis: "off",
    mutate: ["./index.js"],
    mutator: "javascript",
};
