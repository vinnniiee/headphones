import { Form } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useEffect, useState } from "react";
import Button from "../components/ui/Button";
import { Link, useNavigate } from "react-router-dom";
import { setCredentials } from "../slices/authSlice";
import { useLoginMutation } from "../slices/userApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { RootState } from "../store";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state:RootState)=>state.auth.userInfo);
  useEffect(()=>{
    if(userInfo){
      navigate("/");
    }
  },[userInfo,navigate])
  
  
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await login({ email, password }).unwrap();
      dispatch(setCredentials(data));
      navigate("/",);
    } catch (err: any) {
      toast.error(err.data?.message || err.message);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="flex flex-col w-full max-w-lg text-xs my-4 justify-start">
      <p>Admin Test Email: admin@email.com</p>
      <p>Admin Test Password: 123456</p>
      </div>
      <FormContainer>
        <Form className="w-full" onSubmit={submitHandler}>
          <Form.Group className="my-2" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="my-2" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button className="mt-2">Submit</Button>
        </Form>
        <Link to="/register" className="self-center">
          Sign up instead?
        </Link>
      </FormContainer>
    </div>
  );
};

export default Login;
