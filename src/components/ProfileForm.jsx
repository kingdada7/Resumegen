import { useState } from "react";
import { Plus, X } from "lucide-react";

function ProfileForm({ profile, setProfile }) {
  const [skillInput, setSkillInput] = useState("");

  const updateField = (field, value) => {
    setProfile((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const addSkill = () => {
    const skill = skillInput.trim();

    if (!skill) return;

    if (profile.skills.includes(skill)) {
      setSkillInput("");
      return;
    }

    setProfile((current) => ({
      ...current,
      skills: [...current.skills, skill],
    }));

    setSkillInput("");
  };

  const removeSkill = (skillToRemove) => {
    setProfile((current) => ({
      ...current,
      skills: current.skills.filter((skill) => skill !== skillToRemove),
    }));
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-[#152035]">
          Your Information
        </h2>

        <p className="mt-1 text-sm text-[#7a8298]">
          Tell us a little about yourself.
        </p>
      </div>

      <div className="space-y-5">
        <FormInput
          label="Full Name"
          value={profile.name}
          placeholder="John Doe"
          onChange={(value) => updateField("name", value)}
        />

        <FormInput
          label="Profession"
          value={profile.profession}
          placeholder="Frontend Developer"
          onChange={(value) => updateField("profession", value)}
        />

        <div className="grid gap-5 sm:grid-cols-2">
          <FormInput
            label="Email"
            value={profile.email}
            placeholder="john@example.com"
            onChange={(value) => updateField("email", value)}
          />

          <FormInput
            label="Phone"
            value={profile.phone}
            placeholder="+234 800 000 0000"
            onChange={(value) => updateField("phone", value)}
          />
        </div>

        <FormInput
          label="Location"
          value={profile.location}
          placeholder="Lagos, Nigeria"
          onChange={(value) => updateField("location", value)}
        />

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#30374b]">
            About You
          </label>

          <textarea
            value={profile.about}
            onChange={(e) => updateField("about", e.target.value)}
            placeholder="Write a short professional introduction..."
            rows={5}
            className="w-full resize-none rounded-lg border border-[#dfe2ef] bg-white px-4 py-3 text-sm text-[#152035] outline-none transition placeholder:text-[#a2a8b8] focus:border-[#3d43da] focus:ring-4 focus:ring-[#3d43da12]"
          />
        </div>
      </div>

      <div className="border-t border-[#eceef5] pt-6">
        <label className="mb-2 block text-sm font-semibold text-[#30374b]">
          Skills
        </label>

        <div className="flex gap-2">
          <input
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addSkill();
              }
            }}
            placeholder="e.g. React"
            className="min-w-0 flex-1 rounded-lg border border-[#dfe2ef] bg-white px-4 py-3 text-sm outline-none focus:border-[#3d43da]"
          />

          <button
            type="button"
            onClick={addSkill}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#3d43da] text-white transition hover:bg-[#3036c7]"
          >
            <Plus size={18} />
          </button>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {profile.skills.map((skill) => (
            <div
              key={skill}
              className="flex items-center gap-2 rounded-md bg-[#f0f2ff] px-3 py-2 text-xs font-medium text-[#3d43da]"
            >
              {skill}

              <button
                type="button"
                onClick={() => removeSkill(skill)}
                className="hover:text-red-500"
              >
                <X size={13} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-[#eceef5] pt-6">
        <p className="mb-4 text-sm font-semibold text-[#30374b]">
          Social Links
        </p>

        <div className="space-y-4">
          <FormInput
            label="LinkedIn"
            value={profile.linkedin}
            placeholder="linkedin.com/in/johndoe"
            onChange={(value) => updateField("linkedin", value)}
          />

          <FormInput
            label="GitHub"
            value={profile.github}
            placeholder="github.com/johndoe"
            onChange={(value) => updateField("github", value)}
          />
        </div>
      </div>
    </div>
  );
}

function FormInput({ label, value, placeholder, onChange }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-[#30374b]">
        {label}
      </label>

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-[#dfe2ef] bg-white px-4 py-3 text-sm text-[#152035] outline-none transition placeholder:text-[#a2a8b8] focus:border-[#3d43da] focus:ring-4 focus:ring-[#3d43da12]"
      />
    </div>
  );
}

export default ProfileForm;