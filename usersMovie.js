import {checkValidString, checkValidId} from jacobhelpers.js
import { ObjectId } from "mongodb";

export const getRating = async (movieId, userId) => 
    {
    // validate both IDs
    checkValidId(movieId);
    checkValidId(userId);

    const userMovies = await userMovieDataCollection();

    const entry = await userMovies.findOne({
        userId: userId,
        movieId: movieId
    });

    if (!entry) throw "No user movie data found";

    return entry.rating;
};
