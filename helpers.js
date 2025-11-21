import { ObjectId } from "mongodb";

export const checkValidNumber = (val, variableName) => {
  if (typeof val !== "number") {
    throw `${variableName || "provided variable"} is not a number`;
  } else if (isNaN(val)) {
    throw `${variableName || "provided variable"} is not a number`;
  } else if (!Number.isFinite(val)) {
    throw `${variableName || "provided variable"} is infinite`;
  }
};
export const checkValidObject = (val, variableName) => {
  if (!val) {
    throw `${variableName || "provided variable"} is not a object`;
  }
  if (typeof val !== "object") {
    throw `${variableName || "provided variable"} is not a object`;
  }
  if (Object.keys(val).length === 0) {
    throw "object must contain at least one key/value pair";
  }
};
export const checkValidObjectNotArray = (val, variableName) => {
  if (!val) {
    throw `${variableName || "provided variable"} is not a object`;
  }
  if (typeof val !== "object") {
    throw `${variableName || "provided variable"} is not a object`;
  }
  if (Object.keys(val).length === 0) {
    throw "object must contain at least one key/value pair";
  }
  if (Array.isArray(val)) {
    throw "object cannot be array";
  }
};
export const checkValidString = (val, variableName) => {
  if (val === undefined || !val) {
    throw `${variableName || "provided variable"} is not a string`;
  }
  if (typeof val !== "string" || val === "") {
    throw `${variableName || "provided variable"} is not a string`;
  }
  val = val.trim();
  if (val === undefined || !val) {
    throw `${variableName || "provided variable"} is not a string`;
  }
  if (typeof val !== "string" || val === "") {
    throw `${variableName || "provided variable"} is not a string`;
  }
};

export const checkValidId = (val, variableName) => {
  if (val === undefined || !val) {
    throw `${variableName || "provided variable"} is not a string`;
  }
  if (typeof val !== "string" || val === "") {
    throw `${variableName || "provided variable"} is not a string`;
  }
  val = val.trim();
  if (val === undefined || !val) {
    throw `${variableName || "provided variable"} is not a string`;
  }
  if (typeof val !== "string" || val === "") {
    throw `${variableName || "provided variable"} is not a string`;
  }
  if (!ObjectId.isValid(val)) {
    throw "Error: string is not valid object ID";
  }
};

export const checkValidIdNotString = (val) => {
  if (!ObjectId.isValid(val)) {
    throw "Error: invalid object ID";
  }
};

export const checkValidAge = (val) => {
  number = Number(val);
  if (!isInteger(number)) {
    throw "Error: age must be a valid integer";
  }

  if (number < 13) {
    throw "Error: you must be 13 years or older";
  }

  if (number > 100) {
    throw "Error: you must be less than 100";
  }

  checkValidNumber(number, "age");
};
