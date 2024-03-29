import {useContext} from "react";
import {AppPageContext} from "./AppPageContext";
import {PageState} from "../shared/PageState";
import Headline from "./headline/Headline";
import style from "./AppPage.module.css";
import DownloadButtons from "./download-buttons/DownloadButtons";
import Rating from "./rating/Rating";
import useWindowDimensions from "../../util/WindowDimensionHook";
import ScreenshotsSlider from "./screenshots-slider/ScreenshotsSlider";
import Stats from "./stats/Stats";
import {fromAppIdToAppName} from "../../util/Converting";
import MetaData from "./MetaData";

const AppPage = () => {
    const {pageState, appInfo} = useContext(AppPageContext);
    const {width} = useWindowDimensions();

    switch (pageState) {
        case PageState.READY :
            return (
                <div className={style.appPage__mainWrapper}>
                    <div className={style.appPage__mainContent}>
                        {width > 1200 && <div className={style.appPage__mainScreenshot}>
                            <img src={appInfo.images.main_screenshot_path} alt={'Main app screenshot'}/>
                        </div>}
                        <div className={style.appPage__topSection}>
                            <Headline app_icon={appInfo.images.app_icon_path} app_title={appInfo.name}
                                      install_count={appInfo.stats.install_count}/>
                            <Rating rating={appInfo.stats.rating} review_count={appInfo.stats.review_count}
                                    review_link={appInfo.review_link}/>
                            <DownloadButtons appName={fromAppIdToAppName(appInfo.id)}
                                             playLink={appInfo.download_links.play_store}
                                             apkLink={appInfo.download_links.apk}
                                             playBadgePath={appInfo.images.play_button_path}/>
                        </div>
                        <div className={style.appPage__MiddleSection}>
                            <p>{appInfo.description}</p>
                            <ScreenshotsSlider screenshots={appInfo.images.screenshot_paths}/>
                        </div>
                    </div>
                    <Stats stats={appInfo.stats}/>
                    <MetaData appInfo={appInfo}/>
                </div>
            )
        default:
            return (<></>)
    }
}

export default AppPage;