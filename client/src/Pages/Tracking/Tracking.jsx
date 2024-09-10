import React, { useState } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';



const API_URL = 'http://localhost:3001/api'; // Update this with your actual API URL



const ApplicationTracking = () => {
  const [trackingId, setTrackingId] = useState('');
  const [applicationStatus, setApplicationStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchApplicationStatus = async () => {
    if (!trackingId.trim()) {
      setError('Please enter a tracking ID.');
      return;
    }

    setLoading(true);
    setError(null);
    setApplicationStatus(null);

    try {
      const response = await axios.get(`${API_URL}/applications/${trackingId}`);
      setApplicationStatus(response.data);
    } catch (error) {
      console.error('Error fetching application status:', error);
      setError('Failed to fetch application status. Please check the tracking ID and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <h2 className="text-2xl font-bold">Application Tracker</h2>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2 mb-4">
          <Input
            type="text"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            placeholder="Enter Tracking ID"
            className="flex-grow"
          />
          <Button onClick={fetchApplicationStatus} disabled={loading}>
            {loading ? <Loader2 className="animate-spin" /> : 'Track'}
          </Button>
        </div>

        {error && (
          <p className="text-red-500 mb-4">{error}</p>
        )}

        {applicationStatus && (
          <div>
            <h3 className="text-xl font-semibold mb-2">Application Details</h3>
            <p className="mb-2"><strong>Application ID:</strong> {applicationStatus.applicationId}</p>
            <p className="mb-2"><strong>Status:</strong> {applicationStatus.status}</p>
            {applicationStatus.adminFeedback && (
              <p className="mb-2"><strong>Admin Feedback:</strong> {applicationStatus.adminFeedback}</p>
            )}
            {applicationStatus.paymentStatus && (
              <p className="mb-2"><strong>Payment Status:</strong> {applicationStatus.paymentStatus}</p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ApplicationTracking;