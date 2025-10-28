// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaStar } from 'react-icons/fa';
// import { GiCrystalBall, GiStarSwirl, GiZodiacWheel, GiOrb, GiAstrolabe } from 'react-icons/gi'; // Astrology-related icons

// // --- Helper Components for Framer Motion and Tailwind Styling ---

// // 1. Animated Input Field
// const MotionInput = ({ label, id, type = 'text', required = false, ...props }) => (
//   <motion.div
//     className="mb-4"
//     initial={{ opacity: 0, y: 10 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.3 }}
//   >
//     <label htmlFor={id} className="block text-sm font-medium text-amber-800 mb-1">
//       {label} {required && <span className="text-red-600">*</span>}
//     </label>
//     {type === 'textarea' ? (
//       <textarea
//         id={id}
//         rows="3"
//         required={required}
//         className="mt-1 block w-full rounded-md border-amber-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-3 border bg-amber-50"
//         {...props}
//       />
//     ) : (
//       <input
//         id={id}
//         type={type}
//         required={required}
//         className="mt-1 block w-full rounded-md border-amber-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-3 border bg-amber-50"
//         {...props}
//       />
//     )}
//   </motion.div>
// );

// // 2. Interactive Star Rating Component
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
//             <FaStar
//               className="transition-colors duration-200"
//               color={ratingValue <= (hover || rating) ? "#fbbf24" : "#fde68a"} // yellow-400 vs yellow-200
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

// // --- Main Form Component ---

// const CourseExperienceForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     courseName: '', // Will store selected course
//     completionDate: '',
//     trainerName: '',
//     overallRating: 0,
//     mostLiked: '',
//     improvements: '',
//     learningExperience: '',
//     allowTestimonial: false,
//     reviewOffer: '',
//   });

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

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form Submitted!', formData);
//     alert('Thank you for sharing your astrological journey!');
//     // Implement your actual form submission logic here (e.g., API call)
//   };

//   // Astrology-themed course options
//   const courseOptions = [
//     { name: 'Natal Chart Reading', icon: GiStarSwirl },
//     { name: 'Synastry & Relationship', icon: GiZodiacWheel },
//     { name: 'Predictive Astrology', icon: GiCrystalBall },
//     { name: 'Planetary Magic', icon: GiOrb },
//     { name: 'Horary Astrology', icon: GiAstrolabe },
//   ];
//   const experienceOptions = ['Excellent', 'Good', 'Average', 'Poor'];

//   return (
//     <motion.div
//       className="max-w-3xl mx-auto p-8 bg-white shadow-2xl rounded-xl border border-orange-200"
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <h1 className="text-3xl font-extrabold text-orange-800 mb-6 text-center flex items-center justify-center">
//         <span className="mr-2">🔮</span> Cosmic Experience Form
//       </h1>
//       <form onSubmit={handleSubmit}>

//         {/* --- 🧍‍♂ Basic Information --- */}
//         <h2 className="text-xl font-semibold text-orange-700 mb-4 border-b pb-2 border-amber-300">Basic Information</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <MotionInput
//             label="Full Name (आपका दिव्य नाम)"
//             id="fullName"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             required
//           />
//           <MotionInput
//             label="Email ID (ब्रह्मांडीय संपर्क - Optional)"
//             id="email"
//             name="email"
//             type="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </div>
//         <MotionInput
//           label="Phone Number (तारकीय संचार - Optional)"
//           id="phone"
//           name="phone"
//           type="tel"
//           value={formData.phone}
//           onChange={handleChange}
//         />

//         <div className="mt-8">
//           {/* --- 📚 Course Details --- */}
//           <h2 className="text-xl font-semibold text-orange-700 mb-4 border-b pb-2 border-amber-300">Celestial Course Details</h2>
//           <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }} className="mb-4">
//             <label className="block text-sm font-medium text-amber-800 mb-2">
//               Which Cosmic Journey did you undertake? <span className="text-red-600">*</span>
//             </label>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//               {courseOptions.map((course) => (
//                 <motion.div
//                   key={course.name}
//                   className={`flex items-center p-3 rounded-lg border-2 cursor-pointer transition-all duration-200
//                               ${formData.courseName === course.name
//                                 ? 'border-orange-500 bg-orange-100 shadow-md'
//                                 : 'border-amber-300 bg-amber-50 hover:border-orange-400 hover:bg-gradient-to-r from-yellow-100 to-orange-100'
//                               }`}
//                   onClick={() => handleCourseSelect(course.name)}
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   <course.icon className="text-orange-500 mr-3 text-2xl" />
//                   <span className="font-medium text-amber-900">{course.name}</span>
//                 </motion.div>
//               ))}
//             </div>
//             {formData.courseName && (
//               <p className="text-sm text-gray-600 mt-2">Selected Course: <span className="font-semibold text-orange-700">{formData.courseName}</span></p>
//             )}
//             {!formData.courseName && (
//               <p className="text-sm text-red-600 mt-2">Please select a course.</p>
//             )}
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <MotionInput
//               label="Initiation Date (MM/YYYY)"
//               id="completionDate"
//               name="completionDate"
//               value={formData.completionDate}
//               onChange={handleChange}
//               placeholder="e.g., 08/2024"
//               required
//             />
//             <MotionInput
//               label="Celestial Guide Name (गुरु का नाम - Optional)"
//               id="trainerName"
//               name="trainerName"
//               value={formData.trainerName}
//               onChange={handleChange}
//             />
//           </div>
//         </div>

//         <div className="mt-8">
//           {/* --- ⭐ Experience & Feedback --- */}
//           <h2 className="text-xl font-semibold text-orange-700 mb-4 border-b pb-2 border-amber-300">Cosmic Journey Feedback</h2>

//           <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.2 }} className="mb-6">
//             <label className="block text-sm font-medium text-amber-800 mb-2">
//               Overall Astral Alignment (1-5 Star) <span className="text-red-600">*</span>
//             </label>
//             <StarRating
//               rating={formData.overallRating}
//               setRating={(rate) => setFormData(prev => ({ ...prev, overallRating: rate }))}
//             />
//             <p className="text-sm text-gray-600 mt-2">Selected Alignment: {formData.overallRating} / 5 Stars</p>
//           </motion.div>

//           <MotionInput
//             label="What constellation shone brightest during your journey? (सबसे अच्छा अनुभव)"
//             id="mostLiked"
//             name="mostLiked"
//             type="textarea"
//             value={formData.mostLiked}
//             onChange={handleChange}
//             required
//           />
//           <MotionInput
//             label="What celestial pathways could be improved? (क्या बेहतर हो सकता है?)"
//             id="improvements"
//             name="improvements"
//             type="textarea"
//             value={formData.improvements}
//             onChange={handleChange}
//           />

