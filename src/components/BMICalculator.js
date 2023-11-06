import React, { useState } from 'react';
import { Button, Field } from 'react-vant';

const styles = {
  container: {
    padding: '20px',
    maxWidth: '400px',
    margin: '0 auto',
  },
  result: {
    marginTop: '20px',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#f7f7f7',
    textAlign: 'center',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
  },
  field: {
    marginBottom: '15px',
  },
};

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    const heightValue = Number(height);
    const weightValue = Number(weight);
    if (weightValue && heightValue) {
      const heightInMeters = heightValue / 100;
      const calculatedBmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(calculatedBmi);
    } else {
      // Handle error state
    }
  };

  const resetInputs = () => {
    setHeight('');
    setWeight('');
    setBmi(null);
  };

  return (
    <div style={styles.container}>
       <h1 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}>
         Body Mass Index Calculator
        </h1>
      <Field
        style={styles.field}
        type="number"
        value={height}
        placeholder="請輸入您的身高（公分）"
        onChange={setHeight}
      />
      <Field
        style={styles.field}
        type="number"
        value={weight}
        placeholder="請輸入您的體重（公斤）"
        onChange={setWeight}
      />

      <Button block type="primary" onClick={calculateBMI}>
        Calculate BMI
      </Button>

      <Button block plain type="danger" onClick={resetInputs} style={{ marginTop: '12px' }}>
        Reset
      </Button>

      {bmi && <div style={styles.result}>Your BMI is: {bmi}</div>}
    </div>
  );
};

export default BMICalculator;
