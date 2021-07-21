import React from "react";
import { Formik } from "formik";
import "./LoginForm.css";
import * as Yup from "yup";


const LoginForm = (props) => (
	<Formik
		initialValues={{ username: "", password: "" }}
		onSubmit={async (values, { setSubmitting }) => {
			
			const res = await fetch('/api/auth', {
				method: 'POST',
				body: JSON.stringify(values),
				headers: { "Content-Type": "application/json" }
			})

			const json = await res.json();
			
			props.acessPlatform(json.token);
			console.log("Logging in", values);
			setSubmitting(false);
		}}

		validationSchema={Yup.object().shape({
			username:
				Yup.string()
					.required("Username obrigatório"),
			password:
				Yup.string()
					.required("Password necessária")

		})}
	>

		{props => {
			const {
				values,
				touched,
				errors,
				isSubmitting,
				handleChange,
				handleBlur,
				handleSubmit,
			} = props;

			return (

				<div className="formulario">
					<form onSubmit={handleSubmit}>

						<label htmlFor="username">Username</label>
						<input
							id="username"
							name="username"
							type="text"
							placeholder="Insere o teu Username"
							value={values.username}
							onChange={handleChange}
							onBlur={handleBlur}
							className={errors.username && touched.username && "error"}
						/>
						{errors.username && touched.username && (
							<div className="input-feedback">{errors.username}</div>
						)}

						<label htmlFor="password">Password</label>
						<input
							id="password"
							name="password"
							type="password"
							placeholder="Insere a tua Password"
							value={values.password}
							onChange={handleChange}
							onBlur={handleBlur}
							className={errors.password && touched.password && "error"}
						/>
						{errors.password && touched.password && (
							<div className="input-feedback">{errors.password}</div>
						)}

						<button type="submit"
							className="submeter"
							disabled={isSubmitting} //desativa o botão quando o utilizador já está a tentar efetuar log in ?
						>Log-in</button>

					</form>
				</div>

			);
		}}
	</Formik>
);

export default LoginForm;