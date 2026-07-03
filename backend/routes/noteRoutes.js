const express = require("express");
const router = require("express").Router();
const Note = require("../models/Note");
const protect = require("../middleware/authMiddleware");
const { createNote,getNotes,getNotesbyId,updateNote,deleteNote } = require("../controllers/noteController");

// router.post("/", async (req, res) => {
    // try {
    //     const note = await Note.create({
    //         title: req.body.title
    //     });
    //     console.log(note);
    //     res.json(note);
    // } catch (err) {
    //     res.status(400).json({
    //         message: err.message
    //     });
    // }
// });

router.post("/",protect,createNote);

// router.get("/", async (req, res) => {
//     try {
//         const notes = await Note.find();
//         console.log(notes);
//         res.json(notes);
//     } catch (err) {
//         res.status(400).json({
//             message: err.message
//         });
//     }
// });

router.get("/",protect,getNotes);

// router.get("/:id", async (req, res) => {
//     try {
//         const note = await Note.findById(req.params.id);
//         if (!note) {
//             return res.status(404).json({
//                 message: "Note not found"
//             });
//         }
//         console.log(note);
//         res.json(note)
//     } catch (err) {
//         res.status(500).json({
//             message: err.message
//         });
//     }
// });

router.get("/:id",getNotesbyId);

// router.put("/:id", async (req, res) => {

//     try {
//         const note = await Note.findById(req.params.id);

//         if (!note) {
//             return res.status(404).json({
//                 message: "note not found"
//             });
//         }

//         note.title = req.body.title;

//         await note.save();
//         console.log(note);
//         res.json(note);

//     } catch (err) {
//         res.status(500).json({
//             message: err.message
//         })
//     }
// });
router.put("/:id",updateNote);

// router.delete("/:id", async(req,res)=>{
//     try{
//         const note = await Note.findById(req.params.id);

//         if(!note){
//             return res.status(404).json({
//                 message:"note not found"
//             })
//         }

//         console.log(note);
//         await note.deleteOne();
//         res.json({
//             message:"note deleted succesfully"
//         })
//     }catch(err){
//         res.status(500).json({
//             message: err.message
//         })
//     }
// });

router.delete("/:id",deleteNote);

module.exports = router;