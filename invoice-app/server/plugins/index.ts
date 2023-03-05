import mongoose from "mongoose";
export default defineNitroPlugin(async (nitroApp) => {
  const config = useRuntimeConfig();

  try {
    await mongoose.connect(config.mongoUrl);
    console.log("DB connection established.");
  } catch (err) {
    console.error("DB connection failed.", err);
  }
});
