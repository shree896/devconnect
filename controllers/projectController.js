const Project = require("../models/Project");

exports.createProject = async (req, res) => {
    try {
        const { name, description, members } = req.body;
        const project = await Project.create({ name, description, members });

        res.status(201).json({ project });
    } catch (error) {
        res.status(500).json({ error: "Failed to create project" });
    }
};

exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find().populate("members", "username email");
        res.json(projects);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch projects" });
    }
};

exports.getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id).populate("members", "username email");
        if (!project) return res.status(404).json({ error: "Project not found" });

        res.json(project);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch project" });
    }
};

exports.updateProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!project) return res.status(404).json({ error: "Project not found" });

        res.json(project);
    } catch (error) {
        res.status(500).json({ error: "Failed to update project" });
    }
};

exports.deleteProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndDelete(req.params.id);
        if (!project) return res.status(404).json({ error: "Project not found" });

        res.json({ message: "Project deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete project" });
    }
};
