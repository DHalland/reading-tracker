const entryRoutes = require('express').Router();
const Entry = require('../models/entry.model');
const auth = require('../mid/auth')

entryRoutes.route('/').get(auth, (req, res) => {
    Entry.find()
        .then(entries => res.json(entries))
        .catch(err => res.status(400).json('Error: ' + err));
});

entryRoutes.route('/:id').get(auth, (req, res) => {
    Entry.find({
        user_id: req.params.id
    })
    .then(entry => res.json(entry))
    .catch(err => res.status(400).json('Error: ' + err));
});

entryRoutes.route('/:id').delete(auth, (req, res) => {
    Entry.findByIdAndDelete(req.params.id)
    .then(entry => res.json('Entry deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

entryRoutes.route('/add').post(auth, (req, res) => {
    let entry = new Entry(req.body);
    entry.user_id = req.user.id;
    entry.save()
        .then(() => res.json('entry added'))
        .catch(err => res.status(400).json('Error: ' + err))
});

entryRoutes.route('/update/:id').post(auth, (req, res) => {
    Entry.findById(req.params.id)
    .then(entry => {
        entry.user_id = req.user.id;
        entry.entry_name = req.body.entry_name;
        entry.entry_time = Number(req.body.entry_time);
        entry.entry_pages = Number(req.body.entry_pages);
        entry.entry_completed = Boolean(req.body.entry_completed);

        entry.save()
        .then(() => res.json('Entry updated'))
        .catch(err => res.status(404).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = entryRoutes;