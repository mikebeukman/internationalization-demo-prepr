import { gql } from "@apollo/client";

let GetArticleByIdHeader = gql`
  query GetArticleByIdHeader($id: String) {
    Article(id: $id) {
      title
      excerpt
      _publish_on
      content {
        ... on Text {
          _type
          body
        }
        ... on Assets {
          _type
          items {
            _id
            url
          }
        }
      }
      authors {
        full_name
        profile_pic {
          url
        }
      }
      categories {
        title
        _slug
        icon {
          url
        }
      }
    }
  }
`;

export default GetArticleByIdHeader;
