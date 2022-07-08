import { Card } from "antd";
import React, {  useEffect, useRef, } from "react";
import * as echarts from "echarts";

interface Props {
  cards: cardsProps[];
}
interface cardsProps {
  pros: number;
  cons: number;
  bookName: string;
  _id: string;
  author: string;
  price: number;
  label: string;
}
const { Meta } = Card;
const Cards: React.FC<Props> = ({ cards }) => {
  let pieChart:any;
  const pieRef = useRef(null);
  const initCharts = ()=>{
    pieChart = echarts.init(pieRef.current as unknown as HTMLDivElement);
  }
  const renderCharts = (bookName:string,author:string, pros:number,cons:number) => {
    const opts = {
      tooltip: {
        trigger: 'item'
      },
      title:{
        text: bookName,
        subtext: author,
        left:"0",
        top:"0"
      },
      legend: {
        orient: 'vertical',
        left: '80%'
      },
      series: [
        {
          type: "pie",
          label:{
            show:true
          },

          width:"65%",
          height:"100%",
          bottom:"0",
          itemStyle: {
            borderRadius: 5
          },
          data: [
            { value: pros, name: "好评" },
            { value: cons, name: "差评" },
          ],
        },
      ],
    }
    pieChart.setOption(opts);
  };
  const destroyCharts =()=>{
    pieChart.dispose() 
  }
  const resizeCharts = ()=>{
    pieChart?.resize()
  }
  const clickCharts = ()=>{
    pieChart.on("click",function(params:any){
      
    })
  }
  useEffect(() => {
    if(cards.length != 0){
        initCharts()
        renderCharts(cards[0].bookName,cards[0].author,cards[0].pros,cards[0].cons);
    }
    window.onresize = ()=>{
      resizeCharts() 
    }
  });
  const thecard: any = cards.map((value: any) => {
    return (
      <li key={value.bookName}>     
        <Card
        data-id={value.bookName}
          onClick={(e) => {
          console.log(e.currentTarget.dataset.id)
          cards.forEach(element => {
            if(element.bookName === e.currentTarget.dataset.id){
              destroyCharts()
              initCharts()
              renderCharts(element.bookName,element.author,element.pros,element.cons);
            }
          });

        }}
          hoverable
          style={{
            width: 200,
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
          }}
          cover={
            <img
              alt="example"
              style={{ width: 40 }}
              src={`http://www.lemons.asia/assets/book/bookImage?bookName=${value.bookName}`}
            />
          }
        >
          <Meta
            style={{ fontSize: ".5em" }}
            title={
              value.bookName.length > 6
                ? value.bookName.slice(0, 5) + "..."
                : value.bookName
            }
            description={
              value.author.length > 6
                ? value.author.slice(0, 5) + "..."
                : value.author
            }
          />
        </Card>
      </li>
    );
  });
  return (
    <div className="bookList">
      <div>
        <div className="titleCards">
          <div>好书推荐</div>
        </div>
        <ul className="CardsList">{thecard}</ul>
      </div>
      <div onClick={clickCharts} ref={pieRef} className="pieRef"></div>
      <div></div>
    </div>
  );
};

export default Cards;
