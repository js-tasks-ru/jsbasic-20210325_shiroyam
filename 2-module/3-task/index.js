let calculator = {
 sum(){
   return this.a + this.b
 },

 read(){
  this.a = +prompt('a?', 0);
  this.b = +prompt('b?', 0);
 },

 mul() {
  return this.a * this.b;
},
 

};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
