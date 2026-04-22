exports.handler = async function () {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reviews: [], rating: 0, totalReviews: 0 }),
    };
  }

  try {
    const url =
      "https://maps.googleapis.com/maps/api/place/details/json" +
      `?place_id=${placeId}` +
      "&fields=reviews,rating,user_ratings_total" +
      "&reviews_sort=newest" +
      `&key=${apiKey}`;

    const res = await fetch(url);
    const data = await res.json();

    if (data.status !== "OK") {
      throw new Error(data.error_message || data.status);
    }

    const reviews = (data.result.reviews || []).map((r) => ({
      name: r.author_name,
      rating: r.rating,
      text: r.text,
      timeAgo: r.relative_time_description,
      photo: r.profile_photo_url || null,
    }));

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, s-maxage=3600, max-age=3600",
      },
      body: JSON.stringify({
        rating: data.result.rating,
        totalReviews: data.result.user_ratings_total,
        reviews,
      }),
    };
  } catch {
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reviews: [], rating: 0, totalReviews: 0 }),
    };
  }
};
