let request = require("request");

// Call the Infura API and check that the address is valid.
let options = {
	url: "https://filecoin.infura.io",
	method: "post",
	headers: {
		"content-type": "application/json",
	},
	auth: {
		user: "2NWSIo8fF7v31chLwoV3ZitNOC5",
		pass: "9f32ba7af178b53c1512dd5d9642a05a",
	},
	body: `{
        "jsonrpc": "2.0",
        "id": 0,
        "method": "Filecoin.ChainGetBlock",
        "params": [{"/":"bafy2bzacedyqu6bgjpgmmnzxmirbcyculwprut45agcl5msetp34q5uznz7wa"}]
      }`,
};
request(options, (error, response, body) => {
	if (error) {
		console.error("Error: ", error);
	} else {
		console.log("Response: ", body);
	}
});
