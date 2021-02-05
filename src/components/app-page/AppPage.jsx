import {useContext} from "react";
import {AppPageContext} from "./AppPageContext";
import {PageState} from "../shared/PageState";
import Headline from "./headline/Headline";
import style from "./AppPage.module.css";
import DownloadButtons from "./download-buttons/DownloadButtons";
import Rating from "./rating/Rating";

const AppPage = () => {
    const {pageState, appInfo} = useContext(AppPageContext);

    switch (pageState) {
        case PageState.READY :
            return (
                <div className={style.appPage__mainWrapper}>
                    <div className={style.appPage__topSection}>
                        <Headline app_icon={appInfo.images.app_icon_path} app_title={appInfo.name}
                                  install_count={appInfo.stats.install_count}/>
                        <Rating rating={appInfo.stats.rating} review_count={appInfo.stats.review_count}/>
                        <DownloadButtons playLink={appInfo.download_links.play_store}
                                         apkLink={appInfo.download_links.apk}/>
                    </div>
                </div>
            )
        default:
            return (<></>)
    }
}

export default AppPage;