import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"
import { Image } from "../Image"

// 1. Destructure the "images" prop (with an empty array default fallback)
export default function Carrousel({ images = [] }) {
  const [api, setApi] = useState(undefined)
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  // Safety check: Don't render anything if the array is empty
  if (images.length === 0) {
    return <div className="text-center p-4 text-muted-foreground">No images available</div>
  }

  return (
    <div className="">
      <Carousel 
        setApi={setApi} 
        opts={{ loop: true }} 
        className="w-full h-full "
      >
        <CarouselContent className=" h-full w-full md:max-w-2xl" >
          {images.map((image, index) => (
            <CarouselItem key={image.id || index} className=" aspect-4/3">
              <Image
                key={image.id} 
                src={image.src}
                alt={image.title || `Slide ${index + 1}`}
                className="xs:rounded-xl md:rounded-3xl "
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Side Controls */}
        <button
          type="button"
          variant="outline"
          size="icon"
          className="absolute cursor-pointer  left-8 top-1/2 -translate-y-1/2 rounded-full z-10 hidden sm:flex bg-darken-2/background backdrop-blur-sm hover:bg-darken-2/background size-8 centered active:scale-100 "
          onClick={() => api?.scrollPrev()}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous slide</span>
        </button>
        <button
          type="button"
          className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 rounded-full z-10 hidden sm:flex bg-darken-1/background size-8 centered backdrop-blur-sm hover:bg-darken-2/background  "
          onClick={() => api?.scrollNext()}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next slide</span>
        </button>
      </Carousel>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2.5  rounded-full transition-all duration-300 border ${
              index === current 
                ? "bg-darken-6/background border-border w-5"       // Active Dot: Dark, wider pill
                : "bg-darken-2/background border-border w-2.5 hover:bg-slate-400 hover:border-slate-400 cursor-pointer" // Inactive Dot: Visible gray circle
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
