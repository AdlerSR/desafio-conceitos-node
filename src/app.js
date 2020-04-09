const express = require("express");
const cors = require("cors");
const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (req, res) => {
  return res.json(repositories);
});

app.post("/repositories", (req, res) => {
  const { title, url, techs } = req.body;

  const repository = {id: uuid(), title, url, techs, likes: 0}

  repositories.push(repository);

  return res.json(repository);
});

app.put("/repositories/:id", (req, res) => {
  const { id } = req.params;
  const { title, url, techs } = req.body;

  const repositoriesIndex = repositories.findIndex(repository => repository.id === id);

  if(repositoriesIndex < 0){
    return res.status(400).json({error: "Repository not found"});
  }
  
  const { likes } = repositories[repositoriesIndex];

  const repository = {
    id,
    title,
    url,
    techs,
    likes
  }

  repositories[repositoriesIndex] = repository;

  return res.json(repository);
});

app.delete("/repositories/:id", (req, res) => {
  const { id } = req.params;

  const repositoriesIndex = repositories.findIndex(repository => repository.id === id);

  if(repositoriesIndex < 0){
    return res.status(400).json({error: "Repository not found"});
  }

  repositories.splice(repositoriesIndex, 1)
  
  return res.status(204).send();
});

app.post("/repositories/:id/like", (req, res) => {
  const { id } = req.params;

  const repositoriesIndex = repositories.findIndex(repository => repository.id === id);

  if(repositoriesIndex < 0){
    return res.status(400).json({error: "Repository not found"});
  }

  const { title, url, techs, likes } = repositories[repositoriesIndex];

  const like = likes+1

  const repository = {
    id,
    title,
    url,
    techs,
    likes: like
  }

  repositories[repositoriesIndex] = repository;

  return res.json(repository);
});

module.exports = app;