//           <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.3 }} className="mb-6">
//             <label className="block text-sm font-medium text-amber-800 mb-2">
//               How profound was your learning experience? <span className="text-red-600">*</span>
//             </label>
//             <div className="flex space-x-4">
//               {experienceOptions.map((option) => (
//                 <label key={option} className="inline-flex items-center">
//                   <input
//                     type="radio"
//                     name="learningExperience"
//                     value={option}
//                     checked={formData.learningExperience === option}
//                     onChange={handleChange}
//                     className="form-radio h-4 w-4 text-orange-600 border-amber-300 focus:ring-orange-500"
//                     required
//                   />
//                   <span className="ml-2 text-gray-700">{option}</span>
//                 </label>
//               ))}
//             </div>
//           </motion.div>
//         </div>

//         <div className="mt-8 p-4 bg-yellow-50 rounded-lg border border-orange-200">
//           {/* --- 📸 Optional Section & Offers --- */}
//           <h2 className="text-xl font-semibold text-orange-700 mb-4">Astral Offerings</h2>

//           <MotionInput
//             label="Upload an image of your Cosmic Certificate or a photo of your Aura (Optional)"
//             id="uploadFile"
//             name="uploadFile"
//             type="file"
//           />

//           <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.4 }} className="mb-4">
//             <label className="inline-flex items-center cursor-pointer">
//               <input
//                 type="checkbox"
//                 name="allowTestimonial"
//                 checked={formData.allowTestimonial}
//                 onChange={handleChange}
//                 className="form-checkbox h-5 w-5 text-orange-600 rounded border-amber-300"
//               />
//               <span className="ml-2 text-sm text-gray-800">
//                 **Cosmic Consent:** I allow my feedback to illuminate your website.
//               </span>
//             </label>
//           </motion.div>

//           {/* Review Offers */}
//           <h3 className="font-medium text-amber-900 mt-4 mb-2">✨ Choose Your Celestial Reward:</h3>
//           <div className="flex flex-col space-y-2">
//             <label className="inline-flex items-center cursor-pointer">
//               <input
//                 type="radio"
//                 name="reviewOffer"
//                 value="5%_off_written"
//                 checked={formData.reviewOffer === '5%_off_written'}
//                 onChange={handleChange}
//                 className="form-radio h-4 w-4 text-orange-600 border-amber-300 focus:ring-orange-500"
//               />
//               <span className="ml-2 text-sm text-gray-700">Receive **5% Off** your next astrological reading for a written testimonial.</span>
//             </label>
//             <label className="inline-flex items-center cursor-pointer">
//               <input
//                 type="radio"
//                 name="reviewOffer"
//                 value="10%_off_video"
//                 checked={formData.reviewOffer === '10%_off_video'}
//                 onChange={handleChange}
//                 className="form-radio h-4 w-4 text-orange-600 border-amber-300 focus:ring-orange-500"
//               />
//               <span className="ml-2 text-sm text-gray-700">Receive **10% Off / Celestial Cashback** for a video testimonial.</span>
//             </label>
//           </div>
//         </div>
        
//         {/* --- 🚀 Submit Button --- */}
//         <motion.button
//           type="submit"
//           className="w-full mt-8 flex justify-center py-3 px-4 border border-transparent rounded-md shadow-lg text-lg font-medium text-white
//                      bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600
//                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-150 ease-in-out"
//           whileHover={{ scale: 1.02, boxShadow: '0 6px 15px rgba(251, 191, 36, 0.4)' }} // shadow with yellow tint
//           whileTap={{ scale: 0.98 }}
//         >
//           Share My Cosmic Experience
//         </motion.button>
//       </form>
//     </motion.div>
//   );
// };

// export default CourseExperienceForm;





// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

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
//  * Handles text input, text area, and file input types.
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

// // --- Main Application Component (Refactored from CourseExperienceForm) ---

// const CourseExperienceForm = () => {
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

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Basic validation check for required fields
//     if (!formData.fullName || !formData.courseName || formData.overallRating === 0 || !formData.mostLiked || !formData.learningExperience) {
//       console.error("Please fill out all required fields.");
//       // In a real app, you would show a warning UI here instead of just logging to console
//       return;
//     }

//     // Replace alert with state update for UI feedback
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
//           <span className="mr-3 text-4xl">🔮</span> Cosmic Experience Form
//         </h1>
//         <form onSubmit={handleSubmit}>

//           {/* --- 🧍‍♂ Basic Information --- */}
//           <h2 className="text-xl font-bold text-orange-700 mb-4 border-b-2 pb-2 border-amber-300">Basic Information (आधारभूत जानकारी)</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <MotionInput
//               label="Full Name (आपका दिव्य नाम)"
//               id="fullName"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               required
//             />
//             <MotionInput
//               label="Email ID (ब्रह्मांडीय संपर्क - Optional)"
//               id="email"
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>
//           <MotionInput
//             label="Phone Number (तारकीय संचार - Optional)"
//             id="phone"
//             name="phone"
//             type="tel"
//             value={formData.phone}
//             onChange={handleChange}
//           />

//           <div className="mt-8">
//             {/* --- 📚 Course Details --- */}
//             <h2 className="text-xl font-bold text-orange-700 mb-4 border-b-2 pb-2 border-amber-300">Celestial Course Details (आकाशीय विवरण)</h2>
//             <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }} className="mb-4">
//               <label className="block text-sm font-semibold text-amber-800 mb-2">
//                 Which Cosmic Journey did you undertake? <span className="text-red-600">*</span>
//               </label>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
//                 {courseOptions.map((course) => (
//                   <motion.div
//                     key={course.name}
//                     className={`flex items-center p-3 rounded-xl border-2 cursor-pointer transition-all duration-200
//                                 ${formData.courseName === course.name
//                                   ? 'border-orange-500 bg-orange-100 shadow-md ring-2 ring-orange-400'
//                                   : 'border-amber-300 bg-amber-50 hover:border-orange-400 hover:shadow-lg'
//                                 }`}
//                     onClick={() => handleCourseSelect(course.name)}
//                     whileHover={{ scale: 1.03 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     <course.icon className="text-orange-500 mr-3 text-2xl" />
//                     <span className="font-medium text-amber-900 text-sm md:text-base">{course.name}</span>
//                   </motion.div>
//                 ))}
//               </div>
//               {!formData.courseName && (
//                 <p className="text-sm text-red-600 mt-2">Please select a course.</p>
//               )}
//             </motion.div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <MotionInput
//                 label="Initiation Date (MM/YYYY)"
//                 id="completionDate"
//                 name="completionDate"
//                 value={formData.completionDate}
//                 onChange={handleChange}
//                 placeholder="e.g., 08/2024"
//                 required
//               />
//               <MotionInput
//                 label="Celestial Guide Name (गुरु का नाम - Optional)"
//                 id="trainerName"
//                 name="trainerName"
//                 value={formData.trainerName}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           <div className="mt-8">
//             {/* --- ⭐ Experience & Feedback --- */}
//             <h2 className="text-xl font-bold text-orange-700 mb-4 border-b-2 pb-2 border-amber-300">Cosmic Journey Feedback (ब्रह्मांडीय प्रतिक्रिया)</h2>

