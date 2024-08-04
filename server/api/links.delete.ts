import { serverSupabaseClient } from "#supabase/server";
import type { Database } from "~/types/database.types";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody<{ id: number }>(event);
    const supabase = await serverSupabaseClient<Database>(event);
    const { data, error } = await supabase
      .from("links")
      .delete()
      .eq("id", body.id)
      .select();
    if (error) {
      console.log(error);
    }
    return data;
  } catch (error) {
    console.log(error);
  }
});
