import img1 from "@/assets/figma/confetti.gif";

export default function Frame() {
  return (
    <div className="bg-[#f9f9f9] relative size-full">
      <div className="absolute h-[100px] left-0 top-0 w-[200px]" data-name="彩色拉炮 1">
        <img alt="" className="absolute inset-0 max-w-none mix-blend-darken object-cover pointer-events-none size-full" src={img1} />
      </div>
    </div>
  );
}