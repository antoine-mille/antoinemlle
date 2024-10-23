let BASE_URL = "http://localhost:3000"

if (process.env.NODE_ENV === "production") {
  BASE_URL = "https://antoinemlle.fr"
}

export { BASE_URL }
