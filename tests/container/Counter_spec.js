
import {List, Map, fromJS} from "immutable";
import {expect} from "chai";
import React from "react";
import ReactDOM from "react-dom";
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from "react-addons-test-utils";
import {Provider} from "react-redux";
import Counter from "containers/Counter";
import store from "store";

describe("Counter" , () => {

  it("Basic", () => {
    const component = renderIntoDocument(
      <Provider store={store}>
        <Counter/>
      </Provider>
    );

    var counter = store.getState().counter;
    var elem = scryRenderedDOMComponentsWithClass(component, "Counter");
    expect(elem.length).to.equal(1);
  });

});
