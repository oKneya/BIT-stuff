function Genre(name){
    this.name = name;  
  }
  Genre.prototype.getData = function(){
    return this.name[0].toUpperCase()+this.name[this.name.length-1].toUpperCase()
  }
  
  function Movie(title, genre, duzina){
    this.title = title;
    if(genre instanceof Genre){
      this.genre = genre;
    }
    this.length = duzina;
  }
  Movie.prototype.getData = function(){
    return `${this.title}, ${this.length}min, ${this.genre.getData()}`;
  }
  
  function Program(date){
    this.listOfMovies = [];
    this.totalNumOfMovies = 0;
    this.date = new Date(date)
  }
  Program.prototype.addMovie = function(movie){
    if(movie instanceof Movie){
      this.listOfMovies.push(movie);
      this.totalNumOfMovies += 1;
    }
  }
  Program.prototype.getData = function(){
    let str = `${this.date.getDay()}.${this.date.getMonth()}.${this.date.getFullYear()}, program length from all movies: ${this.totalNumOfMovies}\n`;
    for(var i = 0; i < this.listOfMovies.length; i++){
      let movie = this.listOfMovies[i];
      str += `\t\t${movie.getData()}\n`
    }
    // moze i ovako
    // this.listOfMovies.forEach(movie => str += "\t"+movie.getData() + "\n")
    return str;
  }
  
  function Festival(name){
    this.name = name;
    this.listOfAllPrograms = [];
    this.numberOfAllMovies = 0;
  }
  Festival.prototype.addProgram = function(program){
    if(program instanceof Program){
      this.listOfAllPrograms.push(program);
      this.numberOfAllMovies += program.totalNumOfMovies;
    }
  }
  Festival.prototype.getData = function(){
    let str = `${this.name.toUpperCase()} Festival, has ${this.numberOfAllMovies} movie titles\n`;
    for(let i = 0; i < this.listOfAllPrograms.length; i++){
      let program = this.listOfAllPrograms[i];
      str += `\t${program.getData()}\n`
    }
    return str;
  }
  
  var zanr1 = new Genre("triler")
  var zanr2 = new Genre("komedija")
  var zanr3 = new Genre("horor")
  var zanr4 = new Genre("drama")
  
  var film1 = new Movie("The Shawshank Redemption", zanr1, 135);
  var film2 = new Movie("The Shawshank Redemption2", zanr2, 136);
  var film3 = new Movie("The Shawshank Redemption3", zanr3, 137);
  var film4 = new Movie("The Shawshank Redemption4", zanr4, 138);
  
  var program1 = new Program("2023-3-9");
  var program2 = new Program("2023-3-10");
  
  program1.addMovie(film1);
  program1.addMovie(film2);
  program1.addMovie(film3);
  program2.addMovie(film2);
  program2.addMovie(film4);
  
  var festival = new Festival("Kustendorf")
  festival.addProgram(program1);
  festival.addProgram(program2);
  
  console.log(festival.getData())