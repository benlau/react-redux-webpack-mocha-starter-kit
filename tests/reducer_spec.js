import {List, Map, fromJS} from "immutable";
import {expect} from "chai";

import CounterReducer from "reducers/CounterReducer";

describe("reducer", () => {

  it("CounterReducer", () => {
    var counter = CounterReducer(undefined,{});
    expect(counter).to.equal(1);

    counter = CounterReducer(counter, {type: "ADD_COUNTER"});
    
    expect(counter).to.equal(2);

  });

});
