import * as movies from "./data/movies.js"
import {dbConnection, closeConnection} from './config/mongoConnection.js';

//connect to database
const db = await dbConnection()
//deletes previous data from database
await db.dropDatabase()

try
{
    console.log( await movies.createNewMovie
    (
        1000001, 
        "Barbie", 
        2023, 
        "She's everything. He's just Ken.", 
        "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Bar...", 
        114, 
        3.86
    ))
}
catch (e)
{
    console.log(e);
}

try
{
    console.log( await movies.createNewActor
    (
        1000001, 
        "Margot Robbie", 
        "Barbie" 
    ))
}
catch (e)
{
    console.log(e);
}

try
{
    console.log( await movies.createNewCrew
    (
        1000001, 
        "Director", 
        "Greta Gerwig" 
    ))
}
catch (e)
{
    console.log(e);
}

try
{
    console.log( await movies.createNewGenre
    (
        1000001, 
        "Comedy"
    ))
}
catch (e)
{
    console.log(e);
}

try
{
    console.log( await movies.createNewPoster
    (
        1000001, 
        "FakeUrl.com"
    ))
}
catch (e)
{
    console.log(e);
}

try
{
    console.log( await movies.createNewStudio
    (
        1000001, 
        "LuckyChap Entertainment"
    ))
}
catch (e)
{
    console.log(e);
}

try
{
    console.log( await movies.createNewTheme
    (
        1000001, 
        "Humanity and the world around us"
    ))
}
catch (e)
{
    console.log(e);
}

console.log("Done");

await closeConnection()
