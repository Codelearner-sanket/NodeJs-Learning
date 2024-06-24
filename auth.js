// setup a paasport with local authentication stratergy , using personal modell for username and password 

const passport=require('passport')
const LocalStrategy=require('passport-local').Strategy;
const Person=require('./Model/person')

passport.use(new LocalStrategy(async(USERNAME,PASSWORD,done)=>{
    //authentication Logic here 
    try{
      console.log('Received credentials:',USERNAME,PASSWORD);
      const user=await Person.findOne({username:USERNAME});
      if(!user)
        return done(null,false,{message:'incorrect username.'});
  
      
    const isPasswordMatch=user.password===PASSWORD? true: false;
    if(isPasswordMatch)
      return done(null,user)
    else
      return done(null,false,{message:'Incorrect password.'});
    
    }
    catch(err){
      return done(err);
    }
  }))

module.exports=passport ; //export configured passport 
  