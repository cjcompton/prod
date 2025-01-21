import React from "react";

const Page = () => {
    return(
        <>
        <div className="p-8 flex flex-col">
            <h1 className="text-4xl">Goals</h1> {/* make it so they can edit this */}
            <div className="pt-1 pl-2">Year '24</div> {/* make it so they can change time frame */}
            {/* throw in the TDR (total days remaining) */}
            {/* <Squares /> custom element here with daily squares */}
        </div>
        </>
    );
}

export default Page;