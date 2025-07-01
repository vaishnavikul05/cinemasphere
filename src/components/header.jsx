import { signOut } from 'firebase/auth';
import {auth} from '../utils/firebase.js';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const navigate=useNavigate();
  const user=useSelector(store => store.user);

  const handleSignOut=()=>{
      signOut(auth).then(() => {
        // Sign-out successful.
      
        navigate("/");
      }).catch((error) => {
        navigate("/error");
      });
        }
    return ( 
       <div className='absolute w-screen py-2 px-8 bg-gradient-to-b from-black z-10 flex justify-between' >
        <img className='w-44'
         src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo'/>
         {user && <div className='flex p-4'>
            <img className='w-12 h-11 rounded ' src='https://st4.depositphotos.com/4326917/24326/v/450/depositphotos_243263326-stock-illustration-user-avatar-illustration-anonymous-sign.jpg'  />
            <button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
            
          </div>}
            
       </div>
     );
}

export default Header
;