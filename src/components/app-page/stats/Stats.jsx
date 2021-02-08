import style from "./Stats.module.css";
import StatsItem from "./StatsItem";
import {FormattedMessage, FormattedNumber} from "react-intl";
import {FormattedDate} from "react-intl/lib";
import MoreButton from "../more-button/MoreButton";
import {useState} from "react";

const Stats = ({stats}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={style.stats}>
            <div className={style.stats__grid} style={{display: !isOpen ? 'none' : ''}}>
                <StatsItem title={<FormattedMessage id="updated" defaultMessage="Updated"/>}
                           value={stats.update_date ?
                               <FormattedDate
                                   value={stats.update_date}
                                   year={'numeric'}
                                   month={'long'}
                                   day={'numeric'}/>
                               : '-'}
                />

                <StatsItem title={<FormattedMessage id="size" defaultMessage="Size"/>}
                           value={<FormattedNumber
                               value={stats.apk_size}
                               style="unit"
                               unit="megabyte"
                               unitDisplay="narrow"
                           />}
                />

                <StatsItem title={<FormattedMessage id="downloads" defaultMessage="Downloads"/>}
                           value={<FormattedMessage
                               id="download_stat"
                               defaultMessage="{count,plural,=0{No downloads} one{#} other{#}}"
                               values={{count: stats.install_count}}
                           />}
                />

                <StatsItem title={<FormattedMessage id="current_version" defaultMessage="Current Version"/>}
                           value={stats.current_version}/>

                <StatsItem title={<FormattedMessage id="requires_android" defaultMessage="Requires Android"/>}
                           value={
                               <>
                                   {stats.min_android_version.toFixed(1)}
                                   <FormattedMessage id="and_up" defaultMessage=" and up"/>
                               </>
                           }
                />

                <StatsItem title={<FormattedMessage id="released" defaultMessage="Released"/>}
                           value={<FormattedDate
                               value={stats.release_date}
                               year={'numeric'} month={'long'}
                               day={'numeric'}/>}/>
            </div>
            <MoreButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}/>
        </div>
    )
}

export default Stats;