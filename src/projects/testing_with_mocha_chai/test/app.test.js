import { assert } from "chai";
import App from "../src/app.js";

describe("Test app", () => {
    it('App should return test', () => {
        assert.equal(App.greetings(), "Hello");
    })
})