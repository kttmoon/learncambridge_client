export default function firstLetterUppercase(string = "string") {
  return `${string.split("")[0].toUpperCase()}${string.split("").slice(1).join("").toLowerCase()}`;
}
