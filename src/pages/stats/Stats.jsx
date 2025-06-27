import React from "react";
import { Stat, StatGroup, HStack, useBreakpointValue } from "rsuite";
import { PieChart } from "@mui/x-charts/PieChart";
function Stats() {
  const columns = useBreakpointValue(
    {
      "(min-width: 1200px)": 4,
      "(min-width: 992px)": 2,
      "(min-width: 768px)": 1,
    },
    { defaultValue: 1 }
  );

  return (
    <div>
      <StatGroup columns={columns} spacing={20} style={{ padding: "20px" }}>
        <Stat bordered>
          <Stat.Label>Calendar</Stat.Label>
          <HStack spacing={10}>
            <Stat.Value>38,050</Stat.Value>
            <Stat.Trend>10%</Stat.Trend>
          </HStack>
        </Stat>

        <Stat bordered>
          <Stat.Label>Task</Stat.Label>
          <HStack spacing={10}>
            <Stat.Value>4,635</Stat.Value>
            <Stat.Trend indicator="down">5%</Stat.Trend>
          </HStack>
        </Stat>

        <Stat bordered>
          <Stat.Label>Plans</Stat.Label>
          <HStack spacing={10}>
            <Stat.Value>2,800</Stat.Value>
            <Stat.Trend>10%</Stat.Trend>
          </HStack>
        </Stat>

        <Stat bordered>
          <Stat.Label>Project</Stat.Label>
          <HStack spacing={10}>
            <Stat.Value>1,130</Stat.Value>
            <Stat.Trend>3%</Stat.Trend>
          </HStack>
        </Stat>
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 10, label: "series A" },
                { id: 1, value: 15, label: "series B" },
                { id: 2, value: 20, label: "series C" },
              ],
            },
          ]}
          width={200}
          height={200}
        />
      </StatGroup>
    </div>
  );
}

export default Stats;
