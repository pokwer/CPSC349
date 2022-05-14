
'use strict'

// Encapsulation
function Person(username, password, IDnum) {
	this.UN = username
	this.PW = password
	this.ID = IDnum
	
	// getter
	Object.defineProperty(this, 'fullName', {
		get: function () { return `${this.UN} ${this.PW}`}
	})
}

Person.prototype.getLabel = function() {
	return `${this.UN} ${this.PW}`
}

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



