import type React from "react";
import MPieChart from "../../components/MPieChart";
import MCard from "../../components/MCard";

import { Row, Col } from "antd";
import { MSkeleton } from "../../components/MSkeleton";
import MLineChart from "../../components/MLineChart";

const DashboardPage: React.FC = () => {
  return (
    <div>
      <MCard
        className='bg-[#303030]'
        mainCard={true}
      >

      <Row justify={"end"} className="mb-11">
        <Col className="flex gap-6 justify-center">
          <MCard>.</MCard>
          <MCard>.</MCard>
        </Col>
      </Row>

      <Row justify={"space-evenly"} align={"middle"} gutter={[10, 100]}>
        <Col className="flex flex-col gap-6 min-w-[20rem]">
          <MCard cardTitle="A">
            <MSkeleton size={200} title={false} avatar={false} />
          </MCard>

          <MCard cardTitle="B">
            <MSkeleton size={200} title={false} avatar={false} />
          </MCard>
        </Col>

        <Col span={100}>
          <MCard cardTitle="Itens mais pedidos" className='h-[30rem]'>
            <MPieChart
              data={[
                {
                  name: "Rodela 1",
                  value: 50,
                },
                {
                  name: "Rodela 2",
                  value: 10,
                },
              ]}
              height={400}
              width={450}
              innerRadius={140}
              outerRadius={160}
            />
          </MCard>
        </Col>
      </Row>

      <Row>
        <Col flex={"90rem"} className="mt-10">
          <MCard cardTitle="Gráfico de linha">
            <MLineChart
            />
          </MCard>
        </Col>
      </Row>
      </MCard>
    </div>
  );
};

export default DashboardPage;
