import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        fullName: String,
        email: String,
        phone: String,
        location: String,
        profession: String,
        linkedin: String,
        website: String,
        education: String,
        experience: String,
        projects: String,
        skills: String,
        template: { type: String, default: "modern" },
        accentColor: { type: String, default: "#4F46E5" },
    },
    { timestamps: true }
);

export default mongoose.model("Resume", resumeSchema);
