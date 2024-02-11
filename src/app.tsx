// CONTAINERs
import { HeaderContainer } from "./containers/header";
import { BannerContainer } from "./containers/banner";
import { PlansContainer } from "./containers/plans";
import { AboutContainer } from "./containers/about";
import { ServicesContainer } from "./containers/services";
import { PortfolioContainer } from "./containers/portfolio";
import { CustomersContainer } from "./containers/customers";
import { ScheduleContainer } from "./containers/schedule";

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
        <CustomersContainer />
        <ScheduleContainer />
      </main>
    </div>
  )
}
