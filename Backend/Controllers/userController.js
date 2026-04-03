

import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js"
import Doctor from "../models/DoctorSchema.js"

export const updateUser = async (req ,res)=> {
    const id = req.params.id

    try {

        const updatedUser = await User.findByIdAndUpdate(id , {$set:req.body}, {new:true});

        res.status(200).json({success:true , message:'SucessFully updated' ,data:updatedUser});
        
    } catch (err) {
        res.status(500).json({success:false , message:'Failed to updated'});
    }
}
export const deleteUser = async (req ,res)=> {
    const id = req.params.id

    try {

         await User.findByIdAndDelete(id);

        res.status(200).json({success:true , message:'SucessFully Deleted' ,});
        
    } catch (err) {
        res.status(500).json({success:false , message:'Failed to Delete'});
    }
}
export const getSingleUser = async (req ,res)=> {
    const id = req.params.id

    try {

        const user = await User.findById(id).select('-password');

        res.status(200).json({success:true , message:'User found' , data:user ,});
        
    } catch (err) {
        res.status(404).json({success:false , message:'No user Found'});
    }

};
export const getAllUser = async (req ,res)=> {
    try {

        const user = await User.find({}).select('-password');

        res.status(200).json({success:true , message:'Users found' , data:users ,});
        
    } catch (err) {
        res.status(404).json({success:false , message:'No user Found'});
    }
};

export const getUserProfile = async (req ,res)=>{
    const userId = req.userId

        try {

            const user = await User.findById(userId)
user

            if(!user){
                return res.status(404).json({success:false , message:'User not found'})

            }
                const {password , ...rest} = user._doc

                res.status(200).json({success:true ,message:'Profile info is getting' ,data:{...rest}})

        } catch (err) {
                res.status(500).json({success:false , message:'Something went wrong, can not get the details'});
        }
}


export const getMyAppointments = async(req ,res)=>{
    try {
        
        // step -1: retrive appointments from booking from specific user
        const bookings = await Booking.find({user:req.userId})


        // step-2 : extract doctors ids from appointments booking

        const docotorIds = bookings.map(el => el.doctor.id)

        // step-3 retrive  doctors using doctors ids

        const doctors = await Doctor.find({_id: {$in:docotorIds}}).select('-password')

        res.status(200).json({success:true , message:'Appointments are getting' ,data:doctors})


    } catch (err) {
        res.status(500).json({success:false , message:'Something went wrong, can not get the details'});
        
    }
}