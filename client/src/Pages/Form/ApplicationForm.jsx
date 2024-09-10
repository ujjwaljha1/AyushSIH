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

// const API_URL = 'http://localhost:3001/api'; // Update this with your actual API URL

// const MultiPageForm = () => {
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
//     switch (page) {
//       case 1:
//         if (!formData.firstName || !formData.lastName || !formData.fathersName || !formData.mothersName ||
//             !formData.fathersProfession || !formData.mothersProfession || !formData.state || !formData.place ||
//             !formData.pincode || !formData.email || !formData.phoneNumber || !formData.aadharNumber) {
//           setError('Please fill in all required fields');
//           return false;
//         }
//         if (formData.pincode.length !== 6) {
//           setError('Pincode must be 6 digits');
//           return false;
//         }
//         if (formData.aadharNumber.length !== 12) {
//           setError('Aadhar number must be 12 digits');
//           return false;
//         }
//         break;
//       case 2:
//         if (!formData.board12th || !formData.marksheet12th || !formData.familyIncomeCertificate) {
//           setError('Please fill in all required fields and upload all documents');
//           return false;
//         }
//         break;
//       case 3:
//         if (!formData.passbookFirstPage || !formData.aadharFrontPage) {
//           setError('Please upload all required documents');
//           return false;
//         }
//         break;
//       case 4:
//         if (!formData.detailsCorrect || !formData.rejectIfWrong) {
//           setError('Please confirm all checkboxes');
//           return false;
//         }
//         break;
//     }
//     setError('');
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validatePage()) return;

//     try {
//       const formDataToSend = new FormData();
//       for (const key in formData) {
//         formDataToSend.append(key, formData[key]);
//       }

//       const response = await axios.post(`${API_URL}/applications`, formDataToSend, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       const { applicationId } = response.data;

//       // Send email notification
//       await emailjs.send(
//         'service_sl1i28m',
//         'template_vjdh49e',
//         { 
//           to_email: formData.email,
//           application_id: applicationId,
//         },
//         'YOUR_USER_ID'
//       );

//       navigate(`/application-status/${applicationId}`);
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       setError('An error occurred while submitting your application. Please try again.');
//     }
//   };

