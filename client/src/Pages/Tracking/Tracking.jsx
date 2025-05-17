

import React, { useState } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2, FileCheck, UserCheck, DollarSign } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const API_URL = 'https://ayushsih-production.up.railway.app/api'; // Update this with your actual API URL

const StatusCard = ({ title, description, icon: Icon, active }) => (
  <Card className={`h-full ${active ? 'border-green-500 border-2' : 'border-gray-200'}`}>
    <CardContent className="flex flex-col items-center p-6 text-center h-full">
      <Icon className={`mb-4 h-12 w-12 ${active ? 'text-green-500' : 'text-gray-400'}`} />
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

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
    <div className="container mx-auto p-4 bg-white min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Scholarship Application Tracker</h1>
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Input
              type="text"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              placeholder="Enter Tracking ID"
              className="flex-grow"
            />
            <Button onClick={fetchApplicationStatus} disabled={loading} className="w-full sm:w-auto">
              {loading ? <Loader2 className="animate-spin mr-2" /> : 'Track Application'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {error && (
        <Alert variant="destructive" className="mb-8">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {applicationStatus && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatusCard
              title="Application Received"
              description="Your application has been successfully submitted and is being processed."
              icon={FileCheck}
              active={true}
            />
            <StatusCard
              title="Admin Approval"
              description={applicationStatus.status === 'Approved' ? 'Your application has been reviewed and approved by our admin team.' : 'Your application is awaiting admin review and approval.'}
              icon={UserCheck}
              active={applicationStatus.status === 'Approved'}
            />
            <StatusCard
              title="Scholarship Release"
              description={applicationStatus.paymentStatus === 'Released' ? 'Congratulations! Your scholarship funds have been released.' : 'Pending scholarship fund release.'}
              icon={DollarSign}
              active={applicationStatus.paymentStatus === 'Released'}
            />
          </div>

          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Application Details</h2>
            </CardHeader>
            <CardContent>
              <p className="mb-2"><strong>Application ID:</strong> {applicationStatus.applicationId}</p>
              <p className="mb-2"><strong>Status:</strong> {applicationStatus.status}</p>
              <p className="mb-2"><strong>Payment Status:</strong> {applicationStatus.paymentStatus}</p>
              {applicationStatus.adminFeedback && (
                <Alert className="mt-4">
                  <AlertTitle>Admin Feedback</AlertTitle>
                  <AlertDescription>{applicationStatus.adminFeedback}</AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};

export default ApplicationTracking;