//             <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.2 }} className="mb-6 bg-amber-50 p-4 rounded-xl border border-amber-200">
//               <label className="block text-sm font-semibold text-amber-800 mb-2">
//                 Overall Astral Alignment (1-5 Star) <span className="text-red-600">*</span>
//               </label>
//               <StarRating
//                 rating={formData.overallRating}
//                 setRating={(rate) => setFormData(prev => ({ ...prev, overallRating: rate }))}
//               />
//               <p className="text-sm text-gray-600 mt-2">Selected Alignment: <span className='font-bold'>{formData.overallRating}</span> / 5 Stars</p>
//             </motion.div>

//             <MotionInput
//               label="What constellation shone brightest during your journey? (सबसे अच्छा अनुभव)"
//               id="mostLiked"
//               name="mostLiked"
//               type="textarea"
//               value={formData.mostLiked}
//               onChange={handleChange}
//               required
//             />
//             <MotionInput
//               label="What celestial pathways could be improved? (क्या बेहतर हो सकता है?)"
//               id="improvements"
//               name="improvements"
//               type="textarea"
//               value={formData.improvements}
//               onChange={handleChange}
//             />

//             <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.3 }} className="mb-6">
//               <label className="block text-sm font-semibold text-amber-800 mb-2">
//                 How profound was your learning experience? <span className="text-red-600">*</span>
//               </label>
//               <div className="flex flex-wrap gap-4">
//                 {experienceOptions.map((option) => (
//                   <label key={option} className="inline-flex items-center cursor-pointer p-2 rounded-full border transition duration-150 ease-in-out
//                                                   ${formData.learningExperience === option ? 'bg-orange-400 text-white shadow-md' : 'bg-amber-100 text-gray-700 border-amber-300 hover:bg-amber-200'}">
//                     <input
//                       type="radio"
//                       name="learningExperience"
//                       value={option}
//                       checked={formData.learningExperience === option}
//                       onChange={handleChange}
//                       className="form-radio h-4 w-4 text-orange-600 border-amber-300 focus:ring-orange-500 hidden"
//                       required
//                     />
//                     <span className="ml-2 font-medium">{option}</span>
//                   </label>
//                 ))}
//               </div>
//             </motion.div>
//           </div>

//           <div className="mt-8 p-4 bg-yellow-50 rounded-xl border border-orange-300 shadow-inner">
//             {/* --- 📸 Optional Section & Offers --- */}
//             <h2 className="text-xl font-bold text-orange-700 mb-4 flex items-center"><StarIcon className="mr-2 text-yellow-500 w-5 h-5" /> Astral Offerings</h2>

//             <MotionInput
//               label="Upload an image of your Cosmic Certificate or a photo of your Aura (Optional)"
//               id="uploadFile"
//               name="uploadFile"
//               type="file"
//             />

//             <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.4 }} className="mb-4">
//               <label className="inline-flex items-center cursor-pointer">
//                 <input
//                   type="checkbox"
//                   name="allowTestimonial"
//                   checked={formData.allowTestimonial}
//                   onChange={handleChange}
//                   className="form-checkbox h-5 w-5 text-orange-600 rounded border-amber-300 ring-orange-500"
//                 />
//                 <span className="ml-2 text-sm text-gray-800 font-medium">
//                   **Cosmic Consent:** I allow my feedback to illuminate your website.
//                 </span>
//               </label>
//             </motion.div>

//             {/* Review Offers */}
//             <h3 className="font-bold text-amber-900 mt-4 mb-2 border-t pt-3 border-amber-300">✨ Choose Your Celestial Reward:</h3>
//             <div className="flex flex-col space-y-3">
//               <label className="inline-flex items-center cursor-pointer p-2 rounded-lg bg-amber-100 hover:bg-amber-200 transition duration-150">
//                 <input
//                   type="radio"
//                   name="reviewOffer"
//                   value="5%_off_written"
//                   checked={formData.reviewOffer === '5%_off_written'}
//                   onChange={handleChange}
//                   className="form-radio h-4 w-4 text-orange-600 border-amber-300 focus:ring-orange-500"
//                 />
//                 <span className="ml-3 text-sm text-gray-800">Receive **5% Off** your next astrological reading for a written testimonial.</span>
//               </label>
//               <label className="inline-flex items-center cursor-pointer p-2 rounded-lg bg-amber-100 hover:bg-amber-200 transition duration-150">
//                 <input
//                   type="radio"
//                   name="reviewOffer"
//                   value="10%_off_video"
//                   checked={formData.reviewOffer === '10%_off_video'}
//                   onChange={handleChange}
//                   className="form-radio h-4 w-4 text-orange-600 border-amber-300 focus:ring-orange-500"
//                 />
//                 <span className="ml-3 text-sm text-gray-800">Receive **10% Off** / Celestial Cashback for a video testimonial.</span>
//               </label>
//             </div>
//           </div>

//           {/* --- 🚀 Submit Button --- */}
//           <motion.button
//             type="submit"
//             className="w-full mt-8 flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-xl text-lg font-bold text-white
//                         bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700
//                         focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-orange-500 transition duration-150 ease-in-out"
//             whileHover={{ scale: 1.02, boxShadow: '0 8px 20px rgba(234, 88, 12, 0.4)' }} // shadow with orange tint
//             whileTap={{ scale: 0.98 }}
//             disabled={isSubmitted}
//           >
//             Share My Cosmic Experience
//           </motion.button>
//         </form>
//       </motion.div>
//     </AppContainer>
//   );
// };

// export default CourseExperienceForm;



// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

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
//         Select your astrology course {required && <span className="text-red-600">*</span>}
//       </label>

//       <motion.div
//         className="relative z-10" // High z-index to ensure it sits above other elements
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.3 }}
//       >
//         <button
//           type="button"
//           // Added tabIndex to allow focus/blur logic
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

// const CourseExperienceForm = () => {
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

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Basic validation check for required fields
//     if (!formData.fullName || !formData.courseName || formData.overallRating === 0 || !formData.mostLiked || !formData.learningExperience) {
//       console.error("Please fill out all required fields.");
//       // In a real app, you would show a warning UI here instead of just logging to console
//       return;
//     }

//     // Replace alert with state update for UI feedback
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
//         <form onSubmit={handleSubmit}>

