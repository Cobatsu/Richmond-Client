const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const response = await graphql(`
    query getAllPosts {
      allMarkdownRemark {
        nodes {
          frontmatter {
            courseCategory
            courseName
            courseDetails
          }
          html
        }
      }
    }
  `);

  const {
    data: { allMarkdownRemark },
  } = response;

  allMarkdownRemark.nodes.forEach((node) => {
    actions.createPage({
      path:
        node.frontmatter.courseCategory.toLowerCase().split(" ").join("_") +
        "/" +
        node.frontmatter.courseName.toLowerCase().split(" ").join("_"),
      component: path.resolve("./src/templates/courseDetail.js"),
      context: { node },
    });
  });
};
