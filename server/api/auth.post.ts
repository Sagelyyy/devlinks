import { supabase } from "~/utils/supabase";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password } = body;
  console.log(email, password);
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    return error;
  }
  setCookie(event, "Authentication", data.session.access_token, {
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
    sameSite: "lax",
  });
  return { message: "success" };
});
