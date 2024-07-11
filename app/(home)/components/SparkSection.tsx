import { Sparkles } from "./lunar/Sparkles"
import { PinContainer } from "./aceternity/3d-pin";
import SparklesText from "./magicui/sparkle-text";

export default function Page() {
  return (
    <>
        <div className="text-center text-4xl text-white">
          <SparklesText text="My Publications" />
        </div>
      <div className="h-[40rem] w-full items-center justify-center">
        <PinContainer
          title="/arxiv.org"
          href="https://arxiv.org/abs/2006.11276"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              An Improved Spin-Down Rate for the Proposed White-Dwarf Pulsar AR Scorpii
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Read more about my most recent publication. 📄
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center" style={{ backgroundImage: "url('/images/paper_1.webp')" }} />
          </div>
        </PinContainer>



        <div className="relative h-96 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#8350e8,transparent_70%)] before:opacity-40 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-[#7876c566] after:bg-zinc-900">
        <Sparkles
          density={1200}
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </div>
      </div>

      
    </>
  )
}
