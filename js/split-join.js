(function(){
    "use strict";

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    const planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    const planetsArray = planetsString.split('|');
    console.log(planetsArray);


    const planetsBreak = planetsArray.join('<br>');
    console.log(planetsBreak);
    // document.write(planetsBreak);
    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    const planetsList = `<ul><li>${planetsArray.join('</li><li>')}</li></ul>`;
    console.log(planetsList);

    document.write(planetsList);


})();

