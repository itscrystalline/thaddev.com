<script>
  import Header from '$lib/NoLinksHeader.svelte';
  import Footer from '$lib/Footer.svelte';
</script>

<svelte:head>
  <meta content="API Directory | ThadDev's site" property="og:title"/>
  <meta content="ThadDev. Full stack developer." property="og:description"/>
  <meta content="https://thaddev.com" property="og:url"/>
  <meta content="https://thaddev.com/images/logo.svg" property="og:image"/>
  <meta content="#FFAA00" data-react-helmet="true" name="theme-color"/>
  <link
          rel="preconnect"
          href="/fonts/JetBrainsMono-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
  />
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
  <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
  />
  <link
          href="https://fonts.googleapis.com/css2?family=Niramit:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
  />
  <title>API Directory | ThadDev's Site</title>
</svelte:head>

<div class="container">
  <Header/>
  <div class="section">
    <h2 class="sectiontitle">API Directory</h2>
    <p class="sectiontext">
      This page contains a list of all the API endpoints available. This API is powered by the
      <a class="navlink" href="https://github.com/MyNameTsThad/project-apis">Project APIs</a>
      project.
      <br/> <br/>
    </p>
    <div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiTableContainer-root css-1uwbrkl">
      <table class="MuiTable-root css-1qu95dn" aria-label="customized table">
        <tbody class="MuiTableBody-root css-1xnox0e">
        <tr class="MuiTableRow-root css-1uvye8p">
          <th class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-6co096" scope="row"><b>Main
            Endpoint URL</b></th>
          <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium css-10kyz7f"><a
                  class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-1w8bsyp"
                  href="https://thaddev.com/api-v1">https://thaddev.com/api-v1</a></td>
          <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium css-10kyz7f"><a
                  class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-1w8bsyp"
                  href="https://thaddev.xyz/api-v1">https://thaddev.xyz/api-v1</a></td>
        </tr>
        </tbody>
      </table>
    </div>
    <p><br/><br/><br/><br/><br/></p>
    <h4 class="title">Timer API</h4>
    <div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiTableContainer-root css-1uwbrkl">
      <table class="MuiTable-root css-1qu95dn" aria-label="customized table">
        <tbody class="MuiTableBody-root css-1xnox0e">
        <tr class="MuiTableRow-root css-1uvye8p">
          <th class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-6co096" scope="row">
            <div color="#998fd5" class="sc-ivTmOn KWsaX"><code>GET</code></div>&nbsp;&nbsp;<b>List all Timers</b></th>
          <td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium css-10kyz7f"><a
                  class="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-1w8bsyp">/timer/getall</a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  <Footer/>
</div>

