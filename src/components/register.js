import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/slices/userSlice";
import { Link } from "react-router-dom";
import { Col, Row, Form, FormGroup, Input, Label, Button } from "reactstrap";

export default function Register() {
    const [userDetails, setUserDetails] = useState({});
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register(userDetails))
    }

    return (
        <Row style={{ marginTop: "2rem" }}>
            <Col
                md={{
                    offset: 3,
                    size: 6,
                }}
            >
                <Form>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            placeholder="abc@xyz.com"
                            type="email"
                            value={userDetails.email}
                            onChange={(e) =>
                                setUserDetails({ ...userDetails, email: e.target.value })
                            }
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                            id="password"
                            name="password"
                            placeholder="*******"
                            type="password"
                            value={userDetails.password}
                            onChange={(e) =>
                                setUserDetails({ ...userDetails, password: e.target.value })
                            }
                        />
                    </FormGroup>
                    <Button
                        outline={true}
                        block={true}
                        color="primary"
                        onClick={(e) => handleSubmit(e)}
                    >
                        Register
                    </Button>
                </Form>
                <br />
                <Link to="/login">Already Have an account?</Link>
            </Col>
        </Row>
    )
}