import img3 from "@/assets/figma/clapping.gif";

export default function Frame() {
  return (
    <div className="bg-[#f9f9f9] relative size-full">
      <div className="absolute h-[120px] left-0 top-0 w-[225.705px]" data-name="鼓掌 3">
        <img alt="" className="absolute inset-0 max-w-none mix-blend-darken object-cover pointer-events-none size-full" src={img3} />
      </div>
    </div>
  );
}