import React, { useEffect, useState } from "react";
import "./style.css";

function UserDisplay(props) {
  const [showData, setShowData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  
  const [limitpage, setlimitPage] = useState(10);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    console.log("data found:", props.userData.items);

    //   console.log("followeres" ,props.userData.items.followers)
    setShowData(props?.userData?.items);

    if (props.userData.items) {
      const page = props.userData.items.length;
      const countPage = Math.ceil(page / limitpage);
      setTotalPages(countPage);
    }
  }, [props.userData]);

  return (
    <>
      {showData ? (
        showData.slice(currentPage, limitpage * currentPage).map((data) => {
          return (
            <div className="wrapper" key={data.id}>
              <ul className="data-list">
                <li className="data_image">
                  <a href={data.html_url} target="blank">
                    <img src={data.avatar_url} alt="ueser image" />
                  </a>
                </li>
                <li>
                  <a href={data.html_url} target="blank">
                    <h3 className="font-color">
                      <span>Name:</span>
                      {data.login.toUpperCase()}
                    </h3>
                  </a>
                </li>
              </ul>

              <h5 className="font-color">
                Plese click on the user Name or user Image to go on the profile
                page{" "}
              </h5>
            </div>
          );
        })
      ) : (
        <p>Data not found...</p>
      )}

      {totalPages >1 ?
        <div className="pagination ds">
        <button onClick={handlePrevious} className="btn btn-page">
          ❮
        </button>

        <p>
          {currentPage} of {totalPages}
        </p>

        <button onClick={handleNext} className="btn btn-page">
          ❯
        </button>
      </div>:"" }
    </>
  );
}

export default UserDisplay;
