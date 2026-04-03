

import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";

export const updateDoctor = async (req, res) => {
    const id = req.params.id

    try {

        const updatedDoctor = await Doctor.findByIdAndUpdate(id, { $set: req.body }, { new: true });

        res.status(200).json({ success: true, message: 'SucessFully updated', data: updatedDoctor });

    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to updated' });
    }
}
export const deleteDoctor = async (req, res) => {
    const id = req.params.id

    try {

        await Doctor.findByIdAndDelete(id);

        res.status(200).json({ success: true, message: 'SucessFully Deleted', });

    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to Delete' });
    }
}
export const getSingleDoctor = async (req, res) => {
    const id = req.params.id

    try {

        const doctor = await Doctor.findById(id).select('-password');

        res.status(200).json({ success: true, message: 'Doctor found', data: doctoroctor, });

    } catch (err) {
        res.status(404).json({ success: false, message: 'No Doctor Found' });
    }

};
export const getAllDoctor = async (req, res) => {
    try {

        const {query} = req.query;
        let doctors;
        
        if (query) {
            doctors = await Doctor.find({
                isApproved: "approved",
                $or: [
                    { name: { $regex: query, $options: "i" }}
                    ,{specialization:{$regex:query , $options:"i"}},],
            }).select('-password');
        }else{
             doctors = await Doctor.find({ isApproved:"approved"}).populate('reviews').select("-password");
        }

        const doctor = await Doctor.find({}).select('-password');

        res.status(200).json({ success: true, message: 'Doctors found', data: doctor, });

    } catch (err) {
        res.status(404).json({ success: false, message: 'No Doctor Found' });
    }
};

export const getDoctorProfile = async(res ,req) =>{
    const doctorId = req.userId

        try {

            const doctor = await Doctor.findById(doctorId);


            if(!doctor){
                return res.status(404).json({success:false , message: 'Doctor not found'})

            }
                const {password , ...rest} = doctor._doc;
                const appointments = await Booking.find({doctor:doctorId})

                res.status(200).json({success:true ,message:'Profile info is getting' ,data:{...rest , appointments}})

        } catch (err) {
                res.status(500).json({success:false , message:'Something went wrong, can not get the details'});
        }
}