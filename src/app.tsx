// CONTAINERs
import { HeaderContainer } from "./containers/header";
import { BannerContainer } from "./containers/banner";
import { PlansContainer } from "./containers/plans";
import { AboutContainer } from "./containers/about";
import { ServicesContainer } from "./containers/services";
import { PortfolioContainer } from "./containers/portfolio";
import { CustomersContainer } from "./containers/customers";
import { ScheduleContainer } from "./containers/schedule";
import { FooterContainer } from "./containers/footer";

export function App() {
  return (
    <div>
      <HeaderContainer />
      <main>
        <BannerContainer />
        <PlansContainer />
        <AboutContainer />
        <ServicesContainer />
        <PortfolioContainer />
        <CustomersContainer />
        <ScheduleContainer />
      </main>
      <FooterContainer />
    </div>
  )
}