//   const renderPage = () => {
//     switch (page) {
//       case 1:
//         return (
//           <CardContent className="space-y-4">
//             <Input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required />
//             <Input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required />
//             <Input name="fathersName" value={formData.fathersName} onChange={handleChange} placeholder="Father's Name" required />
//             <Input name="mothersName" value={formData.mothersName} onChange={handleChange} placeholder="Mother's Name" required />
//             <Input name="fathersProfession" value={formData.fathersProfession} onChange={handleChange} placeholder="Father's Profession" required />
//             <Input name="mothersProfession" value={formData.mothersProfession} onChange={handleChange} placeholder="Mother's Profession" required />
//             <div className="space-y-2">
//               <Label htmlFor="state">State</Label>
//               <Select name="state" value={formData.state} onValueChange={(value) => handleSelectChange('state', value)}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select State" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="AN">Andaman and Nicobar Islands</SelectItem>
//                   <SelectItem value="AP">Andhra Pradesh</SelectItem>
//                   <SelectItem value="AR">Arunachal Pradesh</SelectItem>
//                   <SelectItem value="AS">Assam</SelectItem>
//                   <SelectItem value="BR">Bihar</SelectItem>
//                   <SelectItem value="CH">Chandigarh</SelectItem>
//                   <SelectItem value="CT">Chhattisgarh</SelectItem>
//                   <SelectItem value="DN">Dadra and Nagar Haveli</SelectItem>
//                   <SelectItem value="DD">Daman and Diu</SelectItem>
//                   <SelectItem value="DL">Delhi</SelectItem>
//                   <SelectItem value="GA">Goa</SelectItem>
//                   <SelectItem value="GJ">Gujarat</SelectItem>
//                   <SelectItem value="HR">Haryana</SelectItem>
//                   <SelectItem value="HP">Himachal Pradesh</SelectItem>
//                   <SelectItem value="JK">Jammu and Kashmir</SelectItem>
//                   <SelectItem value="JH">Jharkhand</SelectItem>
//                   <SelectItem value="KA">Karnataka</SelectItem>
//                   <SelectItem value="KL">Kerala</SelectItem>
//                   <SelectItem value="LA">Ladakh</SelectItem>
//                   <SelectItem value="LD">Lakshadweep</SelectItem>
//                   <SelectItem value="MP">Madhya Pradesh</SelectItem>
//                   <SelectItem value="MH">Maharashtra</SelectItem>
//                   <SelectItem value="MN">Manipur</SelectItem>
//                   <SelectItem value="ML">Meghalaya</SelectItem>
//                   <SelectItem value="MZ">Mizoram</SelectItem>
//                   <SelectItem value="NL">Nagaland</SelectItem>
//                   <SelectItem value="OR">Odisha</SelectItem>
//                   <SelectItem value="PY">Puducherry</SelectItem>
//                   <SelectItem value="PB">Punjab</SelectItem>
//                   <SelectItem value="RJ">Rajasthan</SelectItem>
//                   <SelectItem value="SK">Sikkim</SelectItem>
//                   <SelectItem value="TN">Tamil Nadu</SelectItem>
//                   <SelectItem value="TG">Telangana</SelectItem>
//                   <SelectItem value="TR">Tripura</SelectItem>
//                   <SelectItem value="UP">Uttar Pradesh</SelectItem>
//                   <SelectItem value="UT">Uttarakhand</SelectItem>
//                   <SelectItem value="WB">West Bengal</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//             <Input name="place" value={formData.place} onChange={handleChange} placeholder="Place" required />
//             <Input name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Pincode (6 digits)" maxLength={6} required />
//             <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
//             <Input name="alternativeEmail" type="email" value={formData.alternativeEmail} onChange={handleChange} placeholder="Alternative Email" />
//             <Input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
//             <Input name="alternatePhoneNumber" value={formData.alternatePhoneNumber} onChange={handleChange} placeholder="Alternate Phone Number" />
//             <Input name="aadharNumber" value={formData.aadharNumber} onChange={handleChange} placeholder="Aadhar Number (12 digits)" maxLength={12} required />
//           </CardContent>
//         );
//       case 2:
//         return (
//           <CardContent className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="board12th">12th Board</Label>
//               <Select name="board12th" value={formData.board12th} onValueChange={(value) => handleSelectChange('board12th', value)}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select 12th Board" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="CBSE">CBSE</SelectItem>
//                   <SelectItem value="JKBOSE">JKBOSE</SelectItem>
//                   <SelectItem value="ICSE">ICSE</SelectItem>
//                   <SelectItem value="STATE">State Board</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//             <Input type="file" name="marksheet12th" onChange={handleChange} accept=".pdf" required />
//             <Input type="file" name="familyIncomeCertificate" onChange={handleChange} accept=".pdf" required />
//           </CardContent>
//         );
//       case 3:
//         return (
//           <CardContent className="space-y-4">
//             <Input type="file" name="passbookFirstPage" onChange={handleChange} accept=".pdf" required />
//             <Input type="file" name="aadharFrontPage" onChange={handleChange} accept=".pdf" required />
//           </CardContent>
//         );
//       case 4:
//         return (
//           <CardContent className="space-y-4">
//             {/* Display all form data for review */}
//             {Object.entries(formData).map(([key, value]) => (
//               key !== 'detailsCorrect' && key !== 'rejectIfWrong' && (
//                 <div key={key} className="flex justify-between">
//                   <span className="font-semibold">{key}:</span>
//                   <span>{value instanceof File ? value.name : value.toString()}</span>
//                 </div>
//               )
//             ))}
//             <Checkbox 
//               name="detailsCorrect" 
//               checked={formData.detailsCorrect} 
//               onCheckedChange={(checked) => handleChange({target: {name: 'detailsCorrect', type: 'checkbox', checked}})}
//               label="I confirm that the details provided are correct"
//             />
//             <Checkbox 
//               name="rejectIfWrong" 
//               checked={formData.rejectIfWrong} 
//               onCheckedChange={(checked) => handleChange({target: {name: 'rejectIfWrong', type: 'checkbox', checked}})}
//               label="I understand that my application may be rejected if the details are incorrect"
//             />
//           </CardContent>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <Card className="w-full max-w-2xl mx-auto">
//       <CardHeader>
//         <h2 className="text-2xl font-bold">Application Form - Page {page} of 4</h2>
//       </CardHeader>
//       <form onSubmit={handleSubmit}>
//         {renderPage()}
//         {error && (
//           <Alert variant="destructive" className="mt-4">
//             <AlertDescription>{error}</AlertDescription>
//           </Alert>
//         )}
//         <CardFooter className="flex justify-between">
//           {page > 1 && (
//             <Button type="button" onClick={() => setPage(page - 1)}>
//               Previous
//             </Button>
//           )}
//           {page < 4 ? (
//             <Button type="button" onClick={() => {
//               if (validatePage()) setPage(page + 1);
//             }}>
//               Next
//             </Button>
//           ) : (
//             <Button type="submit">Submit Application</Button>
//           )}
//         </CardFooter>
//       </form>
//     </Card>
//   );
// };

