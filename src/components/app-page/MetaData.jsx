import {JsonLd} from "react-schemaorg";
import {useIntl} from 'react-intl'

const MetaData = ({appInfo}) => {
    const intl = useIntl()

    let metaData = {
        "@context": "https://schema.org",
        "@type": "MobileApplication",
        applicationCategory: appInfo.category,
        downloadUrl: appInfo.download_links.play_store,
        fileSize: appInfo.stats.apk_size + "MB",
        operatingSystem: "Android " + appInfo.stats.min_android_version.toFixed(1)
            + intl.formatMessage({id: "and_up", defaultMessage: " and up"}),
        screenshot: appInfo.images.screenshot_paths,
        softwareVersion: appInfo.stats.current_version,
        aggregateRating: {
            "@type": "AggregateRating",
            ratingCount: appInfo.stats.review_count,
            ratingValue: appInfo.stats.rating
        },
        author: "Simple Smart Apps",
        countryOfOrigin: "France",
        dateModified: appInfo.stats.update_date,
        datePublished: appInfo.stats.release_date,
        offers: {
            "@type": "Offer",
            price: "0",
            "priceCurrency": "EUR"
        },
        description: appInfo.description,
        name: appInfo.name
    }

    return (
        <JsonLd item={metaData}/>
    )
}
export default MetaData;