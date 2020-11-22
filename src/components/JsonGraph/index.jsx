import {
  create,
  percent,
  useTheme as am4UseTheme,
} from "@amcharts/amcharts4/core";
import {
  ForceDirectedSeries,
  ForceDirectedTree,
} from "@amcharts/amcharts4/plugins/forceDirected";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { Box } from "@material-ui/core";
import React, { useContext, useLayoutEffect, useRef } from "react";
import { AppContext } from "../../context";
import { jsonParser } from "../../helpers";
import { Navigator } from "../Navigator";
am4UseTheme(am4themes_animated);
export const JsonGraph = ({}) => {
  const chartRef = useRef(null);
  const { json, toggleEditor } = useContext(AppContext);
  useLayoutEffect(() => {
    let chart = create("graph", ForceDirectedTree);

    let networkSeries = chart.series.push(new ForceDirectedSeries());
    const children = jsonParser(JSON.parse(json));
    networkSeries.data = [
      {
        name: "response",
        children: children,
        value: 1,
      },
    ];

    networkSeries.dataFields.linkWith = "linkWith";
    networkSeries.dataFields.name = "name";
    networkSeries.dataFields.id = "name";
    networkSeries.dataFields.value = "value";
    networkSeries.dataFields.children = "children";

    networkSeries.nodes.template.tooltipText = "{name}";
    networkSeries.nodes.template.fillOpacity = 1;

    networkSeries.nodes.template.label.text = "{name}";
    networkSeries.fontSize = 12;
    networkSeries.maxLevels = 2;
    networkSeries.maxRadius = percent(6);
    networkSeries.manyBodyStrength = -16;
    networkSeries.nodes.template.label.hideOversized = true;
    networkSeries.nodes.template.label.truncate = true;
    chartRef.current = chart;
    return () => {
      chart.dispose();
    };
  }, []);
  return (
    <Box
      style={{ marginTop: 10, marginRight: 10, marginLeft: 10 }}
      display="flex"
      flexDirection="column"
    >
      <div id="graph" style={{ width: "100%", height: "510px" }}></div>
      <Navigator
        buttonType="button"
        onClick={toggleEditor}
        buttonText="Back to Editor"
      />
    </Box>
  );
};
