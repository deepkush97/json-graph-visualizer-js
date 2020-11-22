import { Box, Button, Container } from "@material-ui/core";
import React, { useRef, useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { jsonParser } from "../../helpers";

am4core.useTheme(am4themes_animated);
export const JsonGraph = ({ json, hideGraph }) => {
  const chartRef = useRef(null);

  useLayoutEffect(() => {
    let chart = am4core.create(
      "graph",
      am4plugins_forceDirected.ForceDirectedTree
    );

    let networkSeries = chart.series.push(
      new am4plugins_forceDirected.ForceDirectedSeries()
    );
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
    networkSeries.maxRadius = am4core.percent(6);
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
      <div id="graph" style={{ width: "100%", height: "550px" }}></div>
      <Button
        variant="outlined"
        color="primary"
        style={{ margin: 10 }}
        onClick={() => hideGraph()}
      >
        Back to Editor
      </Button>
    </Box>
  );
};
