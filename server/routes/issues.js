const router = require('express').Router();
const Joi = require('joi');
const { Op } = require('sequelize');

const { Boards, Issues } = require('../models');
const validation = require('../utils/validation');

router.get('/issues/:issueId/', [validation({
  query: {},
  params: {
    issueId: Joi.number().required(),
  },
  body: {},
})], async (req, res, next) => {
  try {
    const issue = await Issues.findOne({
      where: {
        id: req.params.issueId,
      },
    });

    if (!issue) return res.sendStatus(404);

    return res.json(issue);
  } catch (err) {
    return next(err);
  }
});

router.post('/issues/', [validation({
  query: {},
  params: {},
  body: {
    boardId: Joi.number().required(),
    boardKey: Joi.string().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
  },
})], async (req, res, next) => {
  try {
    const {
      boardId, boardKey, title, description,
    } = req.body;

    const board = await Boards.findOne({
      where: {
        id: boardId,
        key: boardKey,
      },
    });

    if (!board) return res.sendStatus(404);

    const issue = await Issues.create({
      board_id: board.id,
      title,
      description,
      status: 0,
    });

    return res.json(issue);
  } catch (err) {
    return next(err);
  }
});

router.put('/issues/:issueId/', [validation({
  query: {},
  params: {
    issueId: Joi.number().required(),
  },
  body: {
    boardId: Joi.number().required(),
    boardKey: Joi.string().required(),
    status: Joi.number().min(0).max(2).required(),
  },
})], async (req, res, next) => {
  try {
    const {
      boardId, boardKey, status,
    } = req.body;

    const { issueId } = req.params;

    const board = await Boards.findOne({
      where: {
        id: boardId,
        key: boardKey,
      },
    });

    if (!board) return res.sendStatus(404);

    const issue = await Issues.findOne({
      where: {
        board_id: board.id,
        id: issueId,
        status: {
          [Op.lt]: status,
        },
      },
    });

    if (!issue) return res.sendStatus(404);

    await issue.update({
      status,
    });

    return res.json(issue);
  } catch (err) {
    return next(err);
  }
});

router.delete('/issues/:issueId/', [validation({
  query: {},
  params: {
    issueId: Joi.number().required(),
  },
  body: {
    boardId: Joi.number().required(),
    boardKey: Joi.string().required(),
  },
})], async (req, res, next) => {
  try {
    const {
      boardId, boardKey,
    } = req.body;

    const { issueId } = req.params;

    const board = await Boards.findOne({
      where: {
        id: boardId,
        key: boardKey,
      },
    });

    if (!board) return res.sendStatus(404);

    const issue = await Issues.findOne({
      where: {
        board_id: board.id,
        id: issueId,
      },
    });

    if (!issue) return res.sendStatus(404);

    await issue.destroy();

    return res.sendStatus(200);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
