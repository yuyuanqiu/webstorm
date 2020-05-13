let school_validator = {
  "validator": {
    "$or": [{
      "_id": {
        "$type": "int",
      }
    },
    {
      "school_name": {
        "$type": "string"
      }
    },
    {
      "school_logo": {
        "$type": "string"
      }
    },
    {
      "school_spot": {
        "$type": "string"
      }
    },
    {
      "school_des": {
        "$type": "string"
      }
    },
  ]
  }
}



let teacher_validator = {
  "validator": {
    "$or": [{
      "_id": {
        "$type": "long",
      }
    },
    {
      "teacher_name": {
        "$type": "string"
      }
    },
    {
      "sex": {
        "$type": "string"
      }
    },
    {
      "age": {
        "$type": "int"
      }
    },
    {
      "teacher_job": {
        "$type": "string"
      }
    },
    {
      "school_id": {
        "$type": "int"
      }
    },
    {
      "teacher_img": {
        "$type": "string"
      }
    },
    {
      "teacher_des": {
        "$type": "string"
      }
    },
  ]
  }
}


module.exports = {
  school_validator,
  teacher_validator
}