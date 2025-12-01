import NewStarCanvas from '@/homePage-components/newStarCanvas'
import Second from '@/homePage-components/second'
import Third from '@/homePage-components/third'
import SplashCursor from '@/homePage-components/splashCursor'
import Card from '@/components/Card'
import Footer from '@/footer/footer'
export default async function Home() {
  return (
      <div className='font-poppins' id="home">
        <SplashCursor />
        <NewStarCanvas/> 
        <Second />
        <Third />
        <Card />
        <Footer />  
        {/* test comment */}
      </div>
    
  );
}