<style lang="scss">
  .css-1uwbrkl {
    background-color: #121212;
    color: #fff;
    -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 4px;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    background-image: linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05));
    width: 100%;
    overflow-x: auto;
  }

  .css-kge0eu {
    width: 100%;
    overflow-x: auto;
  }

  .css-1qu95dn {
    display: table;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    min-width: 700px;
  }

  .css-1qu95dn caption {
    font-weight: 400;
    line-height: 1.43;
    padding: 16px;
    color: rgba(255, 255, 255, 0.7);
    text-align: left;
    caption-side: bottom;
  }

  .css-1xnox0e {
    display: table-row-group;
  }

  .css-1eatddt:nth-of-type(odd) {
    background-color: rgba(255, 255, 255, 0.08);
  }

  .css-1eatddt:last-child td,
  .css-1eatddt:last-child th {
    border: 0;
  }

  .css-1uvye8p {
    color: inherit;
    display: table-row;
    vertical-align: middle;
    outline: 0;
  }

  .css-1uvye8p.MuiTableRow-hover:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }

  .css-1uvye8p.Mui-selected {
    background-color: rgba(144, 202, 249, 0.16);
  }

  .css-1uvye8p.Mui-selected:hover {
    background-color: rgba(144, 202, 249, 0.24);
  }

  .css-1uvye8p:nth-of-type(odd) {
    background-color: rgba(255, 255, 255, 0.08);
  }

  .css-1uvye8p:last-child td,
  .css-1uvye8p:last-child th {
    border: 0;
  }

  .css-1lc185k.MuiTableCell-head {
    background-color: #000;
    color: #fff;
  }

  .css-1lc185k.MuiTableCell-body {
    font-size: 17px;
  }

  .css-6co096 {
    font-weight: 400;
    line-height: 1.43;
    display: table-cell;
    vertical-align: inherit;
    border-bottom: 1px solid rgba(81, 81, 81, 1);
    text-align: left;
    padding: 16px;
    color: #fff;
  }

  .css-6co096.MuiTableCell-head {
    background-color: #000;
    color: #fff;
  }

  .css-6co096.MuiTableCell-body {
    font-size: 17px;
  }

  .css-10kyz7f {
    font-weight: 400;
    line-height: 1.43;
    display: table-cell;
    vertical-align: inherit;
    border-bottom: 1px solid rgba(81, 81, 81, 1);
    text-align: right;
    padding: 16px;
    color: #fff;
    -webkit-flex-direction: row-reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
  }

  .css-10kyz7f.MuiTableCell-head {
    background-color: #000;
    color: #fff;
  }

  .css-10kyz7f.MuiTableCell-body {
    font-size: 17px;
  }

  .css-1d1zyod {
    -webkit-text-decoration: underline;
    text-decoration: underline;
    text-decoration-color: rgba(144, 202, 249, 0.4);
  }

  .css-1d1zyod:hover {
    text-decoration-color: inherit;
  }

  .css-1w8bsyp {
    margin: 0;
    color: #90caf9;
    -webkit-text-decoration: underline;
    text-decoration: underline;
    text-decoration-color: rgba(144, 202, 249, 0.4);
  }

  .css-1w8bsyp:hover {
    text-decoration-color: inherit;
  }

  .css-kge0eu {
    width: 100%;
    overflow-x: auto;
  }

  .css-1uwbrkl {
    background-color: #121212;
    color: #fff;
    -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 4px;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    background-image: linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05));
    width: 100%;
    overflow-x: auto;
  }

  .css-1qu95dn {
    display: table;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    min-width: 700px;
  }

  .css-1qu95dn caption {

    font-weight: 400;

    line-height: 1.43;
    padding: 16px;
    color: rgba(255, 255, 255, 0.7);
    text-align: left;
    caption-side: bottom;
  }

  .css-1xnox0e {
    display: table-row-group;
  }

  .css-1eatddt:nth-of-type(odd) {
    background-color: rgba(255, 255, 255, 0.08);
  }

  .css-1eatddt:last-child td,
  .css-1eatddt:last-child th {
    border: 0;
  }

  .css-1uvye8p {
    color: inherit;
    display: table-row;
    vertical-align: middle;
    outline: 0;
  }

  .css-1uvye8p.MuiTableRow-hover:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }

  .css-1uvye8p.Mui-selected {
    background-color: rgba(144, 202, 249, 0.16);
  }

  .css-1uvye8p.Mui-selected:hover {
    background-color: rgba(144, 202, 249, 0.24);
  }

  .css-1uvye8p:nth-of-type(odd) {
    background-color: rgba(255, 255, 255, 0.08);
  }

  .css-1uvye8p:last-child td,
  .css-1uvye8p:last-child th {
    border: 0;
  }

  .css-1lc185k.MuiTableCell-head {
    background-color: #000;
    color: #fff;
  }

  .css-1lc185k.MuiTableCell-body {
    font-size: 17px;
  }

  .css-6co096 {
    font-weight: 400;
    line-height: 1.43;
    display: table-cell;
    vertical-align: inherit;
    border-bottom: 1px solid rgba(81, 81, 81, 1);
    text-align: left;
    padding: 16px;
    color: #fff;
  }

  .css-6co096.MuiTableCell-head {
    background-color: #000;
    color: #fff;
  }

  .css-6co096.MuiTableCell-body {
    font-size: 17px;
  }

  .css-10kyz7f {
    font-weight: 400;
    line-height: 1.43;
    display: table-cell;
    vertical-align: inherit;
    border-bottom: 1px solid rgba(81, 81, 81, 1);
    text-align: right;
    padding: 16px;
    color: #fff;
    -webkit-flex-direction: row-reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
  }

  .css-10kyz7f.MuiTableCell-head {
    background-color: #000;
    color: #fff;
  }

  .css-10kyz7f.MuiTableCell-body {
    font-size: 17px;
  }

  .css-1d1zyod {
    -webkit-text-decoration: underline;
    text-decoration: underline;
    text-decoration-color: rgba(144, 202, 249, 0.4);
  }

  .css-1d1zyod:hover {
    text-decoration-color: inherit;
  }

  .css-1w8bsyp {
    margin: 0;
    color: #90caf9;
    -webkit-text-decoration: underline;
    text-decoration: underline;
    text-decoration-color: rgba(144, 202, 249, 0.4);
  }

  .css-1w8bsyp:hover {
    text-decoration-color: inherit;
  }

  .css-kge0eu {
    width: 100%;
    overflow-x: auto;
  }

  .css-1uwbrkl {
    background-color: #121212;
    color: #fff;
    -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 4px;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    background-image: linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05));
    width: 100%;
    overflow-x: auto;
  }

  .css-1qu95dn {
    display: table;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    min-width: 700px;
  }

  .css-1qu95dn caption {

    font-weight: 400;

    line-height: 1.43;
    padding: 16px;
    color: rgba(255, 255, 255, 0.7);
    text-align: left;
    caption-side: bottom;
  }

  .css-1xnox0e {
    display: table-row-group;
  }

  .css-1eatddt:nth-of-type(odd) {
    background-color: rgba(255, 255, 255, 0.08);
  }

  .css-1eatddt:last-child td,
  .css-1eatddt:last-child th {
    border: 0;
  }

  .css-1uvye8p {
    color: inherit;
    display: table-row;
    vertical-align: middle;
    outline: 0;
  }

  .css-1uvye8p.MuiTableRow-hover:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }

  .css-1uvye8p.Mui-selected {
    background-color: rgba(144, 202, 249, 0.16);
  }

  .css-1uvye8p.Mui-selected:hover {
    background-color: rgba(144, 202, 249, 0.24);
  }

  .css-1uvye8p:nth-of-type(odd) {
    background-color: rgba(255, 255, 255, 0.08);
  }

  .css-1uvye8p:last-child td,
  .css-1uvye8p:last-child th {
    border: 0;
  }

  .css-1lc185k.MuiTableCell-head {
    background-color: #000;
    color: #fff;
  }

  .css-1lc185k.MuiTableCell-body {
    font-size: 17px;
  }

  .css-6co096 {

    font-weight: 400;

    line-height: 1.43;
    display: table-cell;
    vertical-align: inherit;
    border-bottom: 1px solid rgba(81, 81, 81, 1);
    text-align: left;
    padding: 16px;
    color: #fff;
  }

  .css-6co096.MuiTableCell-head {
    background-color: #000;
    color: #fff;
  }

  .css-6co096.MuiTableCell-body {
    font-size: 17px;
  }

  .css-10kyz7f {

    font-weight: 400;

    line-height: 1.43;
    display: table-cell;
    vertical-align: inherit;
    border-bottom: 1px solid rgba(81, 81, 81, 1);
    text-align: right;
    padding: 16px;
    color: #fff;
    -webkit-flex-direction: row-reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
  }

  .css-10kyz7f.MuiTableCell-head {
    background-color: #000;
    color: #fff;
  }

  .css-10kyz7f.MuiTableCell-body {
    font-size: 17px;
  }

  .css-1d1zyod {
    -webkit-text-decoration: underline;
    text-decoration: underline;
    text-decoration-color: rgba(144, 202, 249, 0.4);
  }

  .css-1d1zyod:hover {
    text-decoration-color: inherit;
  }

  .css-1w8bsyp {
    margin: 0;
    color: #90caf9;
    -webkit-text-decoration: underline;
    text-decoration: underline;
    text-decoration-color: rgba(144, 202, 249, 0.4);
  }

  .css-1w8bsyp:hover {
    text-decoration-color: inherit;
  }

  .css-kge0eu {
    width: 100%;
    overflow-x: auto;
  }

  .css-1uwbrkl {
    background-color: #121212;
    color: #fff;
    -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 4px;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    background-image: linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05));
    width: 100%;
    overflow-x: auto;
  }

  .css-1qu95dn {
    display: table;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    min-width: 700px;
  }

  .css-1qu95dn caption {

    font-weight: 400;

    line-height: 1.43;
    padding: 16px;
    color: rgba(255, 255, 255, 0.7);
    text-align: left;
    caption-side: bottom;
  }

  .css-1xnox0e {
    display: table-row-group;
  }

  .css-1eatddt:nth-of-type(odd) {
    background-color: rgba(255, 255, 255, 0.08);
  }

  .css-1eatddt:last-child td,
  .css-1eatddt:last-child th {
    border: 0;
  }

  .css-1uvye8p {
    color: inherit;
    display: table-row;
    vertical-align: middle;
    outline: 0;
  }

  .css-1uvye8p.MuiTableRow-hover:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }

  .css-1uvye8p.Mui-selected {
    background-color: rgba(144, 202, 249, 0.16);
  }

  .css-1uvye8p.Mui-selected:hover {
    background-color: rgba(144, 202, 249, 0.24);
  }

  .css-1uvye8p:nth-of-type(odd) {
    background-color: rgba(255, 255, 255, 0.08);
  }

  .css-1uvye8p:last-child td,
  .css-1uvye8p:last-child th {
    border: 0;
  }

  .css-1lc185k.MuiTableCell-head {
    background-color: #000;
    color: #fff;
  }

  .css-1lc185k.MuiTableCell-body {
    font-size: 17px;
  }

  .css-6co096 {

    font-weight: 400;

    line-height: 1.43;
    display: table-cell;
    vertical-align: inherit;
    border-bottom: 1px solid rgba(81, 81, 81, 1);
    text-align: left;
    padding: 16px;
    color: #fff;
  }

  .css-6co096.MuiTableCell-head {
    background-color: #000;
    color: #fff;
  }

  .css-6co096.MuiTableCell-body {
    font-size: 17px;
  }

  .css-10kyz7f {

    font-weight: 400;

    line-height: 1.43;
    display: table-cell;
    vertical-align: inherit;
    border-bottom: 1px solid rgba(81, 81, 81, 1);
    text-align: right;
    padding: 16px;
    color: #fff;
    -webkit-flex-direction: row-reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
  }

  .css-10kyz7f.MuiTableCell-head {
    background-color: #000;
    color: #fff;
  }

  .css-10kyz7f.MuiTableCell-body {
    font-size: 17px;
  }

  .css-1d1zyod {
    -webkit-text-decoration: underline;
    text-decoration: underline;
    text-decoration-color: rgba(144, 202, 249, 0.4);
  }

  .css-1d1zyod:hover {
    text-decoration-color: inherit;
  }

  .css-1w8bsyp {
    margin: 0;
    color: #90caf9;
    -webkit-text-decoration: underline;
    text-decoration: underline;
    text-decoration-color: rgba(144, 202, 249, 0.4);
  }

  .css-1w8bsyp:hover {
    text-decoration-color: inherit;
  }

  .css-kge0eu {
    width: 100%;
    overflow-x: auto;
  }

  .css-1uwbrkl {
    background-color: #121212;
    color: #fff;
    -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 4px;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
    background-image: linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05));
    width: 100%;
    overflow-x: auto;
  }

  .css-1qu95dn {
    display: table;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    min-width: 700px;
  }

  .css-1qu95dn caption {

    font-weight: 400;

    line-height: 1.43;
    padding: 16px;
    color: rgba(255, 255, 255, 0.7);
    text-align: left;
    caption-side: bottom;
  }

  .css-1xnox0e {
    display: table-row-group;
  }

  .css-1eatddt:nth-of-type(odd) {
    background-color: rgba(255, 255, 255, 0.08);
  }

  .css-1eatddt:last-child td,
  .css-1eatddt:last-child th {
    border: 0;
  }

  .css-1uvye8p {
    color: inherit;
    display: table-row;
    vertical-align: middle;
    outline: 0;
  }

  .css-1uvye8p.MuiTableRow-hover:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }

  .css-1uvye8p.Mui-selected {
    background-color: rgba(144, 202, 249, 0.16);
  }

  .css-1uvye8p.Mui-selected:hover {
    background-color: rgba(144, 202, 249, 0.24);
  }

  .css-1uvye8p:nth-of-type(odd) {
    background-color: rgba(255, 255, 255, 0.08);
  }

  .css-1uvye8p:last-child td,
  .css-1uvye8p:last-child th {
    border: 0;
  }

  .css-1lc185k.MuiTableCell-head {
    background-color: #000;
    color: #fff;
  }

  .css-1lc185k.MuiTableCell-body {
    font-size: 17px;
  }

  .css-6co096 {

    font-weight: 400;

    line-height: 1.43;
    display: table-cell;
    vertical-align: inherit;
    border-bottom: 1px solid rgba(81, 81, 81, 1);
    text-align: left;
    padding: 16px;
    color: #fff;
  }

  .css-6co096.MuiTableCell-head {
    background-color: #000;
    color: #fff;
  }

  .css-6co096.MuiTableCell-body {
    font-size: 17px;
  }

  .css-10kyz7f {

    font-weight: 400;

    line-height: 1.43;
    display: table-cell;
    vertical-align: inherit;
    border-bottom: 1px solid rgba(81, 81, 81, 1);
    text-align: right;
    padding: 16px;
    color: #fff;
    -webkit-flex-direction: row-reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
  }

  .css-10kyz7f.MuiTableCell-head {
    background-color: #000;
    color: #fff;
  }

  .css-10kyz7f.MuiTableCell-body {
    font-size: 17px;
  }

  .css-1d1zyod {
    -webkit-text-decoration: underline;
    text-decoration: underline;
    text-decoration-color: rgba(144, 202, 249, 0.4);
  }

  .css-1d1zyod:hover {
    text-decoration-color: inherit;
  }

  .css-1w8bsyp {
    margin: 0;
    color: #90caf9;
    -webkit-text-decoration: underline;
    text-decoration: underline;
    text-decoration-color: rgba(144, 202, 249, 0.4);
  }

  .css-1w8bsyp:hover {
    text-decoration-color: inherit;
  }


  .container {
    max-width: 1280px;
    width: 100%;
    margin: auto;
  }

  .section-grid {
    display: grid;
    flex-direction: column;
    padding: 32px 48px 0;
    margin: 0 auto;
    max-width: 1140px;
    box-sizing: content-box;
    position: relative;
    overflow: hidden;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 768px) {
      padding: 24px 48px 0;
      flex-direction: column;
    }

    @media screen and (max-width: 640px) {
      padding: 16px 16px 0;

      width: calc(100vw - 32px);
      flex-direction: column;
    }
  }

  .navlink {
    font-size-adjust: 0.55;
    line-height: 32px;
    color: rgba(255, 255, 255, 0.75);
    transition: 0.4s ease;

    &:hover {
      color: #ffaa00;
      opacity: 1;
      cursor: pointer;
    }

    @media screen and (max-width: 1156px) {

      &:hover {
        color: #ffaa00;
        opacity: 1;
        cursor: pointer;
      }
    }
  }
</style>
