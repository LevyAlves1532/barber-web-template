// COMPONENTs
import { Button } from "../../components/button";

// CONSTANTs
import { styles } from "../../constants/styles";
import { images } from "../../constants/images";

export function BannerContainer() {
  return (
    <section className="w-full h-[768px] bg-stone-900" id="home">
      <div 
        className={`${styles.container_page} h-full bg-center bg-cover relative`}
        style={{ backgroundImage: `url(${images.banner})` }}
      >
        <div className="max-w-[1280px] w-full mx-auto h-full px-5 flex flex-col justify-center relative z-[2]">
          <div className="max-w-[520px] w-full">
            <h1 className="text-[15vw] sm:text-8xl font-kaushan uppercase text-white text-stroke-title text-shadow">
              Your Hair
            </h1>
            <h2 className="text-[12vw] sm:text-7xl font-kaushan uppercase text-yellow-600 leading-[14vw] sm:leading-[85px] mb-8">
              DESERVES
              THE BEST
            </h2>
            <div className="flex flex-col sm:flex-row gap-10 pl-3 items-center">
              <Button style="hover:bg-white group w-full sm:w-fit">
                <p className={`text-lg font-medium text-white ${styles.effect} group-hover:text-yellow-800`}>Get in Touch</p>
              </Button>

              <button className="flex items-center gap-3">
                <img src={images.play} width={59} height={59} alt="button play" />
                <p className="text-lg text-white font-medium">
                  Play Video
                </p>
              </button>
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-stone-900/60 z-1" />
      </div>
    </section>
  );
}
