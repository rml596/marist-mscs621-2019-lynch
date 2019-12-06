/**
  *
  * main() will be run when you invoke this action
  *
  * @param Cloud Functions actions accept a single parameter, which must be a JSON object.
  *
  * @return The output of this action, which must be a JSON object.
  *
  */
const md5 = require('spark-md5');

function main(params) {
  return {
    entries: params.rows.map((row) => { return {
      id: row.doc._id,
      name: row.doc.name,
      slug: row.doc.slug,
      recommendedVersion: row.doc.recommendedVersion

    }})
  };
}
