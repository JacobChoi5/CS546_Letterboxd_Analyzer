import {movies, actors, crew, genres, posters, studios, themes} from '../config/mongoCollections.js'
import {ObjectId} from 'mongodb'
import * as helpers from "../helpers.js"

export const seedDatabase = async () => {
  const movieCollection = await movies();
  //using all the csv's

  //for every line of csv create new x
}

export const createNewMovie = async (
  _id,
  name,
  date,
  tagline,
  description,
  minute,
  rating
) => {
  const movieCollection = await movies();
  let newMovie = {
    _id,
    name,
    date,
    tagline,
    description,
    minute,
    rating
  }

  helpers.checkValidNumber(_id, "Movie ID")
  helpers.checkValidString(name, "Movie Name")
  helpers.checkValidNumber(date, "Movie Release Date")
  helpers.checkValidString(tagline, "Movie Tagline")
  helpers.checkValidString(description, "Movie Description")
  helpers.checkValidNumber(minute, "Movie Minutes")
  helpers.checkValidNumber(rating, "Movie Rating")

  const insertInfo = await movieCollection.insertOne(newMovie);
  if (!insertInfo.acknowledged || !insertInfo.insertedId)
  {
    throw 'Error: Could not add course';
  }
  const newId = insertInfo.insertedId.toString();

  // const movie = await getMovieById(newId);
  return newId;
}

export const createNewActor = async (
  movieId,
  name,
  role
) => {
  const actorCollection = await actors();
  let newActor = {
    movieId,
    name,
    role
  }

  helpers.checkValidNumber(movieId, "Movie ID")
  helpers.checkValidString(name, "Actor Name")
  helpers.checkValidString(role, "Actor Role")

  const insertInfo = await actorCollection.insertOne(newActor);
  if (!insertInfo.acknowledged || !insertInfo.insertedId)
  {
    throw 'Error: Could not add actor';
  }
  // const newId = insertInfo.insertedId.toString();

  // const movie = await getMovieById(newId);
  // return newId;
}

export const createNewCrew = async (
  movieId,
  role,
  name
) => {
  const crewCollection = await crew();
  let newCrew = {
    movieId,
    role,
    name
  }

  helpers.checkValidNumber(movieId, "Movie ID")
  helpers.checkValidString(name, "Crew Name")
  helpers.checkValidString(role, "Crew Role")

  const insertInfo = await crewCollection.insertOne(newCrew);
  if (!insertInfo.acknowledged || !insertInfo.insertedId)
  {
    throw 'Error: Could not add crew';
  }
  // const newId = insertInfo.insertedId.toString();

  // const movie = await getMovieById(newId);
  // return newId;
}

export const createNewGenre = async (
  movieId,
  genre
) => {
  const genreCollection = await genres();
  let newGenre = {
    movieId,
    genre
  }

  helpers.checkValidNumber(movieId, "Movie ID")
  helpers.checkValidString(genre, "Genre")

  const insertInfo = await genreCollection.insertOne(newGenre);
  if (!insertInfo.acknowledged || !insertInfo.insertedId)
  {
    throw 'Error: Could not add genre';
  }
  // const newId = insertInfo.insertedId.toString();

  // const movie = await getMovieById(newId);
  // return newId;
}

export const createNewPoster = async (
  movieId,
  poster
) => {
  const posterCollection = await posters();
  let newPoster = {
    movieId,
    poster
  }

  helpers.checkValidNumber(movieId, "Movie ID")
  helpers.checkValidString(poster, "Poster")

  const insertInfo = await posterCollection.insertOne(newPoster);
  if (!insertInfo.acknowledged || !insertInfo.insertedId)
  {
    throw 'Error: Could not add poster';
  }
  // const newId = insertInfo.insertedId.toString();

  // const movie = await getMovieById(newId);
  // return newId;
}

export const createNewStudio = async (
  movieId,
  studio
) => {
  const studioCollection = await studios();
  let newStudio = {
    movieId,
    studio
  }

  helpers.checkValidNumber(movieId, "Movie ID")
  helpers.checkValidString(studio, "Studio")

  const insertInfo = await studioCollection.insertOne(newStudio);
  if (!insertInfo.acknowledged || !insertInfo.insertedId)
  {
    throw 'Error: Could not add studio';
  }
  // const newId = insertInfo.insertedId.toString();

  // const movie = await getMovieById(newId);
  // return newId;
}

export const createNewTheme = async (
  movieId,
  theme
) => {
  const themeCollection = await themes();
  let newTheme = {
    movieId,
    theme
  }

  helpers.checkValidNumber(movieId, "Movie ID")
  helpers.checkValidString(theme, "Theme")

  const insertInfo = await themeCollection.insertOne(newTheme);
  if (!insertInfo.acknowledged || !insertInfo.insertedId)
  {
    throw 'Error: Could not add theme';
  }
  // const newId = insertInfo.insertedId.toString();

  // const movie = await getMovieById(newId);
  // return newId;
}

