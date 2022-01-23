import Footer from "./containers/Footer";
import Header from "./containers/Header";

import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import Posts from "./Posts";
import ShowPost from "./containers/ShowPost";
function MainComponent(props) {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Posts} />
                <Route path="/post/:postid" component={ShowPost} />
                <Route>404 Not Found!</Route>
            </Switch>
            <Footer />
        </>
    );
}
export default MainComponent;