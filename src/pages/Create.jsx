import { useEffect, useState } from "react";
import { ArrowRight, Download, Eye, Save } from "lucide-react";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import ProfileForm from "../components/ProfileForm";
import ProfileTemplate from "../components/ProfileTemplate";
import { getProfile, saveProfile } from "../utils/profileStorage";

function Create() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState(() => getProfile());

  useEffect(() => {
    saveProfile(profile);
  }, [profile]);

  const handlePreview = () => {
    saveProfile(profile);
    navigate("/preview");
  };

  return (
    <div className="min-h-screen bg-[#f7f8ff] text-[#152035]">
      <Navbar />

      <main className="mx-auto max-w-[1400px] px-5 py-8">
        <div className="mb-7">
          <h1 className="text-2xl font-bold">Create your profile</h1>

          <p className="mt-1 text-sm text-[#737b91]">
            Fill in your information and watch your profile update live.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[430px_1fr]">
          {/* FORM */}
          <div className="rounded-2xl border border-[#e3e5f2] bg-white p-6 shadow-[0_10px_30px_#27345a0b]">
            <ProfileForm
              profile={profile}
              setProfile={setProfile}
            />

            <button
              type="button"
              onClick={handlePreview}
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-[#3d43da] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#3036c7]"
            >
              Preview Profile
              <ArrowRight size={17} />
            </button>
          </div>

          {/* PREVIEW */}
          <div className="overflow-hidden rounded-2xl border border-[#e3e5f2] bg-[#eef1ff]">
            <div className="flex items-center justify-between border-b border-[#dfe3f7] bg-white px-5 py-4">
              <div className="flex items-center gap-2">
                <Eye size={17} className="text-[#3d43da]" />

                <span className="text-sm font-semibold">
                  Live Preview
                </span>
              </div>

              <span className="flex items-center gap-1.5 text-xs text-[#7a8298]">
                <Save size={13} />
                Auto-saved
              </span>
            </div>

            <div className="flex min-h-[850px] justify-center overflow-auto px-5 py-10">
              <ProfileTemplate profile={profile} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Create;