// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// // --- Icon Definitions using Inline SVG (Replacing react-icons) ---

// const StarIcon = ({ color, size, className }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className={className}
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill={color}
//     stroke="currentColor"
//     strokeWidth="1.5"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
//   </svg>
// );

// const IconWrapper = ({ children, className }) => (
//   <div className={className}>{children}</div>
// );

// // Astrology Icons (Based on GiCrystalBall, GiStarSwirl, GiZodiacWheel, GiOrb, GiAstrolabe)
// const Icons = {
//     NatalChartReading: ({ className }) => (<IconWrapper className={className}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2v10M12 12l8.66-5M12 12l-8.66-5M12 12l8.66 5M12 12l-8.66 5" /></svg></IconWrapper>),
//     SynastryRelationship: ({ className }) => (<IconWrapper className={className}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2v20M2 12h20" /></svg></IconWrapper>),
//     PredictiveAstrology: ({ className }) => (<IconWrapper className={className}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 11.5L12 17.5L17 11.5" /><circle cx="12" cy="12" r="10" /><path d="M12 2V6M12 18V22M2 12H6M18 12H22" /></svg></IconWrapper>),
//     PlanetaryMagic: ({ className }) => (<IconWrapper className={className}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="6" /><path d="M12 18V22M12 2V6M22 12H18M6 12H2" /></svg></IconWrapper>),
//     HoraryAstrology: ({ className }) => (<IconWrapper className={className}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 6v6l4 2" /></svg></IconWrapper>),
// };
// const CrystalBallIcon = ({ className }) => (<IconWrapper className={className}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 12h8M12 8v8" /></svg></IconWrapper>);


// // Define styles for the entire app container
// const AppContainer = ({ children }) => (
//   <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center p-4">
//     {children}
//   </div>
// );

// // --- Helper Components for Framer Motion and Tailwind Styling ---

// /**
//  * 1. Animated Input Field
//  */
// const MotionInput = ({ label, id, type = 'text', required = false, ...props }) => (
//   <motion.div
//     className="mb-4"
//     initial={{ opacity: 0, y: 10 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.3 }}
//   >
//     <label htmlFor={id} className="block text-sm font-semibold text-amber-800 mb-1">
//       {label} {required && <span className="text-red-600">*</span>}
//     </label>
//     {type === 'textarea' ? (
//       <textarea
//         id={id}
//         rows="3"
//         required={required}
//         className="mt-1 block w-full rounded-lg border-amber-300 shadow-inner focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-3 border bg-amber-50 placeholder-amber-400/50 transition duration-150 ease-in-out"
//         {...props}
//       />
//     ) : (
//       <input
//         id={id}
//         type={type}
//         required={required}
//         className={`mt-1 block w-full rounded-lg border-amber-300 shadow-inner focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-3 border bg-amber-50 placeholder-amber-400/50 transition duration-150 ease-in-out ${type === 'file' ? 'py-2' : ''}`}
//         {...props}
//       />
//     )}
//   </motion.div>
// );

// /**
//  * 2. Interactive Star Rating Component
//  */
// const StarRating = ({ rating, setRating }) => {
//   const [hover, setHover] = useState(null);
//   const stars = [...Array(5)];

//   return (
//     <div className="flex space-x-1">
//       {stars.map((_, index) => {
//         const ratingValue = index + 1;
//         return (
//           <motion.label
//             key={index}
//             whileHover={{ scale: 1.2 }}
//             whileTap={{ scale: 0.9 }}
//             className="cursor-pointer"
//           >
//             <input
//               type="radio"
//               name="rating"
//               value={ratingValue}
//               onClick={() => setRating(ratingValue)}
//               className="hidden"
//             />
//             <StarIcon
//               className="transition-colors duration-200"
//               color={ratingValue <= (hover || rating) ? "#f59e0b" : "#fcd34d"} // amber-500 vs amber-300
//               size={30}
//               onMouseEnter={() => setHover(ratingValue)}
//               onMouseLeave={() => setHover(null)}
//             />
//           </motion.label>
//         );
//       })}
//     </div>
//   );
// };

// /**
//  * 3. Custom Dropdown for Course Selection
//  * Uses gradient hover effect on options.
//  */
// const CourseDropdown = ({ options, selectedCourse, onSelect, required }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   // Find the full option object to display the name and icon
//   const selectedOption = options.find(opt => opt.name === selectedCourse);

