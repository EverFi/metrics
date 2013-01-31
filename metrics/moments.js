
var Moments = module.exports = function Moments(subjectType) {
  this.subjectType = subjectType || 'subjects';
  if ( subjectType ) {
    this[ subjectType ] = {};
  } else {
    this.subjects = {};
  }
  this.count = 0;
  this.type = 'moments';
}

Moments.prototype.mark = function( subjectId ) {
  var s = this.subjectType;
  if ( subjectId ) {
    if ( !this[ s ][ subjectId ] ) {
      this[ s ][ subjectId ] = [];
      this[ s ][ subjectId ].push ( new Date() );
      this.count += 1;
    }
  }
}

Moments.prototype.clear = function() {
  this[ this.subjectType ] = {};
  this.count = 0;
}

Moments.prototype.printObj = function() {
  var obj = {};
  obj[ this.subjectType ] = this.subjects;
  obj.type = this.type;
  obj.count = this.count;
  return obj;
}