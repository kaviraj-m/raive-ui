import { useState } from 'react';
import { Card, Button, Input, Alert, Badge } from '@raive-ui/core';
import styled from 'styled-components';

const ComponentsDemo = () => {
  const [count, setCount] = useState(0);
  const [showAlert, setShowAlert] = useState(true);

  return (
    <DemoContainer>
      <Section>
        <h2>Alert Components</h2>
        <AlertGrid>
          {showAlert && (
            <Alert
              type="info"
              title="Welcome"
              message="Welcome to Raive UI component library"
              onClose={() => setShowAlert(false)}
            />
          )}
          <Alert
            type="success"
            message="Operation completed successfully"
          />
          <Alert
            type="warning"
            title="Warning"
            message="Please update your application"
          />
          <Alert
            type="error"
            title="Error"
            message="Something went wrong"
          />
        </AlertGrid>
      </Section>

      <Section>
        <h2>Badge Components</h2>
        <BadgeGrid>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="success" size="large">Success</Badge>
          <Badge variant="warning" rounded>Warning</Badge>
          <Badge variant="danger" size="small">Danger</Badge>
          <Badge variant="info">Info</Badge>
        </BadgeGrid>
      </Section>

      <Section>
        <h2>Card Components</h2>
        <CardGrid>
          <Card
            title="Basic Card"
            description="A simple card with title and description"
            variant="elevated"
            footer={
              <Button variant="primary">Learn More</Button>
            }
          />

          <Card
            title="Interactive Card"
            description={`Current count: ${count}`}
            variant="outlined"
            headerAction={
              <Badge variant="primary">New</Badge>
            }
            footer={
              <Button 
                variant="secondary" 
                onClick={() => setCount(prev => prev + 1)}
              >
                Increment
              </Button>
            }
          />

          <Card
            title="Loading Card"
            description="This card shows loading state"
            variant="flat"
            loading={true}
          />
        </CardGrid>
      </Section>

      <Section>
        <h2>Button Variants</h2>
        <ButtonGrid>
          <Button variant="primary" startIcon="→">Primary</Button>
          <Button variant="secondary" endIcon="←">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="success">Success</Button>
        </ButtonGrid>

        <ButtonGrid>
          <Button variant="primary" size="small" rounded>Small</Button>
          <Button variant="primary" size="medium" rounded>Medium</Button>
          <Button variant="primary" size="large" rounded>Large</Button>
        </ButtonGrid>

        <Button variant="primary" fullWidth loading>Loading Button</Button>
      </Section>

      <Section>
        <h2>Input Components</h2>
        <InputGrid>
          <Input
            label="Default Input"
            placeholder="Type something..."
            startIcon="🔍"
          />
          
          <Input
            label="Outlined Input"
            variant="outlined"
            placeholder="Outlined variant"
            endIcon="✓"
          />

          <Input
            label="Filled Input"
            variant="filled"
            placeholder="Filled variant"
            helperText="This is a helper text"
          />

          <Input
            label="Underlined"
            variant="underlined"
            placeholder="Underlined variant"
          />

          <Input
            label="With Error"
            error="This field is required"
            placeholder="Error state"
          />

          <Input
            label="Full Width"
            variant="outlined"
            fullWidth
            placeholder="Full width input"
            disabled
          />
        </InputGrid>
      </Section>
    </DemoContainer>
  );
};

const DemoContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background-color: white;
  min-height: 100vh;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
`;

const Section = styled.section`
  margin-bottom: 3rem;
  padding: 2rem;
  background-color: white;
  border-radius: 12px;
  border: 1px solid #f3f4f6;
  
  h2 {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: #1F2937;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #f3f4f6;
  }
`;

const AlertGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BadgeGrid = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ButtonGrid = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const InputGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

export default ComponentsDemo;