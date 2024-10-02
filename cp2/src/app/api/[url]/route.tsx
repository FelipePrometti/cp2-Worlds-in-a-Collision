import { NextResponse } from "next/server";

export default async function GET(){
    const apiKey = "2wBAqKCW6GTUD8XNhZRmihsvQuCBapYZH2FzF5Jg"; 
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=5`;  
      const response = await fetch(url);           
      const data = await response.json(); 
      return NextResponse.json(data);
   

}