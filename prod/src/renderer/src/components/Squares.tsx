import React from "react";
import { useNavigate } from "react-router-dom";

const Squares = ({numSquares}) => {
    let navigate = useNavigate();

    const openPageIndex = (index) => {
        navigate(`/pages/${index}`);
    };

    return(
        <div className="w-full h-full p-4">
            <div className="grid grid-flow-row grid-cols-20 gap-4">
            {Array.from({ length: numSquares }, (_, index) => (
                <div 
                    key={index} 
                    className="bg-white text-black rounded-sm w-8 h-8" 
                    onClick={() => openPageIndex(index)}
                >{index}</div>
            ))}
            </div>
        </div>
    );
}

export default Squares;