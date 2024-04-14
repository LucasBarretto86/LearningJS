const Post = {
  async create(connection, params) {
    params.snippet =
      params.body > maxLength
        ? params.body.substring(0, maxLength) + "..."
        : params.body;

    try {
      const collection = connection.collection("posts");
      const result = await collection.insertOne(params);

      console.log(`Document inserted with ID: ${result.insertedId}`);
    } catch (error) {
      console.error("Error creating document:", error);
    }
  },

  async find(connection, query = {}) {
    try {
      const collection = connection.collection("posts");
      const result = await collection.find(query).toArray();
      console.log("Documents found:", result);
    } catch (error) {
      console.error("Error finding documents:", error);
    }
  },

  async update(connection, query, params) {
    try {
      const collection = connection.collection("posts");
      const result = await collection.updateOne(query, { $set: params });
      console.log(
        `Matched ${result.matchedCount} document(s) and modified ${result.modifiedCount} document(s)`
      );
    } catch (error) {
      console.error("Error updating document:", error);
    }
  },

  async delete(connection, query) {
    try {
      const collection = connection.collection("posts");
      const result = await collection.deleteOne(query);
      console.log(`Deleted ${result.deletedCount} document(s)`);
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  },
};

module.exports = Post;
