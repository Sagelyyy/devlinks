import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server";
import type { Database } from "~/types/database.types";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const supabase = await serverSupabaseClient<Database>(event);
    const user = await serverSupabaseUser(event);

    console.log(body);

    if (user) {
      const updates = body.links.map((link: { url: string; type: string }) => ({
        url: link.url,
        type: link.type,
        profile_id: user.id,
      }));
      const { data, error } = await supabase
        .from("links")
        .insert(updates)
        .select();
      if (error) {
        console.log(error);
        return setResponseStatus(event, 500, "Error creating link");
      }
      return data;
    } else {
      return setResponseStatus(event, 401, "Unauthorized");
    }
  } catch (error) {
    console.log(error);
    return setResponseStatus(event, 500, "Internal Server Error");
  }
});