//   const handleSelect = (courseName) => {
//     onSelect(courseName);
//     setIsOpen(false);
//   };

//   return (
//     <div className="mb-4">
//       <label className="block text-sm font-semibold text-amber-800 mb-1">
//         Which Cosmic Journey did you undertake? {required && <span className="text-red-600">*</span>}
//       </label>

//       <motion.div
//         className="relative z-10" // High z-index to ensure it sits above other elements
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.3 }}
//       >
//         <button
//           type="button"
//           tabIndex={0}
//           onBlur={() => setTimeout(() => setIsOpen(false), 200)} // Delay to allow click event on options to fire
//           className="w-full flex justify-between items-center p-3 text-left bg-amber-50 border border-amber-300 rounded-lg shadow-inner text-amber-900 font-medium transition duration-150 hover:border-orange-500"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <span>
//             {selectedOption ? (
//               <span className="flex items-center">
//                 <selectedOption.icon className="text-orange-500 mr-3 text-xl" />
//                 {selectedOption.name}
//               </span>
//             ) : (
//               'Select Your Cosmic Journey...'
//             )}
//           </span>
//           <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ml-2 transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`} viewBox="0 0 20 20" fill="currentColor">
//             <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//           </svg>
//         </button>

//         {isOpen && (
//           <motion.div
//             className="absolute mt-1 w-full rounded-lg bg-white shadow-xl border border-amber-200 max-h-60 overflow-y-auto"
//             initial={{ opacity: 0, scaleY: 0.8 }}
//             animate={{ opacity: 1, scaleY: 1 }}
//             exit={{ opacity: 0, scaleY: 0.8 }}
//             transition={{ duration: 0.2 }}
//             style={{ transformOrigin: 'top' }}
//           >
//             {options.map((option) => (
//               <div
//                 key={option.name}
//                 onClick={() => handleSelect(option.name)}
//                 // Gradient hover effect
//                 className={`flex items-center p-3 cursor-pointer transition duration-150 ease-in-out border-b border-amber-100 last:border-b-0
//                   ${selectedCourse === option.name ? 'bg-orange-100 text-orange-800 font-semibold' : 'text-amber-900'}
//                   hover:bg-gradient-to-r hover:from-yellow-100 hover:to-orange-200 hover:text-orange-900`}
//               >
//                 <option.icon className={`mr-3 text-xl ${selectedCourse === option.name ? 'text-orange-600' : 'text-amber-500'}`} />
//                 {option.name}
//               </div>
//             ))}
//           </motion.div>
//         )}
//       </motion.div>
//       {!selectedCourse && (
//         <p className="text-sm text-red-600 mt-2">Please select a course.</p>
//       )}
//     </div>
//   );
// };


// // --- Main Application Component ---

// const Form = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     courseName: '',
//     completionDate: '',
//     trainerName: '',
//     overallRating: 0,
//     mostLiked: '',
//     improvements: '',
//     learningExperience: '',
//     allowTestimonial: false,
//     reviewOffer: '',
//   });

