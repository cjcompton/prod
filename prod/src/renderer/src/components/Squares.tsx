import React from "react";

const Squares = ({numSquares}) => {
    return(
        <div className="w-full h-full p-4">
            <div className="grid grid-flow-row grid-cols-20 gap-4">
            {Array.from({ length: numSquares }, (_, index) => (
                <div key={index} className="bg-white text-black rounded-sm w-8 h-8">{index}</div>
            ))}
            </div>
        </div>
    );
}

export default Squares;