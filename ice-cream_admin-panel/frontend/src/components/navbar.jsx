// import { useState } from "react";

// export default function Navbar({ toggleSidebar }) {
//   return (
//     <>
//       <nav className="navbar">
//         <div className="left">
//           <span className="shop-name">Ice-cream Haven</span>
//         </div>

//         <div className="right">
//           <button className="btn-home">Home</button>
//           <button className="btn-order" onClick={toggleSidebar}>
//             Order Now
//           </button>
//         </div>
//       </nav>

//       <style>{`
//         .navbar {
//           display:flex;
//           justify-content:space-between;
//           align-items:center;
//           padding:15px 30px;
//           background:#FFA500;
//           color:#111;
//           top:0;
//           z-index:1000;
//         }
//         .shop-name {
//           font-weight:700;
//           font-size:24px;
//         }
//         .right button {
//           margin-left:15px;
//           padding:8px 16px;
//           border:none;
//           border-radius:6px;
//           cursor:pointer;
//           font-weight:600;
//           transition:0.2s;
//         }
//         .btn-home { background:#fff; color:#FFA500; }
//         .btn-home:hover { background:#FFD580; }
//         .btn-order { background:#111; color:#FFA500; }
//         .btn-order:hover { background:#333; }
//       `}</style>
//     </>
//   );
// }


export default function Navbar({ toggleSidebar }) {
  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <span className="shop-name">IceCream Haven</span>
        </div>

        <div className="nav-right">
          <button className="btn-home">Home</button>
          <button className="btn-order" onClick={toggleSidebar}>
            Order Now
          </button>
        </div>
      </nav>

      <style>{`
        .navbar {
          width:100%;
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:16px 40px;
          background:#FFA500;
          color:#111;
          position:sticky;
          top:0;
          z-index:1000;
          box-sizing:border-box;
        }

        .nav-left {
          display:flex;
          align-items:center;
        }

        .shop-name {
          font-weight:700;
          font-size:24px;
          letter-spacing:0.5px;
        }

        .nav-right {
          display:flex;
          align-items:center;
        }

        .nav-right button {
          margin-left:16px;
          padding:9px 18px;
          border:none;
          border-radius:8px;
          cursor:pointer;
          font-weight:600;
          font-size:15px;
          transition:0.25s;
        }

        .btn-home {
          background:#fff;
          color:#FFA500;
        }

        .btn-home:hover {
          background:#FFD580;
        }

        .btn-order {
          background:#111;
          color:#FFA500;
        }

        .btn-order:hover {
          background:#333;
        }
      `}</style>
    </>
  );
}
