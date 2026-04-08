import React, { useState } from 'react';
import { Card, CardBody, CardHeader } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input, TextArea } from '../components/ui/Input';
import { Badge } from '../components/ui/Badge';
import { CheckCircle2 } from 'lucide-react';
import './Proposal.css';

export function Proposal() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Mock API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  if (success) {
    return (
      <div className="proposal proposal--success animate-fade-in">
        <div className="success-icon">
          <CheckCircle2 size={64} />
        </div>
        <h2>Proposal Submitted!</h2>
        <p className="text-muted">
          Your workshop proposal has been successfully submitted and is pending review by the coordinating team.
          You will be notified once it's approved.
        </p>
        <Button onClick={() => setSuccess(false)} style={{ marginTop: 'var(--space-4)' }}>
          Submit Another Proposal
        </Button>
      </div>
    );
  }

  return (
    <div className="proposal">
      <div className="proposal__header">
        <h2>Propose a Workshop</h2>
        <p className="text-muted">Fill out the details below to propose a new technical workshop.</p>
      </div>

      <Card className="proposal-card">
        <form onSubmit={handleSubmit}>
          <CardBody className="proposal-form">
            <div className="form-section">
              <h3 className="section-title">Basic Information</h3>
              <div className="form-grid">
                <Input 
                  label="Workshop Title" 
                  placeholder="e.g. Introduction to Rust" 
                  required 
                  className="full-width" 
                />
                <Input 
                  label="Category" 
                  placeholder="e.g. Systems Programming" 
                  required 
                />
                <Input 
                  label="Target Audience" 
                  placeholder="e.g. Undergraduates" 
                  required 
                />
              </div>
            </div>

            <div className="form-section">
              <h3 className="section-title">Schedule & Details</h3>
              <div className="form-grid">
                <Input 
                  type="date"
                  label="Preferred Start Date" 
                  required 
                />
                <Input 
                  label="Duration (in days)" 
                  type="number"
                  min="1"
                  placeholder="e.g. 2" 
                  required 
                />
                <TextArea 
                  label="Workshop Description" 
                  placeholder="Briefly describe what students will learn..." 
                  required 
                  className="full-width" 
                />
              </div>
            </div>
            
            <div className="form-alerts">
              <Badge variant="warning">Remember: FOSSEE workshops must prioritize Open Source tools.</Badge>
            </div>
          </CardBody>
          
          <div className="proposal-card__footer">
            <Button variant="ghost" type="button" onClick={() => window.history.back()}>
              Cancel
            </Button>
            <Button type="submit" loading={loading} rightIcon={<CheckCircle2 size={18} />}>
              Submit Proposal
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
