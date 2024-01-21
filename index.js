"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var Course = /** @class */ (function () {
    function Course(courseCode, courseName) {
        this.courseCode = courseCode;
        this.courseName = courseName;
    }
    Course.prototype.getCourseInfo = function () {
        return "".concat(this.courseCode, " - ").concat(this.courseName);
    };
    return Course;
}());
var Student = /** @class */ (function () {
    function Student(name) {
        this.coursesEnrolled = [];
        this.balance = 0;
        Student.studentCount++;
        this.studentID = this.generateStudentID();
        this.name = name;
    }
    Student.prototype.generateStudentID = function () {
        var uniqueID = (Math.floor(Math.random() * 90000) + 10000).toString();
        return "S".concat(uniqueID);
    };
    Student.prototype.enroll = function (course) {
        this.coursesEnrolled.push(course);
        console.log("".concat(this.name, " enrolled in ").concat(course.getCourseInfo()));
    };
    Student.prototype.viewBalance = function () {
        console.log("".concat(this.name, "'s Balance: $").concat(this.balance));
    };
    Student.prototype.payTuitionFees = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log("".concat(this.name, " paid $").concat(amount, " towards tuition fees."));
            this.viewBalance();
        }
        else {
            console.log('Invalid payment amount.');
        }
    };
    Student.prototype.showStatus = function () {
        console.log("Student ID: ".concat(this.studentID));
        console.log("Name: ".concat(this.name));
        console.log('Courses Enrolled:');
        this.coursesEnrolled.forEach(function (course, index) {
            console.log("  ".concat(index + 1, ". ").concat(course.getCourseInfo()));
        });
        this.viewBalance();
    };
    Student.prototype.getStudentID = function () {
        return this.studentID;
    };
    Student.prototype.getCoursesEnrolled = function () {
        return this.coursesEnrolled;
    };
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.studentCount = 0;
    return Student;
}());
var StudentManagementSystem = /** @class */ (function () {
    function StudentManagementSystem() {
        this.courses = [
            new Course("GD101", 'Graphic Designing'),
            new Course("WD102", 'Web Development'),
            new Course("PP103", 'Python Programming'),
            new Course("FL104", 'Freelancing'),
            new Course("DM105", 'Digital Marketing'),
        ];
        this.students = [];
    }
    StudentManagementSystem.prototype.addStudentInteractive = function () {
        return __awaiter(this, void 0, void 0, function () {
            var answers, selectedCourseIndex, selectedCourse, student;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                            { type: 'input', name: 'name', message: 'Enter student name:' },
                            {
                                type: 'list',
                                name: 'courseIndex',
                                message: 'Choose a course to enroll:',
                                choices: this.courses.map(function (course, index) { return "".concat(index + 1, ". ").concat(course.getCourseInfo()); }),
                            },
                        ])];
                    case 1:
                        answers = _a.sent();
                        selectedCourseIndex = parseInt(answers.courseIndex) - 1;
                        selectedCourse = this.courses[selectedCourseIndex];
                        if (selectedCourse) {
                            student = new Student(answers.name);
                            student.enroll(selectedCourse);
                            student.showStatus();
                            this.students.push(student);
                        }
                        else {
                            console.log('Error: Selected course not found.');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    StudentManagementSystem.prototype.viewListOfStudents = function () {
        console.log('List of Enrolled Students:');
        this.students.forEach(function (student, index) {
            console.log("".concat(index + 1, ". ").concat(student.getName(), " - Student ID: ").concat(student.getStudentID()));
        });
    };
    StudentManagementSystem.prototype.viewStudentDetailsInteractive = function () {
        return __awaiter(this, void 0, void 0, function () {
            var studentIndex, selectedStudent;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, inquirer_1.default.prompt({
                            type: 'list',
                            name: 'studentIndex',
                            message: 'Choose a student:',
                            choices: this.students.map(function (student, index) { return "".concat(index + 1, ". ").concat(student.getName()); }),
                        })];
                    case 1:
                        studentIndex = (_a.sent()).studentIndex;
                        selectedStudent = this.students[studentIndex - 1];
                        if (selectedStudent) {
                            selectedStudent.showStatus();
                        }
                        else {
                            console.log('Error: Selected student not found.');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    StudentManagementSystem.prototype.makePaymentInteractive = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, studentIndex, amount, selectedStudent;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                            {
                                type: 'list',
                                name: 'studentIndex',
                                message: 'Choose a student:',
                                choices: this.students.map(function (student, index) { return "".concat(index + 1, ". ").concat(student.getName()); }),
                            },
                            {
                                type: 'input',
                                name: 'amount',
                                message: 'Enter payment amount:',
                                validate: function (value) { return (value > 0 ? true : 'Invalid payment amount.'); },
                            },
                        ])];
                    case 1:
                        _a = _b.sent(), studentIndex = _a.studentIndex, amount = _a.amount;
                        selectedStudent = this.students[studentIndex - 1];
                        if (selectedStudent) {
                            selectedStudent.payTuitionFees(Number(amount));
                        }
                        else {
                            console.log('Error: Selected student not found.');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    StudentManagementSystem.prototype.removeCourseInteractive = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, studentIndex, courseIndex, selectedStudent, removedCourse;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, inquirer_1.default.prompt([
                            {
                                type: 'list',
                                name: 'studentIndex',
                                message: 'Choose a student:',
                                choices: this.students.map(function (student, index) { return "".concat(index + 1, ". ").concat(student.getName()); }),
                            },
                            {
                                type: 'list',
                                name: 'courseIndex',
                                message: 'Choose a course to remove:',
                                choices: function (answers) {
                                    var selectedStudent = _this.students[answers.studentIndex - 1];
                                    return selectedStudent.getCoursesEnrolled().map(function (course, index) { return "".concat(index + 1, ". ").concat(course.getCourseInfo()); });
                                },
                            },
                        ])];
                    case 1:
                        _a = _b.sent(), studentIndex = _a.studentIndex, courseIndex = _a.courseIndex;
                        selectedStudent = this.students[studentIndex - 1];
                        removedCourse = selectedStudent.getCoursesEnrolled().splice(courseIndex - 1, 1);
                        console.log("".concat(selectedStudent.getName(), " removed course: ").concat(removedCourse[0].getCourseInfo()));
                        selectedStudent.showStatus();
                        return [2 /*return*/];
                }
            });
        });
    };
    return StudentManagementSystem;
}());
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var system, action, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    system = new StudentManagementSystem();
                    console.log("Welcome to the Student Management System");
                    _b.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 14];
                    return [4 /*yield*/, inquirer_1.default.prompt({
                            type: "list",
                            name: "action",
                            message: "Choose an action:",
                            choices: [
                                "Add Student", "View Students", "View Student Details", "Make Payment", "Remove Course", "Exit"
                            ],
                        })];
                case 2:
                    action = (_b.sent()).action;
                    _a = action;
                    switch (_a) {
                        case 'Exit': return [3 /*break*/, 3];
                        case 'Add Student': return [3 /*break*/, 4];
                        case 'View Students': return [3 /*break*/, 6];
                        case 'View Student Details': return [3 /*break*/, 7];
                        case 'Make Payment': return [3 /*break*/, 9];
                        case 'Remove Course': return [3 /*break*/, 11];
                    }
                    return [3 /*break*/, 13];
                case 3:
                    console.log('Exiting Student Management System. Goodbye!');
                    return [2 /*return*/];
                case 4: return [4 /*yield*/, system.addStudentInteractive()];
                case 5:
                    _b.sent();
                    return [3 /*break*/, 13];
                case 6:
                    system.viewListOfStudents();
                    return [3 /*break*/, 13];
                case 7: return [4 /*yield*/, system.viewStudentDetailsInteractive()];
                case 8:
                    _b.sent();
                    return [3 /*break*/, 13];
                case 9: return [4 /*yield*/, system.makePaymentInteractive()];
                case 10:
                    _b.sent();
                    return [3 /*break*/, 13];
                case 11: return [4 /*yield*/, system.removeCourseInteractive()];
                case 12:
                    _b.sent();
                    return [3 /*break*/, 13];
                case 13: return [3 /*break*/, 1];
                case 14: return [2 /*return*/];
            }
        });
    });
}
main();
