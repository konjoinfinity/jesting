import * as React from 'react'

interface Props {
  price: number;
  date: string;
}

const priceData: [number, string][] = [
  [16000, "11/20/2022"],
  [16034, "11/21/2022"],
  [16045, "11/22/2022"],
  [16123, "11/23/2022"],
  [16005, "11/24/2022"],
  [16202, "11/25/2022"]
] 


function Day({ price, date }: Props) {
  return (
    <div style={{display: "flex", justifyContent: "space-between"}}>
      <p>Date: {date}</p>
    <p>Bitcoin Price: ${price}</p>
    </div>
  );
}


export default function Prices() {
  return priceData.map(([price, date]) => (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center" }}>
<Day price={price} date={date} key={price} />
</div>
  ))
  }