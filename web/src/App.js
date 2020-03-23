import React from 'react';
import Airtable from 'airtable';
// import logo from './logo.svg';
import './App.css';
import Env from './env';

function App() {
  const base = new Airtable({ apiKey: Env.AIRTABLE_API_KEY }).base(
    Env.AIRTABLE_BASE
  );

  base('Fears & Needs')
    .select({
      // Selecting the first 3 records in Grid view:
      maxRecords: 3,
      view: 'Grid view'
    })
    .eachPage(
      (records, fetchNextPage) => {
        // This function (`page`) will get called for each page of records.

        records.forEach(record => {
          console.log(
            'Retrieved',
            record.get('Aggregated Fears'),
            record.get('Initiatives')
          );
        });

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
      },
      err => {
        if (err) {
          console.error(err);
        }
      }
    );

  base('Initiatives')
    .select({
      // Selecting the first 3 records in Grid view:
      maxRecords: 3,
      view: 'Grid view'
    })
    .eachPage(
      (records, fetchNextPage) => {
        // This function (`page`) will get called for each page of records.

        records.forEach(record => {
          console.log('Retrieved', record.get('Name'));
        });

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
      },
      err => {
        if (err) {
          console.error(err);
        }
      }
    );

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to test.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
