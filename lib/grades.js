var gradeBook = {

    _grades: [],

    addGrade: function(newGrade){
        this._grades.push(newGrade)
    },

    getCountOfGrades: function(){
        return this._grades.length
    },

    getAverage: function(){
        return this._grades.reduce((acc,cur) => acc + cur) / this._grades.length
    },
    reset: function() {
        return this._grades = [];
    },
    getLetterGrade: function(){
        var average = this.getAverage()

        if (average > 90) {
            return 'A';
        }
        else if (average > 80){
            return 'B';
        }
        else if (average > 70){
            return 'C';
        }
        else if (average > 60){
            return 'D';
        }
        return 'F'

    }
};

exports.book = gradeBook;