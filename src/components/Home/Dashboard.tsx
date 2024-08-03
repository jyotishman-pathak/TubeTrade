'use client'
import React, { useState } from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Card as UICard,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from '../ui/button';
import SpotChart from './SpotChart';
import FavChart from './FavChart';

interface DashboardProps {
  label: string;
}

interface CustomCardProps {
  gain: number;
}

const CustomCard: React.FC<CustomCardProps> = ({ gain }) => {

  return (
    <UICard className="w-full h-full">
      <CardHeader>
        <CardTitle>New</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='flex flex-col gap-3'>
        <div className="flex justify-between">
          <p className='font-semibold'>Cloud/USDC</p>
          <p>657 INR</p>
          <p style={{ color: gain < 0 ? 'red' : 'green' }}>
            {gain}%
          </p>
        </div>
        <div className="flex justify-between">
          <p>Cloud/USDC</p>
          <p>657 INR</p>
          <p style={{ color: gain < 0 ? 'red' : 'green' }}>
            {gain}%
          </p>
        </div>
        <div className="flex justify-between">
          <p>Cloud/USDC</p>
          <p>657 INR</p>
          <p style={{ color: gain < 0 ? 'red' : 'green' }}>
            {gain } %
          </p>
        </div>
        </div>
      </CardContent>
    </UICard>
  );
};

const Dashboard: React.FC<DashboardProps> = () => {
  const [selectedChart, setSelectedChart] = useState('spot');
  return (
    <main>
      <div className="w-full h-[359px] bg-purple-500 flex justify-center items-center">
        <h1>Carousel</h1>
      </div>

      <div className="m-4">
        <h1 className="text-3xl h-[42px] font-bold">Markets</h1>
        <div className="flex space-x-4 mt-[24px]">
          <div className="w-[394px] h-[180px] md:grid-cols-3">
            <CustomCard gain={-12.93} />
          </div>
          <div className="w-[394px] h-[180px]">
            <CustomCard gain={45.93} />
          </div>
          <div className="w-[394px] h-[180px]">
            <CustomCard gain={9.93} />
          </div>
        </div>
      </div>



<div className='h-[100vh] mt-[50px]'>
  <div className="w-full  flex gap-3">
  <Button variant={'secondary'} onClick={()=>setSelectedChart("spot")}>Spot</Button>
  <Button variant={'secondary'} onClick={()=>setSelectedChart("fav")}>Favorite</Button>
  </div>
    
  {selectedChart==='spot' ? <SpotChart/> : <FavChart/>}



</div>



    </main>
  );
};

export default Dashboard;
