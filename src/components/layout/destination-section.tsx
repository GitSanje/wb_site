import { fetchDestinations } from "@/server-actions/home-data";
import { Button } from "../ui/button";
import Image from "next/image";
const destinations = [
  {
    name: 'Australia',
    image: 'https://graceintlgroup.com/wp-content/uploads/2020/12/aus.jpg',
  },
  {
    name: 'USA',
    image: 'https://graceintlgroup.com/wp-content/uploads/2020/12/aus.jpg',
  },
  {
    name: 'UK',
    image: 'https://graceintlgroup.com/wp-content/uploads/2020/12/aus.jpg',
  },
  {
    name: 'New Zealand',
    image: 'https://graceintlgroup.com/wp-content/uploads/2020/12/aus.jpg',
  },
];

type Props = { destinations: {
    name:string,
    image: string
  }[]}

export default async function DestinationSection({destinations}: Props) {
   
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-blue-600">Where do you want to study?</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          We recommend you the best college in the best destination to build your career.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {destinations.map((dest:any) => (
            <div key={dest.name} className="relative group cursor-pointer rounded-md">
              <div className="border-2 border-white rounded-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={dest.image}
                    alt={`${dest.name} Image`}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-green-600/30 group-hover:bg-green-700/40 transition-colors duration-500 ease-out" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white text-2xl font-bold drop-shadow-lg">{dest.name}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg font-medium">
            More Destinations
          </Button>
        </div>
      </div>
    </section>
  );
}
