import * as ActionCreator from "./ActionCreator";
import store from "../store";
import {bindActionCreators} from "redux";

export default bindActionCreators(ActionCreator, store.dispatch);
