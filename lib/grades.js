var gradeBook = {

    _grades: [],

    addGrade: function(newGrade){
        this._grades.push(newGrade)
    },

    getCountOfGrades: function(){
        return this._grades.length
    },

    getAverage: function(){
        console.log(this._grades.length)
        return this._grades.reduce((acc,cur) => acc + cur) / this._grades.length
    },
    reset: function() {
        return this._grades = [];
    } 
};

exports.book = gradeBook;