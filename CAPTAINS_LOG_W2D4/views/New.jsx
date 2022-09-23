const React = require("react");
const DefaultLayout = require("./layouts/default");
class New extends React.Component {
  render() {
    return (
      <DefaultLayout title={"New Log Page"}>
        <div>
          <form action="/logs" method="POST">
            Title: <input type="text" name="title" />
            <br />
            Entry: <input type="text" name="entry" />
            <br />
            Ship is broken: <input type="checkbox" name="shipIsBroken" />
            <br />
            <input type="submit" name="" value="Create Log" />
          </form>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = New;