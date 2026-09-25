import {
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

function ProfileTemplate({ profile }) {
  return (
    <article className="relative min-h-[750px] w-[530px] bg-white p-12 pb-[70px] text-[#152035] shadow-[0_15px_30px_#2d416e20]">
      {/* Header */}
      <header className="border-b border-[#e5e7ef] pb-7">
        <h1 className="text-[32px] font-bold tracking-[-1px]">
          {profile.name || "Your Name"}
        </h1>

        <p className="mt-1 text-[15px] font-semibold text-[#3d43da]">
          {profile.profession || "Your Profession"}
        </p>

        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[10px] text-[#737b91]">
          {profile.location && (
            <span className="flex items-center gap-1">
              <MapPin size={11} />
              {profile.location}
            </span>
          )}

          {profile.email && (
            <span className="flex items-center gap-1">
              <Mail size={11} />
              {profile.email}
            </span>
          )}

          {profile.phone && (
            <span className="flex items-center gap-1">
              <Phone size={11} />
              {profile.phone}
            </span>
          )}
        </div>
      </header>

      {/* About */}
      {profile.about && (
        <section className="mt-7">
          <SectionTitle title="About" />

          <p className="mt-3 text-[12px] leading-[1.8] text-[#596277]">
            {profile.about}
          </p>
        </section>
      )}

      {/* Skills */}
      {profile.skills.length > 0 && (
        <section className="mt-7">
          <SectionTitle title="Skills" />

          <div className="mt-3 flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md bg-[#f0f2ff] px-3 py-2 text-[10px] font-semibold text-[#3d43da]"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Social */}
      {(profile.linkedin || profile.github) && (
        <section className="mt-7">
          <SectionTitle title="Connect" />

          <div className="mt-3 flex flex-col gap-2 text-[11px] text-[#596277]">
            {profile.linkedin && (
              <div className="flex items-center gap-2">
                <Linkedin size={13} className="text-[#3d43da]" />
                {profile.linkedin}
              </div>
            )}

            {profile.github && (
              <div className="flex items-center gap-2">
                <Github size={13} className="text-[#3d43da]" />
                {profile.github}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="absolute bottom-7 left-12 right-12 border-t border-[#eceef5] pt-3">
        <div className="flex items-center justify-between text-[8px] text-[#a0a6b5]">
          <span>Professional Profile</span>

          <span className="flex items-center gap-1">
            <Globe size={9} />
            Created with Profilely
          </span>
        </div>
      </footer>
    </article>
  );
}

function SectionTitle({ title }) {
  return (
    <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#3d43da]">
      {title}
    </p>
  );
}

export default ProfileTemplate;