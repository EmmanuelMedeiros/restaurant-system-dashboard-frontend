import React, { useEffect } from 'react';
import { Spin } from 'antd';

const MSpin: React.FC = () => {
  const [spinning, setSpinning] = React.useState(false);
  const [percent, setPercent] = React.useState(0);

  useEffect(() => {
    setSpinning(true);
    let ptg = -10;

    const interval = setInterval(() => {
      ptg += 5;
      setPercent(ptg);

      if (ptg > 120) {
        clearInterval(interval);
        setSpinning(false);
        setPercent(0);
      }
    }, 100);
  }, [])

  return (
    <>
      <Spin spinning={spinning} percent={percent} fullscreen />
    </>
  );
};

export default MSpin;