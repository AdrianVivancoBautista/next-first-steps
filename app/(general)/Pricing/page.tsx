import  type { Metadata } from "next";


export const metadata: Metadata = {
 title: 'Pricing Title',
 description: 'Pricing Title',
 keywords: ['Pricing page', 'Adrian','Información'],
};



export default function PricingPage(){
    return(
       <>
       <span className="text-7xl">Pricing Page</span>
       </> 
    )
}