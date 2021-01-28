import {useContext} from "react";
import {AppPageContext} from "./AppPageContext";
import {PageState} from "../shared/PageState";

const AppPage = () => {
    const {pageState, appInfo} = useContext(AppPageContext);

    switch (pageState) {
        case PageState.LOADING :
            return (<>{'Loading...'}</>)
        case PageState.READY :
            return (
                <>
                    <p>{appInfo.name}</p>
                    <p style={{whiteSpace: 'pre-line'}}>{appInfo.description}</p>
                </>
            )
        default:
            return (<></>)
    }
}

export default AppPage;