//           {/* --- 🧍‍♂ Basic Information --- */}
//           {/* Section title updated to be simple and clear */}
//           <h2 className="text-xl font-bold text-orange-700 mb-4 border-b-2 pb-2 border-amber-300">Your Contact Details</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <MotionInput
//               label="Full Name"
//               id="fullName"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               required
//             />
//             {/* Kept optional as email/phone are generally optional in feedback forms */}
//             <MotionInput
//               label="Email ID (Optional)"
//               id="email"
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>
//           <MotionInput
//             label="Phone Number (Optional)"
//             id="phone"
//             name="phone"
//             type="tel"
//             value={formData.phone}
//             onChange={handleChange}
//           />

//           <div className="mt-8">
//             {/* --- 📚 Course Details --- */}
//             <h2 className="text-xl font-bold text-orange-700 mb-4 border-b-2 pb-2 border-amber-300">Course Information</h2>
            
//             {/* Custom Dropdown Component */}
//             <CourseDropdown
//                 options={courseOptions}
//                 selectedCourse={formData.courseName}
//                 onSelect={handleCourseSelect}
//                 required
//             />

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <MotionInput
//                 label="Initiation Date (MM/YYYY)"
//                 id="completionDate"
//                 name="completionDate"
//                 value={formData.completionDate}
//                 onChange={handleChange}
//                 placeholder="e.g., 08/2024"
//                 required
//               />
//               <MotionInput
//                 label="Celestial Guide Name (Optional)"
//                 id="trainerName"
//                 name="trainerName"
//                 value={formData.trainerName}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           <div className="mt-8">
//             {/* --- ⭐ Experience & Feedback --- */}
//             <h2 className="text-xl font-bold text-orange-700 mb-4 border-b-2 pb-2 border-amber-300">Journey Feedback</h2>

//             <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.2 }} className="mb-6 bg-amber-50 p-4 rounded-xl border border-amber-200">
//               <label className="block text-sm font-semibold text-amber-800 mb-2">
//                 Overall Astral Alignment (1-5 Star) <span className="text-red-600">*</span>
//               </label>
//               <StarRating
//                 rating={formData.overallRating}
//                 setRating={(rate) => setFormData(prev => ({ ...prev, overallRating: rate }))}
//               />
//               <p className="text-sm text-gray-600 mt-2">Selected Alignment: <span className='font-bold'>{formData.overallRating}</span> / 5 Stars</p>
//             </motion.div>

//             <MotionInput
//               label="What constellation shone brightest during your journey? (Most Liked)"
//               id="mostLiked"
//               name="mostLiked"
//               type="textarea"
//               value={formData.mostLiked}
//               onChange={handleChange}
//               required
//             />
//             <MotionInput
//               label="What celestial pathways could be improved? (Improvements)"
//               id="improvements"
//               name="improvements"
//               type="textarea"
//               value={formData.improvements}
//               onChange={handleChange}
//             />

//             <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.3 }} className="mb-6">
//               <label className="block text-sm font-semibold text-amber-800 mb-2">
//                 How profound was your learning experience? <span className="text-red-600">*</span>
//               </label>
//               <div className="flex flex-wrap gap-4">
//                 {experienceOptions.map((option) => (
//                   <label key={option} className="inline-flex items-center cursor-pointer p-2 rounded-full border transition duration-150 ease-in-out
//                                                   ${formData.learningExperience === option ? 'bg-orange-400 text-white shadow-md' : 'bg-amber-100 text-gray-700 border-amber-300 hover:bg-amber-200'}">
//                     <input
//                       type="radio"
//                       name="learningExperience"
//                       value={option}
//                       checked={formData.learningExperience === option}
//                       onChange={handleChange}
//                       className="form-radio h-4 w-4 text-orange-600 border-amber-300 focus:ring-orange-500 hidden"
//                       required
//                     />
//                     <span className="ml-2 font-medium">{option}</span>
//                   </label>
//                 ))}
//               </div>
//             </motion.div>
//           </div>

//           <div className="mt-8 p-4 bg-yellow-50 rounded-xl border border-orange-300 shadow-inner">
//             {/* --- 📸 Optional Section & Offers --- */}
//             <h2 className="text-xl font-bold text-orange-700 mb-4 flex items-center"><StarIcon className="mr-2 text-yellow-500 w-5 h-5" /> Astral Offerings</h2>

//             <MotionInput
//               label="Upload an image of your Cosmic Certificate or a photo of your Aura (Optional)"
//               id="uploadFile"
//               name="uploadFile"
//               type="file"
//             />

//             <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.4 }} className="mb-4">
//               <label className="inline-flex items-center cursor-pointer">
//                 <input
//                   type="checkbox"
//                   name="allowTestimonial"
//                   checked={formData.allowTestimonial}
//                   onChange={handleChange}
//                   className="form-checkbox h-5 w-5 text-orange-600 rounded border-amber-300 ring-orange-500"
//                 />
//                 <span className="ml-2 text-sm text-gray-800 font-medium">
//                   **Cosmic Consent:** I allow my feedback to illuminate your website.
//                 </span>
//               </label>
//             </motion.div>

//             {/* Review Offers */}
//             <h3 className="font-bold text-amber-900 mt-4 mb-2 border-t pt-3 border-amber-300">✨ Choose Your Celestial Reward:</h3>
//             <div className="flex flex-col space-y-3">
//               <label className="inline-flex items-center cursor-pointer p-2 rounded-lg bg-amber-100 hover:bg-amber-200 transition duration-150">
//                 <input
//                   type="radio"
//                   name="reviewOffer"
//                   value="5%_off_written"
//                   checked={formData.reviewOffer === '5%_off_written'}
//                   onChange={handleChange}
//                   className="form-radio h-4 w-4 text-orange-600 border-amber-300 focus:ring-orange-500"
//                 />
//                 <span className="ml-3 text-sm text-gray-800">Receive **5% Off** your next astrological reading for a written testimonial.</span>
//               </label>
//               <label className="inline-flex items-center cursor-pointer p-2 rounded-lg bg-amber-100 hover:bg-amber-200 transition duration-150">
//                 <input
//                   type="radio"
//                   name="reviewOffer"
//                   value="10%_off_video"
//                   checked={formData.reviewOffer === '10%_off_video'}
//                   onChange={handleChange}
//                   className="form-radio h-4 w-4 text-orange-600 border-amber-300 focus:ring-orange-500"
//                 />
//                 <span className="ml-3 text-sm text-gray-800">Receive **10% Off** / Celestial Cashback for a video testimonial.</span>
//               </label>
//             </div>
//           </div>

