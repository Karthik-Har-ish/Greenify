const express = require("express");
require("./connection");
const cors = require("cors");
const userModel = require("./models/user");
const authenticationMiddleware = require("./authentication");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cors());

app.use(
    session({
      secret: process.env.SESSION_SECRET,        
      maxAge: 1000 * 60 * 60 * 24 * 1,           
      httpOnly: true,                            
      secure: process.env.NODE_ENV === "production",  
    })
  );
app.use(authenticationMiddleware)


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
    res.json(users);
})



app.post("/login", async (req, res) => {
    console.log(req.body);
    const user = await userModel.findOne({"userName":req.body.userName})
    
    if (!user) {
        return res.json({message:"User not found"});
    }
    else{
        console.log(user);
    }
    if (user.password != req.body.password) {
        console.log(user.password)
        return res.json({message:"Incorrect password"});
    }
    res.json({message:"Login successful"});
    req.session._id = user._id;
    req.session.password = user.password;

    }
);

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

app.post("/profile", isAuthenticated, async (req, res) => {
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