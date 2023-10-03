const rp = require("request-promise");

const EXO_API_URL =
    "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI";

const getAllPlanets = () =>
    rp({
        uri: EXO_API_URL,
        method: "GET",
        qs: {
            table: "exoplanets",
            format: "json"
        },
        json: true
    });

const startEtlPipelines = async () => {
    try {
        //Extract Planets
        const planets = await getAllPlanets();
        console.log(`Extracted ${planets.length} planets from de API`);

        //TODO Tranform Step

        //TODO Load Step
    } catch (error) {
        console.log(error);
    }
}

startEtlPipelines();