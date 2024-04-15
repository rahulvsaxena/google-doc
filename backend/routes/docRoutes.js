import express from 'express';
import { Doc } from '../models/dataModel.js';

const router = express.Router();

router.post('/', async (request, response) => {

  try {
    if (!request.body.title){
      return response.status(400).send({
        message: 'Send title'
      });
    }
    const newDoc = {
      title: request.body.title,
      userData: request.body.userData,
      userId: Object.keys(request.cookies)[0]
    };
    const doc = await Doc.create(newDoc);
    return response.status(201).send(doc);
  }
  catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get('/', async (request, response) => {
  try {
    const userId = Object.keys(request.cookies)[0];
    console.log(userId);
    const docs = await Doc.find({userId: userId});
    return response.status(200).json({
      count: docs.length,
      data: docs,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});


router.get('/:id', async (request, response) => {
  try{
    const { id } = request.params;
    const doc = await Doc.findById(id);
    return response.status(200).json(doc);
  }
  catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});


router.put('/:id', async (request, response) => {
  try {
    if (!request.body.title){
      return response.status(400).send({
        message: 'Send title please',
      });
    }
    const { id } = request.params;

    const result = await Doc.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: 'Doc not found' });
    }

    return response.status(200).send({ message: 'Doc updated successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete a book
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Doc.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: 'Doc not found' });
    }
    return response.status(200).send({ message: 'Doc deleted successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;