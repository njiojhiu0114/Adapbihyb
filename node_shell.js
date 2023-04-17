const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'e0dc7801-8a5d-4b0b-b02b-a1885688eddc'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
