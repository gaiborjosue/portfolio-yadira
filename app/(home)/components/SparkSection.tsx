import { Sparkles } from "./lunar/Sparkles"
import { PinContainer } from "./aceternity/3d-pin";
import SparklesText from "./magicui/sparkle-text";

export default function Spark() {
  return (
    <div>
      
      <div className="h-auto min-h-[40rem] w-full items-center justify-center px-4 sm:px-0">
          <div className="text-center text-4xl text-white mb-20">
              <SparklesText text="My Publications" />
          </div>
          <PinContainer
            title="/arxiv.org"
            href="https://arxiv.org/abs/2006.11276"
            containerClassName="w-full max-w-sm mx-auto"
          >
            <div className="w-full h-64 bg-cover bg-center" style={{backgroundImage: "url('/images/paper_1.webp')"}}>
              <div className="p-4 bg-black bg-opacity-50 text-white">
                <h3 className="font-bold text-lg">An Improved Spin-Down Rate for the Proposed White-Dwarf Pulsar AR Scorpii</h3>
                <p className="mt-2">Read more about my most recent publication. 📄</p>
              </div>
            </div>
          </PinContainer>
      </div>

      <div className="relative -mt-60 h-96 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#8350e8,transparent_70%)] before:opacity-40 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-[#7876c566] after:bg-zinc-900">
        <Sparkles
          density={1200}
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </div>
    </div>
  )
}
