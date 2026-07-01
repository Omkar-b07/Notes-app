const Note = require("../models/Note");

const createNote = async (req, res) => {
    try {
        const note = await Note.create({
            title: req.body.title,
            user: req.user
        });
        console.log(note);
        res.json(note);
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
};

const getNotes = async (req, res) => {
    try {
        const notes = await Note.find({
            user: req.user
        });
        console.log(notes);
        res.json(notes);
    } catch (err) {
        res.status(400).json({
            message: err.message
        });
    }
}

const getNotesbyId = async (req, res) => {
    try {
        const note = await Note.findOne({
            _id : req.params.id,
            user : req.user
        });
        if (!note) {
            return res.status(404).json({
                message: "Note not found"
            });
        }
        console.log(note);
        res.json(note)
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
}

const updateNote = async (req, res) => {
    try {
        const note = await Note.findOne({
            _id : req.params.id,
            user : req.user
        })

        if (!note) {
            return res.status(404).json({
                message: "note not found"
            });
        }

        note.title = req.body.title;

        await note.save();
        console.log(note);
        res.json(note);

    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

const deleteNote = async (req, res) => {
    try {
        const note = await Note.findOne({
            _id :req.params.id,
            user :req.user
        });

        if (!note) {
            return res.status(404).json({
                message: "note not found"
            })
        }

        console.log(note);
        await note.deleteOne();
        res.json({
            message: "note deleted succesfully"
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

module.exports = ({
    createNote,
    getNotes,
    getNotesbyId,
    updateNote,
    deleteNote
});sta