import Resume from "../models/Resume.js";

// CREATE Resume
export const createResume = async (req, res) => {
    try {
        const resume = await Resume.create({
            ...req.body,
            userId: req.user.id,
        });

        res.status(201).json(resume);
    } catch (error) {
        res.status(500).json({ message: "Error creating resume", error });
    }
};

// GET all resumes of logged-in user
export const getMyResumes = async (req, res) => {
    try {
        const resumes = await Resume.find({ userId: req.user.id });
        res.json(resumes);
    } catch (error) {
        res.status(500).json({ error });
    }
};

// GET Single resume (ONLY if it belongs to logged user)
export const getResumeById = async (req, res) => {
    try {
        const resume = await Resume.findOne({
            _id: req.params.id,
            userId: req.user.id   // ensure resume belongs to logged user
        });

        if (!resume) {
            return res.status(404).json({
                message: "Resume not found"
            });
        }

        res.status(200).json(resume);
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error: error.message
        });
    }
};



// UPDATE resume (ONLY if it belongs to logged user)
export const updateResume = async (req, res) => {
    try {
        const updated = await Resume.findOneAndUpdate(
            { _id: req.params.id, userId: req.user.id },
            req.body,
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({ message: "Not allowed!" });
        }

        res.json(updated);
    } catch (error) {
        res.status(500).json({ error });
    }
};

// DELETE resume (ONLY if it belongs to logged user)
export const deleteResume = async (req, res) => {
    try {
        const deleted = await Resume.findOneAndDelete({
            _id: req.params.id,
            userId: req.user.id
        });

        if (!deleted) {
            return res.status(404).json({ message: "Not allowed!" });
        }

        res.json({ message: "Resume Deleted" });
    } catch (error) {
        res.status(500).json({ error });
    }
};
