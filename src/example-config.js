module.exports = {
  url: 'https://example.com/api/v2/name/_table/', // An url to an REST api that you have permissions on. We use an instance of Dreamfactory https://dreamfactory.com
  dest: 'entry', // The name of the main table you will be writing entries to. You should have POST access to this table
  common: [ // This array contains a list of information fields to populate dropdowns in the form. You should have GET access to these tables
    {
      id: 'session_options', // The name of the dropdown field this information will populate. If you change it here, change it in App.js
      query: 'session?fields=text&filter=active=true&order=text%20ASC' // A query to run against the api, includes the name of the table, the field you want back, and and an active filter to allow you to disable elements from being returned without deleting them from the database. Returns the list in alphabetical order
    }, {
      id: 'scene_options',
      query: 'scene?fields=text&filter=active=true&order=text%20ASC'
    }, {
      id: 'player_options',
      query: 'player?fields=text&filter=active=true&order=text%20ASC'
    }, {
      id: 'submitter_options',
      query: 'submitter?fields=text&filter=active=true&order=text%20ASC'
    }, {
      id: 'cohort_options',
      query: 'cohort?fields=text&filter=active=true&order=text%20ASC'
    }
  ]
}
