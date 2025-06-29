"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/lib/types";
import {
  Form,
  FormItem,
  FormField,
  FormDescription,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Loader from "@/components/Loader";
import { actionLoginUser } from "@/lib/server-action/auth-actions";

const LoginPage = () => {
  const router = useRouter();
  const [submitError, setSubmitError] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    mode: "onChange",
    resolver: zodResolver(formSchema),
    // defaultValues: {
    //   email: "",
    //   password: "",
    // },
  });

  const isLoading = form.formState.isSubmitting;
  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (
    formdata
  ) => {
    console.log(formdata);
    const response = await actionLoginUser(formdata);
    if (response?.error) {
      form?.reset();
      setSubmitError(response?.error?.message);
    } else {
      router.replace("/");
    }
  };
  return (
    <Form {...form}>
      <form
        onChange={() => {
          if (submitError) {
            setSubmitError("");
          }
        }}
        onSubmit={(e) => {
          e.preventDefault();
          console.log(form.getValues());
          onSubmit(form.getValues());
        }}
        className="flex flex-col sm:justify-center space-y-6 w-full sm:w-[400px]"
      >
        <Link href={"/"} className="flex justify-start items-center w-full">
          <Image src={"/cypresslogo.svg"} alt="logo" width={50} height={50} />
          <span className="first-letter:ml-2 font-semibold dark:text-white text-4xl">
            Cypress
          </span>
        </Link>
        <FormDescription className="text-foreground/60">
          An all in one platform for your business
        </FormDescription>
        <FormField
          control={form.control}
          disabled={isLoading}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} type="email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          disabled={isLoading}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {submitError && <FormMessage>{submitError}</FormMessage>}
        <Button type="submit" className="p-6 w-full" disabled={isLoading}>
          {isLoading ? <Loader /> : "Login"}
        </Button>
        <p className="text-foreground/60 text-sm">
          Don't have an account?{" "}
          <Link href={"/signup"} className="text-primary">
            Sign up
          </Link>
        </p>
      </form>
    </Form>
  );
};
export default LoginPage;
