# 🚀 Raive UI

A modern React UI component library built with TypeScript and styled-components.

## 📦 Installation

```bash
npm install @raive-ui/core styled-components
# or
yarn add @raive-ui/core styled-components
# or
pnpm add @raive-ui/core styled-components
```

## 🌟 Quick Start

```jsx
import { Card, Button } from '@raive-ui/core';

function App() {
  return (
    <Card
      title="Getting Started"
      description="Welcome to Raive UI"
      footer={
        <Button variant="primary">
          Get Started
        </Button>
      }
    />
  );
}
```

## 🛠 Available Components

### 🃏 Card

```jsx
// Basic Card
<Card
  title="Basic Card"
  description="A simple card with description"
  variant="elevated"
/>

// Card with Image
<Card
  title="Image Card"
  description="Card with image"
  imageUrl="/path/to/image.jpg"
  imageHeight={200}
  imageFit="cover"
/>

// Interactive Card
<Card
  title="Interactive Card"
  description="Click to interact"
  variant="outlined"
  onClick={() => console.log('Card clicked')}
  hoverable
/>
```

### 🔘 Button

```jsx
<Button
  variant="primary" // primary | secondary | outline | ghost
  size="medium"     // small | medium | large
  fullWidth={false}
  disabled={false}
  onClick={() => {}}
>
  Click Me
</Button>
```

### ⌨️ Input

```jsx
import { Input } from '@raive-ui/core';

// Basic Input
<Input
  label="Username"
  placeholder="Enter username"
/>

// Styled Input
<Input
  label="Email"
  variant="filled"
  startIcon="📧"
  placeholder="Enter email"
/>

// Input with Error
<Input
  label="Password"
  type="password"
  error="Password is required"
  variant="outlined"
/>
```

### 🚨 Alert

```jsx
<Alert
  type="info"    // info | success | warning | error
  title="Optional Title"
  message="Alert message goes here"
  onClose={() => {}}
/>
```

### 🎖 Badge

```jsx
<Badge
  variant="primary" // primary | success | warning | danger | info
  size="medium"     // small | medium | large
  rounded={false}
>
  New
</Badge>
```

## 🎨 Styling

All components are built with styled-components and can be customized using the styled-components API:

```jsx
import { Button } from '@raive-ui/core';
import styled from 'styled-components';

const CustomButton = styled(Button)`
  background-color: #ff0000;
  color: white;
`;
```

## 🏗 TypeScript Support

Raive UI is built with TypeScript and includes type definitions:

```tsx
import { ButtonProps } from '@raive-ui/core';

const CustomButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
```

## 🛠 Development

To contribute to Raive UI:

1. 🔄 Clone the repository:
   ```sh
   git clone https://github.com/kaviraj-m/raive-ui.git
   ```
2. 📦 Install dependencies:
   ```sh
   npm install
   ```
3. 🚀 Start development:
   ```sh
   npm run dev
   ```
4. 🔧 Build:
   ```sh
   npm run build
   ```

## 📜 License

This project is licensed under the ISC License.

## 🆘 Support

For issues and feature requests, please visit our GitHub repository.
