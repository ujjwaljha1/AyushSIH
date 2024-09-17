
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import emailjs from 'emailjs-com';

// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
// import { Label } from '@/components/ui/label';
// import { Checkbox } from '@/components/ui/checkbox';
// import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
// import { Alert, AlertDescription } from '@/components/ui/alert';
// import { Separator } from '@/components/ui/separator';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const API_URL =  'http://localhost:3001/api';

// const GovernmentApplicationForm = () => {
//   const navigate = useNavigate();
//   const [page, setPage] = useState(1);
//   const [error, setError] = useState('');
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     fathersName: '',
//     mothersName: '',
//     fathersProfession: '',
//     mothersProfession: '',
//     state: '',
//     place: '',
//     pincode: '',
//     email: '',
//     alternativeEmail: '',
//     phoneNumber: '',
//     alternatePhoneNumber: '',
//     aadharNumber: '',
//     board12th: '',
//     marksheet12th: null,
//     familyIncomeCertificate: null,
//     passbookFirstPage: null,
//     aadharFrontPage: null,
//     detailsCorrect: false,
//     rejectIfWrong: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked, files } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
//     }));
//   };

//   const handleSelectChange = (name, value) => {
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const validatePage = () => {
//     setError('');
//     const requiredFields = {
//       1: ['firstName', 'lastName', 'fathersName', 'mothersName', 'fathersProfession', 'mothersProfession', 'state', 'place', 'pincode', 'email', 'phoneNumber', 'aadharNumber'],
//       2: ['board12th', 'marksheet12th', 'familyIncomeCertificate'],
//       3: ['passbookFirstPage', 'aadharFrontPage'],
//       4: ['detailsCorrect', 'rejectIfWrong']
//     };

//     const emptyFields = requiredFields[page].filter(field => !formData[field]);
//     if (emptyFields.length > 0) {
//       setError(`Please fill in all required fields: ${emptyFields.join(', ')}`);
//       return false;
//     }

//     if (page === 1) {
//       if (formData.pincode.length !== 6) {
//         setError('Pincode must be 6 digits');
//         return false;
//       }
//       if (formData.aadharNumber.length !== 12) {
//         setError('Aadhar number must be 12 digits');
//         return false;
//       }
//     }

//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validatePage()) return;

//     try {
//       const formDataToSend = new FormData();
//       Object.keys(formData).forEach(key => {
//         formDataToSend.append(key, formData[key]);
//       });

//       const response = await axios.post(`${API_URL}/applications`, formDataToSend, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });

//       const { applicationId } = response.data;

//       // await emailjs.send(
//       //   'service_sl1i28m',
//       //   'template_vjdh49e',
//       //   { 
//       //     to_email: formData.email,
//       //     application_id: applicationId,
//       //   },
//       //   process.env.REACT_APP_EMAILJS_USER_ID
//       // );

//       navigate(`/application-status/${applicationId}`);
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       setError('An error occurred while submitting your application. Please try again.');
//     }
//   };

//   const renderInput = (name, label, type = 'text', required = true, placeholder = '', maxLength = undefined) => (
//     <div className="space-y-2">
//       <Label htmlFor={name}>{label}{required && ' *'}</Label>
//       <Input
//         id={name}
//         name={name}
//         type={type}
//         value={formData[name]}
//         onChange={handleChange}
//         placeholder={placeholder}
//         required={required}
//         maxLength={maxLength}
//         className="w-full"
//       />
//     </div>
//   );

//   const renderSelect = (name, label, options, required = true) => (
//     <div className="space-y-2">
//       <Label htmlFor={name}>{label}{required && ' *'}</Label>
//       <Select name={name} value={formData[name]} onValueChange={(value) => handleSelectChange(name, value)}>
//         <SelectTrigger className="w-full">
//           <SelectValue placeholder={`Select ${label}`} />
//         </SelectTrigger>
//         <SelectContent>
//           {options.map(option => (
//             <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
//           ))}
//         </SelectContent>
//       </Select>
//     </div>
//   );

//   const renderFileInput = (name, label, required = true) => (
//     <div className="space-y-2">
//       <Label htmlFor={name}>{label}{required && ' *'}</Label>
//       <Input
//         id={name}
//         name={name}
//         type="file"
//         onChange={handleChange}
//         accept=".pdf"
//         required={required}
//         className="w-full"
//       />
//     </div>
//   );

//   const renderCheckbox = (name, label) => (
//     <div className="flex items-center space-x-2">
//       <Checkbox
//         id={name}
//         name={name}
//         checked={formData[name]}
//         onCheckedChange={(checked) => handleChange({target: {name, type: 'checkbox', checked}})}
//       />
//       <Label htmlFor={name}>{label}</Label>
//     </div>
//   );

//   const renderPage = () => {
//     switch (page) {
//       case 1:
//         return (
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold">Personal Information</h3>
//             {renderInput('firstName', 'First Name')}
//             {renderInput('lastName', 'Last Name')}
//             {renderInput('fathersName', "Father's Name")}
//             {renderInput('mothersName', "Mother's Name")}
//             {renderInput('fathersProfession', "Father's Profession")}
//             {renderInput('mothersProfession', "Mother's Profession")}
//             {renderSelect('state', 'State', [
//               { value: 'AN', label: 'Andaman and Nicobar Islands' },
//               { value: 'AP', label: 'Andhra Pradesh' },
//               // ... (other states)
//             ])}
//             {renderInput('place', 'Place')}
//             {renderInput('pincode', 'Pincode', 'text', true, '6-digit Pincode', 6)}
//             {renderInput('email', 'Email', 'email')}
//             {renderInput('alternativeEmail', 'Alternative Email', 'email', false)}
//             {renderInput('phoneNumber', 'Phone Number')}
//             {renderInput('alternatePhoneNumber', 'Alternate Phone Number', 'tel', false)}
//             {renderInput('aadharNumber', 'Aadhar Number', 'text', true, '12-digit Aadhar Number', 12)}
//           </div>
//         );
//       case 2:
//         return (
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold">Educational Information</h3>
//             {renderSelect('board12th', '12th Board', [
//               { value: 'CBSE', label: 'CBSE' },
//               { value: 'JKBOSE', label: 'JKBOSE' },
//               { value: 'ICSE', label: 'ICSE' },
//               { value: 'STATE', label: 'State Board' },
//             ])}
//             {renderFileInput('marksheet12th', '12th Marksheet')}
//             {renderFileInput('familyIncomeCertificate', 'Family Income Certificate')}
//           </div>
//         );
//       case 3:
//         return (
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold">Document Upload</h3>
//             {renderFileInput('passbookFirstPage', 'Passbook First Page')}
//             {renderFileInput('aadharFrontPage', 'Aadhar Front Page')}
//           </div>
//         );
//       case 4:
//         return (
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold">Review and Submit</h3>
//             <div className="space-y-2">
//               {Object.entries(formData).map(([key, value]) => (
//                 key !== 'detailsCorrect' && key !== 'rejectIfWrong' && (
//                   <div key={key} className="flex justify-between">
//                     <span className="font-semibold">{key}:</span>
//                     <span>{value instanceof File ? value.name : value.toString()}</span>
//                   </div>
//                 )
//               ))}
//             </div>
//             <Separator />
//             {renderCheckbox('detailsCorrect', 'I confirm that the details provided are correct')}
//             {renderCheckbox('rejectIfWrong', 'I understand that my application may be rejected if the details are incorrect')}
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <Card className="w-full max-w-2xl mx-auto my-8">
//       <CardHeader>
//         <h2 className="text-2xl font-bold text-center">Government Application Form</h2>
//         <p className="text-center text-gray-500">Page {page} of 4</p>
//       </CardHeader>
//       <form onSubmit={handleSubmit}>
//         <CardContent className="px-4 sm:px-6">
//           {renderPage()}
//           {error && (
//             <Alert variant="destructive" className="mt-4">
//               <AlertDescription>{error}</AlertDescription>
//             </Alert>
//           )}
//         </CardContent>
//         <CardFooter className="flex justify-between px-4 sm:px-6">
//           {page > 1 && (
//             <Button type="button" onClick={() => setPage(page - 1)} variant="outline">
//               <ChevronLeft className="mr-2 h-4 w-4" /> Previous
//             </Button>
//           )}
//           {page < 4 ? (
//             <Button type="button" onClick={() => {
//               if (validatePage()) setPage(page + 1);
//             }} className="ml-auto">
//               Next <ChevronRight className="ml-2 h-4 w-4" />
//             </Button>
//           ) : (
//             <Button type="submit" className="ml-auto">Submit Application</Button>
//           )}
//         </CardFooter>
//       </form>
//     </Card>
//   );
// };

// export default GovernmentApplicationForm;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
// import { Label } from '@/components/ui/label';
// import { Checkbox } from '@/components/ui/checkbox';
// import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
// import { Alert, AlertDescription } from '@/components/ui/alert';
// import { Separator } from '@/components/ui/separator';
// import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// const API_URL = 'http://localhost:3001/api';

// const GovernmentApplicationForm = () => {
//   const navigate = useNavigate();
//   const [page, setPage] = useState(1);
//   const [error, setError] = useState('');
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     fathersName: '',
//     mothersName: '',
//     fathersProfession: '',
//     mothersProfession: '',
//     state: '',
//     place: '',
//     pincode: '',
//     email: '',
//     alternativeEmail: '',
//     phoneNumber: '',
//     alternatePhoneNumber: '',
//     aadharNumber: '',
//     board12th: '',
//     marksheet12th: null,
//     familyIncomeCertificate: null,
//     passbookFirstPage: null,
//     aadharFrontPage: null,
//     detailsCorrect: false,
//     rejectIfWrong: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked, files } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
//     }));
//   };

//   const handleSelectChange = (name, value) => {
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const validatePage = () => {
//     setError('');
//     const requiredFields = {
//       1: ['firstName', 'lastName', 'fathersName', 'mothersName', 'fathersProfession', 'mothersProfession', 'state', 'place', 'pincode', 'email', 'phoneNumber', 'aadharNumber'],
//       2: ['board12th', 'marksheet12th', 'familyIncomeCertificate'],
//       3: ['passbookFirstPage', 'aadharFrontPage'],
//       4: ['detailsCorrect', 'rejectIfWrong']
//     };

//     const emptyFields = requiredFields[page].filter(field => !formData[field]);
//     if (emptyFields.length > 0) {
//       setError(`Please fill in all required fields: ${emptyFields.join(', ')}`);
//       return false;
//     }

//     if (page === 1) {
//       if (formData.pincode.length !== 6) {
//         setError('Pincode must be 6 digits');
//         return false;
//       }
//       if (formData.aadharNumber.length !== 12) {
//         setError('Aadhar number must be 12 digits');
//         return false;
//       }
//     }

//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validatePage()) return;

//     try {
//       const formDataToSend = new FormData();
//       Object.keys(formData).forEach(key => {
//         formDataToSend.append(key, formData[key]);
//       });

//       const response = await axios.post(`${API_URL}/applications`, formDataToSend, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });

//       const { applicationId } = response.data;
//       navigate(`/application-status/${applicationId}`);
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       setError('An error occurred while submitting your application. Please try again.');
//     }
//   };

//   const renderInput = (name, label, type = 'text', required = true, placeholder = '', maxLength = undefined) => (
//     <div className="space-y-2">
//       <Label htmlFor={name}>{label}{required && ' *'}</Label>
//       <Input
//         id={name}
//         name={name}
//         type={type}
//         value={formData[name]}
//         onChange={handleChange}
//         placeholder={placeholder}
//         required={required}
//         maxLength={maxLength}
//         className="w-full"
//       />
//     </div>
//   );

//   const renderSelect = (name, label, options, required = true) => (
//     <div className="space-y-2">
//       <Label htmlFor={name}>{label}{required && ' *'}</Label>
//       <Select name={name} value={formData[name]} onValueChange={(value) => handleSelectChange(name, value)}>
//         <SelectTrigger className="w-full">
//           <SelectValue placeholder={`Select ${label}`} />
//         </SelectTrigger>
//         <SelectContent>
//           {options.map(option => (
//             <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
//           ))}
//         </SelectContent>
//       </Select>
//     </div>
//   );

//   const renderFileInput = (name, label, required = true) => (
//     <div className="space-y-2">
//       <Label htmlFor={name}>{label}{required && ' *'}</Label>
//       <Input
//         id={name}
//         name={name}
//         type="file"
//         onChange={handleChange}
//         accept=".pdf,image/*"
//         required={required}
//         className="w-full"
//       />
//       {formData[name] && (
//         <div className="flex items-center mt-2">
//           <span className="text-sm text-gray-500 mr-2">{formData[name].name}</span>
//           <Button
//             type="button"
//             variant="ghost"
//             size="sm"
//             onClick={() => {
//               setFormData(prevState => ({ ...prevState, [name]: null }));
//               document.getElementById(name).value = '';
//             }}
//           >
//             <X className="h-4 w-4" />
//           </Button>
//         </div>
//       )}
//     </div>
//   );

//   const renderFilePreview = (name, label) => {
//     if (!formData[name]) return null;
    
//     return (
//       <div className="mt-2">
//         <Label>{label} Preview:</Label>
//         <div className="mt-1 p-2 border rounded">
//           <p className="text-sm">{formData[name].name}</p>
//           {formData[name].type.startsWith('image/') ? (
//             <img
//               src={URL.createObjectURL(formData[name])}
//               alt={`Preview of ${label}`}
//               className="mt-2 max-w-full h-auto"
//             />
//           ) : (
//             <p className="text-sm text-gray-500 mt-1">File uploaded (cannot display preview)</p>
//           )}
//         </div>
//       </div>
//     );
//   };

//   const renderCheckbox = (name, label) => (
//     <div className="flex items-center space-x-2">
//       <Checkbox
//         id={name}
//         name={name}
//         checked={formData[name]}
//         onCheckedChange={(checked) => handleChange({target: {name, type: 'checkbox', checked}})}
//       />
//       <Label htmlFor={name}>{label}</Label>
//     </div>
//   );

//   const renderPage = () => {
//     switch (page) {
//       case 1:
//         return (
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold">Personal Information</h3>
//             {renderInput('firstName', 'First Name')}
//             {renderInput('lastName', 'Last Name')}
//             {renderInput('fathersName', "Father's Name")}
//             {renderInput('mothersName', "Mother's Name")}
//             {renderInput('fathersProfession', "Father's Profession")}
//             {renderInput('mothersProfession', "Mother's Profession")}
//             {renderSelect('state', 'State', [
//               { value: 'AN', label: 'Andaman and Nicobar Islands' },
//               { value: 'AP', label: 'Andhra Pradesh' },
//               // ... (other states)
//             ])}
//             {renderInput('place', 'Place')}
//             {renderInput('pincode', 'Pincode', 'text', true, '6-digit Pincode', 6)}
//             {renderInput('email', 'Email', 'email')}
//             {renderInput('alternativeEmail', 'Alternative Email', 'email', false)}
//             {renderInput('phoneNumber', 'Phone Number')}
//             {renderInput('alternatePhoneNumber', 'Alternate Phone Number', 'tel', false)}
//             {renderInput('aadharNumber', 'Aadhar Number', 'text', true, '12-digit Aadhar Number', 12)}
//           </div>
//         );
//       case 2:
//         return (
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold">Educational Information</h3>
//             {renderSelect('board12th', '12th Board', [
//               { value: 'CBSE', label: 'CBSE' },
//               { value: 'JKBOSE', label: 'JKBOSE' },
//               { value: 'ICSE', label: 'ICSE' },
//               { value: 'STATE', label: 'State Board' },
//             ])}
//             {renderFileInput('marksheet12th', '12th Marksheet')}
//             {renderFilePreview('marksheet12th', '12th Marksheet')}
//             {renderFileInput('familyIncomeCertificate', 'Family Income Certificate')}
//             {renderFilePreview('familyIncomeCertificate', 'Family Income Certificate')}
//           </div>
//         );
//       case 3:
//         return (
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold">Document Upload</h3>
//             {renderFileInput('passbookFirstPage', 'Passbook First Page')}
//             {renderFilePreview('passbookFirstPage', 'Passbook First Page')}
//             {renderFileInput('aadharFrontPage', 'Aadhar Front Page')}
//             {renderFilePreview('aadharFrontPage', 'Aadhar Front Page')}
//           </div>
//         );
//       case 4:
//         return (
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold">Review and Submit</h3>
//             <div className="space-y-2">
//               {Object.entries(formData).map(([key, value]) => (
//                 key !== 'detailsCorrect' && key !== 'rejectIfWrong' && !(value instanceof File) && (
//                   <div key={key} className="flex justify-between">
//                     <span className="font-semibold">{key}:</span>
//                     <span>{value.toString()}</span>
//                   </div>
//                 )
//               ))}
//             </div>
//             <Separator />
//             <h4 className="font-semibold mt-4">Uploaded Documents:</h4>
//             {renderFilePreview('marksheet12th', '12th Marksheet')}
//             {renderFilePreview('familyIncomeCertificate', 'Family Income Certificate')}
//             {renderFilePreview('passbookFirstPage', 'Passbook First Page')}
//             {renderFilePreview('aadharFrontPage', 'Aadhar Front Page')}
//             <Separator />
//             {renderCheckbox('detailsCorrect', 'I confirm that the details provided are correct')}
//             {renderCheckbox('rejectIfWrong', 'I understand that my application may be rejected if the details are incorrect')}
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <Card className="w-full max-w-2xl mx-auto my-8">
//       <CardHeader>
//         <h2 className="text-2xl font-bold text-center">Government Application Form</h2>
//         <p className="text-center text-gray-500">Page {page} of 4</p>
//       </CardHeader>
//       <form onSubmit={handleSubmit}>
//         <CardContent className="px-4 sm:px-6">
//           {renderPage()}
//           {error && (
//             <Alert variant="destructive" className="mt-4">
//               <AlertDescription>{error}</AlertDescription>
//             </Alert>
//           )}
//         </CardContent>
//         <CardFooter className="flex justify-between px-4 sm:px-6">
//           {page > 1 && (
//             <Button type="button" onClick={() => setPage(page - 1)} variant="outline">
//               <ChevronLeft className="mr-2 h-4 w-4" /> Previous
//             </Button>
//           )}
//           {page < 4 ? (
//             <Button type="button" onClick={() => {
//               if (validatePage()) setPage(page + 1);
//             }} className="ml-auto">
//               Next <ChevronRight className="ml-2 h-4 w-4" />
//             </Button>
//           ) : (
//             <Button type="submit" className="ml-auto">Submit Application</Button>
//           )}
//         </CardFooter>
//       </form>
//     </Card>
//   );
// };

// export default GovernmentApplicationForm;


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
// import { Label } from '@/components/ui/label';
// import { Checkbox } from '@/components/ui/checkbox';
// import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
// import { Alert, AlertDescription } from '@/components/ui/alert';
// import { Separator } from '@/components/ui/separator';
// import { ChevronLeft, ChevronRight, X, Volume2 } from 'lucide-react';

// const API_URL = 'http://localhost:3001/api';

// const GovernmentApplicationForm = () => {
//   const navigate = useNavigate();
//   const [page, setPage] = useState(1);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     fathersName: '',
//     mothersName: '',
//     fathersProfession: '',
//     mothersProfession: '',
//     state: '',
//     place: '',
//     pincode: '',
//     email: '',
//     alternativeEmail: '',
//     phoneNumber: '',
//     alternatePhoneNumber: '',
//     aadharNumber: '',
//     board12th: '',
//     marksheet12th: null,
//     familyIncomeCertificate: null,
//     passbookFirstPage: null,
//     aadharFrontPage: null,
//     detailsCorrect: false,
//     rejectIfWrong: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked, files } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
//     }));
//   };

//   const handleSelectChange = (name, value) => {
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const validatePage = () => {
//     setError('');
//     const requiredFields = {
//       1: ['firstName', 'lastName', 'fathersName', 'mothersName', 'fathersProfession', 'mothersProfession', 'state', 'place', 'pincode', 'email', 'phoneNumber', 'aadharNumber'],
//       2: ['board12th', 'marksheet12th', 'familyIncomeCertificate'],
//       3: ['passbookFirstPage', 'aadharFrontPage'],
//       4: ['detailsCorrect', 'rejectIfWrong']
//     };

//     const emptyFields = requiredFields[page].filter(field => !formData[field]);
//     if (emptyFields.length > 0) {
//       setError(`Please fill in all required fields: ${emptyFields.join(', ')}`);
//       return false;
//     }

//     if (page === 1) {
//       if (formData.pincode.length !== 6) {
//         setError('Pincode must be 6 digits');
//         return false;
//       }
//       if (formData.aadharNumber.length !== 12) {
//         setError('Aadhar number must be 12 digits');
//         return false;
//       }
//     }

//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validatePage()) return;

//     try {
//       const formDataToSend = new FormData();
//       Object.keys(formData).forEach(key => {
//         formDataToSend.append(key, formData[key]);
//       });

//       const response = await axios.post(`${API_URL}/applications`, formDataToSend, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });

//       const { applicationId } = response.data;
//       setSuccess(`Your application has been submitted successfully. Your tracking ID is ${applicationId}. This ID has been sent to your email address.`);
//       // Navigate after a delay to show the success message
//       setTimeout(() => navigate(`/application-status/${applicationId}`), 5000);
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       setError('An error occurred while submitting your application. Please try again.');
//     }
//   };

//   const renderInput = (name, label, type = 'text', required = true, placeholder = '', maxLength = undefined, helpText = '') => (
//     <div className="space-y-2">
//       <Label htmlFor={name}>{label}{required && ' *'}</Label>
//       <Input
//         id={name}
//         name={name}
//         type={type}
//         value={formData[name]}
//         onChange={handleChange}
//         placeholder={placeholder}
//         required={required}
//         maxLength={maxLength}
//         className="w-full"
//       />
//       {helpText && <p className="text-sm text-gray-500">{helpText}</p>}
//     </div>
//   );

//   const renderSelect = (name, label, options, required = true, helpText = '') => (
//     <div className="space-y-2">
//       <Label htmlFor={name}>{label}{required && ' *'}</Label>
//       <Select name={name} value={formData[name]} onValueChange={(value) => handleSelectChange(name, value)}>
//         <SelectTrigger className="w-full">
//           <SelectValue placeholder={`Select ${label}`} />
//         </SelectTrigger>
//         <SelectContent>
//           {options.map(option => (
//             <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
//           ))}
//         </SelectContent>
//       </Select>
//       {helpText && <p className="text-sm text-gray-500">{helpText}</p>}
//     </div>
//   );

//   const renderFileInput = (name, label, required = true, helpText = '') => (
//     <div className="space-y-2">
//       <Label htmlFor={name}>{label}{required && ' *'}</Label>
//       <Input
//         id={name}
//         name={name}
//         type="file"
//         onChange={handleChange}
//         accept=".pdf,image/*"
//         required={required}
//         className="w-full"
//       />
//       {helpText && <p className="text-sm text-gray-500">{helpText}</p>}
//       {formData[name] && (
//         <div className="flex items-center mt-2">
//           <span className="text-sm text-gray-500 mr-2">{formData[name].name}</span>
//           <Button
//             type="button"
//             variant="ghost"
//             size="sm"
//             onClick={() => {
//               setFormData(prevState => ({ ...prevState, [name]: null }));
//               document.getElementById(name).value = '';
//             }}
//           >
//             <X className="h-4 w-4" />
//           </Button>
//         </div>
//       )}
//     </div>
//   );

//   const renderFilePreview = (name, label) => {
//     if (!formData[name]) return null;
    
//     return (
//       <div className="mt-2">
//         <Label>{label} Preview:</Label>
//         <div className="mt-1 p-2 border rounded">
//           <p className="text-sm">{formData[name].name}</p>
//           {formData[name].type.startsWith('image/') ? (
//             <img
//               src={URL.createObjectURL(formData[name])}
//               alt={`Preview of ${label}`}
//               className="mt-2 max-w-full h-auto"
//             />
//           ) : (
//             <p className="text-sm text-gray-500 mt-1">File uploaded (cannot display preview)</p>
//           )}
//         </div>
//       </div>
//     );
//   };

//   const renderCheckbox = (name, label, helpText = '') => (
//     <div className="flex items-start space-x-2">
//       <Checkbox
//         id={name}
//         name={name}
//         checked={formData[name]}
//         onCheckedChange={(checked) => handleChange({target: {name, type: 'checkbox', checked}})}
//       />
//       <div>
//         <Label htmlFor={name}>{label}</Label>
//         {helpText && <p className="text-sm text-gray-500">{helpText}</p>}
//       </div>
//     </div>
//   );

//   const speakText = (text) => {
//     const utterance = new SpeechSynthesisUtterance(text);
//     window.speechSynthesis.speak(utterance);
//   };

//   const renderPage = () => {
//     switch (page) {
//       case 1:
//         return (
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold">Personal Information</h3>
//             {renderInput('firstName', 'First Name', 'text', true, '', undefined, 'Enter your legal first name as it appears on official documents.')}
//             {renderInput('lastName', 'Last Name', 'text', true, '', undefined, 'Enter your legal last name as it appears on official documents.')}
//             {renderInput('fathersName', "Father's Name", 'text', true, '', undefined, "Enter your father's full name.")}
//             {renderInput('mothersName', "Mother's Name", 'text', true, '', undefined, "Enter your mother's full name.")}
//             {renderInput('fathersProfession', "Father's Profession", 'text', true, '', undefined, "Enter your father's current or most recent occupation.")}
//             {renderInput('mothersProfession', "Mother's Profession", 'text', true, '', undefined, "Enter your mother's current or most recent occupation.")}
//             {renderSelect('state', 'State', [
//               { value: 'AN', label: 'Andaman and Nicobar Islands' },
//               { value: 'AP', label: 'Andhra Pradesh' },
//               // ... (other states)
//             ], true, 'Select the state where you currently reside.')}
//             {renderInput('place', 'Place', 'text', true, '', undefined, 'Enter the name of your city or village.')}
//             {renderInput('pincode', 'Pincode', 'text', true, '6-digit Pincode', 6, 'Enter your 6-digit postal code.')}
//             {renderInput('email', 'Email', 'email', true, '', undefined, 'Enter a valid email address. This will be used for communication regarding your application.')}
//             {renderInput('alternativeEmail', 'Alternative Email', 'email', false, '', undefined, 'Optional: Enter an alternative email address.')}
//             {renderInput('phoneNumber', 'Phone Number', 'tel', true, '', undefined, 'Enter a valid 10-digit mobile number.')}
//             {renderInput('alternatePhoneNumber', 'Alternate Phone Number', 'tel', false, '', undefined, 'Optional: Enter an alternative phone number.')}
//             {renderInput('aadharNumber', 'Aadhar Number', 'text', true, '12-digit Aadhar Number', 12, 'Enter your 12-digit Aadhar number without spaces.')}
//           </div>
//         );
//       case 2:
//         return (
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold">Educational Information</h3>
//             {renderSelect('board12th', '12th Board', [
//               { value: 'CBSE', label: 'CBSE' },
//               { value: 'JKBOSE', label: 'JKBOSE' },
//               { value: 'ICSE', label: 'ICSE' },
//               { value: 'STATE', label: 'State Board' },
//             ], true, 'Select the board from which you completed your 12th standard.')}
//             {renderFileInput('marksheet12th', '12th Marksheet', true, 'Upload a scanned copy or clear photo of your 12th standard marksheet.')}
//             {renderFilePreview('marksheet12th', '12th Marksheet')}
//             {renderFileInput('familyIncomeCertificate', 'Family Income Certificate', true, 'Upload a scanned copy or clear photo of your family income certificate issued by a competent authority.')}
//             {renderFilePreview('familyIncomeCertificate', 'Family Income Certificate')}
//           </div>
//         );
//       case 3:
//         return (
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold">Document Upload</h3>
//             {renderFileInput('passbookFirstPage', 'Passbook First Page', true, 'Upload a scanned copy or clear photo of the first page of your bank passbook.')}
//             {renderFilePreview('passbookFirstPage', 'Passbook First Page')}
//             {renderFileInput('aadharFrontPage', 'Aadhar Front Page', true, 'Upload a scanned copy or clear photo of the front page of your Aadhar card.')}
//             {renderFilePreview('aadharFrontPage', 'Aadhar Front Page')}
//           </div>
//         );
//       case 4:
//         return (
//           <div className="space-y-4">
//             <h3 className="text-lg font-semibold">Review and Submit</h3>
//             <div className="space-y-2">
//               {Object.entries(formData).map(([key, value]) => (
//                 key !== 'detailsCorrect' && key !== 'rejectIfWrong' && !(value instanceof File) && (
//                   <div key={key} className="flex justify-between">
//                     <span className="font-semibold">{key}:</span>
//                     <span>{value.toString()}</span>
//                   </div>
//                 )
//               ))}
//             </div>
//             <Separator />
//             <h4 className="font-semibold mt-4">Uploaded Documents:</h4>
//             {renderFilePreview('marksheet12th', '12th Marksheet')}
//             {renderFilePreview('familyIncomeCertificate', 'Family Income Certificate')}
//             {renderFilePreview('passbookFirstPage', 'Passbook First Page')}
//             {renderFilePreview('aadharFrontPage', 'Aadhar Front Page')}
//             <Separator />
//             {renderCheckbox('detailsCorrect', 'I confirm that the details provided are correct', 'Please review all the information carefully before confirming.')}
//             {renderCheckbox('rejectIfWrong', 'I understand that my application may be rejected if the details are incorrect', 'Providing false information may lead to rejection of your application and other legal consequences.')}
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <Card className="w-full max-w-2xl mx-auto my-8 bg-gray-100 border-2 border-blue-600">
//       <CardHeader className="bg-blue-600 text-white">
//         <div className="flex justify-between items-center">
//           <h2 className="text-2xl font-bold">Government Application Form</h2>
//           <Button
//             type="button"
//             variant="outline"
//             size="icon"
//             onClick={() => speakText("Government Application Form. Page " + page + " of 4.")}
//             className="bg-white text-blue-600 hover:bg-blue-100"
//           >
//             <Volume2 className="h-4 w-4" />
//           </Button>
//         </div>
//         <p className="text-center">Page {page} of 4</p>
//       </CardHeader>
//       <form onSubmit={handleSubmit}>
//         <CardContent className="px-4 sm:px-6 py-6">
//           {renderPage()}
//           {error && (
//             <Alert variant="destructive" className="mt-4">
//               <AlertDescription>{error}</AlertDescription>
//             </Alert>
//           )}
//           {success && (
//             <Alert variant="success" className="mt-4 bg-green-100 border-green-400 text-green-700">
//               <AlertDescription>{success}</AlertDescription>
//             </Alert>
//           )}
//         </CardContent>
//         <CardFooter className="flex justify-between px-4 sm:px-6 bg-gray-200">
//           {page > 1 && (
//             <Button type="button" onClick={() => setPage(page - 1)} variant="outline" className="bg-white">
//               <ChevronLeft className="mr-2 h-4 w-4" /> Previous
//             </Button>
//           )}
//           {page < 4 ? (
//             <Button 
//               type="button" 
//               onClick={() => {
//                 if (validatePage()) setPage(page + 1);
//               }} 
//               className="ml-auto bg-blue-600 hover:bg-blue-700 text-white"
//             >
//               Next <ChevronRight className="ml-2 h-4 w-4" />
//             </Button>
//           ) : (
//             <Button type="submit" className="ml-auto bg-green-600 hover:bg-green-700 text-white">
//               Submit Application
//             </Button>
//           )}
//         </CardFooter>
//       </form>
//     </Card>
//   );
// };

// export default GovernmentApplicationForm;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { ChevronLeft, ChevronRight, Volume2, X } from 'lucide-react';

const API_URL = 'http://localhost:3001/api';

const GovernmentApplicationForm = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    fathersName: '',
    mothersName: '',
    fathersProfession: '',
    mothersProfession: '',
    state: '',
    place: '',
    pincode: '',
    email: '',
    alternativeEmail: '',
    phoneNumber: '',
    alternatePhoneNumber: '',
    aadharNumber: '',
    board12th: '',
    marksheet12th: null,
    familyIncomeCertificate: null,
    passbookFirstPage: null,
    aadharFrontPage: null,
    detailsCorrect: false,
    rejectIfWrong: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validatePage = () => {
    setError('');
    const requiredFields = {
      1: ['firstName', 'lastName', 'fathersName', 'mothersName', 'fathersProfession', 'mothersProfession', 'state', 'place', 'pincode', 'email', 'phoneNumber', 'aadharNumber'],
      2: ['board12th', 'marksheet12th', 'familyIncomeCertificate'],
      3: ['passbookFirstPage', 'aadharFrontPage'],
      4: ['detailsCorrect', 'rejectIfWrong']
    };

    const emptyFields = requiredFields[page].filter(field => !formData[field]);
    if (emptyFields.length > 0) {
      setError(`Please fill in all required fields: ${emptyFields.join(', ')}`);
      return false;
    }

    if (page === 1) {
      if (formData.pincode.length !== 6) {
        setError('Pincode must be 6 digits');
        return false;
      }
      if (formData.aadharNumber.length !== 12) {
        setError('Aadhar number must be 12 digits');
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validatePage()) return;

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });

      const response = await axios.post(`${API_URL}/applications`, formDataToSend, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      const { applicationId } = response.data;
      setSuccess(`Your application has been submitted successfully. Your tracking ID is ${applicationId}. This ID has been sent to your email address.`);
      setTimeout(() => navigate(`/application-status/${applicationId}`), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('An error occurred while submitting your application. Please try again.');
    }
  };

  const speakText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  const renderInput = (name, label, type = 'text', required = true, placeholder = '', maxLength = undefined, helpText = '') => (
    <div className="flex items-start mb-4">
      <div className="w-1/3 pt-2 flex items-center">
        <Label htmlFor={name} className="mr-2">{label}{required && ' *'}</Label>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => speakText(label)}
          className="p-1"
        >
          <Volume2 className="h-4 w-4" />
        </Button>
      </div>
      <div className="w-2/3">
        <Input
          id={name}
          name={name}
          type={type}
          value={formData[name]}
          onChange={handleChange}
          placeholder={placeholder}
          required={required}
          maxLength={maxLength}
          className="w-full"
        />
        {helpText && <p className="text-sm text-gray-500 mt-1">{helpText}</p>}
      </div>
    </div>
  );

  const renderSelect = (name, label, options, required = true, helpText = '') => (
    <div className="flex items-start mb-4">
      <div className="w-1/3 pt-2 flex items-center">
        <Label htmlFor={name} className="mr-2">{label}{required && ' *'}</Label>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => speakText(label)}
          className="p-1"
        >
          <Volume2 className="h-4 w-4" />
        </Button>
      </div>
      <div className="w-2/3">
        <Select name={name} value={formData[name]} onValueChange={(value) => handleSelectChange(name, value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder={`Select ${label}`} />
          </SelectTrigger>
          <SelectContent>
            {options.map(option => (
              <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {helpText && <p className="text-sm text-gray-500 mt-1">{helpText}</p>}
      </div>
    </div>
  );

  const renderFileInput = (name, label, required = true, helpText = '') => (
    <div className="flex items-start mb-4">
      <div className="w-1/3 pt-2 flex items-center">
        <Label htmlFor={name} className="mr-2">{label}{required && ' *'}</Label>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => speakText(label)}
          className="p-1"
        >
          <Volume2 className="h-4 w-4" />
        </Button>
      </div>
      <div className="w-2/3">
        <Input
          id={name}
          name={name}
          type="file"
          onChange={handleChange}
          accept=".pdf,image/*"
          required={required}
          className="w-full"
        />
        {helpText && <p className="text-sm text-gray-500 mt-1">{helpText}</p>}
        {formData[name] && (
          <div className="flex items-center mt-2">
            <span className="text-sm text-gray-500 mr-2">{formData[name].name}</span>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => {
                setFormData(prevState => ({ ...prevState, [name]: null }));
                document.getElementById(name).value = '';
              }}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );

  const renderFilePreview = (name, label) => {
    if (!formData[name]) return null;
    
    return (
      <div className="mt-2">
        <Label>{label} Preview:</Label>
        <div className="mt-1 p-2 border rounded">
          <p className="text-sm">{formData[name].name}</p>
          {formData[name].type.startsWith('image/') ? (
            <img
              src={URL.createObjectURL(formData[name])}
              alt={`Preview of ${label}`}
              className="mt-2 max-w-full h-auto"
            />
          ) : (
            <p className="text-sm text-gray-500 mt-1">File uploaded (cannot display preview)</p>
          )}
        </div>
      </div>
    );
  };

  const renderCheckbox = (name, label, helpText = '') => (
    <div className="flex items-start mb-4">
      <div className="w-1/3 pt-2 flex items-center">
        <Label htmlFor={name} className="mr-2">{label}</Label>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={() => speakText(label)}
          className="p-1"
        >
          <Volume2 className="h-4 w-4" />
        </Button>
      </div>
      <div className="w-2/3 flex items-center">
        <Checkbox
          id={name}
          name={name}
          checked={formData[name]}
          onCheckedChange={(checked) => handleChange({target: {name, type: 'checkbox', checked}})}
        />
        <Label htmlFor={name} className="ml-2">{label}</Label>
        {helpText && <p className="text-sm text-gray-500 mt-1">{helpText}</p>}
      </div>
    </div>
  );

  const renderPage = () => {
    switch (page) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Personal Information</h3>
            {renderInput('firstName', 'First Name', 'text', true, '', undefined, 'Enter your legal first name as it appears on official documents.')}
            {renderInput('lastName', 'Last Name', 'text', true, '', undefined, 'Enter your legal last name as it appears on official documents.')}
            {renderInput('fathersName', "Father's Name", 'text', true, '', undefined, "Enter your father's full name.")}
            {renderInput('mothersName', "Mother's Name", 'text', true, '', undefined, "Enter your mother's full name.")}
            {renderInput('fathersProfession', "Father's Profession", 'text', true, '', undefined, "Enter your father's current or most recent occupation.")}
            {renderInput('mothersProfession', "Mother's Profession", 'text', true, '', undefined, "Enter your mother's current or most recent occupation.")}
            {renderSelect('state', 'State', [
              { value: 'AN', label: 'Andaman and Nicobar Islands' },
              { value: 'AP', label: 'Andhra Pradesh' },
              // ... (other states)
            ], true, 'Select the state where you currently reside.')}
            {renderInput('place', 'Place', 'text', true, '', undefined, 'Enter the name of your city or village.')}
            {renderInput('pincode', 'Pincode', 'text', true, '6-digit Pincode', 6, 'Enter your 6-digit postal code.')}
            {renderInput('email', 'Email', 'email', true, '', undefined, 'Enter a valid email address. This will be used for communication regarding your application.')}
            {renderInput('alternativeEmail', 'Alternative Email', 'email', false, '', undefined, 'Optional: Enter an alternative email address.')}
            {renderInput('phoneNumber', 'Phone Number', 'tel', true, '', undefined, 'Enter a valid 10-digit mobile number.')}
            {renderInput('alternatePhoneNumber', 'Alternate Phone Number', 'tel', false, '', undefined, 'Optional: Enter an alternative phone number.')}
            {renderInput('aadharNumber', 'Aadhar Number', 'text', true, '12-digit Aadhar Number', 12, 'Enter your 12-digit Aadhar number without spaces.')}
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Educational Information</h3>
            {renderSelect('board12th', '12th Board', [
              { value: 'CBSE', label: 'CBSE' },
              { value: 'JKBOSE', label: 'JKBOSE' },
              { value: 'ICSE', label: 'ICSE' },
              { value: 'STATE', label: 'State Board' },
            ], true, 'Select the board from which you completed your 12th standard.')}
            {renderFileInput('marksheet12th', '12th Marksheet', true, 'Upload a scanned copy or clear photo of your 12th standard marksheet.')}
            {renderFilePreview('marksheet12th', '12th Marksheet')}
            {renderFileInput('familyIncomeCertificate', 'Family Income Certificate', true, 'Upload a scanned copy or clear photo of your family income certificate issued by a competent authority.')}
            {renderFilePreview('familyIncomeCertificate', 'Family Income Certificate')}
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Document Upload</h3>
            {renderFileInput('passbookFirstPage', 'Passbook First Page', true, 'Upload a scanned copy or clear photo of the first page of your bank passbook.')}
            {renderFilePreview('passbookFirstPage', 'Passbook First Page')}
            {renderFileInput('aadharFrontPage', 'Aadhar Front Page', true, 'Upload a scanned copy or clear photo of the front page of your Aadhar card.')}
            {renderFilePreview('aadharFrontPage', 'Aadhar Front Page')}
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Review and Submit</h3>
            <div className="space-y-2">
              {Object.entries(formData).map(([key, value]) => (key !== 'detailsCorrect' && key !== 'rejectIfWrong' && !(value instanceof File) && (
                  <div key={key} className="flex justify-between">
                    <span className="font-semibold">{key}:</span>
                    <span>{value.toString()}</span>
                  </div>
                )
              ))}
            </div>
            <Separator />
            <h4 className="font-semibold mt-4">Uploaded Documents:</h4>
            {renderFilePreview('marksheet12th', '12th Marksheet')}
            {renderFilePreview('familyIncomeCertificate', 'Family Income Certificate')}
            {renderFilePreview('passbookFirstPage', 'Passbook First Page')}
            {renderFilePreview('aadharFrontPage', 'Aadhar Front Page')}
            <Separator />
            {renderCheckbox('detailsCorrect', 'I confirm that the details provided are correct', 'Please review all the information carefully before confirming.')}
            {renderCheckbox('rejectIfWrong', 'I understand that my application may be rejected if the details are incorrect', 'Providing false information may lead to rejection of your application and other legal consequences.')}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-4xl mx-auto bg-white shadow-xl">
        <CardHeader className="bg-blue-600 text-white p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold">Government Application Form</h2>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => speakText("Government Application Form. Page " + page + " of 4.")}
              className="bg-white text-blue-600 hover:bg-blue-100"
            >
              <Volume2 className="h-6 w-6" />
            </Button>
          </div>
          <p className="text-center mt-2 text-xl">Page {page} of 4</p>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="p-6">
            {renderPage()}
            {error && (
              <Alert variant="destructive" className="mt-4">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            {success && (
              <Alert variant="success" className="mt-4 bg-green-100 border-green-400 text-green-700">
                <AlertDescription>{success}</AlertDescription>
              </Alert>
            )}
          </CardContent>
          <CardFooter className="flex justify-between p-6 bg-gray-50">
            {page > 1 && (
              <Button 
                type="button" 
                onClick={() => setPage(page - 1)} 
                variant="outline" 
                className="bg-white"
              >
                <ChevronLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
            )}
            {page < 4 ? (
              <Button 
                type="button" 
                onClick={() => {
                  if (validatePage()) setPage(page + 1);
                }} 
                className="ml-auto bg-blue-600 hover:bg-blue-700 text-white"
              >
                Next <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button 
                type="submit" 
                className="ml-auto bg-green-600 hover:bg-green-700 text-white"
              >
                Submit Application
              </Button>
            )}
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default GovernmentApplicationForm;