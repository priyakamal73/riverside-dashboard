import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import styles from "../WorldMap/worldmap.module.css"
const WorldMap = (props) => {
  
  return (
    <div onMouseMove={props.onMapMouseMove}>
      <ComposableMap projection="geoMercator" projectionConfig={{scale: 100}} className={styles.composableMap}>
        <ZoomableGroup zoom={props.mapZoomLevel} center={[0, 0]}>
          <Geographies geography={props.geoURL}>
            {({ geographies }) => {
    
              return geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={()=> props.onMapMouseEnter(geo)}
                  onMouseLeave={props.onMapMouseLeave}
                  style={{
                    default: {
                      fill: geo.properties.name === "United States" ? "#333" : geo.properties.name === "Canada" ? "#666" : geo.properties.name === "United Kingdom" ? "#333" : "#ccc",
                      outline: "none",
                      stroke: "#fff",
                      strokeWidth: 0.5,
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none",
                    },
                  }}
                />
              ));
            }}
          </Geographies>
        </ZoomableGroup>
        <div className={styles.buttonDiv}>
          <button onClick={props.handleMapZoomIn}>+</button>
          <button onClick={props.handleMapZoomOut}>-</button>
        </div>
      </ComposableMap>
      
      {props.tooltipVisible && (
        <div className={styles.tooltip} style={{top: props.tooltipPosition.y, left: props.tooltipPosition.x}}>
          {props.tooltipContent}
        </div>
      )}
    </div>
  );
};

export default WorldMap;