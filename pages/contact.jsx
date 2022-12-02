import React, {useEffect} from "react";
import * as yup from "yup";
import Aos from 'aos';
import 'aos/dist/aos.css';
import {
	Box,
	Button,
	Container,
	TextareaAutosize,
	TextField,
	Typography,
} from "@mui/material";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Formik, Field, Form } from "formik";


const Contact = () => {

	useEffect(() => {
		Aos.init({
			duration: 3000
		  });
	}, [])
	const logInValidationSchema = yup.object({
		email: yup
			.string("Enter your email")
			.email("Enter a valid email")
			.required("Email is required"),
		// name: yup.string("Enter your name").required("Name is required"),
		// message: yup.string("Enter your message").required("A brief message is required"),
	});
	const onLogin = () => {
		console.log("email sent");
		alert("Email sent!! Thank you for contacting me");
	};
	return (
		<Box
			sx={{
				backGroundColor: "background.paper",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: "4rem",
				minHeight: "100vh",
			}}
		>
			<Head>
				<title>Contact Opeyemi - portfolio</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Typography data-aos='zoom-in-up'>CONTACT ME</Typography>
			<Container
				sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}
			>
				<Box sx={{ flex: "1" }}>
					<Formik
						initialValues={{
							name: "",
							email: "",
							message: "",
						}}
						validationSchema={logInValidationSchema}
						onSubmit={onLogin}
					>
						{({ isSubmitting, errors, touched, handleChange, values }) => {
							return (
								<Form className={styles.contactForm}>
									<Field
										as={TextField}
										data-aos='flip-left'
										variant="filled"
										error={touched.name && errors.name}
										helperText={touched.name && errors.name}
										name="name"
										type="text"
										id="name"
										label="Full name"
									/>
									<Field
										as={TextField}
										data-aos='flip-left'
										variant="filled"
										error={touched.email && errors.email}
										helperText={touched.email && errors.email}
										name="email"
										type="email"
										id="Email"
										label="Email"
									/>
									<Field
										as={TextField}
										data-aos='flip-left'
										variant="filled"
										rows={5}
										multiline
										error={touched.message && errors.message}
										helperText={touched.message && errors.message}
										name="message"
										type="text"
										id="message"
										label="Message"
									/>
									<Button
										type="submit"
										data-aos='zoom-in-up'
										loading={isSubmitting}
										variant="contained"
										sx={{
											marginTop: "14px",
											"&:hover": {
												color: "gray",
												backgroundColor: "black",
											},
										}}
									>
										Submit
									</Button>
								</Form>
							);
						}}
					</Formik>
				</Box>
				<Box sx={{ flex: "1", display: "flex", justifyContent: "center" }}>
					<span className={styles.wavehand}>
						<Typography sx={{ fontSize: "150px" }}>👋</Typography>
					</span>
				</Box>
			</Container>
		</Box>
	);
};

export default Contact;
