import React, { useState } from "react";
import { Button, Field } from "react-vant";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmi);
    }
  };

  return (
    <div>
      <Field
        type="number" // 设置Field组件接受数字输入
        value={height}
        placeholder="請輸入您的身高（公分）"
        onChange={setHeight}
      />
      <Field
        type="number" // 同样设置Field组件接受数字输入
        value={weight}
        placeholder="請輸入您的體重（公斤）"
        onChange={setWeight}
      />

      <Button block type="primary" onClick={calculateBMI}>
        Calculate BMI
      </Button>
      {bmi && <div>Your BMI is: {bmi}</div>}
    </div>
  );
};

export default BMICalculator;
