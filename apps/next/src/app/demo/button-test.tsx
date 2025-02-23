import { Button } from '@raive-ui/core';

export default function ButtonTest() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold mb-6">Button Component Test</h1>
      
      <div className="space-y-4">
        <h2 className="text-xl">Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="success">Success</Button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl">Sizes</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl">States</h2>
        <div className="flex flex-wrap gap-4">
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
          <Button rounded>Rounded</Button>
          <Button fullWidth>Full Width</Button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl">With Icons</h2>
        <div className="flex flex-wrap gap-4">
          <Button startIcon="→">Start Icon</Button>
          <Button endIcon="←">End Icon</Button>
        </div>
      </div>
    </div>
  );
}