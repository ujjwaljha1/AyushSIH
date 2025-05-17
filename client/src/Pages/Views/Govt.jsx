// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import emailjs from 'emailjs-com';
// // import { Button } from '@/components/ui/button';
// // import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';

// // const API_URL = 'https://ayushsih-production.up.railway.app/api'; // Update this with your actual API URL


// // const GovOfficialPage = () => {
// //   const [applications, setApplications] = useState([]);
// //   const [selectedApplication, setSelectedApplication] = useState(null);

// //   useEffect(() => {
// //     fetchApprovedApplications();
// //   }, []);

// //   const fetchApprovedApplications = async () => {
// //     try {
// //       const response = await axios.get(`${API_URL}/gov/approved-applications`);
// //       setApplications(response.data);
// //     } catch (error) {
// //       console.error('Error fetching approved applications:', error);
// //     }
// //   };

// //   const handleSelectApplication = (application) => {
// //     setSelectedApplication(application);
// //   };

// //   const handleReleasePayment = async () => {
// //     try {
// //       await axios.post(`${API_URL}/gov/applications/${selectedApplication._id}/release-payment`);
      
// //       // Send email notification
// //       await emailjs.send(
// //         'YOUR_SERVICE_ID',
// //         'YOUR_TEMPLATE_ID',
// //         { 
// //           to_email: selectedApplication.email,
// //           application_id: selectedApplication.applicationId,
// //           message: 'Your payment has been released.',
// //         },
// //         'YOUR_USER_ID'
// //       );

// //       fetchApprovedApplications();
// //       setSelectedApplication(null);
// //     } catch (error) {
// //       console.error('Error releasing payment:', error);
// //     }
// //   };

// //   return (
// //     <div className="flex">
// //       <Card className="w-1/3 mr-4">
// //         <CardHeader>
// //           <h2>Approved Applications</h2>
// //         </CardHeader>
// //         <CardContent>
// //           {applications.map(app => (
// //             <Button key={app._id} onClick={() => handleSelectApplication(app)}>
// //               {app.applicationId}
// //             </Button>
// //           ))}
// //         </CardContent>
// //       </Card>
// //       {selectedApplication && (
// //         <Card className="w-2/3">
// //           <CardHeader>
// //             <h2>Application Details</h2>
// //           </CardHeader>
// //           <CardContent>
// //             {/* Display all application details here */}
// //             <p>Name: {selectedApplication.firstName} {selectedApplication.lastName}</p>
// //             {/* Add more details as needed */}
// //           </CardContent>
// //           <CardFooter>
// //             <Button onClick={handleReleasePayment}>Release Payment</Button>
// //           </CardFooter>
// //         </Card>
// //       )}
// //     </div>
// //   );
// // };

// // export default GovOfficialPage;

// import React, { useState, useEffect } from 'react';
// import { axiosInstance } from '../utils/axiosConfig';
// import emailjs from 'emailjs-com';
// import { Button } from '@/components/ui/button';
// import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';

// const GovOfficialPage = () => {
//   const [applications, setApplications] = useState([]);
//   const [selectedApplication, setSelectedApplication] = useState(null);

//   useEffect(() => {
//     fetchApprovedApplications();
//   }, []);

//   const fetchApprovedApplications = async () => {
//     try {
//       const response = await axiosInstance.get('/gov/approved-applications');
//       setApplications(response.data);
//     } catch (error) {
//       console.error('Error fetching approved applications:', error);
//     }
//   };

//   const handleSelectApplication = (application) => {
//     setSelectedApplication(application);
//   };

//   const handleReleasePayment = async () => {
//     try {
//       await axiosInstance.post(`/gov/applications/${selectedApplication._id}/release-payment`);
      
//       // Send email notification
//       await emailjs.send(
//         'YOUR_SERVICE_ID',
//         'YOUR_TEMPLATE_ID',
//         { 
//           to_email: selectedApplication.email,
//           application_id: selectedApplication.applicationId,
//           message: 'Your payment has been released.',
//         },
//         'YOUR_USER_ID'
//       );

