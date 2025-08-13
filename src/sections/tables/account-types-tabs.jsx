import React from "react";

export default function AccountTypesTabs() {
  return (
    <>
      <section
        id="account-types-tabs"
        className="at-section container fade-in"
        data-tabs-root=""
      >
        <h2 className="section__title">Account Specifications by Instrument</h2>
        <p className="section__desc">
          Compare live trading conditions across ECN, Standard, and Cent
          accounts.
        </p>

        <div className="gm-tabs" role="tablist" aria-label="Account Types">
          <button
            className="gm-tab is-active"
            role="tab"
            aria-selected="true"
            data-tab="ecn"
          >
            ECN Account
          </button>
          <button
            className="gm-tab"
            role="tab"
            aria-selected="false"
            data-tab="standard"
          >
            Standard Account
          </button>
          <button
            className="gm-tab"
            role="tab"
            aria-selected="false"
            data-tab="cent"
          >
            Cent Account
          </button>
        </div>

        <div className="gm-panels">
          <div className="gm-panel is-active" data-panel="ecn">
            <div className="gm-table-wrap">
              <table className="gm-table at-table">
                <thead>
                  <tr>
                    <th>Instrument</th>
                    <th className="is-numeric">Spread</th>
                    <th>Commission</th>
                    <th className="is-numeric">Max Leverage</th>
                    <th>Account Currency</th>
                    <th className="is-numeric">Stop Out Level</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>EURUSD</td>
                    <td className="is-numeric">0.0</td>
                    <td>$7 / lot RT</td>
                    <td className="is-numeric">1:500</td>
                    <td>USD, EUR</td>
                    <td className="is-numeric">50%</td>
                  </tr>
                  <tr>
                    <td>XAUUSD</td>
                    <td className="is-numeric">0.1</td>
                    <td>$7 / lot RT</td>
                    <td className="is-numeric">1:200</td>
                    <td>USD, EUR</td>
                    <td className="is-numeric">50%</td>
                  </tr>
                  <tr>
                    <td>GBPUSD</td>
                    <td className="is-numeric">0.0</td>
                    <td>$7 / lot RT</td>
                    <td className="is-numeric">1:500</td>
                    <td>USD, EUR</td>
                    <td className="is-numeric">50%</td>
                  </tr>
                  <tr>
                    <td>US30</td>
                    <td className="is-numeric">1.0</td>
                    <td>$7 / lot RT</td>
                    <td className="is-numeric">1:200</td>
                    <td>USD</td>
                    <td className="is-numeric">50%</td>
                  </tr>
                  <tr>
                    <td>BTCUSD</td>
                    <td className="is-numeric">15.0</td>
                    <td>$7 / lot RT</td>
                    <td className="is-numeric">1:20</td>
                    <td>USD</td>
                    <td className="is-numeric">50%</td>
                  </tr>

                  <tr data-more="" hidden="">
                    <td>AUDUSD</td>
                    <td className="is-numeric">0.0</td>
                    <td>$7 / lot RT</td>
                    <td className="is-numeric">1:500</td>
                    <td>USD, EUR</td>
                    <td className="is-numeric">50%</td>
                  </tr>
                  <tr data-more="" hidden="">
                    <td>USDJPY</td>
                    <td className="is-numeric">0.1</td>
                    <td>$7 / lot RT</td>
                    <td className="is-numeric">1:500</td>
                    <td>USD, EUR</td>
                    <td className="is-numeric">50%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              className="btn-group"
              style={{
                "--btn-gap": "1rem",
                marginTop: "1rem",
              }}
            >
              <button className="btn btn-outline" data-load-more="">
                View more
              </button>
              <a className="btn btn-primary" data-open-modal="register-modal">
                Open ECN
              </a>
            </div>
          </div>

          <div className="gm-panel" data-panel="standard">
            <div className="gm-table-wrap">
              <table className="gm-table at-table">
                <thead>
                  <tr>
                    <th>Instrument</th>
                    <th className="is-numeric">Spread</th>
                    <th>Commission</th>
                    <th className="is-numeric">Max Leverage</th>
                    <th>Account Currency</th>
                    <th className="is-numeric">Stop Out Level</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>EURUSD</td>
                    <td className="is-numeric">1.0</td>
                    <td>—</td>
                    <td className="is-numeric">1:500</td>
                    <td>USD, EUR</td>
                    <td className="is-numeric">50%</td>
                  </tr>
                  <tr>
                    <td>XAUUSD</td>
                    <td className="is-numeric">0.2</td>
                    <td>—</td>
                    <td className="is-numeric">1:200</td>
                    <td>USD, EUR</td>
                    <td className="is-numeric">50%</td>
                  </tr>
                  <tr>
                    <td>GBPUSD</td>
                    <td className="is-numeric">1.2</td>
                    <td>—</td>
                    <td className="is-numeric">1:500</td>
                    <td>USD, EUR</td>
                    <td className="is-numeric">50%</td>
                  </tr>
                  <tr>
                    <td>US30</td>
                    <td className="is-numeric">2.0</td>
                    <td>—</td>
                    <td className="is-numeric">1:200</td>
                    <td>USD</td>
                    <td className="is-numeric">50%</td>
                  </tr>
                  <tr>
                    <td>BTCUSD</td>
                    <td className="is-numeric">25.0</td>
                    <td>—</td>
                    <td className="is-numeric">1:20</td>
                    <td>USD</td>
                    <td className="is-numeric">50%</td>
                  </tr>

                  <tr data-more="" hidden="">
                    <td>AUDUSD</td>
                    <td className="is-numeric">1.1</td>
                    <td>—</td>
                    <td className="is-numeric">1:500</td>
                    <td>USD, EUR</td>
                    <td className="is-numeric">50%</td>
                  </tr>
                  <tr data-more="" hidden="">
                    <td>USDJPY</td>
                    <td className="is-numeric">1.0</td>
                    <td>—</td>
                    <td className="is-numeric">1:500</td>
                    <td>USD, EUR</td>
                    <td className="is-numeric">50%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              className="btn-group"
              style={{
                "--btn-gap": "1rem",
                marginTop: "1rem",
              }}
            >
              <button className="btn btn-outline" data-load-more="">
                View more
              </button>
              <a className="btn btn-primary" data-open-modal="register-modal">
                Open Standard
              </a>
            </div>
          </div>

          <div className="gm-panel" data-panel="cent">
            <div className="gm-table-wrap">
              <table className="gm-table at-table">
                <thead>
                  <tr>
                    <th>Instrument</th>
                    <th className="is-numeric">Spread</th>
                    <th>Commission</th>
                    <th className="is-numeric">Max Leverage</th>
                    <th>Account Currency</th>
                    <th className="is-numeric">Stop Out Level</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>EURUSD</td>
                    <td className="is-numeric">1.3</td>
                    <td>—</td>
                    <td className="is-numeric">1:500</td>
                    <td>USD¢</td>
                    <td className="is-numeric">50%</td>
                  </tr>
                  <tr>
                    <td>XAUUSD</td>
                    <td className="is-numeric">0.3</td>
                    <td>—</td>
                    <td className="is-numeric">1:200</td>
                    <td>USD¢</td>
                    <td className="is-numeric">50%</td>
                  </tr>
                  <tr>
                    <td>GBPUSD</td>
                    <td className="is-numeric">1.5</td>
                    <td>—</td>
                    <td className="is-numeric">1:500</td>
                    <td>USD¢</td>
                    <td className="is-numeric">50%</td>
                  </tr>
                  <tr>
                    <td>US30</td>
                    <td className="is-numeric">2.4</td>
                    <td>—</td>
                    <td className="is-numeric">1:200</td>
                    <td>USD¢</td>
                    <td className="is-numeric">50%</td>
                  </tr>
                  <tr>
                    <td>BTCUSD</td>
                    <td className="is-numeric">28.0</td>
                    <td>—</td>
                    <td className="is-numeric">1:20</td>
                    <td>USD¢</td>
                    <td className="is-numeric">50%</td>
                  </tr>

                  <tr data-more="" hidden="">
                    <td>AUDUSD</td>
                    <td className="is-numeric">1.4</td>
                    <td>—</td>
                    <td className="is-numeric">1:500</td>
                    <td>USD¢</td>
                    <td className="is-numeric">50%</td>
                  </tr>
                  <tr data-more="" hidden="">
                    <td>USDJPY</td>
                    <td className="is-numeric">1.3</td>
                    <td>—</td>
                    <td className="is-numeric">1:500</td>
                    <td>USD¢</td>
                    <td className="is-numeric">50%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              className="btn-group"
              style={{
                "--btn-gap": "1rem",
                marginTop: "1rem",
              }}
            >
              <button className="btn btn-outline" data-load-more="">
                View more
              </button>
              <a className="btn btn-primary" data-open-modal="register-modal">
                Open Cent
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
