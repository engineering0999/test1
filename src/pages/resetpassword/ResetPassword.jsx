import { useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth, fireDB } from "../../fireabase/FirebaseConfig";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleReset = async () => {
    try {
      const userRef = collection(fireDB, "users");
      const querySnapshot = await getDocs(query(userRef, where("email", "==", email)));

      if (!querySnapshot.empty) {
        await sendPasswordResetEmail(auth, email);
        toast.success("Check your email for password reset instructions.");
        setTimeout(() => {
          navigate('/login', { replace: true });
        }, 5300);
      } else {
        toast.error("Email not found .");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error resetting password. Please try again later.");
    }
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='bg-gray-800 px-10 py-10 rounded-xl'>
        <h1 className='text-center text-white text-xl mb-4 font-bold'>Password Reset</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className='flex justify-center mb-3'>
          <button onClick={handleReset} className='bg-yellow-500 w-full text-black font-bold px-2 py-2 rounded-lg'>
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
