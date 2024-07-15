import React, { useEffect } from "react";

const Post = ({ data, setPageNumber }) => {
  useEffect(() => {
    const observer = new IntersectionObserver((params) => {
      if (params[0].isIntersecting) {
        observer.unobserve(lastImage);
        setPageNumber((pageNumber) => pageNumber + 1);
      }
    });

    const lastImage = document.querySelector(".post-image:last-child");
    if (!lastImage) {
      return;
    }

    observer.observe(lastImage);

    return () => {
      if (lastImage) {
        observer.unobserve(lastImage);
      }
      observer.disconnect();
    };
  }, [data]);
  return (
    <div className="container">
      {data.map((item, index) => {
        return (
          <img className="post-image" src={item.download_url} key={index} />
        );
      })}
    </div>
  );
};

export default Post;
