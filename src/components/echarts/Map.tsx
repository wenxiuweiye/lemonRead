import React, { createRef } from "react";
import * as echarts from "echarts";
import axios from "axios";

export default class Map extends React.Component{
    mapRef: React.RefObject<HTMLDivElement>;
    constructor(props:any){
        super(props)
        this.mapRef = React.createRef<HTMLDivElement>()
    }
    componentDidMount(){
        console.log()
        axios.get("http://localhost:3033/assets/map/chinaMap").then((e=>{
            var mychart = echarts.init(this.mapRef.current as HTMLDivElement)
            echarts.registerMap("china",e.data)
            mychart.setOption({
                series:[
                    {
                        type:"map",
                        map:"china"
                    }
                ]
            })
        }))
    }
    render(){
        return (
            <div style={{width:"50vw",height:"50vh"}} ref={this.mapRef}></div>
        )
    }
}
