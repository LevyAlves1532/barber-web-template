// CONTAINERs
import { HeaderContainer } from "./containers/header";
import { BannerContainer } from "./containers/banner";

// STYLEs
import "./App.css";

export function App() {
  return (
    <div>
      <main>
        <HeaderContainer />
        <BannerContainer />
      </main>
    </div>
  )
}
