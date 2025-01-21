import React from "react";
import Squares from "./Squares";

const Page = () => {
    return(
        <>
        <div className="p-8 flex flex-col">
            <h1 className="text-4xl">Goals</h1> {/* make it so they can edit this */}
            <div className="pt-1 pl-2">Year '25</div> {/* make it so they can change time frame */}
            {/* throw in the TDR (total days remaining) */}
            {/* <Squares /> custom element here with daily squares */}
            <Squares numSquares={200} />
        </div>
        </>
    );
}

export default Page;