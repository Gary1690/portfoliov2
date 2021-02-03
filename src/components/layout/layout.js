import Footer from "./footer"
import Header from "./header"





const Layout = (props) => {
    
    return (
        <div className ="position-relative">
            <Header/>
            {props.children}
            <Footer/>
        </div>   
    )
}





export default Layout ;
