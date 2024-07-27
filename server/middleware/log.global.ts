export default defineEventHandler((event) => {
  console.log(`${event.node.res.statusCode}: ${event.node.req.url}`);
});
