const { model, Schema } = require("mongoose");

// Create the schema
const postSchema = new Schema(
  {
    title: { type: String, required: true },
    snippet: { type: String, required: true },
    body: { type: String, required: true },
  },
  { timestamps: true }
);

// Middleware to automatically generate snippet
postSchema.pre("validate", function (next) {
  const maxLength = 25;

  this.snippet =
    this.body.length > maxLength
      ? this.body.substring(0, maxLength) + "..."
      : this.body;
  next();
});

// Define model and exports
module.exports = model("Post", postSchema);
