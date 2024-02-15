import Container from "components/Container";
import Footer from "components/Footer";
import Header from "components/Header";
import FavoritesProvider from "contexts/Favorites";
import { Outlet } from "react-router-dom";

export default function BasePage ()
{
  return (
    <main>
       <Header/>
            <FavoritesProvider>
                 <Container>
                       <Outlet/>
                 </Container>
           </FavoritesProvider>
        <Footer/>
    </main>
  );
}