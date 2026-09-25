import { useRef, useState } from "react";
import {
  ArrowLeft,
  Download,
  Edit3,
  Loader2,
} from "lucide-react";
import { useNavigate } from "react-router";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Navbar from "../components/Navbar";
import ProfileTemplate from "../components/ProfileTemplate";
import { getProfile } from "../utils/profileStorage";
import toast from "react-hot-toast";

function Preview() {
  const navigate = useNavigate();
  const profile = getProfile();
  const previewRef = useRef(null);

  const [isDownloading, setIsDownloading] = useState(false);

  const downloadPDF = async () => {
    if (!previewRef.current) return;

    try {
      setIsDownloading(true);

      const canvas = await html2canvas(previewRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
      });

      const imageData = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [530, 750],
      });

      pdf.addImage(
        imageData,
        "PNG",
        0,
        0,
        530,
        750
      );

      pdf.save(
        `${profile.name || "profile"}-profile.pdf`
      );

      toast.success("Profile downloaded!");
    } catch (error) {
      console.error("PDF download failed:", error);
      toast.error("Failed to download profile.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f1f5ff] text-[#152035]">
      <Navbar />

      <main className="mx-auto max-w-[1100px] px-5 py-8">
        {/* TOP BAR */}
        <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-bold">
              Your Profile
            </h1>

            <p className="mt-1 text-sm text-[#737b91]">
              Your profile is ready to download.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => navigate("/create")}
              className="flex items-center gap-2 rounded-lg border border-[#dfe2ef] bg-white px-4 py-2.5 text-sm font-semibold text-[#30374b] transition hover:bg-[#f8f8fc]"
            >
              <Edit3 size={16} />
              Edit
            </button>

            <button
              type="button"
              onClick={downloadPDF}
              disabled={isDownloading}
              className="flex items-center gap-2 rounded-lg bg-[#3d43da] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#3036c7] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isDownloading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Downloading...
                </>
              ) : (
                <>
                  <Download size={16} />
                  Download PDF
                </>
              )}
            </button>
          </div>
        </div>

        {/* DOCUMENT */}
        <div className="flex justify-center overflow-auto rounded-2xl border border-[#dfe3f5] bg-[#e9edff] px-5 py-10 shadow-inner">
          <div ref={previewRef}>
            <ProfileTemplate profile={profile} />
          </div>
        </div>

        <button
          type="button"
          onClick={() => navigate("/create")}
          className="mx-auto mt-6 flex items-center gap-2 text-sm font-medium text-[#3d43da]"
        >
          <ArrowLeft size={16} />
          Back to editor
        </button>
      </main>
    </div>
  );
}

export default Preview;