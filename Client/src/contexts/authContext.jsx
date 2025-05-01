/*eslint-disable*/
import { useNavigate } from "react-router-dom";
import { useEffect, useState, createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({});
  
    useEffect(() => {
      const restoreUser = async () => {
        try {
          const user = await authService.getCurrentUser();
          setAuth({
            data: { user }
          });
        } catch (err) {
          setAuth({});
        }
      };
  
      restoreUser();
    }, []);
  
    const loginSubmitHandler = async (values) => {
      const result = await authService.login(values.email, values.password);
      
      setAuth(result);
      navigate('/');
    }
  
    const registerSubmitHandler = async (values) => {
      const result = await authService.register(values.email, values.password, values.passwordConfirm);
  
      setAuth(result);
      navigate('/login');
    }
  
    const logoutHandler = () => {
      setAuth({});
    }
  
    const values = {
      loginSubmitHandler,
      registerSubmitHandler,
      logoutHandler,
      email: auth?.data?.user?.email,
      token: auth?.token,
      isAuthenticated: !!auth?.token,
      userId: auth?.data?.user?._id
    }

    return(
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;