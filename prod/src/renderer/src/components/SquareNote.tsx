import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const SquareNote = () => {
    let {squareId} = useParams();

    useEffect(() => {
        console.log("Rendering SquareNote:", squareId);
    }, [squareId]);

    // todo
    // make a back button that routes to /
    // change styling of page
    // bring in goals and have them save a file
    
    return(
        <div className="w-full h-full p-4">
            <div className="flex items-start justify-center">
                <h1 className="text-2xl">Day #{squareId}</h1>
            </div>
            <div className="pt-6">
                <label>
                    <input type="checkbox" className="accent-black"/> Test #1 </label>
            </div>
        </div>
    );
}

export default SquareNote;