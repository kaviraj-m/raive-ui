import { useState } from 'react';
import { Card, Button, Input, Alert, Badge } from '@raive-ui/core';

export default function Demo() {
  const [count, setCount] = useState(0);
  const [showAlert, setShowAlert] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="text-xl font-bold text-gray-800">
            Raive UI
          </span>
          <Button 
            variant="primary" 
            size="small"
            onClick={() => window.history.back()}
          >
            Back
          </Button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-8 px-4 space-y-12">
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Alert Examples</h2>
          <div className="space-y-4">
            {showAlert && (
              <Alert
                type="info"
                title="Welcome"
                message="Welcome to Raive UI React Demo"
                onClose={() => setShowAlert(false)}
              />
            )}
            <Alert
              type="success"
              message="Your changes have been saved successfully"
            />
            <Alert
              type="warning"
              title="Update Available"
              message="A new version of Raive UI is available"
            />
            <Alert
              type="error"
              title="Error"
              message="Failed to save changes"
            />
          </div>
        </section>

        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Badge Examples</h2>
          <div className="flex flex-wrap gap-4">
            <Badge variant="primary">New</Badge>
            <Badge variant="success" size="large">Published</Badge>
            <Badge variant="warning" rounded>Pending</Badge>
            <Badge variant="danger" size="small">Failed</Badge>
            <Badge variant="info">Info</Badge>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Card Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              title="Image Card"
              description="Card with custom image settings"
              imageUrl="/placeholder-image.jpg"
              variant="elevated"
              footer={
                <div className="w-full">
                  <Button variant="primary">
                    View Details
                  </Button>
                </div>
              }
            />

            <Card
              title="Interactive Counter"
              description={`Click count: ${count}`}
              variant="outlined"
              imageUrl="/counter-image.jpg"
              headerAction={<Badge variant="primary">Interactive</Badge>}
              footer={
                <div className="w-full">
                  <Button 
                    variant="secondary" 
                    onClick={() => setCount(prev => prev + 1)}
                  >
                    Increment
                  </Button>
                </div>
              }
            />

            <Card
              title="Loading State"
              description="This card demonstrates loading state"
              variant="flat"
              loading={true}
            />
          </div>
        </section>

        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Input Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Search Input"
              placeholder="Search..."
              startIcon="🔍"
              variant="filled"
              fullWidth
            />
            
            <Input
              label="Email Input"
              variant="outlined"
              placeholder="Enter your email"
              endIcon="✉️"
              helperText="We'll never share your email"
            />

            <Input
              label="Password"
              type="password"
              variant="filled"
              placeholder="Enter password"
              endIcon="👁️"
              helperText="Must be at least 8 characters"
            />

            <Input
              label="Username"
              error="Username is already taken"
              placeholder="Choose a username"
              startIcon="👤"
            />

            <Input
              label="Bio"
              variant="underlined"
              placeholder="Tell us about yourself"
              fullWidth
            />

            <Input
              label="Disabled Input"
              variant="outlined"
              placeholder="Not available"
              disabled
              startIcon="🔒"
            />
          </div>
        </section>

        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Button Examples</h2>
          <div className="space-y-6">
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="success">Success</Button>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="small" rounded>Small</Button>
              <Button variant="primary" size="medium" rounded>Medium</Button>
              <Button variant="primary" size="large" rounded>Large</Button>
            </div>

            <div className="w-full">
              <Button variant="primary" loading>
                Loading State
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}