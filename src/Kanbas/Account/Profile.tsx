import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
export default function Profile() {
    const [profile, setProfile] = useState<any>({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const fetchProfile = async () => {
        try {
            const account = await client.profile()
            console.log("Did we hit line 13 in profile?")
            setProfile(account);
        } catch (err: any) {
            console.log(`Profile not found: ${err}` );
            navigate("/Kanbas/Account/Signin");
        };
    };

    const signout = async () => {
        await client.signout();
        dispatch(setCurrentUser(null));
        navigate("/Kanbas/Account/Signin");
    };
    
    useEffect(() => { fetchProfile(); }, []);
  
    return (
    <div id="wd-profile-screen" className="container">
      <h1>Profile</h1>
      {profile && (
        <div>
          <input id="wd-username" className="form-control mb-2" value={profile.username}
                 onChange={(e) => setProfile({ ...profile, username:  e.target.value })}/>
          <input id="wd-password" className="form-control mb-2" value={profile.password}
                 onChange={(e) => setProfile({ ...profile, password:  e.target.value })}/>
          <input id="wd-firstname" className="form-control mb-2" value={profile.firstName}
                 onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}/>
          <input id="wd-lastname" className="form-control mb-2" value={profile.lastName}
                 onChange={(e) => setProfile({ ...profile, lastName:  e.target.value })}/>
          <input id="wd-dob" className="form-control mb-2" value={profile.dob}
                 onChange={(e) => setProfile({ ...profile, dob: e.target.value })} type="date"/>
          <input id="wd-email" className="form-control mb-2" value={profile.email}
                 onChange={(e) => setProfile({ ...profile, email: e.target.value })}/>
          <select id="wd-role" className="form-control" onChange={(e) => setProfile({ ...profile, role: e.target.value })}>
            <option value="USER">User</option>            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>      <option value="STUDENT">Student</option>
          </select>
          <button onClick={signout} className="wd-signout-btn btn btn-danger w-100">
            Sign out
          </button>
        </div>
      )}
    </div>
    );
}
