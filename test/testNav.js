/*  TEST UNIT CLIENT SIDE (MOCHA-PHATOMJS) **********************
 * Run in root proyect: -->$ make test_front_unit                *
 *   ( Run Unit test Client Side  && Server Side )               *                        *
 *   ( Run in all themes)                                        *
 *                                                               *
 * Run in build folder template: -->$ grunt mocha_phantomjs      *
 *                                                               *
 * ***************************************************************/

describe("Testing TODOMVC", function() {
    it("contains spec with an expectation", function() {
        expect(true).toBe(true);
    });

    xit("Deleting TODO", function() {
        $('#todo-list li:first-child .destroy').click();
        expect($('#todo-list li').length).to.be.equal(1);
    });

});
