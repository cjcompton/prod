import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const SquareNote = () => {
    let {squareId} = useParams();

    useEffect(() => {
        console.log("Rendering SquareNote:", squareId);
    }, [squareId]);

    return(
        <div className="h-100 w-100 flex items-center justify-center">
            <h1 className="text-2xl">This Square is #{squareId}</h1>
        </div>
    );
}

export default SquareNote;