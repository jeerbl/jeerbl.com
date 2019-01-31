import axios from 'axios'

let client = axios.create({
  baseURL: 'http://localhost:8081/api/',
  timeout: 30000,
  transformResponse: [data => {
    let dataObj = JSON.parse(data)
    return dataObj
  }]
})

export function getProjects () {
  return client.get('collections/get/projects')
}

export function getCompanies () {
  return client.get('collections/get/companies')
}

export function getSkills () {
  return client.get('collections/get/skills')
}

export function getAbout () {
  return client.get('singletons/get/about')
}
