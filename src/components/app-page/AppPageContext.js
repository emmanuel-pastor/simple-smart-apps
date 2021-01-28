import React, {useEffect, useState} from "react"
import {PageState} from "../shared/PageState";
import PropTypes from "prop-types";
import AppInfo from "../../data/model/AppInfo";
import AppPage from "./AppPage";

export const AppPageContext = React.createContext({pageState: PageState.LOADING, appInfo: undefined});

export const AppPageContextProvider = (appInfo) => {
    const [pageState, setPageState] = useState(PageState.LOADING)
    const [payload] = useState(appInfo)

    useEffect(() => {
        setPageState(PageState.READY)
    }, [])

    return (
        <AppPageContext.Provider value={{pageState: pageState, appInfo: payload}}>
            <AppPage/>
        </AppPageContext.Provider>
    )
}

AppPageContextProvider.prototype = {
    appInfo: PropTypes.instanceOf(AppInfo).isRequired
}