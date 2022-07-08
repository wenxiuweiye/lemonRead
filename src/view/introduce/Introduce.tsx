import { Card } from "antd";
import * as echarts from 'echarts';
import React, { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import "./introduce.less";
const {Meta} = Card
const Introduce: React.FC = () => {
  const barChartRef =  useRef<HTMLDivElement>(null)
  const [searchParams, setsearchParams] = useSearchParams();
  const book = {
    bookName: searchParams.get("bookName"),
    author: searchParams.get("author"),
    pros: searchParams.get("pros"),
    cons: searchParams.get("cons"),
    price: searchParams.get("price"),
    label: searchParams.get("label"),
  };

  const initbarChart = ()=>{
    const barChart = echarts.init(barChartRef.current as HTMLDivElement)
    const pros = Number(book.pros).valueOf()
    const cons = Number(book.cons).valueOf()
    
    barChart.setOption({
        yAxis:{
            type:'value'
        },
        xAxis: {
            type: 'category',
            data: ['好看','不好看']
          },
        series:[
            {
                type:"bar",
                data:[pros,cons]
            }
        ]
    })
  }
  
  useEffect(()=>{
    initbarChart()
  })
  return (
    <div className="introduce">
      <div className="titleIntroduce">{book.bookName}</div>
      <div className="bookMessageIntroduce">
        <Card
          hoverable
          style={{ width: '100%' ,display:"flex",alignItems:"center" }}
          cover={
            <img
              alt="example"
              src={`http://www.lemons.asia/assets/book/bookImage?bookName=${book.bookName}`}
            />
          }
        >
          <div style={{"width":"60em","display":"flex",justifyContent:"space-around"}}>
            <div style={{"display":"flex",flexDirection:"column"}}>
            <Meta style={{width:"100%", 'display':"flex"}} title={<a href={`https://www.baidu.com/s?wd=${book.bookName}`}>{book.bookName}</a>} description={<a href={`https://www.baidu.com/s?wd=${book.author}`}>{book.author}</a>} />
            <div style={{width:"100%",color:"gray",marginTop:"1em",'display':"flex","flexDirection":"column","alignItems":"start"}}>
                <div>覺得好看的人數：{book.pros}</div>
                <div>覺得难看的人數：{book.cons}</div>
                <div>定价：{book.price}</div>
                <div>标签：<a href={`https://www.baidu.com/s?wd=${book.label}`}>{book.label}</a></div>
            </div>
            </div>
            <div style={{width:"70%",height:"20em"}} ref={barChartRef}></div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Introduce;
