import IconCloud from "./magicui/icon-cloud";

const slugs = [
  
  "git",
  "github",
  "visualstudiocode",
  "windows",
  "linux",
  "python",
  "powershell"
];

export default function Skills() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  )
}
