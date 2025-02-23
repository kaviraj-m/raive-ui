'use client';

import { Button } from '@raive-ui/core';
import { FiArrowRight, FiArrowLeft, FiDownload, FiSend } from 'react-icons/fi';

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Button Components</h1>

        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Button Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="danger">Danger Button</Button>
            <Button variant="success">Success Button</Button>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Button Sizes</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="small" variant="primary">Small</Button>
            <Button size="medium" variant="primary">Medium</Button>
            <Button size="large" variant="primary">Large</Button>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Button States</h2>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button loading variant="primary">Loading</Button>
              <Button disabled variant="primary">Disabled</Button>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button rounded variant="primary">Rounded Button</Button>
              <Button variant="primary" className="w-full">Full Width</Button>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Buttons with Icons</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" startIcon={<FiArrowRight />}>
              Next Step
            </Button>
            <Button variant="outline" endIcon={<FiArrowLeft />}>
              Previous
            </Button>
            <Button variant="success" startIcon={<FiDownload />}>
              Download
            </Button>
            <Button variant="primary" endIcon={<FiSend />}>
              Send Message
            </Button>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Interactive Examples</h2>
          <div className="space-y-4">
            <Button 
              variant="primary"
              onClick={() => alert('Button clicked!')}
              startIcon={<FiSend />}
            >
              Click Me
            </Button>
            <div className="flex gap-4">
              <Button 
                variant="outline"
                loading={true}
              >
                Processing...
              </Button>
              <Button 
                variant="success"
                rounded
                endIcon={<FiDownload />}
              >
                Download Report
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}