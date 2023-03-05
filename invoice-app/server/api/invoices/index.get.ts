import InvoiceModel from "~/server/models/invoice";

export default defineEventHandler(async (event) => {
  console.log("GET /api/invoices");
  try {
    console.log("Find invoices");
    return await InvoiceModel.find();
  } catch (err) {
    console.dir(err);
    event.res.statusCode = 500;
    return {
      code: "ERROR",
      message: "Something went wrong.",
    };
  }
});
