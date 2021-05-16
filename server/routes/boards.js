const router = require('express').Router();
const Joi = require('joi');

const { Boards, Issues } = require('../models');
const validation = require('../utils/validation');

router.get('/boards/', async (req, res, next) => {
  try {
    const boards = await Boards.findAll();
    return res.json(boards);
  } catch (err) {
    return next(err);
  }
});

router.get('/boards/:boardId/:boardKey', [validation({
  query: {},
  params: {
    boardId: Joi.number().required(),
    boardKey: Joi.string().required(),
  },
  body: {},
})], async (req, res, next) => {
  try {
    const board = await Boards.findOne({
      where: {
        id: req.params.boardId,
        key: req.params.boardKey,
      },
    });

    if (!board) return res.sendStatus(404);

    return res.json(board);
  } catch (err) {
    return next(err);
  }
});

router.get('/boards/:boardId/:boardKey/issues', [validation({
  query: {},
  params: {
    boardId: Joi.number().required(),
    boardKey: Joi.string().required(),
  },
  body: {},
})], async (req, res, next) => {
  try {
    const board = await Boards.findOne({
      where: {
        id: req.params.boardId,
        key: req.params.boardKey,
      },
    });

    if (!board) return res.sendStatus(404);

    const issues = await Issues.findAll({
      attributes: {
        exclude: ['description', 'board_id'],
      },
      where: {
        board_id: board.id,
      },
    });

    return res.json(issues);
  } catch (err) {
    return next(err);
  }
});

router.post('/boards/', [validation({
  query: {},
  params: {},
  body: {
    key: Joi.string().required(),
  },
})], async (req, res, next) => {
  try {
    const { key } = req.body;

    const board = await Boards.create({
      key,
    });

    if (!board) return res.sendStatus(400);

    return res.json(board);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
