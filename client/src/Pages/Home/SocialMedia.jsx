// // // import { ScrollArea } from "@/components/ui/scroll-area"
// // // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// // // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// // // export default function SocialMedia() {
// // //   return (
// // //     <div className="container mx-auto p-4">
// // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //         <Card>
// // //           <CardHeader>
// // //             <CardTitle>Latest Tweets</CardTitle>
// // //           </CardHeader>
// // //           <CardContent>
// // //             <div className="space-y-4">
// // //               {[1, 2, 3].map((tweet) => (
// // //                 <div key={tweet} className="flex space-x-4">
// // //                   <Avatar>
// // //                     <AvatarImage src={`https://i.pravatar.cc/40?img=${tweet}`} />
// // //                     <AvatarFallback>UN</AvatarFallback>
// // //                   </Avatar>
// // //                   <div className="flex-1">
// // //                     <p className="font-semibold">@user{tweet}</p>
// // //                     <p className="text-sm text-gray-500">This is a sample tweet {tweet}. #hashtag</p>
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </CardContent>
// // //         </Card>

// // //         {/* Right container: Notifications */}
// // //         <Card>
// // //           <CardHeader>
// // //             <CardTitle>Notifications</CardTitle>
// // //           </CardHeader>
// // //           <CardContent>
// // //             <ScrollArea className="h-[300px] w-full rounded-md border p-4">
// // //               {[...Array(10)].map((_, i) => (
// // //                 <div key={i} className="mb-4 last:mb-0">
// // //                   <p className="font-semibold">Notification {i + 1}</p>
// // //                   <p className="text-sm text-gray-500">
// // //                     This is a sample notification text. It could be about likes, comments, or new followers.
// // //                   </p>
// // //                 </div>
// // //               ))}
// // //             </ScrollArea>
// // //           </CardContent>
// // //         </Card>
// // //       </div>
// // //     </div>
// // //   )
// // // }


// // import React from 'react';
// // import { ScrollArea } from "@/components/ui/scroll-area"
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// // export default function GovernmentDashboard() {
// //   const announcements = [
// //     { id: 1, title: "New Public Health Guidelines", content: "Updated COVID-19 safety measures have been released." },
// //     { id: 2, title: "Upcoming Town Hall Meeting", content: "Join us on July 15th for a community discussion on local infrastructure projects." },
// //     { id: 3, title: "Tax Return Deadline Reminder", content: "Don't forget to file your tax returns by April 15th." },
// //   ];

// //   const notifications = [
// //     { id: 1, title: "Road Closure Alert", content: "Main Street will be closed for repairs from June 1st to June 5th." },
// //     { id: 2, title: "New Online Service Available", content: "You can now renew your driver's license online." },
// //     { id: 3, title: "Emergency Preparedness Seminar", content: "Free seminar on emergency preparedness on August 3rd at the Community Center." },
// //     { id: 4, title: "Voter Registration Reminder", content: "Last day to register for the upcoming local election is September 1st." },
// //     { id: 5, title: "Public Park Renovation", content: "Central Park renovations will begin on July 10th and last for two months." },
// //   ];

// //   return (
// //     <div className="container mx-auto p-4">
// //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// //         <Card>
// //           <CardHeader>
// //             <CardTitle>Recent Announcements</CardTitle>
// //           </CardHeader>
// //           <CardContent>
// //             <div className="space-y-4">
// //               {announcements.map((announcement) => (
// //                 <div key={announcement.id} className="border-b pb-2 last:border-b-0">
// //                   <h3 className="font-semibold">{announcement.title}</h3>
// //                   <p className="text-sm text-gray-600">{announcement.content}</p>
// //                 </div>
// //               ))}
// //             </div>
// //           </CardContent>
// //         </Card>
// //         <Card>
// //           <CardHeader>
// //             <CardTitle>Important Notifications</CardTitle>
// //           </CardHeader>
// //           <CardContent>
// //             <ScrollArea className="h-[300px] w-full rounded-md border p-4">
// //               {notifications.map((notification) => (
// //                 <div key={notification.id} className="mb-4 last:mb-0">
// //                   <h3 className="font-semibold">{notification.title}</h3>
// //                   <p className="text-sm text-gray-600">{notification.content}</p>
// //                 </div>
// //               ))}
// //             </ScrollArea>
// //           </CardContent>
// //         </Card>
// //       </div>
// //     </div>
// //   )
// // }

// import React from 'react';
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
// import { Avatar } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";

// export default function GovernmentDashboard() {
//   const [isSubscribed, setIsSubscribed] = React.useState(false);

