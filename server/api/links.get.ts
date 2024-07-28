import { serverSupabaseUser, serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event);
  const client = await serverSupabaseClient(event);

  if (user) {
    const { data, error } = await client
      .from("links")
      .select("*")
      .eq("user_id", user.id);
    if (error) {
      console.log(error);
    }

    return data;
  }
});
