import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/images/logologin.svg';
import Logos from '../../assets/images/Logo.svg';

function Login(){
    const navigate = useNavigate();
    const [token, setToken] = useState(null);
    const [setCategory, setCategories] = useState(null);
    const [loginData, setLoginData] = useState({ phone: "", password: "" });
    const [error, setError] = useState(null);

    const handleFormSubmitLogin = async (event) => {
        event.preventDefault();
    };

    useEffect(() => {
        const checkTokenExpiration = () => {
          const storedToken = localStorage.getItem("token");
          if (storedToken) {
            const decodedToken = decodeToken(storedToken);
    
            if (decodedToken.exp * 1000 < Date.now()) {
              localStorage.removeItem("token");
              setToken(null);
              navigate("/");
            } else {
              if (
                decodedToken.role && decodedToken.role.includes("ROLE_MODERATOR")
              ) {
                navigate("/Moderator");
              } else if (
                decodedToken.role && decodedToken.role.includes("ROLE_ADMIN")
              ) {
                navigate("/");
              } else {
                navigate("/");
              }
              setToken(storedToken);
            }
          }
        };
    
        const decodeToken = (token) => {
          try {
            return JSON.parse(atob(token.split(".")[1]));
          } catch (error) {
            return {};
          }
        };
    
        checkTokenExpiration();
      }, [navigate, setToken]);
    
      useEffect(() => {
        const logoutAfterSevenDays = () => {
          const storedToken = localStorage.getItem("token");
          if (storedToken) {
            const decodedToken = decodeToken(storedToken);
            const expirationTime = decodedToken.exp * 1000;
    
            localStorage.setItem("tokenExpirationTime", expirationTime);
    
            const sevenDaysInMilliseconds = 7 * 24 * 60 * 60 * 1000;
    
            if (expirationTime - Date.now() <= sevenDaysInMilliseconds) {
              localStorage.removeItem("token");
              localStorage.removeItem("tokenExpirationTime");
              setToken(null);
              navigate("/");
            }
          }
        };
    
        const decodeToken = (token) => {
          try {
            return JSON.parse(atob(token.split(".")[1]));
          } catch (error) {
            return {};
          }
        };
    
        logoutAfterSevenDays();
      }, [navigate]);
    
      const handleLogin = async () => {
        try {
          const { phone, password } = loginData;
          const trimmedPhone = phone.trim();
          const trimmedPassword = password.trim();
    
          const response = await fetch(
            "http://avtowatt.uz:8080/api/v1/auth/login/admin",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                phone: trimmedPhone,
                password: trimmedPassword,
              }),
            }
          );
          const data = await response.json();
    
          if (!response.ok) {
            if (response.status === 404) {
              setError(
                "Admin topilmadi. Iltimos, telefon raqamingizni yoki Parol tekshiring."
              );
            } else {
              setError(data.errorMessage || "Login failed");
            }
            return;
          }
    
          const token = data.token;
          localStorage.setItem("token", token);
          setToken(token);
    
          try {
            const storedToken = localStorage.getItem("token");
            const responseGetcategory = await fetch(
              "http://avtowatt.uz:8080/api/v1/admin/",
              {
                method: "GET",
                headers: {
                  Authorization: `Bearer ${storedToken}`,
                },
              }
            );
            const dataGet = await responseGetcategory.json();
            console.log(dataGet.role);
            setCategories(dataGet);
            if (dataGet.role === "ROLE_MODERATOR") {
              navigate("/moderator");
            } else if (dataGet.role === "ROLE_ADMIN") {
              navigate("/");
            } else {
              alert("Bunday toifadagi foydalanuvchi topilmadi");
            }
          } catch (error) {
            console.error("Error fetching admin/moderator data:", error);
          }
        } catch (error) {
          console.error("Login failed:", error.message);
          setError("An unexpected error occurred. Please try again.");
        }
      };

    return(
        <div className="flex  justify-center h-[]">
            <div className="w-1/2 bg-[#FAFAFA] px-[105px] xl:py-[120px] 2xl:py-[200px]">
                <img src={Logo} alt="Logo" className="w-[500px] h-[500px] mx-auto"/>
            </div>
            <div className="w-1/2 pl-[60px] mt-[49px]">
                <img src={Logos} alt="logo" className=""/>
                <div className="w-[377px] h-[386px] xl:mt-[110px] 2xl:mt-[165px]">
                    <h1 className="font-custom text-[32px] font-[700] text-[#212121]">Tizimga kirish</h1>
                    <p className="font-custom text-[17px] font-[400] text-[#6B6B6B]">Boshqaruv panelimizga kirish uchun elektron pochta va parolingizni kiriting</p>
                    <form className="grid my-[40px]" onSubmit={handleFormSubmitLogin}>
                        <label htmlFor="sectionName" className="font-custom text-[17px] font-[700]">Telefon raqam </label>
                        <input
                        type="tel"
                        className="input-name outline-none mt-[8px]"
                        id="phoneInput"
                        name="nameL"
                        placeholder="+998(90)123-45-67 "
                        autoComplete="off"
                        onChange={(e) =>
                            setLoginData({ ...loginData, phone: e.target.value.trim() })
                        }
                        />
                        <label htmlFor="sectionName" className="font-custom text-[17px] font-[700] mt-[16px]">Parol</label>
                        <input
                        type="password"
                        className="input-name outline-none mt-[8px]"
                        id="passwordInput"
                        name="nameK"
                        placeholder="********"
                        autoComplete="off"
                        value={loginData.password}
                        onChange={(e) =>
                            setLoginData({
                            ...loginData,
                            password: e.target.value.trim(),
                            })
                        }          
                        />
                        <button className="bg-[#25B679] text-white mt-[40px] w-[400px] px-[16px] py-[12px] font-custom text-[20px] rounded-[7px]" type="submit" onClick={handleLogin}>Tizimga kirish</button>
                  </form>
                </div>
            </div>
        </div>
    )
}

export default Login;