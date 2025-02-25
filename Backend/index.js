const express = require("express");
const jwt = require("jsonwebtoken")

require("./connection");
const cors = require("cors");
const userModel = require("./models/user");
const authenticationMiddleware = require("./authentication");

const app = express();
const PORT = 3000;

const tokenAPI = express()

// Middleware
app.use(express.json());
app.use(cors());



  // APIs


app.post("/signup", async (req, res) => {
    console.log(req.body);
    await userModel(req.body).save()
    .catch((err) => {
        console.error(err);
        res.send("Error signing up user");
    });
    res.send("User signed up successfully");
});




app.get("/users", async (req, res) => {
    const users = await userModel.find()
    .catch((err) => {
        console.error(err);
        res.send("Error fetching users");
    }
    );
    res.json({message:"Sent info on all users!",users});
})

app.get("/api-verify-auth",(req,res)=>{
    const token = req.headers.authorization

    if (!token){
        console.log("hello world")
        return res.status(401).json({isAuthenticated:false});
    }
    else{
        console.log(token)
    }
    try{
        const decoded = jwt.verify(token, "secret-key");
        res.status(200).json({isAuthenticated:true,user:decoded})
    }
    catch(err){
        res.status(401).json({isAuthenticated:false,message:"Error while authentication"});
    }
    }
)

app.post("/login", async (req, res) => {
    console.log("Login request received");
    console.log(req.body);
    const user = await userModel.findOne({"userName":req.body.userName})
    
    if (!user) {
        console.log("User not found");
        return res.json({message:"User not found"});
    }
    else{
        console.log(user);
    }
    if (user.password != req.body.password) {
        console.log(user.password)
        return res.json({message:"Incorrect password"});
    }
    const token = jwt.sign({ userId: user.id }, "secret-key", { expiresIn: "1h" });
    res.json({ message: "Login successful", token, userId:user.id });
    // req.session._id = user._id;
    // req.session.password = user.password;

    }
);

app.get("/profile/:id", async (req,res) => {
    const userDetails = await userModel.findById(req.params.id)
    .then(()=>{
        res.json({userDetails})
    })
    .catch((err)=>{
        console.log(err)
        res.json({message:"Error in retrieving profile details!"})
    });
})

app.post("/points-inc", async (req, res) => {
    await userModel.updateOne({"userName":req.body.userName},{$inc:{"points":req.body.inc}})
    .then(()=>{
        res.json({message:"Points incremented!"});
    })
    .catch((err) => {
        console.error(err);
        res.json({message:"Error incrementing points"});
    });
})

app.post("/profile", async (req, res) => {
    const user = userModel.findOne({"userName":req.body.userName})
    .catch((err) => {
        console.error(err);
        res.json({message:"Error fetching user"});
    });
    res.json({message:" User fetched successfully", user});

})



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });