// CONTAINERs
import { HeaderContainer } from "./containers/header";
import { BannerContainer } from "./containers/banner";
import { PlansContainer } from "./containers/plans";
import { AboutContainer } from "./containers/about";
import { ServicesContainer } from "./containers/services";
import { PortfolioContainer } from "./containers/portfolio";

export function App() {
  return (
    <div>
      <main>
        <HeaderContainer />
        <BannerContainer />
        <PlansContainer />
        <AboutContainer />
        <ServicesContainer />
        <PortfolioContainer />
      </main>
    </div>
  )
}
