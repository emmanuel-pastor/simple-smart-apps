import React from "react";

export default interface AppInfo{
    id: number
    navigation_path: string | Array<string>
    name: string | React.ReactElement,
    description: string | React.ReactElement,
    download_links: DownloadLinks,
    images: AppImages,
    stats: AppStats
}

interface DownloadLinks {
    play_store: string | undefined,
    apk: string
}

interface AppImages {
    app_icon_path: string
    main_screenshot_path: string,
    screenshot_paths: Array<string>
}

interface AppStats {
    rating: number | undefined,
    review_count: number,
    update_date: string | undefined, //in format 'yyyy-mm-dd' ex: '2021-01-25'
    release_date: string,
    apk_size: number, //in MB
    install_count: number,
    current_version: string,
    min_android_version: number
}