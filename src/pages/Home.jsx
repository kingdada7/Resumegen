import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Link } from "react-router";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="min-h-screen bg-[#f7f8ff] text-[#152035]">
      <Navbar />

      <main>
        <section className="relative overflow-hidden px-6 pb-20 pt-20">
          <div className="mx-auto max-w-[1100px] text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#dddfff] bg-white px-4 py-2 text-sm font-medium text-[#3d43da] shadow-sm">
              <Sparkles size={15} />
              Simple. Professional. Yours.
            </div>

            <h1 className="mx-auto max-w-[850px] text-5xl font-bold leading-[1.05] tracking-[-2px] text-[#152035] md:text-6xl">
              Create a professional profile
              <span className="text-[#3d43da]"> in minutes.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-[650px] text-lg leading-8 text-[#687089]">
              Enter your information, preview your profile instantly, and
              download a beautiful professional document.
            </p>

            <div className="mt-9 flex justify-center">
              <Link
                to="/create"
                className="group flex items-center gap-2 rounded-xl bg-[#3d43da] px-7 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_#3d43da35] transition hover:-translate-y-0.5 hover:bg-[#3036c7]"
              >
                Create My Profile

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap justify-center gap-5 text-sm text-[#687089]">
              <span className="flex items-center gap-2">
                <Check size={16} className="text-[#3d43da]" />
                No account required
              </span>

              <span className="flex items-center gap-2">
                <Check size={16} className="text-[#3d43da]" />
                Live preview
              </span>

              <span className="flex items-center gap-2">
                <Check size={16} className="text-[#3d43da]" />
                Download instantly
              </span>
            </div>
          </div>
        </section>

        {/* Preview mockup */}
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-[1000px]">
            <div className="rounded-2xl border border-[#e1e4f5] bg-white p-3 shadow-[0_25px_70px_#28335a18]">
              <div className="rounded-xl bg-[#f1f3ff] p-6 md:p-10">
                <div className="mx-auto max-w-[600px] bg-white p-8 shadow-[0_15px_30px_#2d416e20]">
                  <div className="border-b border-[#e5e7ef] pb-5">
                    <h2 className="text-2xl font-bold text-[#152035]">
                      Your Name
                    </h2>

                    <p className="mt-1 text-sm font-medium text-[#3d43da]">
                      Your Profession
                    </p>

                    <p className="mt-3 text-xs text-[#737b91]">
                      Lagos, Nigeria · email@example.com · +234 800 000 0000
                    </p>
                  </div>

                  <div className="mt-6">
                    <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#3d43da]">
                      About
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[#596277]">
                      A short professional introduction about yourself,
                      your experience, and what you do.
                    </p>
                  </div>

                  <div className="mt-6">
                    <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#3d43da]">
                      Skills
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {["React", "JavaScript", "Node.js", "MongoDB"].map(
                        (skill) => (
                          <span
                            key={skill}
                            className="rounded-md bg-[#f0f2ff] px-3 py-1.5 text-xs font-medium text-[#3d43da]"
                          >
                            {skill}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;