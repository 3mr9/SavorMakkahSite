import Header from "../comps/Header";

function Contact() {
    
    return(
        <>
        <br />
        <Header />
        <div className="container-fluid" style={{textAlign: 'center'}}>
          <h1 style={{fontSize: '70px'}}>تواصل معنا</h1>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfqfUmfo3SsYq2oqRLDTmzV5rZAlKtiZsGeq6wpbsbqt_tIGQ/viewform?embedded=true" width="700" height="800">جارٍ التحميل…</iframe>
        </div>
        </>
    );
}

export default Contact;