import style from "./TabsBar.module.scss"

const TabsBar = (props) => {
    const {} = props

    return (
        <div className={style.tabsBar}>
            {props.children}
        </div>
    );
}

export default TabsBar;