import FrontEndInfo from "./frontend"

const DOCS = {
  frontend: FrontEndInfo
}

export function getAllFrameworksByCategory(category) {
  return DOCS[category]
}