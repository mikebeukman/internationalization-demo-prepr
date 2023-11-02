import { gql } from "@apollo/client";

let GetArticleById = gql`
  query GetArticleById($id: String, $locale: String) {
    Article(id: $id, locale: $locale) {
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

export default GetArticleById;
