import { useContext, useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { NODE_TYPE, NODE_TYPES_ARRAY } from "../api/types";
import { useGetNodes } from "../api/useGetNodes";
import { RefetchContext } from "../RefetchContext";

interface Node {
  id: string;
}

interface Link {
  source: string;
  target: string;
}

const getNodeColor = (nodeType: NODE_TYPE) => {
  switch (nodeType) {
    case "CreditCard":
      return "rgb(255, 180, 248)";
    case "FraudReport":
      return "rgb(0, 247, 202)";
    case "IPAddress":
      return "rgb(209, 235, 255)";
    case "Location":
      return "rgb(239, 187, 227)";
    case "Transaction":
      return "rgb(145, 236, 178)";
    case "TransactionType":
      return "rgb(233, 129, 89)";
    case "User":
      return "rgb(159, 198, 123)";
  }
};

export const DataVizualization = () => {
  const graphContainerRef = useRef(null);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [links, setLinks] = useState<Node[]>([]);
  const [finish, setFinish] = useState(false);
  const { refetch } = useContext(RefetchContext);
  useEffect(() => {
    const cze = async () => {
      finish && setFinish(false);
      NODE_TYPES_ARRAY.forEach(async (node_type) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        if (!node_type) return;
        const nodes = await useGetNodes(node_type);
        nodes.forEach((node) => {
          setNodes((prev) => [...prev, { type: node_type, id: node.node_id }]);
          if (node.relationship) {
            Object.keys(node.relationship).forEach((relationship) => {
              node.relationship[relationship].forEach((target) => {
                setLinks((prev) => [
                  ...prev,
                  { type: relationship, source: node.node_id, target },
                ]);
              });
            });
          }
        });
      });
      setTimeout(() => setFinish(true), 8000);
    };
    cze();
  }, [refetch]);

  useEffect(() => {
    if (!finish) return;
    const width = 800;
    const height = 600;

    const svg = d3
      .select(graphContainerRef.current)
      .append("svg")
      .attr("style", "outline: thin solid blue;")
      .attr("width", width)
      .attr("height", height);

    const simulation = d3
      .forceSimulation()
      .force(
        "link",
        d3
          .forceLink()
          .id((d) => (d as Node).id)
          .distance(200)
      )
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(width / 2, height / 2));

    const link = svg
      .selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .attr("stroke", "black"); // Set the stroke color
    const node = svg
      .selectAll<SVGCircleElement, Node>("circle")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("fill", (node) => getNodeColor(node.type))
      .attr("r", 28)
      .call(
        d3
          .drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended)
      );

    const nodeLabels = svg
      .selectAll<SVGTextElement, Node>("text.node-label")
      .data(nodes)
      .enter()
      .append("text")
      .attr("class", "node-label")
      .text((d: Node) => d.type)
      .attr("text-anchor", "middle") // Center the text horizontally
      .attr("dominant-baseline", "middle") // Center the text vertically
      .attr("fill", "black") // Set the text color
      .style("pointer-events", "none")
      .style("font-size", (node) =>
        node.type === "TransactionType" ? "6px" : "10px"
      );
    // Ensure text doesn't interfere with drag events

    const linkLabels = svg
      .selectAll<SVGTextElement, Link>("text.link-label")
      .data(links)
      .enter()
      .append("text")
      .attr("class", "link-label")
      .text((d: Link) => d.type)
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle")
      .attr("fill", "black")
      .style("pointer-events", "none")
      .style("font-size", "10px");

    simulation.nodes(nodes).on("tick", ticked);

    simulation?.force("link")?.links(links);

    function ticked() {
      link
        .attr("x1", (d) => d.source.x || 0)
        .attr("y1", (d) => d.source.y || 0)
        .attr("x2", (d) => d.target.x || 0)
        .attr("y2", (d) => d.target.y || 0);

      node.attr("cx", (d) => d.x || 0).attr("cy", (d) => d.y || 0);
      nodeLabels
        .attr("x", (d: any) => (d as d3.SimulationNodeDatum).x || 0)
        .attr("y", (d: any) => (d as d3.SimulationNodeDatum).y || 0);
      linkLabels
        .attr(
          "x",
          (d: any) =>
            ((d.source as d3.SimulationNodeDatum).x +
              (d.target as d3.SimulationNodeDatum).x) /
              2 || 0
        )
        .attr(
          "y",
          (d: any) =>
            ((d.source as d3.SimulationNodeDatum).y +
              (d.target as d3.SimulationNodeDatum).y) /
              2 || 0
        );
    }

    function dragstarted(event: any, d: Node) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event: any, d: Node) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event: any, d: Node) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
    return () => {
      graphContainerRef?.current?.children?.length > 0 &&
        graphContainerRef.current.removeChild(
          graphContainerRef?.current?.children[0]
        );
    };
  }, [finish]); // Empty dependency array to run the effect only once

  return <div ref={graphContainerRef} />;
};
