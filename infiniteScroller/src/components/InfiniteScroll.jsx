import React, { useEffect, useState } from "react";
import Post from "./Post";

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=${pageNumber}&limit=4`)
      .then((res) => {
        return res.json();
      })
      .then((arr) => setData(() => [...data, ...arr]));
  }, [pageNumber]);

  return (
    <>
      <div>InfiniteScroll</div>
      <Post data={data} setPageNumber={setPageNumber} />
    </>
  );
};

export default InfiniteScroll;
