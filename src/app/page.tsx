import Landing from "@/components/layout/landing";
import { fetchDestinations, getHeroInfo } from "@/server-actions/home-data";


export default async function Home() {
  const herodata = await  getHeroInfo()
  const   destinations = await fetchDestinations();
  console.log(destinations);
  
  return (
   <>
   <div className="min-h-screen bg-gray-50">

      <Landing title= {herodata.herotitle} imageUrl={herodata.imageUrl} destinations = {destinations}/>
   </div>

   
   </>
    
  );
}
