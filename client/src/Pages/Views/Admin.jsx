
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const API_URL = 'https://ayushsih-production.up.railway.app/api';

const AdminReviewPage = () => {
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const token = localStorage.getItem('userToken');
        const response = await axios.get(`${API_URL}/admin/applications`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setApplications(response.data);
      } catch (error) {
        console.error('Error fetching applications:', error);
        setError('Failed to fetch applications. Please try again later.');
      }
    };

    fetchApplications();
  }, []);

  const handleSelectApplication = (application) => {
    setSelectedApplication(application);
    setFeedback('');
  };

  const handleApprove = async () => {
    try {
      await axios.post(`${API_URL}/admin/applications/${selectedApplication._id}/approve`);
      const updatedApplications = applications.map(app =>
        app._id === selectedApplication._id ? { ...app, status: 'Approved' } : app
      );
      setApplications(updatedApplications);
      setSelectedApplication(null);
    } catch (error) {
      console.error('Error approving application:', error);
      setError('Failed to approve application. Please try again.');
    }
  };

  const handleReject = async () => {
    if (!feedback) {
      setError('Feedback is required for rejection.');
      return;
    }
    try {
      await axios.post(`${API_URL}/admin/applications/${selectedApplication._id}/reject`, { feedback });
      const updatedApplications = applications.map(app =>
        app._id === selectedApplication._id ? { ...app, status: 'Rejected' } : app
      );
      setApplications(updatedApplications);
      setSelectedApplication(null);
    } catch (error) {
      console.error('Error rejecting application:', error);
      setError('Failed to reject application. Please try again.');
    }
  };

  const handleDownloadDocument = (documentPath) => {
    window.open(`${API_URL}/${documentPath}`, '_blank');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Scholarship Application Review Portal</h1>
      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <div className="flex flex-col md:flex-row gap-4">
        <Card className="w-full md:w-1/3">
          <CardHeader>
            <h2 className="text-xl font-semibold">Applications</h2>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Application ID</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {applications.map(app => (
                  <TableRow key={app._id}>
                    <TableCell>{app.applicationId}</TableCell>
                    <TableCell>{app.status}</TableCell>
                    <TableCell>
                      <Button onClick={() => handleSelectApplication(app)}>
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        {selectedApplication && (
          <Card className="w-full md:w-2/3">
            <CardHeader>
              <h2 className="text-xl font-semibold">Application Details</h2>
              <p className="text-sm text-gray-500">Application ID: {selectedApplication.applicationId}</p>
            </CardHeader>
            <CardContent>
               <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-semibold">Name</TableCell>
                    <TableCell>{`${selectedApplication.firstName} ${selectedApplication.lastName}`}</TableCell>
                   </TableRow>
                   <TableRow>
                     <TableCell className="font-semibold">Father's Name</TableCell>
                    <TableCell>{selectedApplication.fathersName}</TableCell>
                   </TableRow>
                   <TableRow>
                     <TableCell className="font-semibold">Mother's Name</TableCell>
                    <TableCell>{selectedApplication.mothersName}</TableCell>
                   </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">Father's Profession</TableCell>
                    <TableCell>{selectedApplication.fathersProfession}</TableCell>
                  </TableRow>
                <TableRow>
                     <TableCell className="font-semibold">Mother's Profession</TableCell>
                     <TableCell>{selectedApplication.mothersProfession}</TableCell>
                   </TableRow>
                   <TableRow>
                     <TableCell className="font-semibold">State</TableCell>
                     <TableCell>{selectedApplication.state}</TableCell>
                  </TableRow>
                   <TableRow>
                     <TableCell className="font-semibold">Place</TableCell>
                   <TableCell>{selectedApplication.place}</TableCell>
                   </TableRow>
                <TableRow>
                     <TableCell className="font-semibold">Pincode</TableCell>
                     <TableCell>{selectedApplication.pincode}</TableCell>
                   </TableRow>
                   <TableRow>
                     <TableCell className="font-semibold">Email</TableCell>
                     <TableCell>{selectedApplication.email}</TableCell>
                   </TableRow>
                 <TableRow>
                     <TableCell className="font-semibold">Alternative Email</TableCell>
                   <TableCell>{selectedApplication.alternativeEmail || 'N/A'}</TableCell>
                 </TableRow>
                 <TableRow>
                     <TableCell className="font-semibold">Phone Number</TableCell>
                     <TableCell>{selectedApplication.phoneNumber}</TableCell>
                   </TableRow>
                   <TableRow>
                   <TableCell className="font-semibold">Alternate Phone Number</TableCell>
<TableCell>{selectedApplication.alternatePhoneNumber || 'N/A'}</TableCell>
                   </TableRow>
                  <TableRow>
                     <TableCell className="font-semibold">Aadhar Number</TableCell>
                   <TableCell>{selectedApplication.aadharNumber}</TableCell>
                   </TableRow>
                  <TableRow>
                     <TableCell className="font-semibold">12th Board</TableCell>
                    <TableCell>{selectedApplication.board12th}</TableCell>
                   </TableRow>

                     
                  <TableRow>
                    <TableCell className="font-semibold">Documents</TableCell>
                    <TableCell>
                      <ul className="list-disc list-inside">
                        <li>
                          12th Marksheet
                          <Button
                            onClick={() => handleDownloadDocument(selectedApplication.marksheet12th)}
                            className="ml-2"
                          >
                            View
                          </Button>
                        </li>
                        <li>
                          Family Income Certificate
                          <Button
                            onClick={() => handleDownloadDocument(selectedApplication.familyIncomeCertificate)}
                            className="ml-2"
                          >
                            View
                          </Button>
                        </li>
                        <li>
                          Passbook First Page
                          <Button
                            onClick={() => handleDownloadDocument(selectedApplication.passbookFirstPage)}
                            className="ml-2"
                          >
                            View
                          </Button>
                        </li>
                        <li>
                          Aadhar Front Page
                          <Button
                            onClick={() => handleDownloadDocument(selectedApplication.aadharFrontPage)}
                            className="ml-2"
                          >
                            View
                          </Button>
                        </li>
                      </ul>
                    </TableCell>
                  </TableRow>
                  {/* ... (remaining table rows) */}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4">
              <Input
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Feedback (required for rejection)"
                className="w-full"
              />
              <div className="flex gap-2">
                <Button onClick={handleApprove} disabled={selectedApplication.status !== 'Pending'}>
                  Approve
                </Button>
                <Button onClick={handleReject} disabled={selectedApplication.status !== 'Pending'}>
                  Reject
                </Button>
              </div>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AdminReviewPage;