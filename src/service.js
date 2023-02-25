export const getTrivia = async (trivia) => {
 
  const categ=trivia.category;
  const lim=trivia.limit;
  const diff=trivia.difficulty;

 
try {

  const response = await fetch(`https://the-trivia-api.com/api/questions?categories=${categ}&limit=${lim}&difficulty=${diff}`);
  const triviaData= await response.json();
  console.log(triviaData);
  return triviaData;

} catch {
  throw new Error("could not data trivia");
}

}
