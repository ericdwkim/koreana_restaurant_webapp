// TODO: route handler 

// import fetch from 'node-fetch';

// export default async function handler(req, res) {
//   const apiKey = process.env.GOOGLE_API_KEY;
//   const placeId = process.env.PLACE_ID;

//   if (!apiKey || !placeId) {
//     res.status(500).json({ error: "API key or place ID not set" });
//     return;
//   }

//   const url = "https://maps.googleapis.com/maps/api/place/details/json";
//   const params = new URLSearchParams({
//     place_id: placeId,
//     fields: "name,rating,user_ratings_total,reviews",
//     key: apiKey,
//     reviews_sort: "most_relevant",
//   });

//   try {
//     const response = await fetch(`${url}?${params.toString()}`);
//     const data = await response.json();
//     if (response.ok) {
//       res.status(200).json(data);
//     } else {
//       res.status(500).json({ error: "An error occurred" });
//     }
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch data" });
//   }
// }