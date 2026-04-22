import { Index } from "@/components/data/menubar";

export default function Home() {
  return (
    <div>
      <Index />
      <div className="w-full h-full flex flex-row justify-center">
        <div className="w-ful h-full flexbox flex-col pt-25">
          <h1 className="bg-white border text-black HomeLogo">Off line</h1>
        </div>
      </div>
    </div>
  )
}