import { checkValidString, checkValidAge, checkValidId } from "../helpers.js";
/*
Current Issues:
- Does not store ratingID (do not know what the userMovieData collection looks like yet)
- Does not update based on LetterBoxed Data
    - Whenever a user updated their Letterboxd zip files, their statistics should change.
      But we do no know what the structure of the data we will retieve from the zip files
      looks like yet. So, i cannot update the data.
*/
export const createAccount = async (
  username,
  password,
  age,
  isAdmin,
  profile_description,
  recently_watched,
  zip_files,
  //rating_id,
  followers,
  following,
  statistics
) => {
  //validate string parameters
  checkValidString(username, "username");
  checkValidString(password, "password");

  //valide age
  checkValidAge(age);

  let newAccount = {
    username: username,
    password: password,
    age: age,
    isAdmin: false,
    profile_description: "",
    recently_watched: [],
    zip_files: [],
    //ratingId: ratingId,
    followers: [],
    following: [],
    statistics: [],
  };

  const accountCollect = await accounts();
  const insertInfo = await accountCollection.insertOne(newAccount);
  if (!insertInfo.acknowledged || !insertInfo.insertedId)
    throw "Could not create account";

  const newId = insertInfo.insertedId.toString();

  const course = await getAccountById(newId);
  return course;
};

export const getAllAccounts = async () => {
  const accountCollection = await accounts();
  let accountList = await accountCollection.find({}).toArray();
  if (!acccountList) throw "Could not get all accounts";
  accountList = accountList.map((element) => {
    element._id = element._id.toString();
    return element;
  });
  return accountList;
};

export const getAccountById = async (id) => {
  let x = new ObjectId();
  checkValidId(id, "id");
  const accountCollection = await accounts();
  const the_account = await accountCollection.findOne({
    _id: new ObjectId(id),
  });
  if (the_account === null) throw "No account with that id";
  the_account._id = the_account._id.toString();
  return the_account;
};

export const deleteAccount = async (id) => {
  checkValidId(id, "id");
  let accountCollection = await accounts();
  let findAccount = await accountCollection.findOne({
    _id: new ObjectId(id),
  });

  if (!findAcccount) {
    throw "account with that id could not be found";
  }

  const deletionInfo = await accountCollection.deleteOne({
    _id: new ObjectId(id),
  });
  //check to make sure autoformattor isn't fucking this up.
  return { username: findAccount.username, deleted: true };
};

export const updateAccountInformation = async (
  id,
  username,
  password,
  age,
  isAdmin,
  profile_description,
  recently_watched,
  zip_files,
  //rating_id,
  followers,
  following,
  statistics
) => {
  //Validation with helpers
  checkValidID(id, "id");
  checkValidString(username, "username");
  checkValidString(password, "password");
  checkValidAge(age);
  checkValidString(profile_description, "profile description");
  for (let movie in recently_watched) {
    checkValidString(movie, "recently watched movie");
  }
  for (let follower in followers) {
    checkValidObject(follower, "follower id");
  }
  for (let follow in following) {
    checkValidObject(follow, "following id");
  }

  let userUpdateInfo = {
    id: id,
    username: username,
    password: password,
    age: age,
    isAdmin: isAdmin,
    profile_description: profile_description,
    recently_watched: recently_watched,
    zip_files: zip_files,
    //ratingId: ratingId,
    followers: followers,
    following: following,
    statistics: statistics,
  };

  //Addding the course to the DB and returning the course
  const courseCollection = await courses();

  const updateInfo = await courseCollection.findOneAndReplace(
    { _id: new ObjectId(id) },
    userUpdateInfo,
    { returnDocument: "after" }
  );
  if (!updateInfo)
    throw `Error: Update failed, could not find a course with id of ${id}`;

  return updateInfo;
};
