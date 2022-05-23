// Write a “person” class to hold all the details.


class person {

    constructor(name, age, gender, email, mobile_no) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.email = email;
        this.mobile_no = mobile_no;
    }

    details() {
        console.log(`name:${this.name} age:${this.age} gender: ${this.gender} email:${this.email} mobile no:${this.mobile_no}`);
    }
}

let obj = new person("siva", "mech", 22, "male", "abc@gmail.com", "634678543");
obj.details();

//  name:siva age:mech gender: 22 email:male mobile no:abc@gmail.com