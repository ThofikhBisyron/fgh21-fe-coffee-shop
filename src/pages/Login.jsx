import React, { useState } from "react";
import ImgLogin from "../assets/img/Login.png";
import Logo from "../assets/components/Logo";
import { FaKey } from "react-icons/fa6";
import { FaRegEnvelope, FaRegEye } from "react-icons/fa6";
import ImgFacebook from "../assets/img/facebook.png";
import ImgGoogle from "../assets/img/google.png";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/reducers/auth";
import { addData } from "../redux/reducers/profile";
import { changeData } from "../redux/reducers/carts";
import HandlerError from "../component/HandlerError";
import Loading from "../component/Loading";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [err, setErr] = useState(false);
  const [isLoading, setLoading] = React.useState(false);
  let [pass, setPassword] = React.useState("password");
  function changePassword() {
    if (pass === "password") {
      setPassword("text");
    } else {
      setPassword("password");
    }
  }
  const formik = useFormik({
    onSubmit: dataNew,
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email address").required("Required!"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required!"),
    }),
  });

  async function dataNew() {
    const email = formik.values.email;
    const password = formik.values.password;

    setLoading(false);
    const formData = new URLSearchParams();
    formData.append("email", email);
    formData.append("password", password);

    fetch("http://165.22.51.58:10003/auth/login", {
      method: "POST",
      body: formData,
    }).then((response) => {
      response.json().then((data) => {
        if (data.success) {
          setLoading(true);
          console.log(data.result.token);
          dispatch(login(data.result.token));
          async function dataUpdate() {
            const response = await fetch(
              "http://165.22.51.58:10003/profile/login",
              {
                headers: {
                  Authorization: "Bearer " + data.result.token,
                },
              }
            );

            const json = await response.json();
            dispatch(addData(json.result));

            if (json.result.roleId == 2) {
              navigate("/dashboard-admin");
              return;
            } else {
              navigate("/");
              return;
            }
          }
          async function getCarts() {
            const response = await fetch(`http://165.22.51.58:10003/carts`, {
              headers: {
                Authorization: "Bearer " + data.result.token,
              },
            });
            const json = await response.json();
            console.log(json.result);
            dispatch(changeData(json.result));
          }
          dataUpdate();
          getCarts();
        } else {
          setErr(true);
          setTimeout(() => {
            setErr(false);
          }, 1000);
          setTimeout(() => setLoading(false), 1000);
        }
      });
    });
  }

  return (
    <div className="flex justify-center flex-col md:flex-row gap-16 h-screen">
      {isLoading === true && <Loading />}
      <div className="md:w-1/4 h-screen md:flex hidden">
        <img src={ImgLogin} alt="" className="object-cover" />
      </div>
      <div className="md:w-3/4">
        <div className="flex flex-col justify-center md:pr-32 gap-6 p-5 h-screen">
          <Logo />
          <div className="flex flex-col gap-[25px] w-full justify-center">
            <h1 className="text-[#8E6447] text-[30px] font-bold">Login</h1>
            <p className="text-[#4F5665] text-[16px]">
              Fill out the form correctly
            </p>
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-[25px]"
            >
              {err ? <HandlerError msg={"Wrong email or password "} /> : ""}
              <label
                htmlFor="email"
                className="flex flex-col gap-1 w-full justify-center"
              >
                <div className="text-[#0B132A] font-semibold text-base">
                  Email
                </div>
                <div className="flex items-center border-2 p-3 rounded-lg gap-2 text-[#4F5665]">
                  <FaRegEnvelope />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email #admin@mail.com"
                    onChange={formik.handleChange}
                    className={
                      formik.errors.email && formik.touched.email
                        ? "outline-none w-full"
                        : "outline-none w-full"
                    }
                  />
                </div>
                {formik.errors.email && formik.touched.email && (
                  <p className="text-red-500">{formik.errors.email}</p>
                )}
              </label>
              <label
                htmlFor="password"
                className="flex flex-col gap-1 w-full justify-center"
              >
                <div className="text-[#0B132A] font-semibold text-base">
                  Password
                </div>
                <div className="flex items-center border-2 p-3 rounded-lg gap-2 text-[#4F5665]">
                  <FaKey />
                  <input
                    type={pass}
                    name="password"
                    id="password"
                    placeholder="Enter Your Password #admin123"
                    className="w-full outline-none"
                    onChange={formik.handleChange}
                  />
                  <button type="button" onClick={changePassword}>
                    <FaRegEye />
                  </button>
                </div>
                {formik.errors.password && formik.touched.password && (
                  <p className="text-red-500">{formik.errors.password}</p>
                )}
              </label>
              <Link
                to={"/forget-password"}
                className="flex justify-end text-[#FF8906]"
              >
                Lupa Password?
              </Link>
              <button
                type="submit"
                className="w-full p-3 rounded-lg bg-[#FF8906] text-[16px] font-semibold"
              >
                Login
              </button>
            </form>
            <div className="flex gap-[10px] justify-center">
              <div className=" text-[16px]">Not Have An Account?</div>
              <Link to={"/register"} className="text-[#FF8906] text-[16px]">
                Register
              </Link>
            </div>
            <div className="flex justify-center text-[#AAAAAA] text-[12px]">
              Or
            </div>
            <div className="flex justify-center gap-6">
              <button className=" flex w-[383px] p-3 rounded-lg gap-[10px] items-center justify-center shadow-lg">
                <img className="flex justify-center" src={ImgFacebook} alt="" />
                <div className="text-[18px] text-[#4F5665]">Facebook</div>
              </button>
              <button className="flex w-[383px] p-3 rounded-lg  justify-center items-center gap-[10px] shadow-lg">
                <img className="flex justify-center" src={ImgGoogle} alt="" />
                <div className="text-[18px] text-[#4F5665]">Google</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
