import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Lightbulb, Users, BookOpen } from 'lucide-react'
import { useNavigate } from 'react-router-dom' // Use react-router-dom for navigation

export default function Innovative() {
  const navigate = useNavigate()

  const handleCardClick = (path) => {
    navigate(path)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-white-600 mb-6">Initiatives & Schemes</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="col-span-1 md:col-span-2">
          <CardContent className="p-0">
            <img 
              src="/placeholder.svg"
              alt="AICTE Student Learning Assessment Project" 
              className="w-full h-auto"
            />
          </CardContent>
        </Card>
        
        <div className="col-span-1 space-y-4">
          <Card onClick={() => handleCardClick('/pmsss')}>
            <CardContent className="p-4">
              <img 
                src="/placeholder.svg" 
                alt="Prime Minister's Special Scholarship Scheme" 
                className="w-full h-auto mb-2" 
              />
              <h3 className="font-semibold">Prime Minister's Special Scholarship Scheme (PMSSS)</h3>
              <Badge className="mt-2">Learn More</Badge>
            </CardContent>
          </Card>
          
          <Card onClick={() => handleCardClick('/unnat-bharat')}>
            <CardContent className="p-4">
              <img 
                src="/placeholder.svg" 
                alt="Unnat Bharat Abhiyan" 
                className="w-full h-auto mb-2" 
              />
              <h3 className="font-semibold">Unnat Bharat Abhiyan for transformational change in rural development processes</h3>
              <Badge className="mt-2">Learn More</Badge>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: <GraduationCap className="w-8 h-8" />,
            title: "National e-Scholarship",
            description: "National e-Scholarship is the one-stop solution to help students seek various scholarships.",
            path: '/national-e-scholarship'
          },
          {
            icon: <BookOpen className="w-8 h-8" />,
            title: "Vidya Lakshmi",
            description: "Vidya Lakshmi is a first-of-its-kind portal for students seeking educational loan.",
            path: '/vidya-lakshmi'
          },
          {
            icon: <Users className="w-8 h-8" />,
            title: "Pragati and Saksham",
            description: "Scholarship for girls under the Pragati Scheme and scholarship for differently-abled students under Saksham Scheme.",
            path: '/pragati-saksham'
          },
          {
            icon: <Lightbulb className="w-8 h-8" />,
            title: "India Innovation Initiative",
            description: "India's largest innovation challenges jointly promoted by the CII and Department of Science & Technology.",
            path: '/india-innovation'
          },
        ].map((item, index) => (
          <Card key={index} onClick={() => handleCardClick(item.path)}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                {item.icon}
                <span>{item.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">{item.description}</p>
              <Badge className="mt-4">Learn More</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