//       fetchApprovedApplications();
//       setSelectedApplication(null);
//     } catch (error) {
//       console.error('Error releasing payment:', error);
//     }
//   };

//   return (
//     <div className="flex">
//       <Card className="w-1/3 mr-4">
//         <CardHeader>
//           <h2>Approved Applications</h2>
//         </CardHeader>
//         <CardContent>
//           {applications.map(app => (
//             <Button key={app._id} onClick={() => handleSelectApplication(app)}>
//               {app.applicationId}
//             </Button>
//           ))}
//         </CardContent>
//       </Card>
//       {selectedApplication && (
//         <Card className="w-2/3">
//           <CardHeader>
//             <h2>Application Details</h2>
//           </CardHeader>
//           <CardContent>
//             <p>Name: {selectedApplication.firstName} {selectedApplication.lastName}</p>
//             {/* Add more details as needed */}
//           </CardContent>
//           <CardFooter>
//             <Button onClick={handleReleasePayment}>Release Payment</Button>
//           </CardFooter>
//         </Card>
//       )}
//     </div>
//   );
// };

// export default GovOfficialPage;


import React, { useState, useEffect } from 'react';
import { axiosInstance } from '../utils/axiosConfig';
import emailjs from 'emailjs-com';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

const GovOfficialPage = () => {
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    fetchApprovedApplications();
  }, []);

  const fetchApprovedApplications = async () => {
    try {
      const response = await axiosInstance.get('/gov/approved-applications');
      setApplications(response.data);
    } catch (error) {
      console.error('Error fetching approved applications:', error);
      setError('Failed to fetch approved applications. Please try again later.');
    }
  };

  const handleSelectApplication = (application) => {
    setSelectedApplication(application);
    setError('');
    setSuccessMessage('');
  };

  const handleReleasePayment = async () => {
    try {
      await axiosInstance.post(`/gov/applications/${selectedApplication._id}/release-payment`);
      
      // Send email notification
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        { 
          to_email: selectedApplication.email,
          application_id: selectedApplication.applicationId,
          message: 'Your scholarship payment has been released.',
        },
        'YOUR_USER_ID'
      );

      setSuccessMessage(`Payment released successfully for application ${selectedApplication.applicationId}`);
      fetchApprovedApplications();
      setSelectedApplication(null);
    } catch (error) {
      console.error('Error releasing payment:', error);
      setError('Failed to release payment. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Government Official Scholarship Portal</h1>
      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {successMessage && (
        <Alert variant="success" className="mb-4">
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>{successMessage}</AlertDescription>
        </Alert>
      )}
      <div className="flex flex-col md:flex-row gap-4">
        <Card className="w-full md:w-1/3">
          <CardHeader>
            <h2 className="text-xl font-semibold">Approved Applications</h2>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Application ID</TableHead>
                  <TableHead>Payment Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {applications.map(app => (
                  <TableRow key={app._id}>
                    <TableCell>{app.applicationId}</TableCell>
                    <TableCell>
                      <Badge variant={app.paymentStatus === 'Released' ? 'success' : 'warning'}>
                        {app.paymentStatus}
                      </Badge>
                    </TableCell>
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
                    <TableCell className="font-semibold">State</TableCell>
                    <TableCell>{selectedApplication.state}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">Place</TableCell>
                    <TableCell>{selectedApplication.place}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">Email</TableCell>
                    <TableCell>{selectedApplication.email}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-semibold">Phone Number</TableCell>
                    <TableCell>{selectedApplication.phoneNumber}</TableCell>
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
                    <TableCell className="font-semibold">Payment Status</TableCell>
                    <TableCell>
                      <Badge variant={selectedApplication.paymentStatus === 'Released' ? 'success' : 'warning'}>
                        {selectedApplication.paymentStatus}
                      </Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={handleReleasePayment}
                disabled={selectedApplication.paymentStatus === 'Released'}
              >
                {selectedApplication.paymentStatus === 'Released' ? 'Payment Released' : 'Release Payment'}
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  );
};

export default GovOfficialPage;