//   const [isSubmitted, setIsSubmitted] = useState(false);
//   // State for multi-step form
//   const [step, setStep] = useState(1);
//   const [direction, setDirection] = useState(0); // 1 for next, -1 for back
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleCourseSelect = (course) => {
//     setFormData((prev) => ({ ...prev, courseName: course }));
//   };

//   const nextStep = () => {
//     // Validation for Step 1
//     if (!formData.fullName || !formData.courseName || !formData.completionDate) {
//       setError("Please fill out all required fields (Name, Course, and Date) before proceeding.");
//       return;
//     }
//     setError(''); // Clear error if successful
//     setDirection(1);
//     setStep(2);
//   };

//   const prevStep = () => {
//     setError(''); // Clear errors when going back
//     setDirection(-1);
//     setStep(1);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Final validation for Step 2
//     if (formData.overallRating === 0 || !formData.mostLiked || !formData.learningExperience) {
//       setError("Please complete the required Feedback fields (Rating, Most Liked, and Learning Experience).");
//       return;
//     }
//     setError('');

//     // Submission logic (simulated)
//     console.log('Form Submitted!', formData);
//     setIsSubmitted(true);
//   };

//   // Astrology-themed course options
//   const courseOptions = [
//     { name: 'Natal Chart Reading', icon: Icons.NatalChartReading },
//     { name: 'Synastry & Relationship', icon: Icons.SynastryRelationship },
//     { name: 'Predictive Astrology', icon: Icons.PredictiveAstrology },
//     { name: 'Planetary Magic', icon: Icons.PlanetaryMagic },
//     { name: 'Horary Astrology', icon: Icons.HoraryAstrology },
//   ];
//   const experienceOptions = ['Excellent', 'Good', 'Average', 'Poor'];

//   if (isSubmitted) {
//     return (
//       <AppContainer>
//         <motion.div
//           className="max-w-xl mx-auto p-10 bg-white shadow-2xl rounded-xl border-4 border-orange-400 text-center"
//           initial={{ opacity: 0, scale: 0.7 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
//         >
//           <CrystalBallIcon className="text-6xl text-orange-500 mx-auto mb-4 animate-pulse" />
//           <h1 className="text-3xl font-extrabold text-orange-800 mb-4">Submission Successful!</h1>
//           <p className="text-lg text-gray-700">
//             Thank you for sharing your **Cosmic Experience**. Your feedback is now aligning with our stars!
//           </p>
//           <motion.button
//             onClick={() => setIsSubmitted(false)}
//             className="mt-6 py-2 px-6 rounded-lg font-semibold text-white bg-orange-500 hover:bg-orange-600 transition"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Submit Another Review
//           </motion.button>
//         </motion.div>
//       </AppContainer>
//     );
//   }

//   return (
//     <AppContainer>
//       <motion.div
//         className="max-w-3xl w-full mx-auto p-8 bg-white shadow-2xl rounded-2xl border-4 border-orange-200"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h1 className="text-3xl font-extrabold text-orange-800 mb-6 text-center flex items-center justify-center">
//           <span className="mr-3 text-4xl">🔮</span> Astrology Feedback
//         </h1>

//         {/* --- Progress Indicator --- */}
//         <div className="flex justify-between items-center mb-6">
//             <div className="flex-1 text-center">
//                 <div className={`p-2 rounded-full font-bold transition-all duration-300 ${step >= 1 ? 'bg-orange-500 text-white shadow-md' : 'bg-gray-200 text-gray-500'} w-10 h-10 flex items-center justify-center mx-auto mb-1`}>1</div>
//                 <p className={`text-xs font-medium transition-colors ${step >= 1 ? 'text-orange-700' : 'text-gray-500'}`}>Contact & Course</p>
//             </div>
//             <div className={`flex-1 h-1 mx-2 transition-colors duration-300 ${step > 1 ? 'bg-orange-500' : 'bg-gray-300'}`}></div>
//             <div className="flex-1 text-center">
//                 <div className={`p-2 rounded-full font-bold transition-all duration-300 ${step >= 2 ? 'bg-orange-500 text-white shadow-md' : 'bg-gray-200 text-gray-500'} w-10 h-10 flex items-center justify-center mx-auto mb-1`}>2</div>
//                 <p className={`text-xs font-medium transition-colors ${step >= 2 ? 'text-orange-700' : 'text-gray-500'}`}>Feedback & Reward</p>
//             </div>
//         </div>
        
//         {/* --- Global Error Message (replaces alert()) --- */}
//         {error && (
//             <motion.div
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl mb-6 font-medium"
//                 role="alert"
//             >
//                 <span className="block sm:inline">{error}</span>
//             </motion.div>
//         )}

//         <form onSubmit={step === 2 ? handleSubmit : (e) => e.preventDefault()}>
//           <AnimatePresence mode="wait" initial={false}>
//             {/* --- STEP 1: CONTACT & COURSE DETAILS --- */}
//             {step === 1 && (
//               <motion.div
//                 key="step1"
//                 initial={{ opacity: 0, x: direction === 1 ? 200 : -200 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -200 }} // Slide out left
//                 transition={{ duration: 0.4 }}
//                 className="w-full"
//               >
//                 {/* Your Contact Details */}
//                 <h2 className="text-xl font-bold text-orange-700 mb-4 border-b-2 pb-2 border-amber-300">Your Contact Details</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <MotionInput
//                     label="Full Name"
//                     id="fullName"
//                     name="fullName"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     required
//                   />
//                   <MotionInput
//                     label="Email ID (Optional)"
//                     id="email"
//                     name="email"
//                     type="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <MotionInput
//                   label="Phone Number (Optional)"
//                   id="phone"
//                   name="phone"
//                   type="tel"
//                   value={formData.phone}
//                   onChange={handleChange}
//                 />

//                 <div className="mt-8">
//                   {/* Course Information */}
//                   <h2 className="text-xl font-bold text-orange-700 mb-4 border-b-2 pb-2 border-amber-300">Course Information</h2>
                  
//                   {/* Custom Dropdown Component */}
//                   <CourseDropdown
//                       options={courseOptions}
//                       selectedCourse={formData.courseName}
//                       onSelect={handleCourseSelect}
//                       required
//                   />

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <MotionInput
//                       label="Initiation Date (MM/YYYY)"
//                       id="completionDate"
//                       name="completionDate"
//                       value={formData.completionDate}
//                       onChange={handleChange}
//                       placeholder="e.g., 08/2024"
//                       required
//                     />
//                     <MotionInput
//                       label="Celestial Guide Name (Optional)"
//                       id="trainerName"
//                       name="trainerName"
//                       value={formData.trainerName}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>

//                 {/* Navigation Button */}
//                 <motion.button
//                   type="button"
//                   onClick={nextStep}
//                   className="w-full mt-8 flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-xl text-lg font-bold text-white
//                               bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700"
//                   whileHover={{ scale: 1.02, boxShadow: '0 8px 20px rgba(234, 88, 12, 0.4)' }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   Next: Share Your Experience →
//                 </motion.button>

//               </motion.div>
//             )}

//             {/* --- STEP 2: FEEDBACK & REWARD --- */}
//             {step === 2 && (
//               <motion.div
//                 key="step2"
//                 initial={{ opacity: 0, x: direction === 1 ? 200 : -200 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: 200 }} // Slide out right
//                 transition={{ duration: 0.4 }}
//                 className="w-full"
//               >
//                 {/* Journey Feedback */}
//                 <h2 className="text-xl font-bold text-orange-700 mb-4 border-b-2 pb-2 border-amber-300">Journey Feedback</h2>

//                 <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.2 }} className="mb-6 bg-amber-50 p-4 rounded-xl border border-amber-200">
//                   <label className="block text-sm font-semibold text-amber-800 mb-2">
//                     Overall Astral Alignment (1-5 Star) <span className="text-red-600">*</span>
//                   </label>
//                   <StarRating
//                     rating={formData.overallRating}
//                     setRating={(rate) => setFormData(prev => ({ ...prev, overallRating: rate }))}
//                   />
//                   <p className="text-sm text-gray-600 mt-2">Selected Alignment: <span className='font-bold'>{formData.overallRating}</span> / 5 Stars</p>
//                 </motion.div>

//                 <MotionInput
//                   label="What constellation shone brightest during your journey? (Most Liked)"
//                   id="mostLiked"
//                   name="mostLiked"
//                   type="textarea"
//                   value={formData.mostLiked}
//                   onChange={handleChange}
//                   required
//                 />
//                 <MotionInput
//                   label="What celestial pathways could be improved? (Improvements)"
//                   id="improvements"
//                   name="improvements"
//                   type="textarea"
//                   value={formData.improvements}
//                   onChange={handleChange}
//                 />

//                 <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.3 }} className="mb-6">
//                   <label className="block text-sm font-semibold text-amber-800 mb-2">
//                     How profound was your learning experience? <span className="text-red-600">*</span>
//                   </label>
//                   <div className="flex flex-wrap gap-4">
//                     {experienceOptions.map((option) => (
//                       <label key={option} className="inline-flex items-center cursor-pointer p-2 rounded-full border transition duration-150 ease-in-out
//                                                       ${formData.learningExperience === option ? 'bg-orange-400 text-white shadow-md' : 'bg-amber-100 text-gray-700 border-amber-300 hover:bg-amber-200'}">
//                         <input
//                           type="radio"
//                           name="learningExperience"
//                           value={option}
//                           checked={formData.learningExperience === option}
//                           onChange={handleChange}
//                           className="form-radio h-4 w-4 text-orange-600 border-amber-300 focus:ring-orange-500 hidden"
//                           required
//                         />
//                         <span className="ml-2 font-medium">{option}</span>
//                       </label>
//                     ))}
//                   </div>
//                 </motion.div>

//                 <div className="mt-8 p-4 bg-yellow-50 rounded-xl border border-orange-300 shadow-inner">
//                   {/* Astral Offerings */}
//                   <h2 className="text-xl font-bold text-orange-700 mb-4 flex items-center"><StarIcon className="mr-2 text-yellow-500 w-5 h-5" /> Astral Offerings</h2>

//                   <MotionInput
//                     label="Upload an image of your Cosmic Certificate or a photo of your Aura (Optional)"
//                     id="uploadFile"
//                     name="uploadFile"
//                     type="file"
//                   />

//                   <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.4 }} className="mb-4">
//                     <label className="inline-flex items-center cursor-pointer">
//                       <input
//                         type="checkbox"
//                         name="allowTestimonial"
//                         checked={formData.allowTestimonial}
//                         onChange={handleChange}
//                         className="form-checkbox h-5 w-5 text-orange-600 rounded border-amber-300 ring-orange-500"
//                       />
//                       <span className="ml-2 text-sm text-gray-800 font-medium">
//                         **Cosmic Consent:** I allow my feedback to illuminate your website.
//                       </span>
//                     </label>
//                   </motion.div>

//                   {/* Review Offers */}
//                   <h3 className="font-bold text-amber-900 mt-4 mb-2 border-t pt-3 border-amber-300">✨ Choose Your Celestial Reward:</h3>
//                   <div className="flex flex-col space-y-3">
//                     <label className="inline-flex items-center cursor-pointer p-2 rounded-lg bg-amber-100 hover:bg-amber-200 transition duration-150">
//                       <input
//                         type="radio"
//                         name="reviewOffer"
//                         value="5%_off_written"
//                         checked={formData.reviewOffer === '5%_off_written'}
//                         onChange={handleChange}
//                         className="form-radio h-4 w-4 text-orange-600 border-amber-300 focus:ring-orange-500"
//                       />
//                       <span className="ml-3 text-sm text-gray-800">Receive **5% Off** your next astrological reading for a written testimonial.</span>
//                     </label>
//                     <label className="inline-flex items-center cursor-pointer p-2 rounded-lg bg-amber-100 hover:bg-amber-200 transition duration-150">
//                       <input
//                         type="radio"
//                         name="reviewOffer"
//                         value="10%_off_video"
//                         checked={formData.reviewOffer === '10%_off_video'}
//                         onChange={handleChange}
//                         className="form-radio h-4 w-4 text-orange-600 border-amber-300 focus:ring-orange-500"
//                       />
//                       <span className="ml-3 text-sm text-gray-800">Receive **10% Off** / Celestial Cashback for a video testimonial.</span>
//                     </label>
//                   </div>
//                 </div>

//                 {/* Navigation Buttons */}
//                 <div className="flex justify-between mt-8">
//                   <motion.button
//                     type="button"
//                     onClick={prevStep}
//                     className="py-3 px-6 rounded-xl font-bold text-orange-700 border-2 border-orange-200 bg-white hover:bg-orange-50 transition duration-150"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     ← Back
//                   </motion.button>
//                   <motion.button
//                     type="submit"
//                     className="py-3 px-6 rounded-xl shadow-xl text-lg font-bold text-white
//                                 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700"
//                     whileHover={{ scale: 1.02, boxShadow: '0 8px 20px rgba(234, 88, 12, 0.4)' }}
//                     whileTap={{ scale: 0.98 }}
//                     disabled={isSubmitted}
//                   >
//                     Complete Submission
//                   </motion.button>
//                 </div>

//               </motion.div>
//             )}
//           </AnimatePresence>
//         </form>
//       </motion.div>
//     </AppContainer>
//   );
// };

// export default Form;








import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Icon Definitions using Inline SVG ---

const StarIcon = ({ color, size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const IconWrapper = ({ children, className }) => (
  <div className={className}>{children}</div>
);

// Astrology Icons
const Icons = {
    NatalChartReading: ({ className }) => (<IconWrapper className={className}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2v10M12 12l8.66-5M12 12l-8.66-5M12 12l8.66 5M12 12l-8.66 5" /></svg></IconWrapper>),
    SynastryRelationship: ({ className }) => (<IconWrapper className={className}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2v20M2 12h20" /></svg></IconWrapper>),
    PredictiveAstrology: ({ className }) => (<IconWrapper className={className}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 11.5L12 17.5L17 11.5" /><circle cx="12" cy="12" r="10" /><path d="M12 2V6M12 18V22M2 12H6M18 12H22" /></svg></IconWrapper>),
    PlanetaryMagic: ({ className }) => (<IconWrapper className={className}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="6" /><path d="M12 18V22M12 2V6M22 12H18M6 12H2" /></svg></IconWrapper>),
    HoraryAstrology: ({ className }) => (<IconWrapper className={className}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 6v6l4 2" /></svg></IconWrapper>),
};
const CrystalBallIcon = ({ className }) => (<IconWrapper className={className}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 12h8M12 8v8" /></svg></IconWrapper>);


// Define styles for the entire app container
const AppContainer = ({ children }) => (
  <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center p-4">
    {children}
  </div>
);

// --- Framer Motion Variants for Staggered Animation ---

// Parent container will trigger staggerChildren
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // Stagger the children (the two cards) by 0.2 seconds
      staggerChildren: 0.2, 
    },
  },
};

// Variants for each individual card
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

/**
 * 1. Animated Input Field
 */
const MotionInput = ({ label, id, type = 'text', required = false, ...props }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm font-semibold text-amber-800 mb-1">
      {label} {required && <span className="text-red-600">*</span>}
    </label>
    {type === 'textarea' ? (
      <textarea
        id={id}
        rows="3"
        required={required}
        className="mt-1 block w-full rounded-lg border-amber-300 shadow-inner focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-3 border bg-amber-50 placeholder-amber-400/50 transition duration-150 ease-in-out"
        {...props}
      />
    ) : (
      <input
        id={id}
        type={type}
        required={required}
        className={`mt-1 block w-full rounded-lg border-amber-300 shadow-inner focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-3 border bg-amber-50 placeholder-amber-400/50 transition duration-150 ease-in-out ${type === 'file' ? 'py-2' : ''}`}
        {...props}
      />
    )}
  </div>
);

/**
 * 2. Interactive Star Rating Component
 */
const StarRating = ({ rating, setRating }) => {
  const [hover, setHover] = useState(null);
  const stars = [...Array(5)];

  return (
    <div className="flex space-x-1">
      {stars.map((_, index) => {
        const ratingValue = index + 1;
        return (
          <motion.label
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
          >
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              className="hidden"
            />
            <StarIcon
              className="transition-colors duration-200"
              color={ratingValue <= (hover || rating) ? "#f59e0b" : "#fcd34d"} // amber-500 vs amber-300
              size={30}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </motion.label>
        );
      })}
    </div>
  );
};

/**
 * 3. Custom Dropdown for Course Selection
 */
const CourseDropdown = ({ options, selectedCourse, onSelect, required }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find(opt => opt.name === selectedCourse);

  const handleSelect = (courseName) => {
    onSelect(courseName);
    setIsOpen(false);
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-amber-800 mb-1">
        Which Cosmic Journey did you undertake? {required && <span className="text-red-600">*</span>}
      </label>

      <div className="relative z-10">
        <button
          type="button"
          tabIndex={0}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          className="w-full flex justify-between items-center p-3 text-left bg-amber-50 border border-amber-300 rounded-lg shadow-inner text-amber-900 font-medium transition duration-150 hover:border-orange-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>
            {selectedOption ? (
              <span className="flex items-center">
                <selectedOption.icon className="text-orange-500 mr-3 text-xl" />
                {selectedOption.name}
              </span>
            ) : (
              'Select Your Cosmic Journey...'
            )}
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ml-2 transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`} viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>

        {isOpen && (
          <motion.div
            className="absolute mt-1 w-full rounded-lg bg-white shadow-xl border border-amber-200 max-h-60 overflow-y-auto"
            initial={{ opacity: 0, scaleY: 0.8 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0.8 }}
            transition={{ duration: 0.2 }}
            style={{ transformOrigin: 'top' }}
          >
            {options.map((option) => (
              <div
                key={option.name}
                onClick={() => handleSelect(option.name)}
                className={`flex items-center p-3 cursor-pointer transition duration-150 ease-in-out border-b border-amber-100 last:border-b-0
                  ${selectedCourse === option.name ? 'bg-orange-100 text-orange-800 font-semibold' : 'text-amber-900'}
                  hover:bg-gradient-to-r hover:from-yellow-100 hover:to-orange-200 hover:text-orange-900`}
              >
                <option.icon className={`mr-3 text-xl ${selectedCourse === option.name ? 'text-orange-600' : 'text-amber-500'}`} />
                {option.name}
              </div>
            ))}
          </motion.div>
        )}
      </div>
      {!selectedCourse && (
        <p className="text-sm text-red-600 mt-2">Please select a course.</p>
      )}
    </div>
  );
};


// --- Main Application Component ---

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    courseName: '',
    completionDate: '',
    trainerName: '',
    overallRating: 0,
    mostLiked: '',
    improvements: '',
    learningExperience: '',
    allowTestimonial: false,
    reviewOffer: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleCourseSelect = (course) => {
    setFormData((prev) => ({ ...prev, courseName: course }));
  };

  const validateForm = () => {
    // Required fields across both cards
    if (!formData.fullName) return "Please enter your Full Name.";
    if (!formData.courseName) return "Please select a Cosmic Journey (Course).";
    if (!formData.completionDate) return "Please enter your Initiation Date.";
    if (formData.overallRating === 0) return "Please provide an Overall Astral Alignment (Star Rating).";
    if (!formData.mostLiked) return "Please describe the constellation that shone brightest (Most Liked).";
    if (!formData.learningExperience) return "Please select your learning experience level.";
    
    return null; // No errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      // Scroll to the top to see the error message
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    setError(''); // Clear error if successful

    // Submission logic (simulated)
    console.log('Form Submitted!', formData);
    setIsSubmitted(true);
  };

  // Static Data
  const courseOptions = [
    { name: 'Natal Chart Reading', icon: Icons.NatalChartReading },
    { name: 'Synastry & Relationship', icon: Icons.SynastryRelationship },
    { name: 'Predictive Astrology', icon: Icons.PredictiveAstrology },
    { name: 'Planetary Magic', icon: Icons.PlanetaryMagic },
    { name: 'Horary Astrology', icon: Icons.HoraryAstrology },
  ];
  const experienceOptions = ['Excellent', 'Good', 'Average', 'Poor'];

  if (isSubmitted) {
    return (
      <AppContainer>
        <motion.div
          className="max-w-xl mx-auto p-10 bg-white shadow-2xl rounded-xl border-4 border-orange-400 text-center"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        >
          <CrystalBallIcon className="text-6xl text-orange-500 mx-auto mb-4 animate-pulse" />
          <h1 className="text-3xl font-extrabold text-orange-800 mb-4">Submission Successful!</h1>
          <p className="text-lg text-gray-700">
            Thank you for sharing your **Cosmic Experience**. Your feedback is now aligning with our stars!
          </p>
          <motion.button
            onClick={() => setIsSubmitted(false)}
            className="mt-6 py-2 px-6 rounded-lg font-semibold text-white bg-orange-500 hover:bg-orange-600 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Another Review
          </motion.button>
        </motion.div>
      </AppContainer>
    );
  }

  return (
    <AppContainer>
      <motion.div
        className="max-w-5xl w-full mx-auto p-8 bg-white shadow-2xl rounded-2xl border-4 border-orange-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-4xl font-extrabold text-orange-800 mb-8 text-center flex items-center justify-center">
          <span className="mr-3 text-5xl">🔮</span> Your Cosmic Feedback
        </h1>

        {/* --- Global Error Message --- */}
        {error && (
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl mb-6 font-medium"
                role="alert"
            >
                <span className="block sm:inline">{error}</span>
            </motion.div>
        )}

        <form onSubmit={handleSubmit}>
          {/* --- DUAL CARD CONTAINER WITH STAGGER ANIMATION --- */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            
            {/* --- CARD 1: CONTACT & COURSE DETAILS --- */}
            <motion.div
              className="p-6 bg-amber-50 rounded-xl shadow-lg border-t-4 border-orange-500"
              variants={cardVariants}
            >
              <h2 className="text-2xl font-bold text-orange-700 mb-6 border-b pb-2 border-amber-300 flex items-center">
                <span className="mr-2">👤</span> Alignment Details
              </h2>
              
              <MotionInput
                label="Full Name"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <MotionInput
                label="Email ID (Optional)"
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              <MotionInput
                label="Phone Number (Optional)"
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
              />

              <div className="mt-8">
                <h3 className="text-xl font-bold text-orange-700 mb-4 border-b pb-2 border-amber-300 flex items-center">
                  <span className="mr-2">✨</span> Course Information
                </h3>
                
                <CourseDropdown
                    options={courseOptions}
                    selectedCourse={formData.courseName}
                    onSelect={handleCourseSelect}
                    required
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <MotionInput
                    label="Initiation Date (MM/YYYY)"
                    id="completionDate"
                    name="completionDate"
                    value={formData.completionDate}
                    onChange={handleChange}
                    placeholder="e.g., 08/2024"
                    required
                  />
                  <MotionInput
                    label="Celestial Guide Name (Optional)"
                    id="trainerName"
                    name="trainerName"
                    value={formData.trainerName}
                    onChange={handleChange}
                  />
                </div>
              </div>

            </motion.div>

            {/* --- CARD 2: FEEDBACK & REWARD --- */}
            <motion.div
              className="p-6 bg-amber-50 rounded-xl shadow-lg border-t-4 border-orange-500"
              variants={cardVariants}
            >
              <h2 className="text-2xl font-bold text-orange-700 mb-6 border-b pb-2 border-amber-300 flex items-center">
                <span className="mr-2">🌟</span> Journey Feedback
              </h2>

              <div className="mb-6 bg-white p-4 rounded-xl border border-amber-200 shadow-sm">
                <label className="block text-sm font-semibold text-amber-800 mb-2">
                  Overall Astral Alignment (1-5 Star) <span className="text-red-600">*</span>
                </label>
                <StarRating
                  rating={formData.overallRating}
                  setRating={(rate) => setFormData(prev => ({ ...prev, overallRating: rate }))}
                />
                <p className="text-sm text-gray-600 mt-2">Selected Alignment: <span className='font-bold'>{formData.overallRating}</span> / 5 Stars</p>
              </div>

              <MotionInput
                label="What constellation shone brightest during your journey? (Most Liked)"
                id="mostLiked"
                name="mostLiked"
                type="textarea"
                value={formData.mostLiked}
                onChange={handleChange}
                required
              />
              <MotionInput
                label="What celestial pathways could be improved? (Improvements)"
                id="improvements"
                name="improvements"
                type="textarea"
                value={formData.improvements}
                onChange={handleChange}
              />

              <div className="mb-6">
                <label className="block text-sm font-semibold text-amber-800 mb-2">
                  How profound was your learning experience? <span className="text-red-600">*</span>
                </label>
                <div className="flex flex-wrap gap-3">
                  {experienceOptions.map((option) => (
                    <label key={option} className={`inline-flex items-center cursor-pointer p-2 rounded-full border transition duration-150 ease-in-out text-sm font-medium
                                                    ${formData.learningExperience === option ? 'bg-orange-400 text-white shadow-md border-orange-400' : 'bg-amber-100 text-gray-700 border-amber-300 hover:bg-amber-200'}`}>
                      <input
                        type="radio"
                        name="learningExperience"
                        value={option}
                        checked={formData.learningExperience === option}
                        onChange={handleChange}
                        className="hidden"
                        required
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Astral Offerings Section (Optional items) */}
              <div className="mt-8 p-4 bg-yellow-100/50 rounded-xl border border-orange-300 shadow-inner">
                <h3 className="text-xl font-bold text-orange-700 mb-4 flex items-center">
                  <StarIcon className="mr-2 text-yellow-500 w-5 h-5" /> Astral Offerings (Optional)
                </h3>
                
                <MotionInput
                    label="Upload an image of your Cosmic Certificate or Aura photo"
                    id="uploadFile"
                    name="uploadFile"
                    type="file"
                />

                <div className="mb-4">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="allowTestimonial"
                      checked={formData.allowTestimonial}
                      onChange={handleChange}
                      className="form-checkbox h-5 w-5 text-orange-600 rounded border-amber-300 ring-orange-500"
                    />
                    <span className="ml-2 text-sm text-gray-800 font-medium">
                      **Cosmic Consent:** I allow my feedback to illuminate your website.
                    </span>
                  </label>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* --- FINAL SUBMISSION BUTTON (Spanning both cards) --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10"
          >
            <motion.button
              type="submit"
              className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-2xl text-xl font-extrabold text-white
                          bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 transform transition-all duration-300"
              whileHover={{ scale: 1.01, boxShadow: '0 10px 30px rgba(234, 88, 12, 0.5)' }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitted}
            >
              Align My Feedback with the Cosmos
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    </AppContainer>
  );
};

export default Form;
