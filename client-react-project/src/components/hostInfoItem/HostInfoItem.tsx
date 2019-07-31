import * as React from "react";
import './HostInfoItem.scss';

export interface HostInfoItemProps {
    id: number;
    type: string;
    title: string;
    spaceUsed: number;
    spaceTotal: number;
    text: string;
    revenue: number;
    bug: number;
    warning: boolean;
}

const HostInfoItem: React.StatelessComponent<HostInfoItemProps> = (props) => {

    const renderHostInfo = (id, title, detail, background, mainIcon, warning, icon, text) => {
        const hostFooterIconCSS = "HostInfo__Icon" + (warning ? "--redBG " : " ") + icon;
        const hostFooterWarningCSS = "HostInfo__Warning" + (warning ? "--blueBG" : " ");
        return (
            <section className="HostInfo" key={id}>
                <div className={"HostInfo__Box--" + background}>
                    <i className={'HostInfo__MainIcon ' + mainIcon}></i>
                </div>
                <p className="HostInfo__Title">{title}</p>
                <p className="HostInfo__Detail">{detail}</p>
                <div  className="HostInfo__Footer">
                    <i className={hostFooterIconCSS}></i>
                    <span className={hostFooterWarningCSS}>{text}</span>
                </div>
            </section>
        );
    }

    const renderCheckHostModel = (data) => {
        switch (data.type.trim()) {
            case "space": {
                return renderHostInfo(
                    data.id,
                    data.title,
                    data.spaceUsed + '/' + data.spaceTotal + 'GB',
                    "orange",
                    "fa fa-file",
                    true,
                    "fa fa-exclamation-triangle",
                    data.text,
                );
            }
            case "revenue": {
                return renderHostInfo(
                    data.id,
                    data.title,
                    '$' + data.revenue,
                    "green",
                    "fa fa-home",
                    false,
                    "fa fa-calendar",
                    data.text,
                );
            };
            case "bug": {
                return renderHostInfo(
                    data.id,
                    data.title,
                    data.bug,
                    "red",
                    "fa fa-exclamation-circle",
                    false,
                    "fa fa-tag",
                    data.text,
                );
            };
            case "fixedBug": {
                return renderHostInfo(
                    data.id,
                    data.title,
                    data.bug,
                    "blue",
                    "fa fa-twitter",
                    false,
                    "fa fa-clock-o",
                    data.text,
                )
            }
            default: null;
        }
    }

    return (
        <li>
           {renderCheckHostModel(props)}
        </li>
    )
}

export default HostInfoItem;