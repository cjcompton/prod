import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const SquareNote = () => {
    let {squareId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        console.log("Rendering SquareNote:", squareId);
    }, [squareId]);

    // todo
    // change styling of page
    // bring in goals and have them save a file
    
    return(
        <div>
            <div className="pl-24 py-2 static">
                <button className="static inline" onClick={() => navigate("/")}>PROD</button>
                <p className="px-2 static inline content-center">{'>'}</p>
                <p className="static inline">Day #{squareId}</p>
            </div>
            <div className="w-full h-full">
                <div className="flex items-start justify-center">
                    <h1 className="text-2xl">Day #{squareId}</h1>
                </div>
                <div className="p-6 flex flex-col">
                    <div>
                        <label className="px-2">Test #1</label>
                        <input type="checkbox" className="accent-black"/>
                    </div> 
                    <div>
                        <label className="px-2">Test #2</label>
                        <input type="checkbox" className="accent-black"/>
                    </div> 
                    <div>
                        <label className="px-2">Test #3</label>
                        <input type="checkbox" className="accent-black"/>
                    </div>  
                </div>
            </div>
        </div>
    );
}

export default SquareNote;