//   const notifications = [
//     { id: 1, title: "Budget Proposal Submitted", content: "The annual budget proposal has been submitted to the city council for review." },
//     { id: 2, title: "New Online Service Available", content: "Residents can now apply for building permits online through our website." },
//     { id: 3, title: "Emergency Preparedness Seminar", content: "Join us for a free seminar on emergency preparedness on August 3rd at the Community Center." },
//     { id: 4, title: "Voter Registration Drive", content: "Our office will be hosting a voter registration drive on September 1st at the Public Library." },
//     { id: 5, title: "Town Hall Meeting Announced", content: "Mayor Johnson will be holding a town hall meeting on July 15th to discuss upcoming infrastructure projects." },
//   ];

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-6 text-center">City of Springfield Dashboard</h1>
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <Card className="max-w-[340px] mx-auto lg:mx-0">
//           <CardHeader className="justify-between">
//             <div className="flex gap-5">
//               <Avatar className="w-12 h-12">
//                 <img src="/api/placeholder/100" alt="Mayor Johnson" />
//               </Avatar>
//               <div className="flex flex-col gap-1 items-start justify-center">
//                 <h4 className="text-small font-semibold leading-none text-default-600">Mayor Sarah Johnson</h4>
//                 <h5 className="text-small tracking-tight text-default-400">@MayorJohnson</h5>
//               </div>
//             </div>
//             <Button
//               variant={isSubscribed ? "outline" : "default"}
//               size="sm"
//               onClick={() => setIsSubscribed(!isSubscribed)}
//             >
//               {isSubscribed ? "Unsubscribe" : "Subscribe"}
//             </Button>
//           </CardHeader>
//           <CardContent className="px-3 py-0 text-small text-default-400">
//             <p>
//               Dedicated to serving the citizens of Springfield and improving our community. Stay updated on city initiatives and announcements.
//             </p>
//             <span className="pt-2">
//               #SpringfieldStrong 
//               <span className="py-2" aria-label="city" role="img">
//                 🏙️
//               </span>
//             </span>
//           </CardContent>
//           <CardFooter className="gap-3">
//             <div className="flex gap-1">
//               <p className="font-semibold text-default-400 text-small">12</p>
//               <p className="text-default-400 text-small">Initiatives</p>
//             </div>
//             <div className="flex gap-1">
//               <p className="font-semibold text-default-400 text-small">24.5K</p>
//               <p className="text-default-400 text-small">Subscribers</p>
//             </div>
//           </CardFooter>
//         </Card>
//         <Card>
//           <CardHeader>
//             <CardTitle>Recent Announcements</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <ScrollArea className="h-[300px] w-full rounded-md border p-4">
//               {notifications.map((notification) => (
//                 <div key={notification.id} className="mb-4 last:mb-0">
//                   <h3 className="font-semibold">{notification.title}</h3>
//                   <p className="text-sm text-gray-600">{notification.content}</p>
//                 </div>
//               ))}
//             </ScrollArea>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Building2, Users, Bell } from 'lucide-react';

export default function GovernmentDashboard() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscribers, setSubscribers] = useState(24500);

  const notifications = [
    { id: 1, title: "Budget Proposal Submitted", content: "The annual budget proposal has been submitted to the city council for review." },
    { id: 2, title: "New Online Service Available", content: "Residents can now apply for building permits online through our website." },
    { id: 3, title: "Emergency Preparedness Seminar", content: "Join us for a free seminar on emergency preparedness on August 3rd at the Community Center." },
    { id: 4, title: "Voter Registration Drive", content: "Our office will be hosting a voter registration drive on September 1st at the Public Library." },
    { id: 5, title: "Town Hall Meeting Announced", content: "Mayor Johnson will be holding a town hall meeting on July 15th to discuss upcoming infrastructure projects." },
  ];

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
    setSubscribers(isSubscribed ? subscribers - 1 : subscribers + 1);
  };

  return (
    <TooltipProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6 text-center">City of Springfield Dashboard</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="max-w-[340px] mx-auto lg:mx-0">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <Avatar className="w-12 h-12">
                  <img src="/api/placeholder/100" alt="Mayor Johnson" />
                </Avatar>
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-small font-semibold leading-none text-default-600">Mayor Sarah Johnson</h4>
                  <h5 className="text-small tracking-tight text-default-400">@MayorJohnson</h5>
                </div>
              </div>
              <Button
                variant={isSubscribed ? "outline" : "default"}
                size="sm"
                onClick={handleSubscribe}
                className="transition-all duration-300 hover:scale-105"
              >
                {isSubscribed ? "Unsubscribe" : "Subscribe"}
              </Button>
            </CardHeader>
            <CardContent className="px-3 py-0 text-small text-default-400">
              <p>
                Dedicated to serving the citizens of Springfield and improving our community. Stay updated on city initiatives and announcements.
              </p>
              <span className="pt-2">
                #SpringfieldStrong 
                <span className="py-2" aria-label="city" role="img">
                  🏙️
                </span>
              </span>
            </CardContent>
            <CardFooter className="gap-3">
              <Tooltip>
                <TooltipTrigger>
                  <div className="flex gap-1 items-center cursor-pointer transition-all duration-300 hover:text-blue-500">
                    <Building2 size={18} />
                    <p className="font-semibold text-default-400 text-small">12</p>
                  </div>
                </TooltipTrigger>
                <TooltipContent>City Initiatives</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <div className="flex gap-1 items-center cursor-pointer transition-all duration-300 hover:text-green-500">
                    <Users size={18} />
                    <p className="font-semibold text-default-400 text-small">{subscribers.toLocaleString()}</p>
                  </div>
                </TooltipTrigger>
                <TooltipContent>Subscribers</TooltipContent>
              </Tooltip>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell size={18} className="text-yellow-500" />
                Recent Announcements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px] w-full rounded-md border p-4">
                {notifications.map((notification) => (
                  <div key={notification.id} className="mb-4 last:mb-0 p-2 rounded transition-all duration-300 hover:bg-gray-100">
                    <h3 className="font-semibold">{notification.title}</h3>
                    <p className="text-sm text-gray-600">{notification.content}</p>
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
    </TooltipProvider>
  );
}