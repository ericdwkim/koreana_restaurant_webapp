import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.GOOGLE_API_KEY;
  const placeId = process.env.PLACE_ID;

  if (!apiKey || !placeId) {
    console.error("Missing Google API configuration");
    return NextResponse.json(
      { error: 'Google API configuration missing' },
      { status: 500 }
    );
  }

  // Google Places Details API URL
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews,user_ratings_total&key=${apiKey}`;

  try {
    const response = await fetch(url, { 
      next: { revalidate: 3600 } // Cache data for 1 hour to stay within API limits
    });
    const data = await response.json();

    if (data.status !== 'OK') {
      return NextResponse.json(
        { error: `Google API Error: ${data.status}` },
        { status: 400 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
}
