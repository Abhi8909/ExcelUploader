import React, { Component } from "react";

import Ctx from "./index";

class GlobalContext extends Component {
    state = {
        userAuthenticate: false
    };

    update(req) {
        this.setState(req);
    }

    render() {

        return (
            <Ctx.Provider
                value={{
                    userAuthenticate:this.state.userAuthenticate,
                    update:this.update.bind(this)
                }}
            >{this.props.children}</Ctx.Provider>
        );
    }
}

export default GlobalContext;
