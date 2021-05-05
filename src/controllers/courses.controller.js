import Course from "../models/course.model";
import _ from "lodash";

const create = (req, res) => {
  const course = Course(req.body); //req.body je json objekat koji ćemo mu predati kroz body req
  course.save((err, data) => {
    if (err) {
      return status(400).json(err.message);
    }
    res.status(201).json(data);
  });
};

const list = (req, res) => {
  Course.find((err, data) => {
    if (err) {
      return status(400).json(err.message);
    }
    res.status(200).json(data);
  }); //Vraća dva podatka (error i data)
};

const read = (req, res) => {
  const id = req.params.id;
  Course.findById(id).exec((err, data) => {
    if (err) {
      return status(400).json(err.message);
    }
    res.status(200).json(data);
  }); //Vraća dva podatka (error i data)
};

const update = (req, res) => {
  const id = req.params.id;
  Course.findById(id).exec((err, data) => {
    if (err || !data) {
      return status(400).json("Course not found!");
    }
    const course = _.extend(data, req.body); //sve sto smo ucitali iz baze u data, ako to nema u body zadrzi polje iz data a ako ima onda ce polje iz date zamijeniti tim poljem
    course.save((err, data) => {
      if (err) {
        return status(400).json(err.message);
      }
      res.status(200).json(data);
    });
  });
};

const remove = (req, res) => {
  const id = req.params.id;
  Course.findById(id).exec((err, data) => {
    if (err || !data) {
      return status(400).json("Course not found!");
    }
    data.remove((err, data) => {
      if (err || !data) {
        return status(400).json("Course not found!");
      }
      res.status(200).json("Course deleted!");
    });
  });
};

export default { list, create, read, update, remove };
