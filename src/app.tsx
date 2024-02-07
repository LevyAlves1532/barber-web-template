// CONTAINERs
import { HeaderContainer } from "./containers/header";
import { BannerContainer } from "./containers/banner";
import { PlansContainer } from "./containers/plans";

export function App() {
  return (
    <div>
      <main>
        <HeaderContainer />
        <BannerContainer />
        <PlansContainer />
      </main>
    </div>
  )
}
