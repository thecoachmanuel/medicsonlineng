import express from 'express';
import {
  loginAdmin,
  appointmentsAdmin,
  appointmentCancel,
  addDoctor,
  allDoctors,
  allPatients,
  adminDashboard,
  approveDoctor,
  rejectDoctor,
  deleteDoctor,
  editDoctor,
  editPatient
} from '../controllers/adminController.js';
import upload from '../middleware/multer.js';

const router = express.Router();

// Admin login
router.post('/login', loginAdmin);

// Get all appointments
router.get('/appointments', appointmentsAdmin);

// Cancel appointment
router.post('/cancel-appointment', appointmentCancel);

// Add doctor
router.post('/add-doctor', addDoctor);

// Get all doctors
router.get('/all-doctors', allDoctors);

// Get all patients
router.get('/all-patients', allPatients);

// Admin dashboard data
router.get('/dashboard', adminDashboard);

// Approve doctor
router.post('/approve-doctor', approveDoctor);

// Reject doctor
router.post('/reject-doctor', rejectDoctor);

// Delete doctor
router.post('/delete-doctor', deleteDoctor);

// Edit doctor
router.post('/edit-doctor', editDoctor);

// Edit patient (with optional image upload)
router.post('/edit-patient', upload.single('image'), editPatient);

export default router;