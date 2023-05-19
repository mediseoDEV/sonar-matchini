import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema(
    {
        login: {
            type: String,
        
        },
        password: {
            type: String,
           
        },
        status: {
            type: Boolean,
           
        },
        googleID:{
            type:String,
            
        },
        FirstName:{
            type:String,
         
        },
        LasteName:{
            type:String,
          
        },
        Age:{
            type:Number,
          
        },
        Numero:{
            type:String,
    
        },
        Sexe:{
            type:String,
            
        },
        Image:{
            type:String,
      
        },
        Matches:{
            type:[mongoose.Schema.Types.ObjectId]
        },
      
        AboutYou:{
            type:String,
            
        },
        Job :{
            type:String,
            
        },
        School:{
            type:String,
           
        },
        AgeMax:{
            type:String,
          
        },
        AgeMin:{
            type:String,
          
        },
        
        longitude:{
            type:String,
          
        },
        latitude:{
            type:String,
          
        },

    },
   
);

export default model('User', userSchema);