// COMPONENTs
import { Button } from "../../components/button";

// CONSTANTs
import { styles } from "../../constants/styles";
import { images } from "../../constants/images";

export function BannerContainer() {
  return (
    <section className="w-full h-[768px] bg-stone-900">
      <div 
        className={`${styles.container_page} h-full bg-center bg-cover relative`}
        style={{ backgroundImage: `url(${images.banner})` }}
      >
        <div className="max-w-[1280px] w-full mx-auto h-full px-5 flex flex-col justify-center relative z-10">
          <div className="max-w-[520px] w-full">
            <h1 className="text-8xl font-kaushan uppercase text-white text-stroke-title text-shadow">
              Your Hair
            </h1>
            <h2 className="text-7xl font-kaushan uppercase text-yellow-600 leading-[85px] mb-8">
              DESERVES
              THE BEST
            </h2>
            <div className="flex gap-10 pl-3 items-center">
              <Button style="hover:bg-white group">
                <p className="text-lg font-medium text-white transition-all ease-linear duration-[0.5s] group-hover:text-yellow-800">Get in Touch</p>
              </Button>

              <button className="flex items-center gap-3">
                <img src={images.play} alt="button play" />
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
