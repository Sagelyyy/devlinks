import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server";
import type { Database } from "~/types/database.types";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const supabase = await serverSupabaseClient<Database>(event);
    const user = await serverSupabaseUser(event);

    if (user) {
      const updates = body.links.map(
        (link: { id: number; url: string; type: string }) => ({
          id: link.id,
          url: link.url,
          type: link.type,
        })
      );

      const { data, error } = await supabase
        .from("links")
        .upsert(updates, { onConflict: "id" });

      if (error) {
        console.log(error);
        return setResponseStatus(event, 500, "Error updating links");
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
