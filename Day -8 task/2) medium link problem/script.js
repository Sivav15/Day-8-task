class circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;

    }
    circle() {

    }
    circle(radius) {
        console.log(radius);           //
    }
    circle(radius, color) {
        console.log(this.radius, this.color);     // 1 'red'
    }
    getradius() {
        console.log(this.radius);          //1
    }
    setradius(newradius) {
        console.log(this.radius = newradius);   //3

    }
    getcolor() {
        console.log(this.color);            //red
    }

    setcolor(newcolor) {
        console.log(this.color = newcolor);      //blue
    }
    getarea() {
        console.log((Math.PI * Math.pow(this.radius, 2)));       // 28.274333882308138
    }
    getcircumference() {
        console.log((2 * Math.PI * this.radius));             //18.84955592153876
    }

}
let circle1 = new circle(1.0, "Red");
circle1.circle();
circle1.getradius();
circle1.setradius(3)
circle1.getradius();
circle1.getcolor();
circle1.setcolor("blue");
circle1.getcolor();
circle1.getarea();
circle1.getcircumference();
