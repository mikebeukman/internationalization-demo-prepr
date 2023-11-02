import { gql } from "@apollo/client";

let GetAboutUs = gql`
  query Query {
    About {
      title
      content {
        ... on Text {
          text
        }
      }
      cover {
        url
      }
    }
  }
`;

export default GetAboutUs;
