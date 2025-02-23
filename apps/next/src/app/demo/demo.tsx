import React from 'react';
import { Button, Card, CardHeader, CardTitle, CardContent, Input } from '@raive-ui/core';

export default function MyPage() {
  return (
    <div className="p-8 space-y-4">
      <Button variant="primary" size="md">Click me</Button>
      
      <Card padding="medium" shadow="small">
        <CardHeader>
          <CardTitle>My Card</CardTitle>
        </CardHeader>
        <CardContent>
          <Input 
            label="Username"
            size="md"
            placeholder="Enter username"
          />
        </CardContent>
      </Card>
    </div>
  );
}