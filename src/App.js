
import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper 
        title="A special Decentralise app for voting"
        description="Build for IAI by IAI Student. Join us over 5+ hundred people using VoteUs for thier elcton system."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper 
        title="Smart User Interface "
        description="Experience a buttery UI of profiling your candidate. Smooth constant colors of a fluent UI design."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper 
        title="Deployment"
        description="VoteUS is built using Expo which runs natively on all users' devices. You can easily get your app into people's hands"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper 
        title="Creative way to showcase the store"
        description="The app contains a set of screens. The first screen lists all groupes of candidate, shows the details of a specific party and more to come on updates..."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>copyright©2022 Made by {" "}
        <span className="bold">MENO CORP</span>
        </p>
      </div>
    </>
  );
}

export default App;
