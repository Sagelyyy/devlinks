import { defineNuxtRouteMiddleware } from "nuxt/app";
import { supabase } from "~/utils/supabase";

export default defineEventHandler(async (event) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // if (!user) {
  //   if (event.node.req.url !== "/login") {
  //     if (event.node.req.url !== "/api(/*)") {
  //       return sendRedirect(event, "/login");
  //     }
  //   }
  // }
});
