var suite = new Benchmark.Suite;
var greeter = function (name) {
  return "Why hello there " + name;
};
suite.add('test', function () {
    greeter("Joe");
}).on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
}).run({ 'async': true });


suite.add('maxHeight1', function () {
    $("div").maxHeight1();
}).add('maxHeight2', function () {
    $("div").maxHeight2();
}).run({'async': true});
