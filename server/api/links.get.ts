import { serverSupabaseUser, serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event);
  const client = await serverSupabaseClient(event);
  try {
    if (user) {
      const { data, error } = await client
        .from("links")
        .select("*")
        .eq("user_id", user.id);
      if (error) {
        console.log("User Error: ", error);
      }

      return data;
    } else {
      console.log("User not found");
    }
  } catch (error) {
    console.log(error);
  }
});
