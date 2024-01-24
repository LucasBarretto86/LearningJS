const { model, Schema } = require("mongoose");

const postSchema = new Schema(
  {
    title: { type: String, required: true },
    snippet: { type: String, required: false },
    body: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// Define a method to generate the snippet from the body
postSchema.methods.generateSnippet = (maxLength = 150) => {
  return this.body.length > maxLength
    ? this.body.substring(0, maxLength) + "..."
    : this.body;
};

// Middleware to automatically generate snippet
postSchema.pre("save", (next) => {
  this.snippet = this.generateSnippet();
  next();
});

module.exports = model("Post", postSchema);