//           {/* --- 🚀 Submit Button --- */}
//           <motion.button
//             type="submit"
//             className="w-full mt-8 flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-xl text-lg font-bold text-white
//                         bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700
//                         focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-orange-500 transition duration-150 ease-in-out"
//             whileHover={{ scale: 1.02, boxShadow: '0 8px 20px rgba(234, 88, 12, 0.4)' }} // shadow with orange tint
//             whileTap={{ scale: 0.98 }}
//             disabled={isSubmitted}
//           >
//             Share My Cosmic Experience
//           </motion.button>
//         </form>
//       </motion.div>
//     </AppContainer>
//   );
// };

// export default CourseExperienceForm;




// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// // --- Icon Definitions using Inline SVG ---

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

// const XIcon = ({ className, onClick }) => (
//   <svg 
//     xmlns="http://www.w3.org/2000/svg" 
//     className={`h-5 w-5 cursor-pointer ${className}`} 
//     fill="none" 
//     viewBox="0 0 24 24" 
//     stroke="currentColor"
//     strokeWidth="2"
//     onClick={onClick}
//   >
//     <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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
//   <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center p-4 font-['Inter']">
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
//     <label htmlFor={id} className="block text-lg font-semibold text-amber-800 mb-1">
//       {label} {required && <span className="text-red-600 ">*</span>}
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
//               color={ratingValue <= (hover || rating) ? "yellow" : "white"} // amber-500 vs amber-300
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
//  * FIX: Removed the onBlur handler from the main button to ensure single-click selection.
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
//       <label className="block text-lg font-semibold text-amber-800 mb-1">
//         Select your astrology course {required && <span className="text-red-600">*</span>}
//       </label>

//       <motion.div
//         className="relative z-10"
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.3 }}
//       >
//         {/* FIX: Removed the onBlur handler to ensure selection works on the first click */}
//         <button
//           type="button"
//           tabIndex={0}
//           className={`w-full flex justify-between items-center p-3 text-left bg-amber-50 border rounded-lg shadow-inner text-amber-900 font-medium transition duration-150 ${selectedOption ? 'border-orange-400' : 'border-amber-300'} hover:border-orange-500`}
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <span>
//             {selectedOption ? (
//               <span className="flex items-center">
//                 {React.createElement(selectedOption.icon, { className: "text-orange-500 mr-3 text-xl" })}
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
//                 // Single click to select and close
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
//     </div>
//   );
// };


// // --- Main Application Component ---

// const CourseExperienceForm = () => {
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
//   const [selectedFile, setSelectedFile] = useState(null); // State to hold the selected file
//   const [fileInputKey, setFileInputKey] = useState(0); // Key to reset file input

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
  
//   // Handler for file selection
//   const handleFileChange = (e) => {
//     setSelectedFile(e.target.files[0] || null);
//   };

//   // Handler for certificate removal (X button)
//   const handleRemoveFile = () => {
//     setSelectedFile(null);
//     // Increment the key to force the file input to re-render and clear its value
//     setFileInputKey(prev => prev + 1);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Explicit Validation Check (Now including email and phone)
//     if (!formData.fullName || !formData.email || !formData.phone || !formData.courseName || formData.overallRating === 0 || !formData.mostLiked || !formData.learningExperience) {
//       console.error("Please fill out all required fields.");
//       // In a real app, you would show a warning UI here instead of just logging to console
//       // The HTML5 'required' attribute helps prevent this but this is a fail-safe
//       return;
//     }

//     // Replace alert with state update for UI feedback
//     console.log('Form Submitted!', { ...formData, file: selectedFile ? selectedFile.name : 'None' });
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
//             onClick={() => { setIsSubmitted(false); setSelectedFile(null); setFormData({ ...formData, overallRating: 0 }); }}
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
//         <h1 className="text-4xl font-extrabold text-orange-800 mb-6 text-center flex items-center justify-center">
//           <span className="mr-3 text-4xl">🔮</span> Astrology Feedback
//         </h1>
//         <form onSubmit={handleSubmit}>

//           {/* --- 🧍‍♂ Basic Information --- */}
//           <h2 className="text-2xl font-bold text-orange-700 mb-4 border-b-2 pb-2 border-amber-300">Your Contact Details</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <MotionInput
//               label="Full Name"
//               id="fullName"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleChange}
//               required
//             />
//             {/* EMAIL IS NOW MANDATORY */}
//             <MotionInput
//               label="Email ID"
//               id="email"
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           {/* PHONE IS NOW MANDATORY */}
//           <MotionInput
//             label="Phone Number"
//             id="phone"
//             name="phone"
//             type="tel"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />

//           <div className="mt-8">
//             {/* --- 📚 Course Details --- */}
//             <h2 className="text-2xl font-bold text-orange-700 mb-4 border-b-2 pb-2 border-amber-300">Course Information</h2>
            
//             {/* Custom Dropdown Component (FIXED for single click) */}
//             <CourseDropdown
//                 options={courseOptions}
//                 selectedCourse={formData.courseName}
//                 onSelect={handleCourseSelect}
//                 required
//             />

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {/* DATE PICKER FEATURE ADDED */}
//               <MotionInput
//                 label="Start Date"
//                 id="completionDate"
//                 name="completionDate"
//                 type="date" // <--- Date type input
//                 value={formData.completionDate}
//                 onChange={handleChange}
//                 required
//               />
//               <MotionInput
//                 label="Faculty Name "
//                 id="trainerName"
//                 name="trainerName"
//                 value={formData.trainerName}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           <div className="mt-8">
//             {/* --- ⭐ Experience & Feedback --- */}
//             <h2 className="text-2xl font-bold text-orange-700 mb-4 border-b-2 pb-2 border-amber-300">Course Experience</h2>

//             <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.2 }} className="mb-6 bg-amber-50 p-4 rounded-xl border border-amber-200">
//               <label className="block text-lg font-semibold text-amber-800 mb-2">
//                 Overall Experience (1-5 Star) <span className="text-red-600">*</span>
//               </label>
//               <StarRating
//                 rating={formData.overallRating}
//                 setRating={(rate) => setFormData(prev => ({ ...prev, overallRating: rate }))}
//               />
//               <p className="text-base text-gray-600 mt-2">Selected Alignment: <span className='font-bold'>{formData.overallRating}</span> / 5 Stars</p>
//             </motion.div>

//             <MotionInput
//               label="Which course did you like the most?"
//               id="mostLiked"
//               name="mostLiked"
//               type="textarea"
//               value={formData.mostLiked}
//               onChange={handleChange}
//               required
//             />
//             <MotionInput
//               label="Any suggestions for improvement?"
//               id="improvements"
//               name="improvements"
//               type="textarea"
//               value={formData.improvements}
//               onChange={handleChange}
//             />

