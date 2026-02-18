import { useState, useContext } from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import { CartContext } from "../context/cartcontext";

export default function Home() {
  const { addToCart } = useContext(CartContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // TOP SCROLLER
  const topFlavors = [
    {
      id: 1,
      name: "Chocolate",
      img: "https://media.istockphoto.com/id/1034753522/photo/chocolate-ice-cream.webp?a=1&b=1&s=612x612&w=0&k=20&c=bOrTTxIAQNPw5sfbx-ERB9ndO1LmRdlogyhLYx0wyr0=",
    },
    {
      id: 2,
      name: "Vanilla",
      img: "https://images.unsplash.com/photo-1560008581-09826d1de69e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGljZSUyMGNyZWFtJTIwdmFuaWxsYXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      name: "Strawberry",
      img: "https://media.istockphoto.com/id/1264447447/photo/strawberry-ice-cream-with-fresh-strawberries.webp?a=1&b=1&s=612x612&w=0&k=20&c=SnKbjwwVzxt0K3NRTOTcsZTVzNtoJYwqI1x0pbWKNxQ=",
    },
    {
      id: 4,
      name: "Mint",
      img: "https://images.unsplash.com/photo-1670239971675-bb7e3d92ebb0",
    },
    {
      id: 5,
      name: "Cookie Dough",
      img: "https://media.istockphoto.com/id/462131203/photo/organic-green-mint-chocolate-chip-ice-cream.webp?a=1&b=1&s=612x612&w=0&k=20&c=Gj3J7KRFZ2eHU_SN9WgLsnzFeOnZWyJ0ANwnxd54_CU=",
      price: 160,
    },
    {
      id: 6,
      name: "Pistachio",
      img: "https://images.unsplash.com/photo-1603736029103-dafad0eb0906?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGljZSUyMGNyZWFtJTIwUGlzdGFjaGlvfGVufDB8fDB8fHww",
      price: 150,
    },
    {
      id: 7,
      name: "Mango",
      img: "https://images.unsplash.com/photo-1663904458920-f153c162fa79?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGljZSUyMGNyZWFtJTIwbWFuZ298ZW58MHx8MHx8fDA%3D",
      price: 130,
    },
    {
      id: 8,
      name: "Rocky Road",
      img: "https://media.istockphoto.com/id/660782512/photo/ice-cream-in-small-bowls-of-chocolate.webp?a=1&b=1&s=612x612&w=0&k=20&c=DbV2vqZAN5JZHkUN8BwZoX6XV6I5oi3bpR-ZX26eli8=",
      price: 170,
    },
    {
      id: 9,
      name: "Coffee",
      img: "https://media.istockphoto.com/id/1178866625/photo/homemade-coffee-ice-cream.webp?a=1&b=1&s=612x612&w=0&k=20&c=-vl_DynI509f9eYQXTYukfsay7cx7g2F4-XQ2YEllO0=",
      price: 140,
    },
    {
      id: 10,
      name: "Salted Caramel",
      img: "https://images.unsplash.com/photo-1761281112114-f7c357d6db53?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGljZSUyMGNyZWFtJTIwU2FsdGVkJTIwQ2FyYW1lbHxlbnwwfHwwfHx8MA%3D%3D",
      price: 150,
    },
  ];

  // BOTTOM SCROLLER
  const bottomFlavors = [
    {
      id: 11,
      name: "Salted Caramel",
      img: "https://media.istockphoto.com/id/1068814626/photo/pov-salted-caramel-ice-cream-cone-at-fistral-beach-newquay-cornwall-on-a-sunny-september-day.webp?a=1&b=1&s=612x612&w=0&k=20&c=ShKcNv5IgMlW_oF4GJPyYQO4D1W0khU4SmRhOAkw6TY=",
    },
    {
      id: 12,
      name: "Coffee",
      img: "https://images.unsplash.com/photo-1565899947426-b2424039f921?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aWNlJTIwY3JlYW0lMjBDb2ZmZWV8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 13,
      name: "Coffee Crave",
      img: "https://plus.unsplash.com/premium_photo-1671980819443-e8bbeec85840?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aWNlJTIwY3JlYW0lMjBDb2ZmZWUlMjBDcmF2ZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 14,
      name: "Ranbow",
      img: "https://images.unsplash.com/photo-1548365327-ba68b3991b34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGljZSUyMGNyZWFtJTIwcmFuYm93fGVufDB8fDB8fHww",
    },
    {
      id: 15,
      name: "bluebarry",
      img: "https://media.istockphoto.com/id/475970222/photo/blueberry-vanilla-popsicles-on-a-white-marble-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=YBLimvBXrMOzZJKAZnTLS70ZiIM7zajDyKZR-SNFgjg=",
    },
    {
       id: 16,
       name: "Butterscotch",
       img: "https://media.istockphoto.com/id/1034716384/photo/ice-cream-and-waffle-birthday-treat-drizzled-with-chocolate-syrup-and-sprinkles-with-one-lit.jpg?s=612x612&w=0&k=20&c=qTusIZeZVDxojaPawJxjjpD8wj91F9ElxTYq85WltDc=",
       price: 150,
     },
    {
      id: 17,
      name: "chery",
      img: "https://media.istockphoto.com/id/183892047/photo/vanilla-ice-cream-and-berry-sauce.webp?a=1&b=1&s=612x612&w=0&k=20&c=NcDlBw_Xvs-UwIOa-jYVZkr3Mef0TbYSauBotKnOC4E=",
      price: 120,
    },
    {
      id: 18,
      name: "lemon",
      img: "https://media.istockphoto.com/id/483691510/photo/single-scoop-of-lemon-ice-cream-with-lemons-and-decoration.webp?a=1&b=1&s=612x612&w=0&k=20&c=jo0lEaCqhStwUWWwo8JbNf_G3RL2RL0dq6SMoe1RHsY=",
      price: 130,
    },
    {
      id: 19,
      name: "Raspberry",
      img: "https://images.unsplash.com/photo-1762160964274-0aa385e887d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGljZSUyMGNyZWFtJTIwcmFzcGJlcnJ5fGVufDB8fDB8fHww",
      price: 140,
    },
    {
      id: 20,
      name: "Orange",
      img: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGljZSUyMGNyZWFtJTIwb3JhbmdlfGVufDB8fDB8fHww",
      price: 160,
    },
  ];

  return (
    <>
      <Navbar toggleSidebar={() => setIsSidebarOpen(true)} />
      <Sidebar
        isOpen={isSidebarOpen}
        closeSidebar={() => setIsSidebarOpen(false)}
        flavors={[...topFlavors, ...bottomFlavors]}
      />

      <div className="home-main">
        {/* HERO */}
        <section className="hero">
          <img src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c" />
          <div className="hero-desc">
            <h1>IceCream Haven</h1>
            <p>Handcrafted scoops made with love 🍨</p>
          </div>
        </section>

        {/* TOP SCROLLER */}
        <section className="scroller-section">
  <div className="scroll-track left">
    {[...topFlavors, ...topFlavors].map((f, i) => (
      <div className="ice-card" key={i}>
        <img src={f.img} />
        <h4>{f.name}</h4>
      </div>
    ))}
  </div>
</section>


      <section className="scroller-section">
  <div className="scroll-track right">
    {[...bottomFlavors, ...bottomFlavors].map((f, i) => (
      <div className="ice-card" key={i}>
        <img src={f.img} />
        <h4>{f.name}</h4>
      </div>
    ))}
  </div>
</section>


        {/* WHY */}
        <section className="why-choose">
          <div className="why-grid">
            <section className="why-choose-us-alt">
              <h2>Why IceCream Haven?</h2>
              <div className="features-alt">
                <div className="feature-box">
                  <div className="icon">🍦</div>
                  <h3>Fresh & Creamy</h3>
                  <p>
                    Every scoop is made with the freshest ingredients for a
                    creamy delight.
                  </p>{" "}
                </div>{" "}
                <div className="feature-box">
                  {" "}
                  <div className="icon">🌈</div> <h3>Exciting Flavors</h3>{" "}
                  <p>
                    Classic or exotic, we have a flavor for every mood and taste
                    bud.
                  </p>{" "}
                </div>{" "}
                <div className="feature-box">
                  {" "}
                  <div className="icon">🏆</div> <h3>Quality Guaranteed</h3>{" "}
                  <p>
                    Our ice-creams are handcrafted to meet the highest quality
                    standards.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>

        <footer>© 2026 IceCream Haven</footer>
      </div>

    <style>{`

body {
  margin: 0;
  background: #0b0b0b;
  color: #fff;
  font-family: Poppins, sans-serif;
   overflow-x: hidden; 
  overflow-y: auto; 
}

.hero {
  height: 90vh;
  position: absolute;
}

.hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-desc {
  position: absolute;
  bottom: 40px;
  left: 50px;
}

.hero-desc h1 {
  font-size: 64px;
  color: orange;
}

.hero-desc p {
  font-size: 22px;
  opacity: 0.85;
}

.scroller-section {
  width: 100%;
  overflow: hidden;
  padding: 40px 0;
}

.scroll-track {
  display: flex;
  gap: 30px;
  width: max-content;
}

.scroll-track:hover {
  animation-play-state: paused;
}

.left {
  animation: scrollLeft 30s linear infinite;
}

/* RIGHT → LEFT */
.right {
  animation: scrollRight 30s linear infinite;
}

}

/* LEFT → RIGHT */
.left {
  animation: scrollLeft 30s linear infinite;
}

/* RIGHT → LEFT */
.right {
  animation: scrollRight 30s linear infinite;
}

@keyframes scrollLeft {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@keyframes scrollRight {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0);
  }
}

.ice-card {
  width: 220px;
  background: #111;
  border-radius: 16px;
  padding: 14px;
  text-align: center;
  flex-shrink: 0;
}

.ice-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
}

.ice-card h4 {
  margin-top: 10px;
  color: #FFD580;
  font-size: 18px;
}

.why-choose-us-alt {
  padding: 60px 40px;
  background: #1a1a1a;
  margin: 60px 40px;
  border-radius: 20px;
  text-align: center;
}

.why-choose-us-alt h2 {
  font-size: 38px;
  margin-bottom: 40px;
  letter-spacing: 1px;
}

.features-alt {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
}

.feature-box {
  background: #222;
  flex: 1 1 250px;
  max-width: 280px;
  padding: 25px;
  border-radius: 15px;
  transition: transform 0.3s ease;
}

.feature-box:hover {
  transform: translateY(-8px);
}

.feature-box .icon {
  font-size: 48px;
  margin-bottom: 15px;
}

.feature-box h3 {
  font-size: 22px;
  margin-bottom: 12px;
  color: #FFD580;
}

.feature-box p {
  font-size: 16px;
  opacity: 0.85;
  line-height: 1.5;
}
footer {
  text-align: center;
  padding: 30px;
  opacity: 0.7;
  font-size: 14px;
}
`}</style>

    </>
  );
}

//  const flavors = [
//     {
//       id: 1,
//       name: "Chocolate",
//       img: "https://media.istockphoto.com/id/1034753522/photo/chocolate-ice-cream.webp?a=1&b=1&s=612x612&w=0&k=20&c=bOrTTxIAQNPw5sfbx-ERB9ndO1LmRdlogyhLYx0wyr0=",
//       price: 150,
//     },
//     {
//       id: 2,
//       name: "Vanilla",
//       img: "https://images.unsplash.com/photo-1560008581-09826d1de69e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGljZSUyMGNyZWFtJTIwdmFuaWxsYXxlbnwwfHwwfHx8MA%3D%3D",
//       price: 120,
//     },
//     {
//       id: 3,
//       name: "Strawberry",
//       img: "https://media.istockphoto.com/id/1264447447/photo/strawberry-ice-cream-with-fresh-strawberries.webp?a=1&b=1&s=612x612&w=0&k=20&c=SnKbjwwVzxt0K3NRTOTcsZTVzNtoJYwqI1x0pbWKNxQ=",
//       price: 130,
//     },
//     {
//       id: 4,
//       name: "Mint",
//       img: "https://images.unsplash.com/photo-1670239971675-bb7e3d92ebb0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWNlJTIwY3JlYW0lMjBtaW50fGVufDB8fDB8fHww",
//       price: 140,
//     },
//     {
//       id: 5,
//       name: "Cookie Dough",
//       img: "https://media.istockphoto.com/id/462131203/photo/organic-green-mint-chocolate-chip-ice-cream.webp?a=1&b=1&s=612x612&w=0&k=20&c=Gj3J7KRFZ2eHU_SN9WgLsnzFeOnZWyJ0ANwnxd54_CU=",
//       price: 160,
//     },
//     {
//       id: 6,
//       name: "Pistachio",
//       img: "https://images.unsplash.com/photo-1603736029103-dafad0eb0906?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGljZSUyMGNyZWFtJTIwUGlzdGFjaGlvfGVufDB8fDB8fHww",
//       price: 150,
//     },
//     {
//       id: 7,
//       name: "Mango",
//       img: "https://images.unsplash.com/photo-1663904458920-f153c162fa79?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGljZSUyMGNyZWFtJTIwbWFuZ298ZW58MHx8MHx8fDA%3D",
//       price: 130,
//     },
//     {
//       id: 8,
//       name: "Rocky Road",
//       img: "https://media.istockphoto.com/id/660782512/photo/ice-cream-in-small-bowls-of-chocolate.webp?a=1&b=1&s=612x612&w=0&k=20&c=DbV2vqZAN5JZHkUN8BwZoX6XV6I5oi3bpR-ZX26eli8=",
//       price: 170,
//     },
//     {
//       id: 9,
//       name: "Coffee",
//       img: "https://media.istockphoto.com/id/1178866625/photo/homemade-coffee-ice-cream.webp?a=1&b=1&s=612x612&w=0&k=20&c=-vl_DynI509f9eYQXTYukfsay7cx7g2F4-XQ2YEllO0=",
//       price: 140,
//     },
//     {
//       id: 10,
//       name: "Salted Caramel",
//       img: "https://images.unsplash.com/photo-1761281112114-f7c357d6db53?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGljZSUyMGNyZWFtJTIwU2FsdGVkJTIwQ2FyYW1lbHxlbnwwfHwwfHx8MA%3D%3D",
//       price: 150,
//     },
//   ];
