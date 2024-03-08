import React, { useEffect, useState } from "react";
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { IoChevronBackCircleOutline } from "react-icons/io5";

function YouMaylike(){

    const [box,setBox]=useState([]);
    const [move,setMove]=useState(-90);

    async function answers(){

        try{

            const response=await fetch("https://api.coingecko.com/api/v3/search/trending");
            const data=await response.json();
            
            if(response.ok){
                setBox(data.coins)
                console.log(data.coins)
            }

        }
        catch(e){
            console.log(e);
        }

    }

    useEffect(()=>{
        answers()
    },[])
    let sum=0;
    function moveForward(){

        
    }

    function backWard(){
        
    }

    return(
        <>

        <div className="wrapper bg-white px-8 py-16">
            <h1 className="font-semibold text-3xl pb-12">You May Also Like</h1>
           
            
            
            <div className="content flex overflow-hidden gap-5 items-center w-[95%]">
            <div><IoChevronBackCircleOutline size={30}/></div>
                {
                    box && box.length>0?
                    box.map((dataItems,index)=>{
                        return(

                            <div key={index} className="">
                                
                                <div className="flex justify-around gap-5 relative">
                                    <div className="move">
                                <div className="border-2 flex flex-col w-[300px] p-6 rounded-lg items-right">
                                    <div className="flex gap-4 items-center pb-6">
                                    <img src={dataItems.item.small
                                    } alt={dataItems.item.id} className="rounded-[50%] w-8 h-8"/>
                                    
                                    <p className="uppercase font-semibold">{dataItems.item.name}</p>
                                    <div>
                                        <p className={`${dataItems.item.data.price_change_percentage_24h.aed}`.charAt(0)==="-"?"red":"green"}>{`${dataItems.item.data.price_change_percentage_24h.aed}`.slice(0,5)}%</p>
                                    </div>
                                    </div>
                                    <div className="pb-4">
                                        <p className="font-semibold text-xl">{dataItems.item.data.price}</p>
                                    </div>
                                    <div>
                                    <img src={dataItems.item.data.sparkline} alt={dataItems.item.id} /></div>
                                </div>
                                </div>
                                </div>
                            </div>
                        )

                    })

                    
                    :<div>Null</div>
                }
                <div className="absolute right-7"><IoChevronForwardCircleOutline size={30}/></div>
            </div>
            
        </div>
       

        </>
    )

}

export default YouMaylike