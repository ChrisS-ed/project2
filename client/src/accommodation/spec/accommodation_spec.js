var Accommodation = require('../accommodation');
var assert = require('assert');
var chai = require('chai');
var assert = chai.assert;

describe('accommodation', function(){
  it('should have a name ', function(){
    var accom = new Accommodation();
    accom.name = "Royal Hotel";
    assert.isString(accom.name);
  });

  it('should have a price ', function(){
    var accom = new Accommodation();
    accom.pricePerPerson = 45;
    assert.isNumber(accom.pricePerPerson);
  });

  it('should have rooms ', function(){
    var accom = new Accommodation();
    accom.rooms = 20;
    assert.isNumber(accom.rooms);
  });

  it('should have a star rating ', function(){
    var accom = new Accommodation();
    accom.stars = 3;
    assert.isNumber(0, accom.star);
  });

  it('should have an address ', function(){
    var accom = new Accommodation();
    accom.address = {"building": 17, "street": "Kestrel Street", "city": "Canberra", "zip": 567818}
    assert.isObject(accom.address);
  });

  });
