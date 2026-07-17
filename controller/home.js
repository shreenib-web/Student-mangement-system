import Student from "../models/studentSchema.js";

const home = async (req, res) => {
    try {
        const stu = new Student({
            name: "Shreeni Bhosale",
            email: "shreni@mail.com",
            city: "Mumbai",
            contact: "4568791234",
        });

        await stu.save();

        console.log("Data Saved!");
        res.send("Home page setup");
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Error saving data");
    }
};

export default home;