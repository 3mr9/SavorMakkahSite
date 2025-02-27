import "../styles.css";

function Header() {
  return (
    <>
      <nav className=" container-fluid navbar header">
        <div>
          <a className="headerbutt nav-link" href="/">
            الصفحة الرئيسية
          </a>
          <a href="/Explore" className="headerbutt nav-link">
            تصفح القائمة
          </a>
          <a href="/Contact" className="headerbutt nav-link">
            إقتراح؟
          </a>
        </div>
      </nav>
    </>
  );
}
export default Header;
