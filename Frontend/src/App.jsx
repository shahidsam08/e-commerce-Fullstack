import Homepage from "./pages/main/Homepage"
import {Routes, Route} from 'react-router'
import { BrowserRouter } from "react-router"
import CreateAccount from "./pages/sign_up/CreateAccount"
import SignInpage from "./pages/sign_in/SignInpage"
import Cartpage from "./pages/cart/Cartpage"
import Profilepage from "./pages/profile/Profilepage"
import Terms_page from "./pages/Terms_privacy_page/Terms_page"
import Privacypage from "./pages/Terms_privacy_page/privacypage"
import Become_seller from "./pages/Become_Seller/Become_seller"
import Man_section from "./pages/Sections_page/Man_section/Man_section"
function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/signin_page" element={<SignInpage />} />
        <Route path="/signup_page" element={<CreateAccount />} />
        <Route path="/cart_page" element={<Cartpage />} />
        <Route path="/profile_page" element={<Profilepage />} />
        {/* Terms and privacy pages */}
        <Route path="/companies_terms" element={<Terms_page />} />
        <Route path="/companies_privacy" element={<Privacypage />} />
        <Route path="/become_seller" element={<Become_seller />} />
        <Route path="/manpage_section" element={<Man_section />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
