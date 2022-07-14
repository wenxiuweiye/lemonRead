import React, { useEffect, useState } from "react";
interface Props{
    listArr : string[],
    returnKey : Function
}

const NaviList: React.FC<Props> = ({listArr , returnKey}) => {
  const [switchRanking, setswitchRanking] = useState(0);
  
  const naviListBookShelf = listArr.map((element) => {
    const key = listArr.indexOf(element);
    return (
      <li
        onClick={() => {
          setswitchRanking(key);
            returnKey(key)
        }}
        key={key}
        className={
          switchRanking === key
            ? "navi_ranking_list_item_current"
            : "navi_ranking_list_item"
        }
      >{`${element}`}</li>
    );
  });
  return (
    <div className="leftbookShelf" >
      <ul className="navi_ranking_list">{naviListBookShelf}</ul>
    </div>
  );
};

export default NaviList;
