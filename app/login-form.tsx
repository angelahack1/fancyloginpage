"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { KeyRound, Mail } from "lucide-react";
import { handleLogin } from "./actions";
import "./login-form.css";

// Define the form schema for validation
const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

export function LoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { errors, isSubmitting } = form.formState;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="login-container"
    >
      <form onSubmit={form.handleSubmit((data) => {
        // Ensure we're passing a plain object to the server action
        handleLogin({
          email: data.email,
          password: data.password,
        });
      })} className="login-form">
        <div className="form-group">
          <label
            htmlFor="email"
            className="form-label"
          >
            Email
          </label>
          <div className="input-container">
            <Mail className="input-icon" />
            <input
              id="email"
              type="email"
              {...form.register("email")}
              placeholder="you@example.com"
              className="form-input"
            />
          </div>
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>

        <div className="form-group">
          <label
            htmlFor="password"
            className="form-label"
          >
            Password
          </label>
          <div className="input-container">
            <KeyRound className="input-icon" />
            <input
              id="password"
              type="password"
              {...form.register("password")}
              placeholder="••••••••"
              className="form-input"
            />
          </div>
          {errors.password && (
            <p className="error-message">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="submit-button"
        >
          {isSubmitting ? "Signing In..." : "Sign In"}
        </button>
      </form>
    </motion.div>
  );
}