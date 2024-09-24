import React from 'react';
import { Card, CardContent, CardFooter } from "../components/ui/card";

const ProductCard = ({ name, image }) => {
  return (
    <Card className="w-64 h-80 overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
      <CardContent className="p-0 relative overflow-hidden h-68">
        <div className="w-full h-full overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-all duration-300 ease-in-out"
          />
        </div>
      </CardContent>
      <CardFooter className="bg-yellow-300 p-2 h-12">
        <p className="text-sm font-semibold text-center w-full">{name}</p>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;