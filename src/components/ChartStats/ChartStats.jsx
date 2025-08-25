import CountryTable from "../Table/CountryTable"
import WorldMap from "../WorldMap/WorldMap";
import styles from "../ChartStats/chartStats.module.css"

const ChartStats = (props) => {
  return (
    <>
      <div className={styles.cardParent}>
        <div className={styles.table}>
          <h4 className={styles.tableTitle}>Global Sales by Top Locations</h4>
          <CountryTable />
        </div>

        <div className={styles.map} >
          <WorldMap geoURL={props.geoUrl} onMapMouseEnter={props.handleMapMouseEnter} onMapMouseMove={props.handleMapMouseMove} onMapMouseLeave={props.handleMapMouseLeave} mapZoomLevel={props.zoomLevel} handleMapZoomIn={props.handleMapZoomIn} handleMapZoomOut={props.handleMapZoomOut} tooltipVisible={props.tooltipVisible} tooltipPosition={props.tooltipPosition} tooltipContent={props.tooltipContent} />
        </div>
      </div>
    </>
  );
};

export default ChartStats;