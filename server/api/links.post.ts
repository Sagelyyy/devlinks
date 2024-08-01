import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server";
import type { Database } from "~/types/database.types";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const supabase = await serverSupabaseClient<Database>(event);
    const user = await serverSupabaseUser(event);
    if (user) {
      const { data, error } = await supabase
        .from("links")
        .update({ type: body.type })
        .eq("id", body.id)
        .eq("user_id", user.id)
        .select();

      if (error) {
        console.log(error);
      }
      return data;
    } else {
      return setResponseStatus(event, 401, "Unauthorized");
    }
  } catch (error) {
    console.log(error);
  }
});
