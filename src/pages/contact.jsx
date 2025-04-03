import Header from "../comps/Header";
import "../styles.css"
function Contact() {
    
    return(
        <>
        <div className="conCon container-fluid">
          <br />
         <Header />
         <br />
         <img src="Logo3.png" alt="Site Logo" className="genImgOpt img-fluid" style={{maxWidth: '30%'}} />
         <div className="container-fluid" style={{float: 'left'}}>
           <p style={{wordWrap: 'break-word', fontWeight: '600', fontSize: '1.3rem'}}>إكتشف أفضل تجارب تناول الطعام في مكة المكرمة<br />
            يعرض تذوق مكة أفضل المطاعم والكنوز المخفية التي لابد من زيارتها في مختلف أنحاء المدينة<br />
            سواءً كنتم ترغبون في أطباق أصيلة، أو وجبات فاخرة، أو وجبات سريعة قريبة<br />
            نوفر لكم قوائم طعام وتوصيات من خبراء لمساعدتكم في العثور على المكان المثالي<br />
            استكشفوا مشهد الطعام النابض بالحياة في مكة المكرمة، واستمتعوا بنكهات لا تُنسى مع اختياراتنا من خبرائنا</p>
         </div>
        </div>   
        







        <div className="container-fluid conGog">
          <h1 style={{fontSize: '70px'}}>تواصل معنا</h1>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfqfUmfo3SsYq2oqRLDTmzV5rZAlKtiZsGeq6wpbsbqt_tIGQ/viewform?embedded=true" width="400" height="800">جارٍ التحميل…</iframe>
        </div>
        </>
    );
}

export default Contact;