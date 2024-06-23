const mongoose=require('mongoose');

const menuSchema= new mongoose.Schema({
    name : {
        type :String ,
        required:true
    },
    price:{
        type:Number,
        required :true
    } ,
    taste:{
        type:String,
        enum:['sweet','spicy','sour'],
        required:true
    },
    is_drink:{
        type:Boolean ,
        default :false 
    },
    ingredients:{
        type:[String],
        default:[]
    },
    num_sale:{
        type:Number,
        default:0
    }
});

const Menuitem= mongoose.model('MenuItem',menuSchema);
module.exports=Menuitem;