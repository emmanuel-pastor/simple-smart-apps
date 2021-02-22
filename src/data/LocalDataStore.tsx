import AppInfo from "./model/AppInfo";
import {NavigationPaths} from "../router/NavigationPaths";
import {FormattedMessage} from "react-intl";
import {DaodaImagesFR} from "../assets/images/fr/daoda/DaodaImagesFR";
import {DaodaImagesEN} from "../assets/images/en/daoda/DaodaImagesEN";
import {BatteryTempImagesEN_UK, BatteryTempImagesEN_US} from "../assets/images/en/battery-temp/BatteryTempImagesEN";
import {BatteryTempImagesFR} from "../assets/images/fr/battery-temp/BatteryTempImagesFR";

export default function createLocalDataStore(locale: string) {
    const [lang, country] = locale.toLowerCase().split('-')

    const [batteryTempImages, daodaImages] = lang === 'fr' ? [BatteryTempImagesFR, DaodaImagesFR] : [country === 'us' ? BatteryTempImagesEN_US : BatteryTempImagesEN_UK, DaodaImagesEN]


    const batteryTemperature: AppInfo = {
        id: 0,
        navigation_path: NavigationPaths.BATTERY_TEMP,
        name: <FormattedMessage
            id="battery_temp"
            defaultMessage="Daoda"
        />,
        description: <FormattedMessage
            id="battery_temp_description"
            defaultMessage="Keep an eye on your battery temperature.
Receive a notification when your battery temperature is too high.
The temperature is available both in Celsius and Fahrenheit !
Keeping your battery temperature at a reasonable level expands the lifetime of your battery."
        />,
        review_link: "https://forms.gle/RJLVFa4pb3VY8wVt7",
        download_links: {
            play_store: "https://play.google.com/store/apps/details?id=com.simplesmartapps.emmanuelpastor.batterytemperature&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",
            apk: "apks/battery_temp-release.apk"
        },
        images: batteryTempImages,
        stats: {
            rating: 4.6,
            review_count: 4222,
            update_date: '2020-02-18',
            release_date: '2018-01-27',
            apk_size: 2.9,
            install_count: 349209,
            current_version: '1.9.0',
            min_android_version: 5.0
        }
    }

    const daoda: AppInfo = {
        id: 1,
        navigation_path: [NavigationPaths.DAODA, NavigationPaths.ROOT],
        name: <FormattedMessage
            id="daoda"
            defaultMessage="Daoda"
        />,
        description: <FormattedMessage
            id="daoda_description"
            defaultMessage="Inform your friends and relatives when you arrived safely to a location.
Choose a location a contacts list and a message, the app does the rest for you.
It ensures everyone that you are safe and keeps them from being anxious."
        />,
        review_link: "https://forms.gle/j8z6FNQELHiwEy338",
        download_links: {
            play_store: undefined,
            apk: "apks/daoda-release.apk"
        },
        images: daodaImages,
        stats: {
            rating: 5,
            review_count: 1,
            update_date: '2021-02-19',
            release_date: '2020-04-13',
            apk_size: 3.5,
            install_count: 20,
            current_version: '1.8.1.0',
            min_android_version: 6.0
        }
    }

    return [batteryTemperature, daoda]
}