import {
  CalculateAverageRatingsFn,
  movieRating,
} from 'movie-average-rating/types';

/**
 * @task Calculate Average Movie Ratings
 * @description Given an array of user ratings, calculate the average score for each movie.
 * Each movie may have one or more ratings, and the result should contain the movie ID and its average score.
 * Average Score should be rounded to the nearest decimal (one number)
 * @example
 * Input:
 * [
 *   { userId: 1, movieId: 10, score: 8 },
 *   { userId: 2, movieId: 10, score: 6 },
 *   { userId: 3, movieId: 11, score: 7 }
 * ]
 *
 * Output:
 * [
 *   { movieId: 10, averageScore: 7 },
 *   { movieId: 11, averageScore: 7 }
 * ]
 */
export const calculateAverageRatings: CalculateAverageRatingsFn = (ratings) => {
  const movieRatingsMap: Record<number, movieRating> = {};

  ratings.forEach((rating) => {
    if (!movieRatingsMap[rating.movieId]) {
      movieRatingsMap[rating.movieId] = {
        movieId: rating.movieId,
        totalScore: 0,
        count: 0,
      };
    }
    movieRatingsMap[rating.movieId].totalScore += rating.score;
    movieRatingsMap[rating.movieId].count += 1;
  });
  const averageScore = [];
  for (const movieId in movieRatingsMap) {
    const avg =
      movieRatingsMap[movieId].totalScore / movieRatingsMap[movieId].count;
    averageScore.push({
      movieId: Number(movieId),
      averageScore: Number(avg.toFixed(1)),
    });
  }
  return averageScore;
};

console.log(
  calculateAverageRatings([
    { userId: 1, movieId: 10, score: 8 },
    { userId: 2, movieId: 10, score: 6 },
    { userId: 3, movieId: 11, score: 7 },
    { userId: 4, movieId: 11, score: 9 },
  ]),
);
