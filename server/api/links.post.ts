import { serverSupabaseClient } from "#supabase/server";
import type { Database } from "~/types/database.types";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const supabase = await serverSupabaseClient<Database>(event);
    const { data, error } = await supabase
      .from("links")
      .update({ type: body.type })
      .eq("user_id", body.user_id)
      .select();
    if (error) {
      console.error(error);
    }
    return data;
  } catch (error) {
    console.log(error);
  }
});
