import React, { useState, useEffect } from 'react';
import { axiosInstance } from '../utils/axiosConfig';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const PastApplicationsPage = () => {
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);

  useEffect(() => {
    fetchPastApplications();
  }, []);

  const fetchPastApplications = async () => {
    try {
      const response = await axiosInstance.get('/applications/past');
      setApplications(response.data);
    } catch (error) {
      console.error('Error fetching past applications:', error);
    }
  };

  const handleViewApplication = (application) => {
    setSelectedApplication(application);
  };

  const renderPDFViewer = (fileUrl) => {
    return (
      <iframe
        src={`${process.env.REACT_APP_API_URL}/${fileUrl}`}
        width="100%"
        height="500px"
        style={{ border: 'none' }}
        title="PDF Viewer"
      />
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Past Applications</h1>
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Application List</h2>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Application ID</TableHead>
                <TableHead>Applicant Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applications.map((app) => (
                <TableRow key={app._id}>
                  <TableCell>{app.applicationId}</TableCell>
                  <TableCell>{`${app.firstName} ${app.lastName}`}</TableCell>
                  <TableCell>{app.status}</TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button onClick={() => handleViewApplication(app)}>View</Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <DialogHeader>
                          <DialogTitle>Application Details - {app.applicationId}</DialogTitle>
                        </DialogHeader>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h3 className="font-semibold mb-2">Personal Information</h3>
                            <p>Name: {`${app.firstName} ${app.lastName}`}</p>
                            <p>Father's Name: {app.fathersName}</p>
                            <p>Mother's Name: {app.mothersName}</p>
                            <p>Email: {app.email}</p>
                            <p>Phone: {app.phoneNumber}</p>
                            <p>Aadhar Number: {app.aadharNumber}</p>
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">Application Status</h3>
                            <p>Status: {app.status}</p>
                            <p>Payment Status: {app.paymentStatus}</p>
                            {app.adminFeedback && (
                              <p>Admin Feedback: {app.adminFeedback}</p>
                            )}
                          </div>
                        </div>
                        <div className="mt-4">
                          <h3 className="font-semibold mb-2">Documents</h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-medium mb-1">12th Marksheet</h4>
                              {renderPDFViewer(app.marksheet12th)}
                            </div>
                            <div>
                              <h4 className="font-medium mb-1">Family Income Certificate</h4>
                              {renderPDFViewer(app.familyIncomeCertificate)}
                            </div>
                            <div>
                              <h4 className="font-medium mb-1">Passbook First Page</h4>
                              {renderPDFViewer(app.passbookFirstPage)}
                            </div>
                            <div>
                              <h4 className="font-medium mb-1">Aadhar Front Page</h4>
                              {renderPDFViewer(app.aadharFrontPage)}
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default PastApplicationsPage;