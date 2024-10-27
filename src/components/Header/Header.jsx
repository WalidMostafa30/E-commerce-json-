import NavBar from "../NavBar/NavBar";

export default function Header() {
  return (
    <header
      className="Header position-sticky top-0 z-3 bg-white shadow-sm"
      style={{ height: "var(--nav-height)" }}
    >
      <div className="container h-100 d-flex align-items-center justify-content-between py-2">
        <h1 className="fw-bold">
          Mini<span className="textMC">Store</span>
        </h1>

        <NavBar />
      </div>
    </header>
  );
}