//             <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.3 }} className="mb-6">
//               <label className="block text-lg font-semibold text-amber-800 mb-2">
//                How was your learning experience? <span className="text-red-600">*</span>
//               </label>
//               <div className="flex flex-wrap gap-4">
//                 {experienceOptions.map((option) => (
//                   <label key={option} className="inline-flex items-center cursor-pointer p-2 rounded-full border transition duration-150 ease-in-out
//                                   ${formData.learningExperience === option ? 'bg-orange-400 text-black hover:bg-amber-300 shadow-md' : 'bg-amber-300 text-gray-700 border-amber-300 hover:bg-amber-200'}">
//                     <input
//                       type="radio"
//                       name="learningExperience"
//                       value={option}
//                       checked={formData.learningExperience === option}
//                       onChange={handleChange}
//                       className="form-radio h-4 w-4 text-orange-600 border-amber-300 focus:ring-orange-500 hidden"
//                       required
//                     />
//                     <span className="ml-2 font-medium">{option}</span>
//                   </label>
//                 ))}
//               </div>
//             </motion.div>
//           </div>

//           <div className="mt-8 p-4 bg-yellow-50 rounded-xl border border-orange-300 shadow-inner">
//             {/* --- 📸 Optional Section & Offers --- */}
//             <h2 className="text-2xl font-bold text-orange-700 mb-4 flex items-center"><StarIcon className="mr-2 text-yellow-500 w-5 h-5" /> Course Offerings</h2>

//             {/* CERTIFICATE REPLACEMENT FEATURE */}
//             {selectedFile ? (
//               <motion.div 
//                 initial={{ opacity: 0, x: -10 }} 
//                 animate={{ opacity: 1, x: 0 }} 
//                 className="mb-4 flex items-center justify-between p-3 bg-white border border-green-300 rounded-lg shadow-sm "
//               >
//                 <span className="text-base font-medium text-green-700 truncate">
//                   ✅ Certificate Selected: {selectedFile.name}
//                 </span>
//                 <XIcon 
//                   className="text-red-500 hover:text-red-700 transition" 
//                   onClick={handleRemoveFile} 
//                 />
//               </motion.div>
//             ) : (
//               <MotionInput
//                 key={fileInputKey} // Key changes to force reset
//                 label="Upload an image of your Course Certificate."
//                 id="uploadFile"
//                 name="uploadFile"
//                 type="file"
//                 onChange={handleFileChange}
//               />
//             )}

//             <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.4 }} className="mb-4">
//               <label className="inline-flex items-center cursor-pointer">
//                 <input
//                   type="checkbox"
//                   name="allowTestimonial"
//                   checked={formData.allowTestimonial}
//                   onChange={handleChange}
//                   className="form-checkbox h-5 w-5 text-orange-600 rounded border-amber-300 ring-orange-500"
//                 />
//                 <span className="ml-2 text-base text-gray-800 font-medium">
//                   **Cosmic Consent:** I allow my feedback to illuminate your website.
//                 </span>
//               </label>
//             </motion.div>

//             {/* Review Offers */}
//             <h3 className="font-bold text-amber-900 mt-4 mb-2 border-t pt-3 border-amber-300 text-lg">✨ Choose Your Reward:</h3>
//             <div className="flex flex-col space-y-3">
//               <label className="inline-flex items-center cursor-pointer p-2 rounded-lg bg-amber-100 hover:bg-amber-200 transition duration-150">
//                 <input
//                   type="radio"
//                   name="reviewOffer"
//                   value="5%_off_written"
//                   checked={formData.reviewOffer === '5%_off_written'}
//                   onChange={handleChange}
//                   className="form-radio h-4 w-4 text-orange-600 border-amber-300 focus:ring-orange-500"
//                 />
//                 <span className="ml-3 text-base text-gray-800">Receive **5% Off** your next astrological reading for a written testimonial.</span>
//               </label>
//               <label className="inline-flex items-center cursor-pointer p-2 rounded-lg bg-amber-100 hover:bg-amber-200 transition duration-150">
//                 <input
//                   type="radio"
//                   name="reviewOffer"
//                   value="10%_off_video"
//                   checked={formData.reviewOffer === '10%_off_video'}
//                   onChange={handleChange}
//                   className="form-radio h-4 w-4 text-orange-600 border-amber-300 focus:ring-orange-500"
//                 />
//                 <span className="ml-3 text-base text-gray-800">Receive **10% Off** / Celestial Cashback for a video testimonial.</span>
//               </label>
//             </div>
//           </div>

//           {/* --- 🚀 Submit Button --- */}
//           <motion.button
//             type="submit"
//             className="w-full mt-8 flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-xl text-xl font-bold text-white
//                         bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700
//                         focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-orange-500 transition duration-150 ease-in-out"
//             whileHover={{ scale: 1.02, boxShadow: '0 8px 20px rgba(234, 88, 12, 0.4)' }}
//             whileTap={{ scale: 0.98 }}
//             disabled={isSubmitted}
//           >
//             Share My Cosmic Experience
//           </motion.button>
//         </form>
//       </motion.div>
//     </AppContainer>
//   );
// };

// export default CourseExperienceForm;



import React, { useState } from 'react';
import { motion } from 'framer-motion';

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

