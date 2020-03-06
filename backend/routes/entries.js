const entryRoutes = require('express').Router();
let Entry = require('../models/entry.model');

entryRoutes.route('/').get((req, res) => {
    Entry.find()
        .then(entries => res.json(entries))
        .catch(err => res.status(400).json('Error: ' + err));
});

entryRoutes.route('/:id').get((req, res) => {
    Entry.findById(req.params.id)
    .then(entry => res.json(entry))
    .catch(err => res.status(400).json('Error: ' + err));
});

entryRoutes.route('/:id').delete((req, res) => {
    Entry.findByIdAndDelete(req.params.id)
    .then(entry => res.json('Entry deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

entryRoutes.route('/add').post((req, res) => {
    let entry = new Entry(req.body);
    entry.save()
        .then(() => res.json('entry added'))
        .catch(err => res.status(400).json('Error: ' + err))
});

entryRoutes.route('/update/:id').post((req, res) => {
    Entry.findById(req.params.id)
    .then(entry => {
        entry.entry_name = req.body.entry_name;
        entry.entry_time = Number(req.body.entry_time);
        entry.entry_pages = Number(req.body.entry_pages);
        entry.entry_completed = Boolean(req.body.entry_completed);

        entry.save()
        .then(() => res.json('Exercise updated'))
        .catch(err => res.status(404).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = entryRoutes;