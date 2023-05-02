import {createClient} from '@sanity/client'

export default  createClient({
  projectId: "lpv419dg", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  apiVersion: '2021-08-31',
  useCdn: false
});