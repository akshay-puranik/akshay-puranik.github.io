import axios from "axios";
const endpoint = "https://leetcode.com/graphql";

// leetcode statistics
export const getLeetCodeStats = async () => {
//   const userName = "akshay-puranik";
//   const headers = {
//     "content-type": "application/json",
      
//   };
//   const graphqlQuery = {
//     operationName: "fetchLeetcodeStats",
//     query: `query getUserProfile($username: String!) {
//         matchedUser(username: $username) {
//           username
//           submitStats: submitStatsGlobal {
//             acSubmissionNum {
//               difficulty
//               count
//               submissions
//             }
//           }
//           detailView :tagProblemCounts {
//             advanced {
//               tagName
//               problemsSolved
//             }
//             intermediate {
//               tagName
//               problemsSolved
//             }
//             fundamental {
//               tagName
//               problemsSolved
//             }
//           }
//         }
//       }`,
//     variables: { username: userName },
//   };

//     const response = await axios({
//       url: endpoint,
//       method: "get",
//       headers: headers,
//       data: graphqlQuery,
//     });



    const response = await axios.get(
      "https://leetcode.com/graphql?query=query%20{%20matchedUser(username:%20%22akshay-puranik%22)%20{%20username%20submitStats:%20submitStatsGlobal%20{%20acSubmissionNum%20{%20difficulty%20count%20submissions%20}%20}%20%20detailView%20:tagProblemCounts%20{%20advanced%20{%20tagName%20problemsSolved%20}%20intermediate%20{%20tagName%20problemsSolved%20}%20fundamental%20{%20tagName%20problemsSolved%20}%20}}%20}"
    );


    console.log(response);
};



// console.log(response.data); // data
// console.log(response.errors); // errors if any