
'use strict'

// Encapsulation
function Person(username, password, id) {
	this.UN = username
	this.PW = password
	this.id = IDnum
	
	// getter
	Object.defineProperty(this, 'fullName', {
		get: function () { return `${this.UN} ${this.PW}`}
	})
}

Person.prototype.getLabel = function() {
	return `${this.UN} ${this.PW}`
}

function Person(username, password, id) {
	// Inheritance of properties 
	Person.call(this, fn, ln, dob)
	this.cwid = id
}

// inheritance of methods 
Object.setPrototypeOf(CampusMember.prototype, Person.prototype)

// Polymorphism 
CampusMember.prototype.getLabel = function() {
	return `${this.UN} ${this.PW} ${this.cwid}`
}

// Define ES6 Class from ES5 class
export class Student extends CampusMember {
	__yearOfGrads = null
	
	get yearOfGrads() {
		return this.__yearOfGrads
	}
	
	set yearOfGrads(y) {
		this.__yearOfGrads = y
	}
}



