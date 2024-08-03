import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const cryptos = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: "71822 INR",
    marketCap: "7182212 INR",
    volume: "12334",
    tradePrice: "1234",
    icon: "https://backpack.exchange/_next/image?url=%2Fcoins%2Fbtc.png&w=48&q=95",
  },
  {
    name: "Shiba Inu",
    symbol: "SHIB",
    price: "0.0007 INR",
    marketCap: "3948211 INR",
    volume: "827384",
    tradePrice: "0.0005",
    icon: "https://backpack.exchange/_next/image?url=%2Fcoins%2Fshiba.png&w=48&q=95",
  },
  {
    name: "Chainlink",
    symbol: "LINK",
    price: "612 INR",
    marketCap: "2678291 INR",
    volume: "27481",
    tradePrice: "604",
    icon: "https://backpack.exchange/_next/image?url=%2Fcoins%2Flink.png&w=48&q=95",
  },

];

const FavChart = () => {
  return (
    <div className=" h-[100vh] p-4">
     
      <Card>
        <CardHeader>
          <div className="grid grid-cols-5 gap-4 text-center">
            <CardDescription>Name</CardDescription>
            <CardDescription>Price</CardDescription>
            <CardDescription>Market Cap</CardDescription>
            <CardDescription>Volume</CardDescription>
            <CardDescription>Trade Price</CardDescription>
          </div>
        </CardHeader>
      </Card>
      {cryptos.map((crypto, index) => (
        <Card key={index}>
          <CardHeader>
            <div className="grid grid-cols-5 gap-4 items-center text-center">
              <div className="flex gap-2 items-center justify-center">
                <img src={crypto.icon} className="w-[38px] h-[38px]" alt={`${crypto.name} Icon`} />
                <div className="flex flex-col items-start">
                  <p className="text-base">{crypto.name}</p>
                  <p className="font-extralight font-mono text-[12px]">{crypto.symbol}</p>
                </div>
              </div>
              <p>{crypto.price}</p>
              <p>{crypto.marketCap}</p>
              <p>{crypto.volume}</p>
              <p>{crypto.tradePrice}</p>
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default FavChart;
