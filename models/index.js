const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');


// Products belongsTo Category
Post.belongsTo(User, { foreignKey: "userId", onDelete: "cascade" });

// Categories have many Products
Post.hasMany(Comment, { foreignKey: "postId" });
// Products belongToMany Tags (through ProductTag)
Comment.belongsTo(User, { foreignKey: "userId" })






module.exports = { User, Comment, Post };