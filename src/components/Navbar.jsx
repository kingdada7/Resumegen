import { Link } from "react-router";
import { FileText } from "lucide-react";

function Navbar() {
  return (
    <header className="w-full border-b border-[#e8eaff] bg-white">
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-[18px] font-bold text-[#25295f]"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#3d43da] text-white">
            <FileText size={19} />
          </div>

          Profilely
        </Link>

        <Link
          to="/create"
          className="rounded-lg bg-[#3d43da] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#3036c7]"
        >
          Create Profile
        </Link>
      </div>
    </header>
  );
}

export default Navbar;