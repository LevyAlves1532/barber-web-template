// CONTAINERs
import { HeaderContainer } from "./containers/header";
import { BannerContainer } from "./containers/banner";
import { PlansContainer } from "./containers/plans";
import { AboutContainer } from "./containers/about";

export function App() {
  return (
    <div>
      <main>
        <HeaderContainer />
        <BannerContainer />
        <PlansContainer />
        <AboutContainer />
      </main>
    </div>
  )
}
