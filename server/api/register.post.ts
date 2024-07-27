import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password } = body;
  try {
    const client = await serverSupabaseClient(event);
    const { data, error } = await client.auth.signUp({
      email,
      password,
    });
    if (error) {
      console.log(error);
      return setResponseStatus(event, 401, "Unauthorized");
    }
  } catch (error) {
    console.log(error);
    return setResponseStatus(event, 401, "Unauthorized");
  }
});
