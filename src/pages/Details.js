// import React from "react";
// import NavBar from "../components/NavBar";
// import clubsData from "../data/clubs";
// import PlayersCard from "../components/PlayersCard";
// import "bootstrap/dist/css/bootstrap.css";
// function Details() {
//   return (
//     <>
//       <NavBar />
//       <div className="container-fluid p-5 mt-5">
//         <div className="row">
//           <div className="col-lg-4 text-center">
//             <div class="flip-card">
//               <div class="flip-card-inner">
//                 <div class="flip-card-front p-4">
//                   <img
//                     src={clubsData[0].image}
//                     alt=""
//                     className="details_image_club"
//                   />
//                 </div>
//                 <div class="flip-card-back">
//                   <h5>
//                     The club was formed in: {clubsData[0].date_of_creation}
//                   </h5>
//                   <p>{clubsData[0].information}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-8 mt-4 ">
//             <h1 className="name__club text-center mb-5 pb-4">
//               {clubsData[0].name}
//             </h1>
//             <h3 className="text-center mb-5">Football honours</h3>

//             <div className="row ">
//               {clubsData[0].trophies.map((club, index) => {
//                 return (
//                   <div
//                     className="col-lg-2 text-center trophies__card"
//                     key={index}
//                   >
//                     <img src={club.image} alt="" className="trophies__img" />
//                     <div className="trophies__count">{club.count}</div>
//                     <div className="trophies__name">{club.name}</div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//       <h5 className="text-center my-5 fw-normal">GOALKEEPERS</h5>
//       <div className="container d-flex justify-content-center"></div>

//       <h5 className="text-center my-5 fw-normal">DEFENDERS</h5>
//       <div className="container">
//         <div className="row mt-4 p-5 row-gap-4">
//           {clubsData[0].players.map((player, index) => {
//             if (index < 5 && index !== 0) {
//               return (
//                 <div
//                   className="col-lg-3 col-md-6 d-flex justify-content-center"
//                   key={index}
//                 >
//                   <PlayersCard data={player} />
//                 </div>
//               );
//             }
//           })}
//         </div>
//       </div>

//       <h5 className="text-center my-5 fw-normal">MIDFIELDERS</h5>
//       <div className="container">
//         <div className="row mt-4 p-5 row-gap-4">
//           {clubsData[0].players.map((player, index) => {
//             if (index >= 5 && index < 9) {
//               return (
//                 <div
//                   className="col-lg-3 col-md-6 d-flex justify-content-center"
//                   key={index}
//                 >
//                   <PlayersCard data={player} />
//                 </div>
//               );
//             }
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Details;

import React from "react";
import NavBar from "../components/NavBar";
import clubsData from "../data/clubs";
import PlayersCard from "../components/PlayersCard";
import "bootstrap/dist/css/bootstrap.css";
import { useLocation } from "react-router-dom";

function Details() {
  const renderPlayers = (startIndex, endIndex) => {
    return clubsData[id].players
      .slice(startIndex, endIndex)
      .map((player, index) => (
        <div
          className="col-lg-3 col-md-6 d-flex justify-content-center"
          key={index}
        >
          <PlayersCard data={player} />
        </div>
      ));
  };

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  return (
    <>
      <NavBar />
      <div className="container-fluid p-5 mt-5">
        <div className="row">
          <div className="col-lg-4 text-center">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front p-4">
                  <img
                    src={clubsData[id].image}
                    alt=""
                    className="details_image_club"
                  />
                </div>
                <div className="flip-card-back p-4">
                  <h5 className="text-start">
                    The club was formed in: {clubsData[id].date_of_creation}
                  </h5>
                  <h5 className="text-start">
                    Country: {clubsData[id].country}
                  </h5>
                  <p className="text-start">{clubsData[id].information}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 mt-4">
            <h1 className="name__club text-center mb-5 pb-4">
              {clubsData[id].name}
            </h1>
            <h3 className="text-center mb-5">Football honours</h3>

            <div className="row">
              {clubsData[id].trophies.map((club, index) => (
                <div
                  className="col-lg-2 text-center trophies__card"
                  key={index}
                >
                  <img src={club.image} alt="" className="trophies__img" />
                  <div className="trophies__count">{club.count}</div>
                  <div className="trophies__name">{club.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <h5 className="text-center my-5 fw-normal">GOALKEEPERS</h5>
      <div className="container">
        <div className="row  pb-5 d-flex justify-content-center">
          {renderPlayers(0, 1)}
        </div>
      </div>

      <h5 className="text-center my-5 fw-normal">DEFENDERS</h5>
      <div className="container">
        <div className="row mt-4 p-5 row-gap-4">{renderPlayers(1, 5)}</div>
      </div>

      <h5 className="text-center my-5 fw-normal">MIDFIELDERS</h5>
      <div className="container">
        <div className="row mt-4 p-5 row-gap-4">{renderPlayers(5, 9)}</div>
      </div>

      <h5 className="text-center my-5 fw-normal">FORWARDS</h5>
      <div className="container">
        <div className="row mt-4 p-5 row-gap-4 d-flex justify-content-center">
          {renderPlayers(9, 11)}
        </div>
      </div>
    </>
  );
}

export default Details;
