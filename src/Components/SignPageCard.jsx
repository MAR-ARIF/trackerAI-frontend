import { Sparkles } from "lucide-react"

function SignPageCard(){
  return (
    <section className="min-h-screen bg-[#4F3DF5] text-white">
      
      <div className="mx-auto flex min-h-screen flex-col px-14 py-16">

        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">

            <Sparkles size={25}  />
          </div>

          <h1 className="text-2xl font-bold tracking-tight">
            TrackerAI
          </h1>
        </div>


      
        <div className="mt-auto pt-32">

          <blockquote className="max-w-md text-2xl font-semibold leading-[1.7] tracking-tight ">
            "TrackerAI helped me land my role at Linear. The AI insights
            showed me patterns I'd completely missed in my applications."
          </blockquote>


          <div className="mt-12 flex items-center gap-3">

       
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-lg font-semibold">
              SM
            </div>

            <div>
              <p className="text-lg font-semibold">
                Sarah M.
              </p>

              <p className="text-md text-white/60">
                Software Engineer at Linear
              </p>
            </div>

          </div>

        </div>


    
        <div className="mt-auto grid grid-cols-3 max-w-md pt-32">

          <div>
            <p className="text-2xl font-bold">
              2,400+
            </p>
            <p className="mt-2 text-lg text-white/60">
              Users tracking
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold ">
              18,000+
            </p>
            <p className="mt-2 text-lg text-white/60">
              Applications logged
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold ">
              67%
            </p>
            <p className="mt-2 text-lg text-white/60">
              Avg. success lift
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
export default SignPageCard