// export default MultiPageForm;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import emailjs from 'emailjs-com';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const API_URL =  'http://localhost:3001/api';

const GovernmentApplicationForm = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [error, setError] = useState('');
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

      // await emailjs.send(
      //   'service_sl1i28m',
      //   'template_vjdh49e',
      //   { 
      //     to_email: formData.email,
      //     application_id: applicationId,
      //   },
      //   process.env.REACT_APP_EMAILJS_USER_ID
      // );

      navigate(`/application-status/${applicationId}`);
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('An error occurred while submitting your application. Please try again.');
    }
  };

  const renderInput = (name, label, type = 'text', required = true, placeholder = '', maxLength = undefined) => (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}{required && ' *'}</Label>
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
    </div>
  );

  const renderSelect = (name, label, options, required = true) => (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}{required && ' *'}</Label>
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
    </div>
  );

  const renderFileInput = (name, label, required = true) => (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}{required && ' *'}</Label>
      <Input
        id={name}
        name={name}
        type="file"
        onChange={handleChange}
        accept=".pdf"
        required={required}
        className="w-full"
      />
    </div>
  );

  const renderCheckbox = (name, label) => (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={name}
        name={name}
        checked={formData[name]}
        onCheckedChange={(checked) => handleChange({target: {name, type: 'checkbox', checked}})}
      />
      <Label htmlFor={name}>{label}</Label>
    </div>
  );

  const renderPage = () => {
    switch (page) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Personal Information</h3>
            {renderInput('firstName', 'First Name')}
            {renderInput('lastName', 'Last Name')}
            {renderInput('fathersName', "Father's Name")}
            {renderInput('mothersName', "Mother's Name")}
            {renderInput('fathersProfession', "Father's Profession")}
            {renderInput('mothersProfession', "Mother's Profession")}
            {renderSelect('state', 'State', [
              { value: 'AN', label: 'Andaman and Nicobar Islands' },
              { value: 'AP', label: 'Andhra Pradesh' },
              // ... (other states)
            ])}
            {renderInput('place', 'Place')}
            {renderInput('pincode', 'Pincode', 'text', true, '6-digit Pincode', 6)}
            {renderInput('email', 'Email', 'email')}
            {renderInput('alternativeEmail', 'Alternative Email', 'email', false)}
            {renderInput('phoneNumber', 'Phone Number')}
            {renderInput('alternatePhoneNumber', 'Alternate Phone Number', 'tel', false)}
            {renderInput('aadharNumber', 'Aadhar Number', 'text', true, '12-digit Aadhar Number', 12)}
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
            ])}
            {renderFileInput('marksheet12th', '12th Marksheet')}
            {renderFileInput('familyIncomeCertificate', 'Family Income Certificate')}
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Document Upload</h3>
            {renderFileInput('passbookFirstPage', 'Passbook First Page')}
            {renderFileInput('aadharFrontPage', 'Aadhar Front Page')}
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Review and Submit</h3>
            <div className="space-y-2">
              {Object.entries(formData).map(([key, value]) => (
                key !== 'detailsCorrect' && key !== 'rejectIfWrong' && (
                  <div key={key} className="flex justify-between">
                    <span className="font-semibold">{key}:</span>
                    <span>{value instanceof File ? value.name : value.toString()}</span>
                  </div>
                )
              ))}
            </div>
            <Separator />
            {renderCheckbox('detailsCorrect', 'I confirm that the details provided are correct')}
            {renderCheckbox('rejectIfWrong', 'I understand that my application may be rejected if the details are incorrect')}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto my-8">
      <CardHeader>
        <h2 className="text-2xl font-bold text-center">Government Application Form</h2>
        <p className="text-center text-gray-500">Page {page} of 4</p>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="px-4 sm:px-6">
          {renderPage()}
          {error && (
            <Alert variant="destructive" className="mt-4">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter className="flex justify-between px-4 sm:px-6">
          {page > 1 && (
            <Button type="button" onClick={() => setPage(page - 1)} variant="outline">
              <ChevronLeft className="mr-2 h-4 w-4" /> Previous
            </Button>
          )}
          {page < 4 ? (
            <Button type="button" onClick={() => {
              if (validatePage()) setPage(page + 1);
            }} className="ml-auto">
              Next <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button type="submit" className="ml-auto">Submit Application</Button>
          )}
        </CardFooter>
      </form>
    </Card>
  );
};

export default GovernmentApplicationForm;