const XIcon = ({ className, onClick }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className={`h-5 w-5 cursor-pointer ${className}`} 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
    strokeWidth="2"
    onClick={onClick}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const IconWrapper = ({ children, className }) => (
  <div className={className}>{children}</div>
);

// --- New and Updated Icons for Vedic Curriculum ---

// 1. Chart/Astrology Icon (for timing, charts, general astrology)
const AstrologyChartIcon = ({ className }) => (<IconWrapper className={className}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2v10M12 12l8.66-5M12 12l-8.66-5M12 12l8.66 5M12 12l-8.66 5" /></svg></IconWrapper>);
// 2. Book/Text Icon (for Vedas, Upanishads, Sanskrit)
const BookIcon = ({ className }) => (<IconWrapper className={className}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2" /></svg></IconWrapper>);
// 3. Hand Icon (for Palmistry/Hastrekha)
const HandIcon = ({ className }) => (<IconWrapper className={className}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10c0 1.333-1 3.5-3 5-1.5 1-2 2-2 4h-2c0-2-0.5-3-2-4-2-1.5-3-3.667-3-5V4a2 2 0 014 0v6M2 18h20" /></svg></IconWrapper>);
// 4. Vastu/House Icon (for Vastu Shastra)
const VastuIcon = ({ className }) => (<IconWrapper className={className}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M12 3l9 4.5v9L12 21 3 16.5v-9L12 3z" /><path d="M3 7.5l9 4.5 9-4.5" /></svg></IconWrapper>);
// 5. Diya/Flame Icon (for Puja, Mantras, Healing)
const DiyaIcon = ({ className }) => (<IconWrapper className={className}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a2 2 0 00-2 2v1a2 2 0 002 2 2 2 0 002-2V4a2 2 0 00-2-2z" /><path d="M5 22h14c0-3-2-6-4-7h-6c-2 1-4 4-4 7z" /><path d="M10 17l2 5 2-5" /></svg></IconWrapper>);
// 6. Math/Science Icon (for Vedic Mathematics, Vedic Science)
const MathIcon = ({ className }) => (<IconWrapper className={className}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /><circle cx="12" cy="12" r="10" /></svg></IconWrapper>);
// 7. Numerology Icon (for Numerology)
const NumerologyIcon = ({ className }) => (<IconWrapper className={className}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 8h.01M15 12h.01M15 16h.01" /><circle cx="10" cy="12" r="8" /><path d="M10 8V6" /><path d="M10 18v-2" /></svg></IconWrapper>);

const Icons = {
    AstrologyChart: AstrologyChartIcon,
    Book: BookIcon,
    Hand: HandIcon,
    Vastu: VastuIcon,
    Diya: DiyaIcon,
    Math: MathIcon,
    Numerology: NumerologyIcon,
};

// Reusable icon for the submission message
const CrystalBallIcon = ({ className }) => (<IconWrapper className={className}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 12h8M12 8v8" /></svg></IconWrapper>);


// Define styles for the entire app container
const AppContainer = ({ children }) => (
  <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center p-4 font-['Inter']">
    {children}
  </div>
);

// --- Helper Components for Framer Motion and Tailwind Styling (Unchanged) ---

/**
 * 1. Animated Input Field
 */
const MotionInput = ({ label, id, type = 'text', required = false, ...props }) => (
  <motion.div
    className="mb-4"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <label htmlFor={id} className="block text-lg font-semibold text-amber-800 mb-1">
      {label} {required && <span className="text-red-600 ">*</span>}
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
  </motion.div>
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
              color={ratingValue <= (hover || rating) ? "rgb(251 191 36)" : "rgb(255 255 255)"} // Using Tailwind colors in RGB format
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
  // Find the full option object to display the name and icon
  const selectedOption = options.find(opt => opt.name === selectedCourse);

  const handleSelect = (courseName) => {
    onSelect(courseName);
    setIsOpen(false);
  };

  return (
    <div className="mb-4">
      <label className="block text-lg font-semibold text-amber-800 mb-1">
        Select your course of study {required && <span className="text-red-600">*</span>}
      </label>

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button
          type="button"
          tabIndex={0}
          className={`w-full flex justify-between items-center p-3 text-left bg-amber-50 border rounded-lg shadow-inner text-amber-900 font-medium transition duration-150 ${selectedOption ? 'border-orange-400' : 'border-amber-300'} hover:border-orange-500`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>
            {selectedOption ? (
              <span className="flex items-center">
                {React.createElement(selectedOption.icon, { className: "text-orange-500 mr-3 text-xl" })}
                {selectedOption.name}
              </span>
            ) : (
              'Select Your Vedic Path...'
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
                // Single click to select and close
                onClick={() => handleSelect(option.name)}
                // Gradient hover effect
                className={`flex items-center p-3 cursor-pointer transition duration-150 ease-in-out border-b border-amber-100 last:border-b-0
                  ${selectedCourse === option.name ? 'bg-orange-100 text-orange-800 font-semibold' : 'text-amber-900'}
                  hover:bg-gradient-to-r hover:from-yellow-100 hover:to-orange-200 hover:text-orange-900`}
              >
                {React.createElement(option.icon, { className: `mr-3 text-xl ${selectedCourse === option.name ? 'text-orange-600' : 'text-amber-500'}` })}
                {option.name}
              </div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};


// --- Main Application Component ---

const CourseExperienceForm = () => {
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
  const [selectedFile, setSelectedFile] = useState(null); // State to hold the selected file
  const [fileInputKey, setFileInputKey] = useState(0); // Key to reset file input

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
  
  // Handler for file selection
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0] || null);
  };

  // Handler for certificate removal (X button)
  const handleRemoveFile = () => {
    setSelectedFile(null);
    // Increment the key to force the file input to re-render and clear its value
    setFileInputKey(prev => prev + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Explicit Validation Check (Now including email and phone)
    if (!formData.fullName || !formData.email || !formData.phone || !formData.courseName || formData.overallRating === 0 || !formData.mostLiked || !formData.learningExperience) {
      console.error("Please fill out all required fields.");
      // In a real app, you would show a warning UI here instead of just logging to console
      // The HTML5 'required' attribute helps prevent this but this is a fail-safe
      return;
    }

    // Replace alert with state update for UI feedback
    console.log('Form Submitted!', { ...formData, file: selectedFile ? selectedFile.name : 'None' });
    setIsSubmitted(true);
  };

  // --- NEW VEDIC-THEMED COURSE OPTIONS ---
  const courseOptions = [
    { name: 'Vedic Astrology', icon: Icons.AstrologyChart },
    { name: 'Palmistry (Hastrekha)', icon: Icons.Hand },
    { name: 'Numerology', icon: Icons.Numerology },
    { name: 'Vastu Shastra', icon: Icons.Vastu },
    { name: 'Sanskrit Vyakarana', icon: Icons.Book },
    { name: 'Daily Puja Routine', icon: Icons.Diya },
    { name: 'Muhurtas', icon: Icons.AstrologyChart },
    { name: 'Upanishads', icon: Icons.Book },
    { name: 'Vedas', icon: Icons.Book },
    { name: 'Purana & Itihas', icon: Icons.Book },
    { name: 'Vedic Mathematics', icon: Icons.Math },
    { name: 'Mantra Healing', icon: Icons.Diya },
    { name: 'Sanskrit (Reading + Chanting)', icon: Icons.Book },
    { name: 'Sacred Texts Reading', icon: Icons.Book },
    { name: 'Vedic Science', icon: Icons.Math },
    { name: 'Vedic Philosophy', icon: Icons.Book },
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
            Thank you for sharing your **Vedic Experience**. Your feedback is now aligning with our mission!
          </p>
          <motion.button
            onClick={() => { setIsSubmitted(false); setSelectedFile(null); setFormData({ ...formData, overallRating: 0 }); }}
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
        className="max-w-3xl w-full mx-auto p-8 bg-white shadow-2xl rounded-2xl border-4 border-orange-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-extrabold text-orange-800 mb-6 text-center flex items-center justify-center">
          <span className="mr-3 text-4xl">🕉️</span> AstrologyCourse Feedback 
        </h1>
        <form onSubmit={handleSubmit}>

          {/* --- 🧍‍♂ Basic Information --- */}
          <h2 className="text-2xl font-bold text-orange-700 mb-4 border-b-2 pb-2 border-amber-300">Your Contact Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MotionInput
              label="Full Name"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            {/* EMAIL IS NOW MANDATORY */}
            <MotionInput
              label="Email ID"
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          {/* PHONE IS NOW MANDATORY */}
          <MotionInput
            label="Phone Number"
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <div className="mt-8">
            {/* --- 📚 Course Details --- */}
            <h2 className="text-2xl font-bold text-orange-700 mb-4 border-b-2 pb-2 border-amber-300">Course Information</h2>
            
            {/* Custom Dropdown Component (NOW WITH VEDIC COURSES) */}
            <CourseDropdown
                options={courseOptions}
                selectedCourse={formData.courseName}
                onSelect={handleCourseSelect}
                required
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* DATE PICKER FEATURE ADDED */}
              <MotionInput
                label="Start Date"
                id="completionDate"
                name="completionDate"
                type="date" // <--- Date type input
                value={formData.completionDate}
                onChange={handleChange}
                required
              />
              <MotionInput
                label="Faculty Name "
                id="trainerName"
                name="trainerName"
                value={formData.trainerName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mt-8">
            {/* --- ⭐ Experience & Feedback --- */}
            <h2 className="text-2xl font-bold text-orange-700 mb-4 border-b-2 pb-2 border-amber-300">Course Experience</h2>

            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.2 }} className="mb-6 bg-amber-50 p-4 rounded-xl border border-amber-200">
              <label className="block text-lg font-semibold text-amber-800 mb-2">
                Overall Experience (1-5 Star) <span className="text-red-600">*</span>
              </label>
              <StarRating
                rating={formData.overallRating}
                setRating={(rate) => setFormData(prev => ({ ...prev, overallRating: rate }))}
              />
              <p className="text-base text-gray-600 mt-2">Selected Alignment: <span className='font-bold'>{formData.overallRating}</span> / 5 Stars</p>
            </motion.div>

            <MotionInput
              label="Which course did you like the most?"
              id="mostLiked"
              name="mostLiked"
              type="textarea"
              value={formData.mostLiked}
              onChange={handleChange}
              required
            />
            <MotionInput
              label="Any suggestions for improvement?"
              id="improvements"
              name="improvements"
              type="textarea"
              value={formData.improvements}
              onChange={handleChange}
            />

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.3 }} className="mb-6">
              <label className="block text-lg font-semibold text-amber-800 mb-2">
               How was your learning experience? <span className="text-red-600">*</span>
              </label>
              <div className="flex flex-wrap gap-4">
                {experienceOptions.map((option) => (
                  <label 
                    key={option} 
                    className={`inline-flex items-center cursor-pointer p-2 rounded-full border transition duration-150 ease-in-out
                      ${formData.learningExperience === option 
                        ? 'bg-orange-500 text-white border-orange-600 shadow-lg hover:bg-orange-600' 
                        : 'bg-amber-100 text-amber-800 border-amber-300 hover:bg-amber-200'}
                    `}
                  >
                    <input
                      type="radio"
                      name="learningExperience"
                      value={option}
                      checked={formData.learningExperience === option}
                      onChange={handleChange}
                      className="form-radio h-4 w-4 text-orange-600 border-amber-300 focus:ring-orange-500 hidden"
                      required
                    />
                    <span className="ml-2 font-medium">{option}</span>
                  </label>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="mt-8 p-4 bg-yellow-50 rounded-xl border border-orange-300 shadow-inner">
            {/* --- 📸 Optional Section & Offers --- */}
            <h2 className="text-2xl font-bold text-orange-700 mb-4 flex items-center"><StarIcon className="mr-2 text-yellow-500 w-5 h-5" /> Course Offerings</h2>

            {/* CERTIFICATE REPLACEMENT FEATURE */}
            {selectedFile ? (
              <motion.div 
                initial={{ opacity: 0, x: -10 }} 
                animate={{ opacity: 1, x: 0 }} 
                className="mb-4 flex items-center justify-between p-3 bg-white border border-green-300 rounded-lg shadow-sm "
              >
                <span className="text-base font-medium text-green-700 truncate">
                  ✅ Certificate Selected: {selectedFile.name}
                </span>
                <XIcon 
                  className="text-red-500 hover:text-red-700 transition" 
                  onClick={handleRemoveFile} 
                />
              </motion.div>
            ) : (
              <MotionInput
                key={fileInputKey} // Key changes to force reset
                label="Upload an image of your Course Certificate."
                id="uploadFile"
                name="uploadFile"
                type="file"
                onChange={handleFileChange}
              />
            )}

            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.4 }} className="mb-4">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="allowTestimonial"
                  checked={formData.allowTestimonial}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-orange-600 rounded border-amber-300 ring-orange-500"
                />
                <span className="ml-2 text-base text-gray-800 font-medium">
                  **Vedic Consent:** I allow my feedback to illuminate your website.
                </span>
              </label>
            </motion.div>

            {/* Review Offers */}
            <h3 className="font-bold text-amber-900 mt-4 mb-2 border-t pt-3 border-amber-300 text-lg">✨ Choose Your Reward:</h3>
            <div className="flex flex-col space-y-3">
              <label className="inline-flex items-center cursor-pointer p-2 rounded-lg bg-amber-100 hover:bg-amber-200 transition duration-150">
                <input
                  type="radio"
                  name="reviewOffer"
                  value="5%_off_written"
                  checked={formData.reviewOffer === '5%_off_written'}
                  onChange={handleChange}
                  className="form-radio h-4 w-4 text-orange-600 border-amber-300 focus:ring-orange-500"
                />
                <span className="ml-3 text-base text-gray-800">Receive **5% Off** your next reading for a written testimonial.</span>
              </label>
              <label className="inline-flex items-center cursor-pointer p-2 rounded-lg bg-amber-100 hover:bg-amber-200 transition duration-150">
                <input
                  type="radio"
                  name="reviewOffer"
                  value="10%_off_video"
                  checked={formData.reviewOffer === '10%_off_video'}
                  onChange={handleChange}
                  className="form-radio h-4 w-4 text-orange-600 border-amber-300 focus:ring-orange-500"
                />
                <span className="ml-3 text-base text-gray-800">Receive **10% Off** / Spiritual Cashback for a video testimonial.</span>
              </label>
            </div>
          </div>

          {/* --- 🚀 Submit Button --- */}
          <motion.button
            type="submit"
            className="w-full mt-8 flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-xl text-xl font-bold text-white
                        bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700
                        focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-orange-500 transition duration-150 ease-in-out"
            whileHover={{ scale: 1.02, boxShadow: '0 8px 20px rgba(234, 88, 12, 0.4)' }}
            whileTap={{ scale: 0.98 }}
            disabled={isSubmitted}
          >
            Share My Vedic Experience
          </motion.button>
        </form>
      </motion.div>
    </AppContainer>
  );
};

export default CourseExperienceForm;
