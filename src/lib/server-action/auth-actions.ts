"use server";
import { z } from "zod";
import { formSchema } from "../types";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function actionLoginUser({
  email,
  password,
}: z.infer<typeof formSchema>) {
  console.log(email, password);
  const supabase = await createClient();
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email,
    password,
  };
  const response = await supabase.auth.signInWithPassword(data);
  //   if (error) {
  //     redirect("/error");
  //   }
  //   revalidatePath("/", "layout");
  //   redirect("/");
  return response;
}

export async function actionSignupUser({ email, password }: z.infer<any>) {
  const supabase = await createClient();
  const userAlreadyExists = await supabase
    .from("profiles")
    .select("*")
    .eq("email", email);
  if (userAlreadyExists.data?.length && userAlreadyExists.data.length > 0) {
    return { error: "User already exists" };
  }

  const data = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/callback`,
    },
  });

  return data;
}
