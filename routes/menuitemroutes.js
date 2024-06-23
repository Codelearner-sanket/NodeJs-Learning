const express =require('express');
const router=express.Router();

const Menuitem=require('./../Model/Menu')


router.post('/',async(req,res)=>{
    try{
        const data=req.body;
        const newmenu= new Menuitem(data);

        const response=await newmenu.save();
        console.log("data saved")
        res.status(200).json(response)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:"internal server issue "})
    }
});

router.get('/',async(req,res)=>{
    try{
        const data=await Menuitem.find();
        console.log("data fetched ");
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:"internal server failure"})

    }
})

// Define valid taste types
const validTasteTypes = ["sweet", "sour", "spicy"];

router.get('/:tasteType', async (req, res) => {
    try {
        const tasteType = req.params.tasteType;

        if (validTasteTypes.includes(tasteType)) {
            const response = await Menuitem.find({ taste: tasteType });
            console.log(`Data fetched for taste type: ${tasteType}`);
            res.status(200).json(response);
        } else {
            console.log(`Invalid taste type: ${tasteType}`);
            res.status(404).json({ error: 'Invalid taste type' });
        }
    } catch (err) {
        console.error(`Internal server error: ${err}`);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.put('/:id',async(req,res)=>{
    try{
    const menuupdateId=req.params.id ;
    const menuupdate=req.body ;

    const response= await Menuitem.findByIdAndUpdate(menuupdateId,menuupdate,{
        new:true,
        runValidators:true
    })
    if (!response){
        return res.status(404).json({error:'Person not found'})
    }
    console.log('data updated');
     res.status(200).json(response)
} catch(err){
    console.log(err);
    res.status(500).json({error:"internal server issue"})

}
}
)
router.delete('/:id',async(req,res)=>{
    try{
        const menudeleteId=req.params.id ;
        const response= await Menuitem.findByIdAndDelete(menudeleteId)
        console.log('data deleted  successfully ');
        res.status(200).json(response)
       if(!response){
           return res.status(404).json({error:'Person not found'})
        }
   }
   catch(err){
       console.log(err);
       res.status(500).json({error:"internal server issue"})

   }
})
module.exports = router;